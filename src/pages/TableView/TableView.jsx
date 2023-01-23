import { HotColumn, HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import tableData from "./tableData.json";
import tableConfig from "./tableConfig.json";
import {
  adaptMasterData,
  getDataByPath,
  getCurrentColHeaders,
  getColumns,
} from "./../../utils/jsonUtils";
import { useState, useEffect } from "react";
// register Handsontable's modules
registerAllModules();

const CustomCellView = (props) => {
  const { value } = props;
  // console.log("val", value);
  switch (value.type) {
    case "list":
      // console.log("list", value.value);
      return <div> {value.value}</div>;
      break;
    case "entity":
      // console.log("entity", value.value.name);
      return <div> {value.value.name}</div>;
      break;
    case "text":
      // console.log("text", value.value.name);
      return <div> {value.value.name}</div>;
      break;
    default:
      return <div> {`fata`}</div>;
      break;
  }
  // return <div> {`fata`}</div>;
};

export const TableView = () => {
  const [currentTableProps, setCurrentTableProps] = useState(null);
  const [masterData, setMasterData] = useState(tableData);
  const [adaptedMasterData, setAdaptedMasterData] = useState([]);
  const [navHistory, setNavHistory] = useState({
    navigation: [""],
    context: null,
  });

  useEffect(() => {
    let adaptedData = adaptMasterData(masterData, tableConfig);
    setAdaptedMasterData(adaptedData);
  }, [masterData, tableConfig]);

  useEffect(() => {
    getTableData();
  }, [adaptedMasterData, navHistory]);

  const getTableData = () => {
    let path = navHistory.navigation.join("/");
    path = !path.length && "";
    const currTableData = getDataByPath(
      path,
      navHistory.context,
      adaptedMasterData
    );
    console.log("Data", currTableData);
    const currRowHeaders = true; //getCurrentRowHeaders(currTableData);
    const currColHeaders = getCurrentColHeaders(currTableData);
    const columns = getColumns(currTableData);
    // const dataSchema =
    setCurrentTableProps({
      data: currTableData,
      rowHeaders: currRowHeaders,
      colHeaders: currColHeaders,
      columns: columns,
      // dataSchema: dataSchema
    });
  };
  return (
    <div>
      {!!currentTableProps ? (
        <HotTable
          data={currentTableProps.data}
          rowHeaders={currentTableProps.rowHeaders}
          colHeaders={currentTableProps.colHeaders}
          // columns={currentTableProps.columns}
          height="auto"
          rowHeights={40}
          manualColumnResize={true}
          licenseKey="non-commercial-and-evaluation"
          // autoRowSize={false}
          // licenseKey="non-commercial-and-evaluation" // for non-commercial use only
        >
          {currentTableProps.columns.map((col, index) => (
            <HotColumn data={col} className="htMiddle">
              <CustomCellView hot-renderer />
            </HotColumn>
          ))}
        </HotTable>
      ) : null}
    </div>
  );
};
