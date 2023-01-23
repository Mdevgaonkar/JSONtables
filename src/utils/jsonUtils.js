import tableConfig from "./../pages/TableView/tableConfig.json" assert { type: "json" };
import masterData from "./../pages/TableView/tableData.json" assert { type: "json" };

export const adaptMasterData = (masterData, tableConfig) => {
  let adaptedData = [];

  const adaptRow = (row, path) => {
    const adaptedRow = {};
    const rowKeys = Object.keys(row);

    const getAdaptedValue = (value, path) => {
      // console.log(path);
      const adaptedValue = tableConfig.columnsConfigs[path];
      if (typeof value != "object") value = { name: value, value: value };

      adaptedValue.value = value;
      return adaptedValue;
    };

    for (let index = 0; index < rowKeys.length; index++) {
      const key = rowKeys[index];
      const value = row[key];
      const keyPath = path + "/" + key;

      if (value instanceof Array) {
        let newDeepAdaptedValue = [];
        if (value.length > 0) {
          for (let i = 0; i < value.length; i++) {
            const element = value[i];
            if (element instanceof Object) {
              newDeepAdaptedValue = [
                ...newDeepAdaptedValue,
                JSON.parse(JSON.stringify(adaptRow(element, keyPath))),
              ];
            }
          }
        }
        adaptedRow[key] = getAdaptedValue(newDeepAdaptedValue, keyPath);
      } else if (value instanceof Object) {
        const valueObjKeys = Object.keys(value).sort();
        if (
          valueObjKeys.length == 2 &&
          valueObjKeys[0] == "name" &&
          valueObjKeys[1] == "value"
        ) {
          adaptedRow[key] = getAdaptedValue(value, keyPath);
        } else {
          const newDeepAdaptedValue = adaptRow(value, keyPath);
          adaptedRow[key] = getAdaptedValue(newDeepAdaptedValue, keyPath);
        }
      } else {
        adaptedRow[key] = getAdaptedValue(value, keyPath);
      }
    }
    return adaptedRow;
  };

  for (let i = 0; i < masterData.length; i++) {
    const rowData = masterData[i];
    const adaptedRow = adaptRow(rowData, "");
    adaptedData = [...adaptedData, JSON.parse(JSON.stringify(adaptedRow))];
  }
  return adaptedData;
};

export const getUniqueKeys = (entity) => {
  if (entity instanceof Array) {
    const keySet = Array.from(
      new Set(
        entity.map((e) => Object.keys(e)).reduce((p, c) => [...p, ...c], [])
      )
    );
    return keySet;
  } else {
    const keys = Object.keys(entity);
    return keys;
  }
};
export const getCurrentColHeaders = (tableRows) => {
  const keySet = Array.from(
    new Set(
      tableRows.reduce((p, cR)=>{
        return [...p, ...Object.keys(cR).map((key)=> (cR[key].columnName))]
      }, [])
    )
  );
  console.log( "headers", keySet);
  return keySet;
}

export const getColumns = (tableRows) => {
  const uniqueKeys = Array.from(
    new Set(
      tableRows.reduce((p, cR)=>{
        return [...p, ...Object.keys(cR)]
      }, [])
    )
  )
  // const columns = uniqueKeys.map((header) => ({data : `${header}.value`}))
  // console.log("columns", columns);
  return uniqueKeys;
}

