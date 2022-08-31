/* eslint-disable jsx-a11y/anchor-is-valid */
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { CloudDownloadIcon, ExternalLinkIcon } from '@heroicons/react/outline';
import { GET_DATASTORE_DATA } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import { AR, fixTranslations } from '../../hooks/locale';
import Link from 'next/link';
/**
 * Opens a frictionless resource in data explorer. Data explorer gives you
 * an interface to interact with a resource. That means you can do things like
 * data filtering, sorting, e.t.c
 * @param resources: A array of frictionless datapackage resource
 */
const DataExplorer: React.FC<{
  resources: any[];
  columnHeaderStyle: any;
  enableSelect: boolean;
  setSelectData: any;
}> = ({ resources, columnHeaderStyle, enableSelect, setSelectData }) => {
  const router = useRouter();

  const [activeTable, setActiveTable] = useState(0);
  const [previewMode, setPreviewMode] = useState(true);

  const { data, loading, error } = useQuery(GET_DATASTORE_DATA, {
    variables: { resource_id: resources[activeTable].id },
  });
  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message="Error loading datastore" />;
  const { result } = data.datastore || {
    result: { sample: [], count: 0, fields: [] }, // this is needed when datastore is inactive
  };

  const convertToFrictionless = (fields) => {
    return fields.map((field) => {
      return {
        name: field.id,
        type: field.type,
      };
    });
  };

  Object.assign(resources[activeTable], {
    sample: result.sample.map(({ _id, ...rest }) => rest),
    count: result.count,
    schema: {
      fields: convertToFrictionless(
        result.fields.filter((item) => item.id !== '_id')
      ),
    },
  });

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

  const download = (resourcePath) => {
    fetch(resourcePath)
      .then((res) => res.blob())
      .then((blob) => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = resourcePath.split('/').pop();
        a.click();
      })
      .catch(console.error);
  };

  const checkFunc = (id, resourcePath, e) => {
    if (e.target.checked) {
      setSelectData((prev) => {
        const newData = { ...prev };
        newData[id] = resourcePath;
        return { ...newData };
      });
    } else {
      setSelectData((prev) => {
        const newData = { ...prev };
        delete newData[id];
        return newData;
      });
    }
  };

  resources.forEach(el => fixTranslations(el))

  return (
    <div className="grid xl:grid-cols-12 pl-0 w-full grid-cols-1 sm:gap-y-1">
      <div
        className={`xl:col-span-3  w-1/2 h-[718px] overflow-y-auto pt-4 ${AR(
          'pl-2 ml-4',
          'pr-2 mr-4'
        )} overflow-x-hidden`}
      >
        <div className="flex-col">
          {resources.map((resource, i) => {
            return (
              <>
                {enableSelect && (
                  <input
                    type="checkbox"
                    key={`${i}-e`}
                    className="relative w-5 h-4 -mb-4 z-20 focus:outline-none"
                    onChange={(e) => checkFunc(i, resources[i].path, e)}
                  />
                )}
                <button
                  key={i}
                  className={`flex flex-col z-10 rounded-lg w-1/2 relative p-4 ${
                    i === activeTable
                      ? 'border-b-4 rounded-b-xl border-b-[#22B373]'
                      : ''
                  } bg-[#F7FAFC] w-full mb-4 ${AR('text-right', 'text-left')}`}
                  onClick={() => handleTableNameClick(i)}
                >
                  {i === activeTable ? (
                    <img
                      src="/images/checked-icon.svg"
                      alt="orgs"
                      className={`w-5 h-4 mb-4 absolute -top-2 ${AR(
                        'right-2',
                        '-right-2'
                      )}`}
                    />
                  ) : (
                    ''
                  )}

                  <img
                    src={
                      resource.format
                        ? `/images/${resource.format.toLowerCase()}-icon.svg`
                        : '/images/resources/unknown.svg'
                    }
                    alt="orgs"
                    className="w-10 mb-4"
                  />

                  <p className={`p-0 ${AR('mr-0', 'ml-0')}`}>
                    {resource.title || resource.name}
                  </p>
                </button>
              </>
            );
          })}
        </div>
      </div>
      {/* Preview: show Data Explorer if tabular data + datastore active */}
      <div
        className={`xl:col-span-9 p-10 bg-[#F7FAFC] rounded-2xl ${AR(
          'xl:-mr-40',
          'xl:-ml-40'
        )}`}
      >
        <div className="flex xl:flex-row flex-col justify-between mb-4">
          <div className="w-2/3">
            <p className="font-medium mb-2 font-avenir text-[30px] text-[#4D4D4D]">
              {resources[activeTable].title || resources[activeTable].name}
            </p>
          </div>
          <div className="grid xl:justify-items-end align-middle justify-items-start ">
            <Link href={`${router.asPath}/r/${resources[activeTable].name}`}>
              <a
                href={`${router.asPath}/r/${resources[activeTable].name}`}
                className="rounded-xl bg-button-gradient p-3 text-white font-avenir font-medium text-[20px] h-fit"
              >
                <ExternalLinkIcon
                  className={`w-6 pb-1 inline ${AR('ml-2', 'mr-2')}`}
                />
                <span>Build Your Data</span>
              </a>
            </Link>
          </div>
        </div>

        <div
          className={`flex font-avenir text-[20px] text-[#808080] font-normal ${AR(
            'pr-4',
            'pl-4'
          )}`}
        >
          <div className={`flex items-baseline ${AR('ml-3', 'mr-3')}`}>
            <button
              onClick={() => download(resources[activeTable].path)}
              className="cursor-pointer"
            >
              <CloudDownloadIcon
                className={`inline w-5 ${AR('ml-2', 'mr-2')}`}
              />
              Download
            </button>
          </div>
          <div className={`${AR('ml-3', 'mr-3')} text-[#C4C4C4] text-1`}>
            |
          </div>
          <div className={`flex ${AR('ml-3', 'mr-3')}`}>
            <span>{resources[activeTable].count || 'N/A'} rows</span>
          </div>
          <div className={`${AR('ml-3', 'mr-3')} text-[#C4C4C4] text-1`}>
            |
          </div>
          <div className={`flex ${AR('ml-3', 'mr-3')}`}>
            <span>
              {resources[activeTable].schema?.fields?.length || 'N/A'} columns
            </span>
          </div>
        </div>
        <div className="flex mt-5 mb-4">
          <button
            className={`${
              previewMode &&
              'font-bold bg-[#CBE9FF] px-8 py-2 rounded-2xl text-[#255B9B]'
            } ${AR(
              'mr-3 ml-5',
              'ml-3 mr-5'
            )} text-[#202020] font-avenir text-[20px] font-medium text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            Preview
          </button>
          <button
            className={`${
              !previewMode &&
              'font-bold bg-[#CBE9FF] px-8 py-2 rounded-2xl text-[#255B9B]'
            } ${AR(
              'mr-3 ml-5',
              'ml-3 mr-5'
            )} text-[#202020] font-avenir text-[20px] font-medium text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            Table Schema
          </button>
        </div>
        {previewMode && (
          <div className={`${AR('mr-3', 'ml-3')}`} style={{ height: '370px' }}>
            {getDataGridTable(resources[activeTable], columnHeaderStyle)}
          </div>
        )}
        {!previewMode && (
          <div className={`${AR('mr-3', 'ml-3')}`} style={{ height: '370px' }}>
            {getDataGridSchema(resources[activeTable], columnHeaderStyle)}
          </div>
        )}
      </div>
    </div>
  );
};

const generateColumns = (resource) => {
  return resource.schema?.fields?.map((field) => {
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
  return resource.sample?.map((row, i) => {
    const rows = Object.assign(row, {
      id: i,
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
