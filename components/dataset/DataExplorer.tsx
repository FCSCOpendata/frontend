import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
/**
 * Opens a frictionless resource in data explorer. Data explorer gives you
 * an interface to interact with a resource. That means you can do things like
 * data filtering, sorting, e.t.c
 * @param resources: A array of frictionless datapackage resource
 */
const DataExplorer: React.FC<{ resources: any[]; columnHeaderStyle: any }> = ({
  resources,
  columnHeaderStyle,
}) => {
  const [activeTable, setActiveTable] = useState(0);
  const [previewMode, setPreviewMode] = useState(true);

  const handleTableNameClick = (index) => {
    setActiveTable(index);
  };

  const getDataGridTable = (resource, columnHeaderStyle) => {
    return (
      <DataGrid
        sx={{
          '& .table-column-header-style-class': {
            backgroundColor: '#f5f5f5',
            color: 'black',
            ...columnHeaderStyle,
          },
        }}
        key={resource.name}
        columns={generateColumns(resource)}
        rows={prepareRowsV2(resource)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    );
  };

  const getDataGridSchema = (resource, columnHeaderStyle) => {
    return (
      <DataGrid
        sx={{
          '& .table-column-header-style-class': {
            backgroundColor: '#f5f5f5',
            color: 'black',
            ...columnHeaderStyle,
          },
        }}
        key={resource.name}
        columns={generateSchemaColumns()}
        rows={prepareSchemaRows(resource)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    );
  };

  return (
    <div className="grid grid-cols-12 pl-0 w-full">
      <div className="col-span-3 mr-4 w-1/2">
        <div className="flex-col">
          {resources.slice(0, 4).map((resource, i) => {
            return (
              <button
                key={i}
                className={`flex flex-col rounded-lg w-1/2 relative p-4 ${
                  i === activeTable
                    ? 'border-b-4 rounded-b-xl border-b-[#22B373]'
                    : ''
                } bg-[#F7FAFC] w-full mb-4 text-left`}
                onClick={() => handleTableNameClick(i)}
              >
                {i === activeTable ? (
                  <img
                    src="/images/checked-icon.svg"
                    alt="orgs"
                    className="w-5 h-4 mb-4 absolute -top-2 -right-2"
                  />
                ) : (
                  ''
                )}

                <img
                  src="/images/pdf-icon.svg"
                  alt="orgs"
                  className="w-10 mb-4"
                />

                <p className="p-0 ml-0">{resource.name}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="col-span-9 p-10 bg-[#F7FAFC] rounded-2xl -ml-40">
        <div className="flex flex-row justify-between mb-4">
          <p className="font-bold ml-3 mb-2 font-[Avenir] font-extrabold text-[30px] text-[#4D4D4D]">
            {resources[activeTable].name}
          </p>
          <button className=" rounded-xl bg-button-gradient p-4 text-white flex flex-row items-baseline font-[Avenir] justify-center font-extrabold text-[20px]">
            <img src="/images/click-icon.svg" alt="orgs" className="w-4" />
            <span className="ml-4">Build Your Data</span>
          </button>
        </div>

        <div className="flex font-[Avenir] text-[20px] text-[#808080] font-medium pl-4">
          <div className="flex mr-3 items-baseline">
            <a href={resources[activeTable].path}>
              <img
                src="/images/download-icon.svg"
                alt="orgs"
                className="w-4 mr-2 text-[#787878]"
              />
            </a>
            <span>Download</span>
          </div>
          <div className="mr-3 text-[#C4C4C4] text-1">|</div>
          <div className="flex mr-3">
            <span>{resources[activeTable].sample.length} rows</span>
          </div>
          <div className="mr-3 text-[#C4C4C4] text-1">|</div>
          <div className="flex mr-3">
            <span>{resources[activeTable].schema.fields.length} columns</span>
          </div>
        </div>
        <div className="flex mt-5 mb-4">
          <button
            className={`${
              previewMode &&
              'font-bold bg-[#CBE9FF] px-8 py-2 rounded-2xl text-[#255B9B]'
            } ml-3 mr-5 text-[#202020] font-[Avenir] text-[20px] font-medium text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            Preview
          </button>
          <button
            className={`${
              !previewMode &&
              'font-bold bg-[#CBE9FF] px-8 py-2 rounded-2xl text-[#255B9B]'
            } ml-3 mr-5 text-[#202020] font-[Avenir] text-[20px] font-medium text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            Table Schema
          </button>
        </div>
        {previewMode && (
          <div className="ml-3" style={{ height: '370px' }}>
            {getDataGridTable(resources[activeTable], columnHeaderStyle)}
          </div>
        )}
        {!previewMode && (
          <div className="ml-3" style={{ height: '370px' }}>
            {getDataGridSchema(resources[activeTable], columnHeaderStyle)}
          </div>
        )}
      </div>
    </div>
  );
};

const generateColumns = (resource) => {
  return resource.schema?.fields.map((field) => {
    return {
      field: field.name,
      headerName: field.name,
      width: 150,
      description: field.description,
      headerClassName: 'table-column-header-style-class',
    };
  });
};

// const prepareRows = (resource) => {
//   return resource.sample.map((row, i) => {
//     row['id'] = i;
//     return row;
//   });
// };

const prepareRowsV2 = (resource) => {
  return resource.sample.map((row, i) => {
    const rows = {
      id: i,
    };
    resource.schema?.fields.forEach((field, j) => {
      rows[field.name] = row[j];
    });
    return rows;
  });
};

const generateSchemaColumns = () => {
  return [
    {
      field: 'name',
      headerName: 'Field',
      flex: 0.5,
      description: 'Field name',
      headerClassName: 'table-column-header-style-class',
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      description: 'Field type',
      headerClassName: 'table-column-header-style-class',
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 1,
      description: 'Field description',
      headerClassName: 'table-column-header-style-class',
    },
  ];
};

const prepareSchemaRows = (resource) => {
  return resource.schema?.fields.map((field, i) => {
    field['id'] = i;
    return field;
  });
};

// const formatResourceSize = (bytes) => {
//   if (bytes < 1024) {
//     return bytes + ' b';
//   } else if (bytes < 1048576) {
//     return (bytes / 1024).toFixed(2) + ' kb';
//   } else if (bytes < 1073741824) {
//     return (bytes / 1048576).toFixed(2) + ' mb';
//   } else {
//     return bytes;
//   }
// };

export default DataExplorer;
