module.exports.datapackage = {
  "name": "south-africa-national-estimates-2015-2019",
  "id": "R_kgDOGKpJlw",
  "encoding": "utf_8",
  "format": "csv",
  "resources": [
    {
      "bytes": 23019029,
      "hash": "b18dbe36233e43b78c37d033ea23a8e8082e893de0fa85099777bd1014f54cb2",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "title": "budgetphase",
            "name": "budgetphase",
            "slug": "budgetphase",
            "type": "string",
            "format": "default",
            "columnType": "phase:id",
            "conceptType": "phase",
            "options": []
          },
          {
            "title": "department",
            "name": "department",
            "slug": "department",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:label",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "economicclassification1",
            "name": "economicclassification1",
            "slug": "economicclassification1",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level1:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification2",
            "name": "economicclassification2",
            "slug": "economicclassification2",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level2:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification3",
            "name": "economicclassification3",
            "slug": "economicclassification3",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification4",
            "name": "economicclassification4",
            "slug": "economicclassification4",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "financialyear",
            "name": "financialyear",
            "slug": "financialyear",
            "type": "integer",
            "format": "default",
            "columnType": "date:fiscal-year",
            "conceptType": "date",
            "options": []
          },
          {
            "title": "functiongroup1",
            "name": "functiongroup1",
            "slug": "functiongroup1",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level1:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "programme",
            "name": "programme",
            "slug": "programme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "prognumber",
            "name": "prognumber",
            "slug": "prognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprogramme",
            "name": "subprogramme",
            "slug": "subprogramme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprognumber",
            "name": "subprognumber",
            "slug": "subprognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "value",
            "name": "value",
            "slug": "value",
            "type": "number",
            "format": "default",
            "columnType": "value",
            "conceptType": "value",
            "options": [
              {
                "name": "decimalChar",
                "title": "Decimal Separator",
                "defaultValue": ".",
                "trim": "false"
              },
              {
                "name": "groupChar",
                "title": "Grouping Character",
                "defaultValue": ",",
                "trim": "false"
              },
              {
                "name": "currency",
                "title": "Currency",
                "values": []
              },
              {
                "name": "factor",
                "title": "Factor",
                "type": "number"
              },
              {
                "name": "direction",
                "title": "Direction",
                "values": [
                  {
                    "name": "Expenditure",
                    "value": "expenditure"
                  },
                  {
                    "name": "Revenue",
                    "value": "revenue"
                  }
                ]
              },
              {
                "name": "phase",
                "title": "Phase",
                "values": [
                  {
                    "name": "Proposed",
                    "value": "proposed"
                  },
                  {
                    "name": "Approved",
                    "value": "approved"
                  },
                  {
                    "name": "Adjusted",
                    "value": "adjusted"
                  },
                  {
                    "name": "Executed",
                    "value": "executed"
                  }
                ]
              }
            ],
            "decimalChar": ".",
            "groupChar": ","
          },
          {
            "title": "votenumber",
            "name": "votenumber",
            "slug": "votenumber",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:code",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "amountkind",
            "name": "amountkind",
            "slug": "amountkind",
            "type": "string",
            "format": "default",
            "columnType": "value-kind:code",
            "conceptType": "value-kind",
            "options": []
          },
          {
            "title": "econtomicclassification5",
            "name": "econtomicclassification5",
            "slug": "econtomicclassification5",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level5:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "functiongroup2",
            "name": "functiongroup2",
            "slug": "functiongroup2",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level2:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "government",
            "name": "government",
            "slug": "government",
            "type": "string",
            "format": "default",
            "columnType": "geo-source:target:code",
            "conceptType": "geo-source",
            "options": []
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "encoding": "utf-8",
      "mediatype": "text/csv",
      "name": "budget-vs-actual-national__2015.csv",
      "dialect": {
        "delimiter": ",",
        "quoteChar": "\""
      },
      "path": "data/budget-vs-actual-national__2015.csv",
      "hashcopy": "984eb7c2e4e5230886f061a76bcb0b4b69889f833eab21866fc08ffe4a7d2d84",
      "sample": [
        [
          "budgetphase",
          "department",
          "economicclassification1",
          "economicclassification2",
          "economicclassification3",
          "economicclassification4",
          "financialyear",
          "functiongroup1",
          "programme",
          "prognumber",
          "subprogramme",
          "subprognumber",
          "value",
          "votenumber",
          "amountkind",
          "econtomicclassification5",
          "functiongroup2",
          "government"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "93000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "41000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "24986000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1876000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "957000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Assets less than the capitalisation threshold",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "61000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "124000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1091000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Computer services",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "66000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "190000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumable: Stationery,printing and office supplies",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "289000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Contractors",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "5000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Entertainment",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "68000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Fleet services (including government motor transport)",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "265000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Operating payments",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "227000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Rental and hiring",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "70000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Training and development",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "252000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Travel and subsistence",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "11966000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Venues and facilities",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "240000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Transfers and subsidies",
          "Departmental agencies and accounts",
          "Departmental agencies (non-business entities)",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "18000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "2000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "1000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "1979000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "149000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "36000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Advertising",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "19000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "79000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "45000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Computer services",
          "2015",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "3000",
          "10",
          "Total",
          "Empty",
          "General public administration and fiscal affairs",
          "South Africa"
        ]
      ],
      "model": {
        "dimensions": {
          "phase": {
            "dimensionType": "other",
            "primaryKey": [
              "budgetphase"
            ],
            "attributes": {
              "budgetphase": {
                "source": "budgetphase",
                "title": "budgetphase"
              }
            }
          },
          "administrative-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "votenumber"
            ],
            "attributes": {
              "department": {
                "source": "department",
                "title": "department",
                "labelfor": "votenumber"
              },
              "votenumber": {
                "source": "votenumber",
                "title": "votenumber"
              }
            },
            "classificationType": "administrative"
          },
          "economic-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "economicclassification1",
              "economicclassification2",
              "economicclassification3",
              "economicclassification4",
              "econtomicclassification5"
            ],
            "attributes": {
              "economicclassification1": {
                "source": "economicclassification1",
                "title": "economicclassification1"
              },
              "economicclassification2": {
                "source": "economicclassification2",
                "title": "economicclassification2",
                "parent": "economicclassification1"
              },
              "economicclassification3": {
                "source": "economicclassification3",
                "title": "economicclassification3",
                "parent": "economicclassification2"
              },
              "economicclassification4": {
                "source": "economicclassification4",
                "title": "economicclassification4",
                "parent": "economicclassification2"
              },
              "econtomicclassification5": {
                "source": "econtomicclassification5",
                "title": "econtomicclassification5",
                "parent": "economicclassification3"
              }
            },
            "classificationType": "economic"
          },
          "date": {
            "dimensionType": "datetime",
            "primaryKey": [
              "financialyear"
            ],
            "attributes": {
              "financialyear": {
                "source": "financialyear",
                "title": "financialyear"
              }
            }
          },
          "functional-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "functiongroup1",
              "functiongroup2"
            ],
            "attributes": {
              "functiongroup1": {
                "source": "functiongroup1",
                "title": "functiongroup1"
              },
              "functiongroup2": {
                "source": "functiongroup2",
                "title": "functiongroup2",
                "parent": "functiongroup1"
              }
            },
            "classificationType": "functional"
          },
          "activity": {
            "dimensionType": "activity",
            "primaryKey": [
              "prognumber",
              "subprognumber"
            ],
            "attributes": {
              "programme": {
                "source": "programme",
                "title": "programme",
                "labelfor": "prognumber"
              },
              "prognumber": {
                "source": "prognumber",
                "title": "prognumber"
              },
              "subprogramme": {
                "source": "subprogramme",
                "title": "subprogramme",
                "labelfor": "subprognumber"
              },
              "subprognumber": {
                "source": "subprognumber",
                "title": "subprognumber",
                "parent": "prognumber"
              }
            }
          },
          "value-kind": {
            "dimensionType": "other",
            "primaryKey": [
              "amountkind"
            ],
            "attributes": {
              "amountkind": {
                "source": "amountkind",
                "title": "amountkind"
              }
            }
          },
          "geo-source": {
            "dimensionType": "location",
            "primaryKey": [
              "government"
            ],
            "attributes": {
              "government": {
                "source": "government",
                "title": "government"
              }
            }
          }
        },
        "measures": {
          "value": {
            "source": "value",
            "title": "value"
          }
        }
      }
    },
    {
      "bytes": 15271749,
      "hash": "5a25dc2b975eb85bb58a44a3a206d85c17b0f3fe35167d9ba535b5c15421be1b",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "title": "budgetphase",
            "name": "budgetphase",
            "slug": "budgetphase",
            "type": "string",
            "format": "default",
            "columnType": "phase:id",
            "conceptType": "phase",
            "options": []
          },
          {
            "title": "department",
            "name": "department",
            "slug": "department",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:label",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "economicclassification1",
            "name": "economicclassification1",
            "slug": "economicclassification1",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level1:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification2",
            "name": "economicclassification2",
            "slug": "economicclassification2",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level2:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification3",
            "name": "economicclassification3",
            "slug": "economicclassification3",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification4",
            "name": "economicclassification4",
            "slug": "economicclassification4",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "financialyear",
            "name": "financialyear",
            "slug": "financialyear",
            "type": "integer",
            "format": "default",
            "columnType": "date:fiscal-year",
            "conceptType": "date",
            "options": []
          },
          {
            "title": "functiongroup1",
            "name": "functiongroup1",
            "slug": "functiongroup1",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level1:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "programme",
            "name": "programme",
            "slug": "programme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "prognumber",
            "name": "prognumber",
            "slug": "prognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprogramme",
            "name": "subprogramme",
            "slug": "subprogramme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprognumber",
            "name": "subprognumber",
            "slug": "subprognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "value",
            "name": "value",
            "slug": "value",
            "type": "number",
            "format": "default",
            "columnType": "value",
            "conceptType": "value",
            "options": [
              {
                "name": "decimalChar",
                "title": "Decimal Separator",
                "defaultValue": ".",
                "trim": "false"
              },
              {
                "name": "groupChar",
                "title": "Grouping Character",
                "defaultValue": ",",
                "trim": "false"
              },
              {
                "name": "currency",
                "title": "Currency",
                "values": []
              },
              {
                "name": "factor",
                "title": "Factor",
                "type": "number"
              },
              {
                "name": "direction",
                "title": "Direction",
                "values": [
                  {
                    "name": "Expenditure",
                    "value": "expenditure"
                  },
                  {
                    "name": "Revenue",
                    "value": "revenue"
                  }
                ]
              },
              {
                "name": "phase",
                "title": "Phase",
                "values": [
                  {
                    "name": "Proposed",
                    "value": "proposed"
                  },
                  {
                    "name": "Approved",
                    "value": "approved"
                  },
                  {
                    "name": "Adjusted",
                    "value": "adjusted"
                  },
                  {
                    "name": "Executed",
                    "value": "executed"
                  }
                ]
              }
            ],
            "decimalChar": ".",
            "groupChar": ","
          },
          {
            "title": "votenumber",
            "name": "votenumber",
            "slug": "votenumber",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:code",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "amountkind",
            "name": "amountkind",
            "slug": "amountkind",
            "type": "string",
            "format": "default",
            "columnType": "value-kind:code",
            "conceptType": "value-kind",
            "options": []
          },
          {
            "title": "econtomicclassification5",
            "name": "econtomicclassification5",
            "slug": "econtomicclassification5",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level5:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "functiongroup2",
            "name": "functiongroup2",
            "slug": "functiongroup2",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level2:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "government",
            "name": "government",
            "slug": "government",
            "type": "string",
            "format": "default",
            "columnType": "geo-source:target:code",
            "conceptType": "geo-source",
            "options": []
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "encoding": "utf-8",
      "mediatype": "text/csv",
      "name": "budget-vs-actual-national__2016.csv",
      "dialect": {
        "delimiter": ",",
        "quoteChar": "\""
      },
      "path": "data/budget-vs-actual-national__2016.csv",
      "hashcopy": "1ac6e79336dd93f887ce156428d430fed0584062dbacd8ae8ccec1516b30d248",
      "sample": [
        [
          "budgetphase",
          "department",
          "economicclassification1",
          "economicclassification2",
          "economicclassification3",
          "economicclassification4",
          "financialyear",
          "functiongroup1",
          "programme",
          "prognumber",
          "subprogramme",
          "subprognumber",
          "value",
          "votenumber",
          "amountkind",
          "econtomicclassification5",
          "functiongroup2",
          "government"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "168000",
          "10",
          "Total",
          "Other machinery and equipment",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "101000",
          "10",
          "Total",
          "Transport equipment",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "25227000",
          "10",
          "Total",
          "Salaries and wages",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1955000",
          "10",
          "Total",
          "Social contributions",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1157000",
          "10",
          "Total",
          "Administrative fees",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Advertising",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "267000",
          "10",
          "Total",
          "Advertising",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "477000",
          "10",
          "Total",
          "Catering: Departmental activities",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1286000",
          "10",
          "Total",
          "Communication (G&S)",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Computer services",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "226000",
          "10",
          "Total",
          "Computer services",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "178000",
          "10",
          "Total",
          "Consumable supplies",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumables: Stationery, printing and office supplies",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "343000",
          "10",
          "Total",
          "Consumables: Stationery, printing and office supplies",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Contractors",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "108000",
          "10",
          "Total",
          "Contractors",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Entertainment",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "80000",
          "10",
          "Total",
          "Entertainment",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Fleet services (including government motor transport)",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "499000",
          "10",
          "Total",
          "Fleet services (including government motor transport)",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Minor Assets",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "317000",
          "10",
          "Total",
          "Minor Assets",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Operating payments",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "355000",
          "10",
          "Total",
          "Operating payments",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Training and development",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "197000",
          "10",
          "Total",
          "Training and development",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Travel and subsistence",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "7907000",
          "10",
          "Total",
          "Travel and subsistence",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Venues and facilities",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "278000",
          "10",
          "Total",
          "Venues and facilities",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Transfers and subsidies",
          "Departmental agencies and accounts",
          "Departmental agencies (non-business entities)",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "121000",
          "10",
          "Total",
          "Departmental agencies (non-business entities)",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Transfers and subsidies",
          "Provinces and municipalities",
          "Municipalities",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1000",
          "10",
          "Total",
          "Municipal bank accounts",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "5000",
          "10",
          "Total",
          "Other machinery and equipment",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "5000",
          "10",
          "Total",
          "Transport equipment",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "2265000",
          "10",
          "Total",
          "Salaries and wages",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "180000",
          "10",
          "Total",
          "Social contributions",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "30000",
          "10",
          "Total",
          "Administrative fees",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "41000",
          "10",
          "Total",
          "Catering: Departmental activities",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "48000",
          "10",
          "Total",
          "Communication (G&S)",
          "General public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Computer services",
          "2016",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "21000",
          "10",
          "Total",
          "Computer services",
          "General public administration and fiscal affairs",
          "South Africa"
        ]
      ],
      "model": {
        "dimensions": {
          "phase": {
            "dimensionType": "other",
            "primaryKey": [
              "budgetphase"
            ],
            "attributes": {
              "budgetphase": {
                "source": "budgetphase",
                "title": "budgetphase"
              }
            }
          },
          "administrative-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "votenumber"
            ],
            "attributes": {
              "department": {
                "source": "department",
                "title": "department",
                "labelfor": "votenumber"
              },
              "votenumber": {
                "source": "votenumber",
                "title": "votenumber"
              }
            },
            "classificationType": "administrative"
          },
          "economic-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "economicclassification1",
              "economicclassification2",
              "economicclassification3",
              "economicclassification4",
              "econtomicclassification5"
            ],
            "attributes": {
              "economicclassification1": {
                "source": "economicclassification1",
                "title": "economicclassification1"
              },
              "economicclassification2": {
                "source": "economicclassification2",
                "title": "economicclassification2",
                "parent": "economicclassification1"
              },
              "economicclassification3": {
                "source": "economicclassification3",
                "title": "economicclassification3",
                "parent": "economicclassification2"
              },
              "economicclassification4": {
                "source": "economicclassification4",
                "title": "economicclassification4",
                "parent": "economicclassification2"
              },
              "econtomicclassification5": {
                "source": "econtomicclassification5",
                "title": "econtomicclassification5",
                "parent": "economicclassification3"
              }
            },
            "classificationType": "economic"
          },
          "date": {
            "dimensionType": "datetime",
            "primaryKey": [
              "financialyear"
            ],
            "attributes": {
              "financialyear": {
                "source": "financialyear",
                "title": "financialyear"
              }
            }
          },
          "functional-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "functiongroup1",
              "functiongroup2"
            ],
            "attributes": {
              "functiongroup1": {
                "source": "functiongroup1",
                "title": "functiongroup1"
              },
              "functiongroup2": {
                "source": "functiongroup2",
                "title": "functiongroup2",
                "parent": "functiongroup1"
              }
            },
            "classificationType": "functional"
          },
          "activity": {
            "dimensionType": "activity",
            "primaryKey": [
              "prognumber",
              "subprognumber"
            ],
            "attributes": {
              "programme": {
                "source": "programme",
                "title": "programme",
                "labelfor": "prognumber"
              },
              "prognumber": {
                "source": "prognumber",
                "title": "prognumber"
              },
              "subprogramme": {
                "source": "subprogramme",
                "title": "subprogramme",
                "labelfor": "subprognumber"
              },
              "subprognumber": {
                "source": "subprognumber",
                "title": "subprognumber",
                "parent": "prognumber"
              }
            }
          },
          "value-kind": {
            "dimensionType": "other",
            "primaryKey": [
              "amountkind"
            ],
            "attributes": {
              "amountkind": {
                "source": "amountkind",
                "title": "amountkind"
              }
            }
          },
          "geo-source": {
            "dimensionType": "location",
            "primaryKey": [
              "government"
            ],
            "attributes": {
              "government": {
                "source": "government",
                "title": "government"
              }
            }
          }
        },
        "measures": {
          "value": {
            "source": "value",
            "title": "value"
          }
        }
      }
    },
    {
      "bytes": 23923544,
      "hash": "0f63f447f38ec8db256395db3d00d0c0d32aa4230cee98f2769374ae6fcac34e",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "title": "budgetphase",
            "name": "budgetphase",
            "slug": "budgetphase",
            "type": "string",
            "format": "default",
            "columnType": "phase:id",
            "conceptType": "phase",
            "options": []
          },
          {
            "title": "department",
            "name": "department",
            "slug": "department",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:label",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "economicclassification1",
            "name": "economicclassification1",
            "slug": "economicclassification1",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level1:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification2",
            "name": "economicclassification2",
            "slug": "economicclassification2",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level2:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification3",
            "name": "economicclassification3",
            "slug": "economicclassification3",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification4",
            "name": "economicclassification4",
            "slug": "economicclassification4",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "financialyear",
            "name": "financialyear",
            "slug": "financialyear",
            "type": "integer",
            "format": "default",
            "columnType": "date:fiscal-year",
            "conceptType": "date",
            "options": []
          },
          {
            "title": "functiongroup1",
            "name": "functiongroup1",
            "slug": "functiongroup1",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level1:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "programme",
            "name": "programme",
            "slug": "programme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "prognumber",
            "name": "prognumber",
            "slug": "prognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprogramme",
            "name": "subprogramme",
            "slug": "subprogramme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprognumber",
            "name": "subprognumber",
            "slug": "subprognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "value",
            "name": "value",
            "slug": "value",
            "type": "number",
            "format": "default",
            "columnType": "value",
            "conceptType": "value",
            "options": [
              {
                "name": "decimalChar",
                "title": "Decimal Separator",
                "defaultValue": ".",
                "trim": "false"
              },
              {
                "name": "groupChar",
                "title": "Grouping Character",
                "defaultValue": ",",
                "trim": "false"
              },
              {
                "name": "currency",
                "title": "Currency",
                "values": []
              },
              {
                "name": "factor",
                "title": "Factor",
                "type": "number"
              },
              {
                "name": "direction",
                "title": "Direction",
                "values": [
                  {
                    "name": "Expenditure",
                    "value": "expenditure"
                  },
                  {
                    "name": "Revenue",
                    "value": "revenue"
                  }
                ]
              },
              {
                "name": "phase",
                "title": "Phase",
                "values": [
                  {
                    "name": "Proposed",
                    "value": "proposed"
                  },
                  {
                    "name": "Approved",
                    "value": "approved"
                  },
                  {
                    "name": "Adjusted",
                    "value": "adjusted"
                  },
                  {
                    "name": "Executed",
                    "value": "executed"
                  }
                ]
              }
            ],
            "decimalChar": ".",
            "groupChar": ","
          },
          {
            "title": "votenumber",
            "name": "votenumber",
            "slug": "votenumber",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:code",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "amountkind",
            "name": "amountkind",
            "slug": "amountkind",
            "type": "string",
            "format": "default",
            "columnType": "value-kind:code",
            "conceptType": "value-kind",
            "options": []
          },
          {
            "title": "econtomicclassification5",
            "name": "econtomicclassification5",
            "slug": "econtomicclassification5",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level5:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "functiongroup2",
            "name": "functiongroup2",
            "slug": "functiongroup2",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level2:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "government",
            "name": "government",
            "slug": "government",
            "type": "string",
            "format": "default",
            "columnType": "geo-source:target:code",
            "conceptType": "geo-source",
            "options": []
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "encoding": "utf-8",
      "mediatype": "text/csv",
      "name": "budget-vs-actual-national__2017.csv",
      "dialect": {
        "delimiter": ",",
        "quoteChar": "\""
      },
      "path": "data/budget-vs-actual-national__2017.csv",
      "hashcopy": "5401952dc01f7095dd7b0173a248465813a80aa4faac6acb1c9d6729db56e250",
      "sample": [
        [
          "budgetphase",
          "department",
          "economicclassification1",
          "economicclassification2",
          "economicclassification3",
          "economicclassification4",
          "financialyear",
          "functiongroup1",
          "programme",
          "prognumber",
          "subprogramme",
          "subprognumber",
          "value",
          "votenumber",
          "amountkind",
          "econtomicclassification5",
          "functiongroup2",
          "government"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "Salaries and wages",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "24331000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "Social contributions",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "2114000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "Administrative fees",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1221000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Advertising",
          "Advertising",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "295000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Agency and support/outsourced services",
          "Agency and support/outsourced services",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "Catering: Departmental activities",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "634000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "Communication (G&S)",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1730000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Computer services",
          "Computer services",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "237000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consultants: Business and advisory services",
          "Consultants: Business and advisory services",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "Consumable supplies",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "219000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consumables: Stationery, printing and office supplies",
          "Consumables: Stationery, printing and office supplies",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "448000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Contractors",
          "Contractors",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "160000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Entertainment",
          "Entertainment",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "95000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Fleet services (including government motor transport)",
          "Fleet services (including government motor transport)",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "843000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Legal services (G&S)",
          "Legal services (G&S)",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Minor Assets",
          "Minor Assets",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "534000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Operating payments",
          "Operating payments",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "270000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Property payments",
          "Property payments",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Rental and hiring",
          "Rental and hiring",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Science and technological services",
          "Science and technological services",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Training and development",
          "Training and development",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "194000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Transport provided: Departmental activity",
          "Transport provided: Departmental activity",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Travel and subsistence",
          "Travel and subsistence",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "8920000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Venues and facilities",
          "Venues and facilities",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "Other machinery and equipment",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "97000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "Transport equipment",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "106000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for financial assets",
          "Payments for financial assets",
          "Payments for financial assets",
          "Payments for financial assets",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Transfers and subsidies",
          "Departmental agencies and accounts",
          "Departmental agencies (non-business entities)",
          "Departmental agencies (non-business entities)",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "127000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Transfers and subsidies",
          "Households",
          "Other transfers to households",
          "Other transfers to households",
          "2017",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ]
      ],
      "model": {
        "dimensions": {
          "phase": {
            "dimensionType": "other",
            "primaryKey": [
              "budgetphase"
            ],
            "attributes": {
              "budgetphase": {
                "source": "budgetphase",
                "title": "budgetphase"
              }
            }
          },
          "administrative-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "votenumber"
            ],
            "attributes": {
              "department": {
                "source": "department",
                "title": "department",
                "labelfor": "votenumber"
              },
              "votenumber": {
                "source": "votenumber",
                "title": "votenumber"
              }
            },
            "classificationType": "administrative"
          },
          "economic-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "economicclassification1",
              "economicclassification2",
              "economicclassification3",
              "economicclassification4",
              "econtomicclassification5"
            ],
            "attributes": {
              "economicclassification1": {
                "source": "economicclassification1",
                "title": "economicclassification1"
              },
              "economicclassification2": {
                "source": "economicclassification2",
                "title": "economicclassification2",
                "parent": "economicclassification1"
              },
              "economicclassification3": {
                "source": "economicclassification3",
                "title": "economicclassification3",
                "parent": "economicclassification2"
              },
              "economicclassification4": {
                "source": "economicclassification4",
                "title": "economicclassification4",
                "parent": "economicclassification2"
              },
              "econtomicclassification5": {
                "source": "econtomicclassification5",
                "title": "econtomicclassification5",
                "parent": "economicclassification3"
              }
            },
            "classificationType": "economic"
          },
          "date": {
            "dimensionType": "datetime",
            "primaryKey": [
              "financialyear"
            ],
            "attributes": {
              "financialyear": {
                "source": "financialyear",
                "title": "financialyear"
              }
            }
          },
          "functional-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "functiongroup1",
              "functiongroup2"
            ],
            "attributes": {
              "functiongroup1": {
                "source": "functiongroup1",
                "title": "functiongroup1"
              },
              "functiongroup2": {
                "source": "functiongroup2",
                "title": "functiongroup2",
                "parent": "functiongroup1"
              }
            },
            "classificationType": "functional"
          },
          "activity": {
            "dimensionType": "activity",
            "primaryKey": [
              "prognumber",
              "subprognumber"
            ],
            "attributes": {
              "programme": {
                "source": "programme",
                "title": "programme",
                "labelfor": "prognumber"
              },
              "prognumber": {
                "source": "prognumber",
                "title": "prognumber"
              },
              "subprogramme": {
                "source": "subprogramme",
                "title": "subprogramme",
                "labelfor": "subprognumber"
              },
              "subprognumber": {
                "source": "subprognumber",
                "title": "subprognumber",
                "parent": "prognumber"
              }
            }
          },
          "value-kind": {
            "dimensionType": "other",
            "primaryKey": [
              "amountkind"
            ],
            "attributes": {
              "amountkind": {
                "source": "amountkind",
                "title": "amountkind"
              }
            }
          },
          "geo-source": {
            "dimensionType": "location",
            "primaryKey": [
              "government"
            ],
            "attributes": {
              "government": {
                "source": "government",
                "title": "government"
              }
            }
          }
        },
        "measures": {
          "value": {
            "source": "value",
            "title": "value"
          }
        }
      }
    },
    {
      "bytes": 12693097,
      "hash": "6120aa73ab234712196a2a29e7fd9db65e68656b1dbcd88b3c857ead834f9d74",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "title": "budgetphase",
            "name": "budgetphase",
            "slug": "budgetphase",
            "type": "string",
            "format": "default",
            "columnType": "phase:id",
            "conceptType": "phase",
            "options": []
          },
          {
            "title": "department",
            "name": "department",
            "slug": "department",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:label",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "economicclassification1",
            "name": "economicclassification1",
            "slug": "economicclassification1",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level1:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification2",
            "name": "economicclassification2",
            "slug": "economicclassification2",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level2:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification3",
            "name": "economicclassification3",
            "slug": "economicclassification3",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification4",
            "name": "economicclassification4",
            "slug": "economicclassification4",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "financialyear",
            "name": "financialyear",
            "slug": "financialyear",
            "type": "integer",
            "format": "default",
            "columnType": "date:fiscal-year",
            "conceptType": "date",
            "options": []
          },
          {
            "title": "functiongroup1",
            "name": "functiongroup1",
            "slug": "functiongroup1",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level1:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "programme",
            "name": "programme",
            "slug": "programme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "prognumber",
            "name": "prognumber",
            "slug": "prognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprogramme",
            "name": "subprogramme",
            "slug": "subprogramme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprognumber",
            "name": "subprognumber",
            "slug": "subprognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "value",
            "name": "value",
            "slug": "value",
            "type": "number",
            "format": "default",
            "columnType": "value",
            "conceptType": "value",
            "options": [
              {
                "name": "decimalChar",
                "title": "Decimal Separator",
                "defaultValue": ".",
                "trim": "false"
              },
              {
                "name": "groupChar",
                "title": "Grouping Character",
                "defaultValue": ",",
                "trim": "false"
              },
              {
                "name": "currency",
                "title": "Currency",
                "values": []
              },
              {
                "name": "factor",
                "title": "Factor",
                "type": "number"
              },
              {
                "name": "direction",
                "title": "Direction",
                "values": [
                  {
                    "name": "Expenditure",
                    "value": "expenditure"
                  },
                  {
                    "name": "Revenue",
                    "value": "revenue"
                  }
                ]
              },
              {
                "name": "phase",
                "title": "Phase",
                "values": [
                  {
                    "name": "Proposed",
                    "value": "proposed"
                  },
                  {
                    "name": "Approved",
                    "value": "approved"
                  },
                  {
                    "name": "Adjusted",
                    "value": "adjusted"
                  },
                  {
                    "name": "Executed",
                    "value": "executed"
                  }
                ]
              }
            ],
            "decimalChar": ".",
            "groupChar": ","
          },
          {
            "title": "votenumber",
            "name": "votenumber",
            "slug": "votenumber",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:code",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "amountkind",
            "name": "amountkind",
            "slug": "amountkind",
            "type": "string",
            "format": "default",
            "columnType": "value-kind:code",
            "conceptType": "value-kind",
            "options": []
          },
          {
            "title": "econtomicclassification5",
            "name": "econtomicclassification5",
            "slug": "econtomicclassification5",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level5:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "functiongroup2",
            "name": "functiongroup2",
            "slug": "functiongroup2",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level2:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "government",
            "name": "government",
            "slug": "government",
            "type": "string",
            "format": "default",
            "columnType": "geo-source:target:code",
            "conceptType": "geo-source",
            "options": []
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "encoding": "utf-8",
      "mediatype": "text/csv",
      "name": "budget-vs-actual-national__2018.csv",
      "dialect": {
        "delimiter": ",",
        "quoteChar": "\""
      },
      "path": "data/budget-vs-actual-national__2018.csv",
      "hashcopy": "76cc99e3cdae9568d16f70d7e42414708f80164563d08ac97f00de7f276afe3b",
      "sample": [
        [
          "budgetphase",
          "department",
          "economicclassification1",
          "economicclassification2",
          "economicclassification3",
          "economicclassification4",
          "financialyear",
          "functiongroup1",
          "programme",
          "prognumber",
          "subprogramme",
          "subprognumber",
          "value",
          "votenumber",
          "amountkind",
          "econtomicclassification5",
          "functiongroup2",
          "government"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "Salaries and wages",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "31989000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "Social contributions",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "2213000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "Administrative fees",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "393000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Advertising",
          "Advertising",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "27000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Agency and support/outsourced services",
          "Agency and support/outsourced services",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "Catering: Departmental activities",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "472000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "Communication (G&S)",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1851000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Computer services",
          "Computer services",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "443000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consultants: Business and advisory services",
          "Consultants: Business and advisory services",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "Consumable supplies",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "216000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Consumables: Stationery, printing and office supplies",
          "Consumables: Stationery, printing and office supplies",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "449000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Contractors",
          "Contractors",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Entertainment",
          "Entertainment",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "97000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Fleet services (including government motor transport)",
          "Fleet services (including government motor transport)",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1208000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Legal services (G&S)",
          "Legal services (G&S)",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Minor Assets",
          "Minor Assets",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "50000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Operating payments",
          "Operating payments",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "353000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Property payments",
          "Property payments",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Rental and hiring",
          "Rental and hiring",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Training and development",
          "Training and development",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "314000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Transport provided: Departmental activity",
          "Transport provided: Departmental activity",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Travel and subsistence",
          "Travel and subsistence",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "9728000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current payments",
          "Goods and services",
          "Venues and facilities",
          "Venues and facilities",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "90000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "Other machinery and equipment",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "211000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "Transport equipment",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "364000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Payments for financial assets",
          "Payments for financial assets",
          "Payments for financial assets",
          "Payments for financial assets",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Transfers and subsidies",
          "Departmental agencies and accounts",
          "Departmental agencies (non-business entities)",
          "Departmental agencies (non-business entities)",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "89000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Transfers and subsidies",
          "Households",
          "Other transfers to households",
          "Other transfers to households",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "0.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Transfers and subsidies",
          "Provinces and municipalities",
          "Municipalities",
          "Municipal bank accounts",
          "2018",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "4000.0",
          "10",
          "Total",
          "",
          "",
          "South Africa"
        ]
      ],
      "model": {
        "dimensions": {
          "phase": {
            "dimensionType": "other",
            "primaryKey": [
              "budgetphase"
            ],
            "attributes": {
              "budgetphase": {
                "source": "budgetphase",
                "title": "budgetphase"
              }
            }
          },
          "administrative-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "votenumber"
            ],
            "attributes": {
              "department": {
                "source": "department",
                "title": "department",
                "labelfor": "votenumber"
              },
              "votenumber": {
                "source": "votenumber",
                "title": "votenumber"
              }
            },
            "classificationType": "administrative"
          },
          "economic-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "economicclassification1",
              "economicclassification2",
              "economicclassification3",
              "economicclassification4",
              "econtomicclassification5"
            ],
            "attributes": {
              "economicclassification1": {
                "source": "economicclassification1",
                "title": "economicclassification1"
              },
              "economicclassification2": {
                "source": "economicclassification2",
                "title": "economicclassification2",
                "parent": "economicclassification1"
              },
              "economicclassification3": {
                "source": "economicclassification3",
                "title": "economicclassification3",
                "parent": "economicclassification2"
              },
              "economicclassification4": {
                "source": "economicclassification4",
                "title": "economicclassification4",
                "parent": "economicclassification2"
              },
              "econtomicclassification5": {
                "source": "econtomicclassification5",
                "title": "econtomicclassification5",
                "parent": "economicclassification3"
              }
            },
            "classificationType": "economic"
          },
          "date": {
            "dimensionType": "datetime",
            "primaryKey": [
              "financialyear"
            ],
            "attributes": {
              "financialyear": {
                "source": "financialyear",
                "title": "financialyear"
              }
            }
          },
          "functional-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "functiongroup1",
              "functiongroup2"
            ],
            "attributes": {
              "functiongroup1": {
                "source": "functiongroup1",
                "title": "functiongroup1"
              },
              "functiongroup2": {
                "source": "functiongroup2",
                "title": "functiongroup2",
                "parent": "functiongroup1"
              }
            },
            "classificationType": "functional"
          },
          "activity": {
            "dimensionType": "activity",
            "primaryKey": [
              "prognumber",
              "subprognumber"
            ],
            "attributes": {
              "programme": {
                "source": "programme",
                "title": "programme",
                "labelfor": "prognumber"
              },
              "prognumber": {
                "source": "prognumber",
                "title": "prognumber"
              },
              "subprogramme": {
                "source": "subprogramme",
                "title": "subprogramme",
                "labelfor": "subprognumber"
              },
              "subprognumber": {
                "source": "subprognumber",
                "title": "subprognumber",
                "parent": "prognumber"
              }
            }
          },
          "value-kind": {
            "dimensionType": "other",
            "primaryKey": [
              "amountkind"
            ],
            "attributes": {
              "amountkind": {
                "source": "amountkind",
                "title": "amountkind"
              }
            }
          },
          "geo-source": {
            "dimensionType": "location",
            "primaryKey": [
              "government"
            ],
            "attributes": {
              "government": {
                "source": "government",
                "title": "government"
              }
            }
          }
        },
        "measures": {
          "value": {
            "source": "value",
            "title": "value"
          }
        }
      }
    },
    {
      "bytes": 10950094,
      "hash": "a9dc97a9c99de9bdaef2d6d7604016208db77b3348ad08772bed0aa88f470050",
      "format": "csv",
      "schema": {
        "fields": [
          {
            "title": "budgetphase",
            "name": "budgetphase",
            "slug": "budgetphase",
            "type": "string",
            "format": "default",
            "columnType": "phase:id",
            "conceptType": "phase",
            "options": []
          },
          {
            "title": "department",
            "name": "department",
            "slug": "department",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:label",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "economicclassification1",
            "name": "economicclassification1",
            "slug": "economicclassification1",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level1:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification2",
            "name": "economicclassification2",
            "slug": "economicclassification2",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level2:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification3",
            "name": "economicclassification3",
            "slug": "economicclassification3",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "economicclassification4",
            "name": "economicclassification4",
            "slug": "economicclassification4",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level3:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "financialyear",
            "name": "financialyear",
            "slug": "financialyear",
            "type": "integer",
            "format": "default",
            "columnType": "date:fiscal-year",
            "conceptType": "date",
            "options": []
          },
          {
            "title": "functiongroup1",
            "name": "functiongroup1",
            "slug": "functiongroup1",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level1:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "programme",
            "name": "programme",
            "slug": "programme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "prognumber",
            "name": "prognumber",
            "slug": "prognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:program:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprogramme",
            "name": "subprogramme",
            "slug": "subprogramme",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:label",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "subprognumber",
            "name": "subprognumber",
            "slug": "subprognumber",
            "type": "string",
            "format": "default",
            "columnType": "activity:generic:subprogram:code",
            "conceptType": "activity",
            "options": []
          },
          {
            "title": "value",
            "name": "value",
            "slug": "value",
            "type": "number",
            "format": "default",
            "columnType": "value",
            "conceptType": "value",
            "options": [
              {
                "name": "decimalChar",
                "title": "Decimal Separator",
                "defaultValue": ".",
                "trim": "false"
              },
              {
                "name": "groupChar",
                "title": "Grouping Character",
                "defaultValue": ",",
                "trim": "false"
              },
              {
                "name": "currency",
                "title": "Currency",
                "values": []
              },
              {
                "name": "factor",
                "title": "Factor",
                "type": "number"
              },
              {
                "name": "direction",
                "title": "Direction",
                "values": [
                  {
                    "name": "Expenditure",
                    "value": "expenditure"
                  },
                  {
                    "name": "Revenue",
                    "value": "revenue"
                  }
                ]
              },
              {
                "name": "phase",
                "title": "Phase",
                "values": [
                  {
                    "name": "Proposed",
                    "value": "proposed"
                  },
                  {
                    "name": "Approved",
                    "value": "approved"
                  },
                  {
                    "name": "Adjusted",
                    "value": "adjusted"
                  },
                  {
                    "name": "Executed",
                    "value": "executed"
                  }
                ]
              }
            ],
            "decimalChar": ".",
            "groupChar": ","
          },
          {
            "title": "votenumber",
            "name": "votenumber",
            "slug": "votenumber",
            "type": "string",
            "format": "default",
            "columnType": "administrative-classification:generic:code",
            "conceptType": "administrative-classification",
            "options": []
          },
          {
            "title": "amountkind",
            "name": "amountkind",
            "slug": "amountkind",
            "type": "string",
            "format": "default",
            "columnType": "value-kind:code",
            "conceptType": "value-kind",
            "options": []
          },
          {
            "title": "econtomicclassification5",
            "name": "econtomicclassification5",
            "slug": "econtomicclassification5",
            "type": "string",
            "format": "default",
            "columnType": "economic-classification:generic:level5:code",
            "conceptType": "economic-classification",
            "options": []
          },
          {
            "title": "functiongroup2",
            "name": "functiongroup2",
            "slug": "functiongroup2",
            "type": "string",
            "format": "default",
            "columnType": "functional-classification:generic:level2:code",
            "conceptType": "functional-classification",
            "options": []
          },
          {
            "title": "government",
            "name": "government",
            "slug": "government",
            "type": "string",
            "format": "default",
            "columnType": "geo-source:target:code",
            "conceptType": "geo-source",
            "options": []
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "encoding": "utf-8",
      "mediatype": "text/csv",
      "name": "budget-vs-actual-national__2019.csv",
      "dialect": {
        "delimiter": ",",
        "quoteChar": "\""
      },
      "path": "data/budget-vs-actual-national__2019.csv",
      "hashcopy": "4d93555e7dffcb920b1bed7b2567271d6308d84854e628fb18b1390282c3d222",
      "sample": [
        [
          "budgetphase",
          "department",
          "economicclassification1",
          "economicclassification2",
          "economicclassification3",
          "economicclassification4",
          "financialyear",
          "functiongroup1",
          "programme",
          "prognumber",
          "subprogramme",
          "subprognumber",
          "value",
          "votenumber",
          "amountkind",
          "econtomicclassification5",
          "functiongroup2",
          "government"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "220000",
          "10",
          "Total",
          "Other machinery and equipment",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "383000",
          "10",
          "Total",
          "Transport equipment",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "19904000",
          "10",
          "Total",
          "Salaries and wages",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "654000",
          "10",
          "Total",
          "Social contributions",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "429000",
          "10",
          "Total",
          "Administrative fees",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Advertising",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "30000",
          "10",
          "Total",
          "Advertising",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "496000",
          "10",
          "Total",
          "Catering: Departmental activities",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "2010000",
          "10",
          "Total",
          "Communication (G&S)",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Computer services",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "464000",
          "10",
          "Total",
          "Computer services",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "231000",
          "10",
          "Total",
          "Consumable supplies",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumables: Stationery, printing and office supplies",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "473000",
          "10",
          "Total",
          "Consumables: Stationery, printing and office supplies",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Entertainment",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "103000",
          "10",
          "Total",
          "Entertainment",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Fleet services (including government motor transport)",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "1502000",
          "10",
          "Total",
          "Fleet services (including government motor transport)",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Minor Assets",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "22000",
          "10",
          "Total",
          "Minor Assets",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Operating payments",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "378000",
          "10",
          "Total",
          "Operating payments",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Training and development",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "307000",
          "10",
          "Total",
          "Training and development",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Travel and subsistence",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "9136000",
          "10",
          "Total",
          "Travel and subsistence",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Venues and facilities",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "95000",
          "10",
          "Total",
          "Venues and facilities",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Transfers and subsidies",
          "Departmental agencies and accounts",
          "Departmental agencies (non-business entities)",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "94000",
          "10",
          "Total",
          "Departmental agencies (non-business entities)",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Transfers and subsidies",
          "Provinces and municipalities",
          "Municipalities",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Ministry",
          "1",
          "4000",
          "10",
          "Total",
          "Municipal bank accounts",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Other machinery and equipment",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "2000",
          "10",
          "Total",
          "Other machinery and equipment",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Capital",
          "Payments for capital assets",
          "Machinery and equipment",
          "Transport equipment",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "3000",
          "10",
          "Total",
          "Transport equipment",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Salaries and wages",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "9149000",
          "10",
          "Total",
          "Salaries and wages",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Compensation of employees",
          "Social contributions",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "1134000",
          "10",
          "Total",
          "Social contributions",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Administrative fees",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "26000",
          "10",
          "Total",
          "Administrative fees",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Catering: Departmental activities",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "42000",
          "10",
          "Total",
          "Catering: Departmental activities",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Communication (G&S)",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "54000",
          "10",
          "Total",
          "Communication (G&S)",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumable supplies",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "39000",
          "10",
          "Total",
          "Consumable supplies",
          "Public administration and fiscal affairs",
          "South Africa"
        ],
        [
          "Main appropriation",
          "Public Service and Administration",
          "Current",
          "Current payments",
          "Goods and services",
          "Consumables: Stationery, printing and office supplies",
          "2019",
          "General public services",
          "Administration",
          "1",
          "Departmental Management",
          "2",
          "4000",
          "10",
          "Total",
          "Consumables: Stationery, printing and office supplies",
          "Public administration and fiscal affairs",
          "South Africa"
        ]
      ],
      "model": {
        "dimensions": {
          "phase": {
            "dimensionType": "other",
            "primaryKey": [
              "budgetphase"
            ],
            "attributes": {
              "budgetphase": {
                "source": "budgetphase",
                "title": "budgetphase"
              }
            }
          },
          "administrative-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "votenumber"
            ],
            "attributes": {
              "department": {
                "source": "department",
                "title": "department",
                "labelfor": "votenumber"
              },
              "votenumber": {
                "source": "votenumber",
                "title": "votenumber"
              }
            },
            "classificationType": "administrative"
          },
          "economic-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "economicclassification1",
              "economicclassification2",
              "economicclassification3",
              "economicclassification4",
              "econtomicclassification5"
            ],
            "attributes": {
              "economicclassification1": {
                "source": "economicclassification1",
                "title": "economicclassification1"
              },
              "economicclassification2": {
                "source": "economicclassification2",
                "title": "economicclassification2",
                "parent": "economicclassification1"
              },
              "economicclassification3": {
                "source": "economicclassification3",
                "title": "economicclassification3",
                "parent": "economicclassification2"
              },
              "economicclassification4": {
                "source": "economicclassification4",
                "title": "economicclassification4",
                "parent": "economicclassification2"
              },
              "econtomicclassification5": {
                "source": "econtomicclassification5",
                "title": "econtomicclassification5",
                "parent": "economicclassification3"
              }
            },
            "classificationType": "economic"
          },
          "date": {
            "dimensionType": "datetime",
            "primaryKey": [
              "financialyear"
            ],
            "attributes": {
              "financialyear": {
                "source": "financialyear",
                "title": "financialyear"
              }
            }
          },
          "functional-classification": {
            "dimensionType": "classification",
            "primaryKey": [
              "functiongroup1",
              "functiongroup2"
            ],
            "attributes": {
              "functiongroup1": {
                "source": "functiongroup1",
                "title": "functiongroup1"
              },
              "functiongroup2": {
                "source": "functiongroup2",
                "title": "functiongroup2",
                "parent": "functiongroup1"
              }
            },
            "classificationType": "functional"
          },
          "activity": {
            "dimensionType": "activity",
            "primaryKey": [
              "prognumber",
              "subprognumber"
            ],
            "attributes": {
              "programme": {
                "source": "programme",
                "title": "programme",
                "labelfor": "prognumber"
              },
              "prognumber": {
                "source": "prognumber",
                "title": "prognumber"
              },
              "subprogramme": {
                "source": "subprogramme",
                "title": "subprogramme",
                "labelfor": "subprognumber"
              },
              "subprognumber": {
                "source": "subprognumber",
                "title": "subprognumber",
                "parent": "prognumber"
              }
            }
          },
          "value-kind": {
            "dimensionType": "other",
            "primaryKey": [
              "amountkind"
            ],
            "attributes": {
              "amountkind": {
                "source": "amountkind",
                "title": "amountkind"
              }
            }
          },
          "geo-source": {
            "dimensionType": "location",
            "primaryKey": [
              "government"
            ],
            "attributes": {
              "government": {
                "source": "government",
                "title": "government"
              }
            }
          }
        },
        "measures": {
          "value": {
            "source": "value",
            "title": "value"
          }
        }
      }
    }
  ],
  "title": "South Africa National Estimates 2015-2019",
  "description": "This dataset includes expenditure data as published in the Estimates of National Expenditure. Departmental expenditure data in previous financial years have been aligned with the budget and programme structures of departments as they are structured in the current Medium Term Expenditure Framework.",
  "govt_level": "National",
  "pub_institutional_name": "National Treasury",
  "continent": "Africa",
  "periodicity": "Yearly",
  "start_date": "2015-01-01",
  "end_date": "2019-12-31",
  "tags": [
    "budget"
  ],
  "createdAt": "2021-10-05T12:42:13Z",
  "updatedAt": "2021-10-06T13:33:51Z",
  "years_included": [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020"
  ],
  "budget_stage": [
    "Enacted"
  ],
  "author_website": "https://vulekamali.gov.za/",
  "author_email": "feedback@vulekamali.gov.za",
  "country": "South Africa",
  "image": "https://avatars.githubusercontent.com/u/45061957?s=280&v=4"
}