const pk = {
    "accNumber": {
        "columnName": "Account Number",
        "columnKey": "accNumber",
        "path": "/accNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "ACC_002"
      },
      "batchNumber": {
        "columnName": "Batch",
        "columnKey": "batchNumber",
        "path": "/batchNumber",
        "type": "text",
        "default": "",
        "primaryKey":true,
        "value": "Batch2"
      }
}

const data = [
    {
      "accNumber": {
        "columnName": "Account Number",
        "columnKey": "accNumber",
        "path": "/accNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "ACC_001"
      },
      "batchNumber": {
        "columnName": "Batch",
        "columnKey": "batchNumber",
        "path": "/batchNumber",
        "type": "text",
        "default": "",
        "value": "Batch1"
      },
      "invoiceTemplate": {
        "columnName": "Invoice Template",
        "columnKey": "invoiceTemplate",
        "path": "/invoiceTemplate",
        "type": "obj",
        "default": "",
        "value": {
          "name": "invoice1",
          "value": "abcuciancayicvsucasa3ye7q6nxahs7"
        }
      },
      "billToContact": {
        "columnName": "Bill To Contact",
        "columnKey": "billToContact",
        "path": "/billToContact",
        "type": "obj",
        "default": "",
        "defaultChildKey": "fName",
        "value": {
          "fName": {
            "columnName": "FirstName",
            "columnKey": "fName",
            "path": "/billToContact/fName",
            "type": "text",
            "default": "",
            "value": "john"
          },
          "lName": {
            "columnName": "Last Name",
            "columnKey": "lName",
            "path": "/billToContact/lName",
            "type": "text",
            "default": "",
            "value": "doe"
          },
          "email": {
            "columnName": "Email",
            "columnKey": "email",
            "path": "/billToContact/email",
            "type": "text",
            "default": "",
            "value": "johnDoe@johnDoe.com"
          },
          "phone": {
            "columnName": "Phone",
            "columnKey": "phone",
            "path": "/billToContact/phone",
            "type": "text",
            "default": "",
            "value": "9876543210"
          }
        }
      },
      "orders": {
        "columnName": "Orders",
        "columnKey": "orders",
        "path": "/orders",
        "type": "list",
        "default": "",
        "value": [
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          },
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          }
        ]
      }
    },
    {
      "accNumber": {
        "columnName": "Account Number",
        "columnKey": "accNumber",
        "path": "/accNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "ACC_002"
      },
      "batchNumber": {
        "columnName": "Batch",
        "columnKey": "batchNumber",
        "path": "/batchNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "Batch2"
      },
      "invoiceTemplate": {
        "columnName": "Invoice Template",
        "columnKey": "invoiceTemplate",
        "path": "/invoiceTemplate",
        "type": "obj",
        "default": "",
        "value": {
          "name": "invoice1",
          "value": "abcuciancayicvsucasa3ye7q6nxahs7"
        }
      },
      "billToContact": {
        "columnName": "Bill To Contact",
        "columnKey": "billToContact",
        "path": "/billToContact",
        "type": "obj",
        "default": "",
        "defaultChildKey": "fName",
        "value": {
          "fName": {
            "columnName": "FirstName",
            "columnKey": "fName",
            "path": "/billToContact/fName",
            "type": "text",
            "default": "",
            "value": "john"
          },
          "lName": {
            "columnName": "Last Name",
            "columnKey": "lName",
            "path": "/billToContact/lName",
            "type": "text",
            "default": "",
            "value": "doe"
          },
          "email": {
            "columnName": "Email",
            "columnKey": "email",
            "path": "/billToContact/email",
            "type": "text",
            "default": "",
            "value": "johnDoe@johnDoe.com"
          },
          "phone": {
            "columnName": "Phone",
            "columnKey": "phone",
            "path": "/billToContact/phone",
            "type": "text",
            "default": "",
            "value": "9876543210"
          }
        }
      },
      "orders": {
        "columnName": "Orders",
        "columnKey": "orders",
        "path": "/orders",
        "type": "list",
        "default": "",
        "value": [
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          },
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          }
        ]
      }
    },
    {
      "accNumber": {
        "columnName": "Account Number",
        "columnKey": "accNumber",
        "path": "/accNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "ACC_003"
      },
      "batchNumber": {
        "columnName": "Batch",
        "columnKey": "batchNumber",
        "path": "/batchNumber",
        "type": "text",
        "default": "",
        "primaryKey":true,
        "value": "Batch3"
      },
      "invoiceTemplate": {
        "columnName": "Invoice Template",
        "columnKey": "invoiceTemplate",
        "path": "/invoiceTemplate",
        "type": "obj",
        "default": "",
        "value": {
          "name": "invoice1",
          "value": "abcuciancayicvsucasa3ye7q6nxahs7"
        }
      },
      "billToContact": {
        "columnName": "Bill To Contact",
        "columnKey": "billToContact",
        "path": "/billToContact",
        "type": "obj",
        "default": "",
        "defaultChildKey": "fName",
        "value": {
          "fName": {
            "columnName": "FirstName",
            "columnKey": "fName",
            "path": "/billToContact/fName",
            "type": "text",
            "default": "",
            "value": "john"
          },
          "lName": {
            "columnName": "Last Name",
            "columnKey": "lName",
            "path": "/billToContact/lName",
            "type": "text",
            "default": "",
            "value": "doe"
          },
          "email": {
            "columnName": "Email",
            "columnKey": "email",
            "path": "/billToContact/email",
            "type": "text",
            "default": "",
            "value": "johnDoe@johnDoe.com"
          },
          "phone": {
            "columnName": "Phone",
            "columnKey": "phone",
            "path": "/billToContact/phone",
            "type": "text",
            "default": "",
            "value": "9876543210"
          }
        }
      },
      "orders": {
        "columnName": "Orders",
        "columnKey": "orders",
        "path": "/orders",
        "type": "list",
        "default": "",
        "value": [
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          },
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          }
        ]
      }
    },
    {
      "accNumber": {
        "columnName": "Account Number",
        "columnKey": "accNumber",
        "path": "/accNumber",
        "type": "text",
        "default": "",
        "primaryKey": true,
        "value": "ACC_004"
      },
      "batchNumber": {
        "columnName": "Batch",
        "columnKey": "batchNumber",
        "path": "/batchNumber",
        "type": "text",
        "default": "",
        "value": "Batch1"
      },
      "invoiceTemplate": {
        "columnName": "Invoice Template",
        "columnKey": "invoiceTemplate",
        "path": "/invoiceTemplate",
        "type": "obj",
        "default": "",
        "value": {
          "name": "invoice1",
          "value": "abcuciancayicvsucasa3ye7q6nxahs7"
        }
      },
      "billToContact": {
        "columnName": "Bill To Contact",
        "columnKey": "billToContact",
        "path": "/billToContact",
        "type": "obj",
        "default": "",
        "defaultChildKey": "fName",
        "value": {
          "fName": {
            "columnName": "FirstName",
            "columnKey": "fName",
            "path": "/billToContact/fName",
            "type": "text",
            "default": "",
            "value": "john"
          },
          "lName": {
            "columnName": "Last Name",
            "columnKey": "lName",
            "path": "/billToContact/lName",
            "type": "text",
            "default": "",
            "value": "doe"
          },
          "email": {
            "columnName": "Email",
            "columnKey": "email",
            "path": "/billToContact/email",
            "type": "text",
            "default": "",
            "value": "johnDoe@johnDoe.com"
          },
          "phone": {
            "columnName": "Phone",
            "columnKey": "phone",
            "path": "/billToContact/phone",
            "type": "text",
            "default": "",
            "value": "9876543210"
          }
        }
      },
      "orders": {
        "columnName": "Orders",
        "columnKey": "orders",
        "path": "/orders",
        "type": "list",
        "default": "",
        "value": [
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          },
          {
            "product": {
              "columnName": "Product",
              "columnKey": "product",
              "path": "/orders/product",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProduct2",
                "value": "hvdyaaidsjhu1637chsdbc73"
              }
            },
            "productRatePlan": {
              "columnName": "Product Rate Plan",
              "columnKey": "productRatePlan",
              "path": "/orders/productRatePlan",
              "type": "list",
              "default": "",
              "primaryKey": true,
              "value": {
                "name": "exampleProductRatePlan2",
                "value": "iweudubusbx23612dasagas1"
              }
            }
          }
        ]
      }
    }
  ]


const getRow = (pk) =>{
    //filter data based on primaryKeys
    let filteredRows = data.filter((row)=> {
        let selectRow = true;
        Object.keys(pk).forEach(pKey => {
            selectRow =  row[pKey].value == pk[pKey].value ? selectRow && true  : selectRow && false;
        })
        return selectRow
    })
    if(filteredRows.length == 1){
        return filteredRows[0]
    }else{
        return null;
    }
}

console.log(getRow(pk));