export const getDataByPath = (path, rowContext, adaptedMasterData) => {
  let data = [];
  const pathKeys = path.split("/");
  //get root level data for all rows
  if (pathKeys.length == 1 && pathKeys[0] == "" && rowContext == null) {
    adaptedMasterData.forEach((rootLevelRow) => {
      const row = JSON.parse(JSON.stringify(rootLevelRow));
      let rowData = formatRowJson(row);
      data.push(rowData);
    });
  } else if (rowContext) {
    let nthLevelRows = [];
    let pKeysAggregation = {};
    pathKeys.forEach((level, index) => {
      const levelContext =
        index != pathKeys.length - 1 ? rowContext[index] : null; //levelContext provides rowNum and primaryKeys
      levelContext
        ? (pKeysAggregation = {
            ...pKeysAggregation,
            ...levelContext.primaryKeys,
          })
        : null;
      if (level == "") {
        nthLevelRows = [
          filterRowByPrimaryKey(levelContext.primaryKeys, adaptedMasterData),
        ];
      } else {
        if (index == pathKeys.length - 1) {
          if (nthLevelRows[0][level].value instanceof Array) {
            nthLevelRows = nthLevelRows[0][level].value;
            nthLevelRows = nthLevelRows.map((row) => ({
              ...pKeysAggregation,
              ...row,
            }));
          } else {
            nthLevelRows = [nthLevelRows[0][level].value];
            nthLevelRows = [{ ...pKeysAggregation, ...nthLevelRows[0] }];
          }
        } else {
          if (nthLevelRows[0][level].value instanceof Array) {
            nthLevelRows = [
              filterRowByPrimaryKey(
                levelContext.primaryKeys,
                nthLevelRows[0][level].value
              ),
            ];
          } else {
            nthLevelRows = [
              filterRowByPrimaryKey(levelContext.primaryKeys, [
                nthLevelRows[0][level].value,
              ]),
            ];
          }
        }
      }
    });
    let rowsData = nthLevelRows.map((row) => formatRowJson(row));
    data.push(...rowsData);
  }

  return data;
};

const filterRowByPrimaryKey = (primaryKeys, rows) => {
  //filter rows based on primaryKeys
  let filteredRows = rows.filter((row) => {
    let selectRow = true;
    Object.keys(primaryKeys).forEach((pKey) => {
      let rowPkeyValue, primaryKeyValue;
      console.log("pKey", pKey);
      console.log("pkeys ", row[pKey], primaryKeys[pKey]);
      if (
        row[pKey].value instanceof Object &&
        Object.keys(row[pKey].value).sort().join("-") == "name-value" &&
        primaryKeys[pKey].value instanceof Object &&
        Object.keys(row[pKey].value).sort().join("-") == "name-value"
      ) {
        rowPkeyValue = row[pKey].value;
        primaryKeyValue = primaryKeys[pKey].value;
        selectRow =
          rowPkeyValue.name === primaryKeyValue.name &&
          rowPkeyValue.value === primaryKeyValue.value
            ? selectRow && true
            : selectRow && false;
      } else {
        selectRow =
          row[pKey].value == primaryKeys[pKey].value
            ? selectRow && true
            : selectRow && false;
      }
    });
    console.log("selectRow ", selectRow);
    return selectRow;
  });
  if (filteredRows.length == 1) {
    return filteredRows[0];
  } else {
    console.log("filteredRows", filteredRows);
    return null;
  }
};

const getRowPrimaryKeys = (rowData) => {
  const primaryKeys = {};
  for (const column in rowData) {
    if (Object.hasOwnProperty.call(rowData, column)) {
      const columnData = rowData[column];
      columnData.primaryKey ? (primaryKeys[column] = columnData) : "";
    }
  }
  return primaryKeys;
};

const formatRowJson = (rowData) => {
  const rowKeys = Object.keys(rowData);
  const rowKeysLength = rowKeys.length;
  for (let i = 0; i < rowKeysLength; i++) {
    const key = rowKeys[i];
    const rowCell = rowData[key];
    if (rowCell.value && rowCell.value instanceof Array) {
      rowCell.type = "list";
      rowCell.value = `${rowCell.value.length} ${rowCell.columnName}`;
    } else if (rowCell.value && rowCell.value instanceof Object) {
      rowCell.type = rowCell.defaultChildKey ? "entity" : "text";
      rowCell.defaultChildKey
        ? (rowCell.value = rowCell.value[rowCell.defaultChildKey].value)
        : (rowCell.value = {
            name: rowCell.value.name ? rowCell.value.name : rowCell.value,
            value: rowCell.value.value ? rowCell.value.value : rowCell.value,
          });
    } else {
      rowCell.value = {
        name: rowCell.value,
        value: rowCell.value,
      };
    }
  }
  return rowData;
};

