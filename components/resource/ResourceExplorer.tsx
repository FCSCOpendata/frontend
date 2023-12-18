/* eslint-disable jsx-a11y/anchor-is-valid */
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  CloudDownloadIcon,
  CalendarIcon,
  ArrowSmRightIcon,
} from '@heroicons/react/outline';
import { GET_DATASTORE_DATA } from '../../graphql/queries';
import { ErrorMessage, Spinner } from '../_shared';
import useTranslation from 'next-translate/useTranslation';

/**
 * Opens a frictionless resource in data explorer. Data explorer gives you
 * an interface to interact with a resource. That means you can do things like
 * data filtering, sorting, e.t.c
 * @param dataset: An object of frictionless datapackage
 */
const DataExplorer: React.FC<{ dataset: any; columnHeaderStyle: any }> = ({
  dataset,
  columnHeaderStyle,
}) => {
  const { t } = useTranslation('common');
  const { resources } = dataset;
  const [activeTable, setActiveTable] = useState(0);
  const [previewMode, setPreviewMode] = useState(true);

  const { data, loading, error } = useQuery(GET_DATASTORE_DATA, {
    variables: { resource_id: resources[activeTable].id },
  });
  if (loading) return <Spinner />;
  if (error)
    return <ErrorMessage error={error} message="Error loading data" />;

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
      <div className="col-span-12 p-5 md:p-10 bg-[#F7FAFC] rounded-2xl">
        <div className="flex xl:flex-row flex-col justify-between mb-4">
          <div className="flex font-avenir text-[20px] text-[#545454] font-normal pl-4 w-2/3 xl:flex-row flex-col">
            <div className="flex xl:mr-3 items-baseline mb-2">
              <button
                onClick={() => download(resources[activeTable].path)}
                className="cursor-pointer"
              >
                <CloudDownloadIcon className="inline w-5 mr-2" />
                {t('download')}
              </button>
            </div>
            <div className="mr-3 text-[#545454] text-1 hidden xl:inline">
              |
            </div>
            <div className="flex xl:mr-3 mb-2">
              <span>
                {resources[activeTable].count || 'N/A'} {t('rows')}
              </span>
            </div>
            <div className="mr-3 text-[#545454] text-1 hidden xl:inline">
              |
            </div>
            <div className="flex mr-3">
              <span>
                {resources[activeTable].schema?.fields?.length || 'N/A'}{' '}
                {t('columns')}
              </span>
            </div>
          </div>
          <div className="grid justify-items-end align-middle">
            <button
              className="rounded-xl bg-button-gradient p-3 text-white font-avenir font-medium text-[20px] h-fit"
              onClick={() => download(resources[activeTable].path)}
            >
              <CloudDownloadIcon className="w-6 mr-2 pb-1 inline" />
              <span>{t('download')}</span>
            </button>
          </div>
        </div>

        <div className="flex flex-row mt-5 mb-4 h-[46px]">
          <button
            className={`${
              previewMode &&
              'font-bold bg-[#CBE9FF] xl:px-8 xl:py-2 px-2 rounded-2xl text-[#255B9B]'
            } ml-3 xl:mr-8 mr-2 text-[#255B9B] font-avenir xl:text-[20px] xl:font-medium xl:text-center focus:outline-none`}
            onClick={() => setPreviewMode(!previewMode)}
          >
            {t('hide-show')}
          </button>
          <CalendarIcon className="w-6 xl:mr-4" />
          <div className="mt-3" title="This resource's start period.">
            {new Date(dataset.start).toDateString()}
          </div>
          <ArrowSmRightIcon className="w-4 mx-4" />
          <div className="mt-3" title="This resource's end period.">
            {new Date(dataset.end).toDateString()}
          </div>
        </div>
        {previewMode && (
          <div className="ml-3" style={{ height: '370px' }} dir="ltr">
            {getDataGridTable(resources[activeTable], columnHeaderStyle)}
          </div>
        )}
        {!previewMode && (
          <div className="ml-3" style={{ height: '370px' }} dir="ltr">
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
