/* eslint-disable jsx-a11y/anchor-is-valid */
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import { GET_DATASTORE_DATA } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const router = useRouter();

  const [activeTable, setActiveTable] = useState(0);
  const [previewMode, setPreviewMode] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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

  return (
    <div className="grid xl:grid-cols-12 grid-cols-1 pl-0 w-full">
      {/* Preview: show Data Explorer if tabular data + datastore active */}
      <div className="col-span-12 p-10 bg-[#F7FAFC] rounded-2xl">
        <div className="flex xl:flex-row flex-col justify-between mb-4">
          <div className="flex font-[Avenir] text-[20px] text-[#808080] font-normal pl-4 w-2/3 xl:flex-row flex-col">
            <div className="flex xl:mr-3 items-baseline mb-2">
              <button
                onClick={() => download(resources[activeTable].path)}
                className="cursor-pointer"
              >
                <CloudDownloadIcon className="inline w-5 mr-2" />
                Download
              </button>
            </div>
            <div className="mr-3 text-[#C4C4C4] text-1 hidden xl:inline">
              |
            </div>
            <div className="flex xl:mr-3 mb-2">
              <span>{resources[activeTable].count || 'N/A'} rows</span>
            </div>
            <div className="mr-3 text-[#C4C4C4] text-1 hidden xl:inline">
              |
            </div>
            <div className="flex mr-3">
              <span>
                {resources[activeTable].schema?.fields?.length || 'N/A'}{' '}
                columns
              </span>
            </div>
          </div>
          <div className="grid justify-items-end align-middle">
            <button
              className="rounded-xl bg-button-gradient p-3 text-white font-[Avenir] font-medium text-[20px] h-fit"
              onClick={() => download(resources[activeTable].path)}
            >
              <CloudDownloadIcon className="w-6 mr-2 pb-1 inline" />
              <span>Download</span>
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-5 mb-4">
          <button
            className={`${
              previewMode &&
              'font-bold bg-[#CBE9FF] xl:px-8 xl:py-2 px-2 rounded-2xl text-[#255B9B]'
            } ml-3 xl:mr-8 mr-2 text-[#255B9B] font-[Avenir] xl:text-[20px] xl:font-medium xl:text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            Hide / Show Column
          </button>
          <img
            src="/images/calender-icon.svg"
            alt="orgs"
            className="w-10  h-10 xl:mr-4"
          />
          <div className="sm:mr-2">
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              className="rounded-lg border-1 font-montserrat text-[#5C5C5C] focus:outline-none border-none"
            />
          </div>
          <div className="xl:p-4 pt-4">
            <img
              src="/images/rightpointer-icon.svg"
              alt="orgs"
              className="w-8  h-4 "
            />
          </div>
          <img
            src="/images/calender-icon.svg"
            alt="orgs"
            className="w-10  h-10 xl:mr-4"
          />
          <div className="">
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              dateFormat="dd-MM-yyyy"
              className="rounded-lg border-1 font-montserrat text-[#5C5C5C] focus:outline-none border-none"
            />
          </div>
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