// let adaptedMasterData = adaptMasterData(masterData, tableConfig);

// console.log(JSON.stringify(adaptedMasterData));
// console.log(
  // JSON.stringify(
    // getDataByPath("")

    // getDataByPath("/billToContact", [
    //   {
    //     rownum: 2,
    //     primaryKeys: {
    //       accNumber: {
    //         columnName: "Account Number",
    //         columnKey: "accNumber",
    //         path: "/accNumber",
    //         type: "text",
    //         default: "",
    //         primaryKey: true,
    //         value: "ACC_002",
    //       },
    //     },
    //   },
    // ])

    // getDataByPath("/orders", [
    //   {
    //     rownum: 2,
    //     primaryKeys: {
    //       accNumber: {
    //         columnName: "Account Number",
    //         columnKey: "accNumber",
    //         path: "/accNumber",
    //         type: "text",
    //         default: "",
    //         primaryKey: true,
    //         value: "ACC_002",
    //       },
    //     },
    //   },
    // ])

    // getDataByPath("/orders/charges", [
    //   {
    //     rownum: 1,
    //     primaryKeys: {
    //       accNumber: {
    //         columnName: "Account Number",
    //         columnKey: "accNumber",
    //         path: "/accNumber",
    //         type: "text",
    //         default: "",
    //         primaryKey: true,
    //         value: "ACC_001",
    //       },
    //     },
    //   },
    //   {
    //     rownum: 2,
    //     primaryKeys: {
    //     //   accNumber: {
    //     //     columnName: "Account Number",
    //     //     columnKey: "accNumber",
    //     //     path: "/accNumber",
    //     //     type: "text",
    //     //     default: "",
    //     //     primaryKey: true,
    //     //     value: "ACC_001",
    //     //   },
    //       product: {
    //         columnName: "Product",
    //         columnKey: "product",
    //         path: "/orders/product",
    //         type: "list",
    //         default: "",
    //         primaryKey: true,
    //         value: {
    //           name: "exampleProduct2",
    //           value: "hvdyaaidsjhu1637chsdbc73",
    //         },
    //       },
    //       productRatePlan: {
    //         columnName: "Product Rate Plan",
    //         columnKey: "productRatePlan",
    //         path: "/orders/productRatePlan",
    //         type: "list",
    //         default: "",
    //         primaryKey: true,
    //         value: {
    //           name: "exampleProductRatePlan2",
    //           value: "iweudubusbx23612dasagas1",
    //         },
    //       },
    //     },
    //   },
    // ])

//     getDataByPath("/billToContact/address", [
//       {
//         rownum: 1,
//         primaryKeys: {
//           accNumber: {
//             columnName: "Account Number",
//             columnKey: "accNumber",
//             path: "/accNumber",
//             type: "text",
//             default: "",
//             primaryKey: true,
//             value: { name: "ACC_002", value: "ACC_002" },
//           },
//         },
//       },
//       {
//         rownum: 1,
//         primaryKeys: {
//           fName: {
//             columnName: "FirstName",
//             columnKey: "fName",
//             path: "/billToContact/fName",
//             default: "",
//             value: { name: "jane", value: "jane" },
//           },
//           lName: {
//             columnName: "Last Name",
//             columnKey: "lName",
//             path: "/billToContact/lName",
//             default: "",
//             value: { name: "doe", value: "doe" },
//           },
//           email: {
//             columnName: "Email",
//             columnKey: "email",
//             path: "/billToContact/email",
//             default: "",
//             value: {
//               name: "johnDoe@johnDoe.com",
//               value: "johnDoe@johnDoe.com",
//             },
//           },
//           phone: {
//             columnName: "Phone",
//             columnKey: "phone",
//             path: "/billToContact/phone",
//             default: "",
//             value: { name: "9876543210", value: "9876543210" },
//           },
//         },
//       },
//     ])
//   )
// );
