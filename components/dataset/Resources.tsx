import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage } from '../_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import axios from 'axios';
import { useState } from 'react';

const Resources: React.FC<{ variables: any }> = ({ variables }) => {
  const { loading, error, data } = useQuery(GET_DATASET_QUERY, {
    variables,
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });
  const [downloadInfo, setDownloadInfo] = useState([]);
  const [activateSelect, setActivateSelect] = useState(false);

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <div>Loading</div>;

  const { result } = data.dataset;

  const downloadClick = (url, index) => {
    axios
      .get(url, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;

          const temp = {
            progress: Math.floor((loaded * 100) / total),
            loaded,
            total,
            completed: false,
          };
          setDownloadInfo((prev) => {
            const newData = [...prev];
            newData[index] = { ...newData[index], ...temp };
            return newData;
          });
        },
      })
      .then((res) => {
        const blobUrl = window.URL.createObjectURL(
          new Blob([res.data], {
            type: res.headers['content-type'],
          })
        );
        const filename = url.split('/').slice(-1)[0];
        const a = document.createElement('a');
        a.href = blobUrl;
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click();

        setDownloadInfo((progressInfo) => {
          const newData = [...progressInfo];
          newData[index] = { ...newData[index], completed: true };
          return newData;
        });

        setTimeout(() => {
          setDownloadInfo((progressInfo) => {
            const newData = [...progressInfo];
            newData[index] = undefined;
            return newData;
          });
        }, 4000);
      });
  };

  const formatBytes = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  const fileIcons = {
    html: '/images/resources/html.svg',
    pdf: '/images/resources/pdf.svg',
    xls: '/images/resources/xls.svg',
    xlsx: '/images/resources/xls.svg',
    api: '/images/resources/json.svg',
    zip: '/images/resources/zip.svg',
  };

  const checkAllBox = () => {
    const boxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 1; i < boxes.length; i++) {
      const b: HTMLInputElement = boxes[i] as HTMLInputElement;
      b.checked = !b.checked;
    }
  };

  return (
    <div className="flex flex-col p-8 bg-gray-50 rounded-xl mt-10">
      <div className="relative flex flex-1">
        {activateSelect && (
          <div className="flex w-1/2">
            <input
              type="checkbox"
              id="select-all"
              name="select-all"
              value="select-all"
              className="rounded focus:ring-0 ring-offset-0"
              onClick={() => {
                checkAllBox();
              }}
            />
            <label
              htmlFor="select-all-checkbox"
              className="text-xs font-medium text-gray-500 pl-2"
            >
              Select all
            </label>
          </div>
        )}
        <div className="flex absolute top-0 right-0">
          <div className="flex mr-4">
            <img src="/images/resources/select.svg" alt="select-icon" />
            <button
              className="text-xs font-medium text-gray-500 appearance-none focus:outline-none"
              onClick={() => setActivateSelect(!activateSelect)}
            >
              &nbsp;Select
            </button>
          </div>
          <div className="flex">
            <img src="/images/resources/download.svg" alt="download-icon" />
            <button className="text-xs font-medium text-gray-500 appearance-none focus:outline-none">
              &nbsp;Download all
            </button>
          </div>
        </div>
      </div>
      <hr className="inline-block align-middle mt-6 h-0.5 border bg-gray-100 rounded" />
      <ul className="mb-10 overflow-y-auto max-h-72">
        {result.resources.map((resource, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-center flex-wrap sm:flex-nowrap p-2 mt-8"
          >
            {activateSelect && (
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                name={resource.name}
                value={resource.name}
                className="rounded focus:ring-0 ring-offset-0"
              />
            )}
            <img
              src={
                fileIcons[String(resource.format).toLowerCase()] ||
                '/images/resources/unknown.svg'
              }
              alt="resource-icon"
            />
            <div className="ml-2 flex flex-col flex-1">
              <h1 className="font-semibold capitalize">
                {resource.name} (
                {resource.size ? `${resource.size} KB` : 'Size N/A'})
              </h1>
              <p className="text-sm font-medium text-gray-500 text-left line-clamp-1">
                {resource.description ||
                  'This resource does not have a description'}
              </p>
              <p className="text-xs font-semibold text-gray-500 mt-1">
                Last updated:{' '}
                {new Intl.DateTimeFormat('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }).format(
                  new Date(
                    resource.last_modified
                      ? resource.last_modified
                      : resource.created
                  )
                )}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex ml-6 space-x-3.5">
                <button className="flex sm:h-1/3 sm:w-1/2 items-center justify-center bg-gray-50 border rounded-xl border-gray-900 px-5">
                  <span className="text-xs font-bold text-gray-900">
                    Preview
                  </span>
                </button>
                <button
                  className="flex sm:h-1/3 sm:w-1/2 items-center justify-center bg-blue-900 border rounded-xl border-gray-900 px-5"
                  onClick={() => downloadClick(resource.path, index)}
                >
                  <span className="text-xs font-bold text-white">
                    Download
                  </span>
                </button>
              </div>
              {downloadInfo[index] && (
                <div className="w-full bg-gray-200 rounded-xl h-4 dark:bg-gray-700 text-center text-white text-sm mt-2">
                  <div
                    className="bg-blue-600 h-4 rounded-full text-center text-xs"
                    style={{ width: `${downloadInfo[index].progress}%` }}
                  >
                    {`${downloadInfo[index].progress}% (${formatBytes(
                      downloadInfo[index].loaded
                    )} / ${formatBytes(downloadInfo[index].total)})`}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
