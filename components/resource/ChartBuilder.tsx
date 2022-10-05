import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { ErrorMessage, Spinner } from '../_shared';
import { GET_DATASTORE_DATA } from '../../graphql/queries';
import Chart from './Chart';
import DashboardBuilder from './DashboardBuilder';
import useTranslation from 'next-translate/useTranslation';

const ChartBuilder: React.FC<{ resources: any }> = ({ resources }) => {
  const { t } = useTranslation('common');
  const [view, setView] = useState({
    name: 'chart',
    title: 'My title',
    resources,
    specType: 'simple',
    spec: {
      type: '',
      group: '',
      series: [],
    },
  });

  const { loading, error, data } = useQuery(GET_DATASTORE_DATA, {
    variables: { resource_id: resources[0].id },
    // Setting this value to true will make the component rerender when
    // the "networkStatus" changes, so we are able to know if it is fetching
    // more data
    notifyOnNetworkStatusChange: true,
  });
  const [switchTab, setswitchTab] = useState(true);

  if (error) return <ErrorMessage message="Error loading dataset." />;
  if (loading) return <Spinner />;

  const { result } = data.datastore || {
    result: { sample: [], count: 0, fields: [] }, // this is needed when datastore is inactive
  };
  // Remove internally generated fields such as `_id`
  const dimensionFields = result.fields.filter((field) => !(field.id === '_id'));
  let measureFields = result.fields.filter((field) => !(field.id === '_id'));

  const handleChartTypeChange = (event) => {
    const newView = JSON.parse(JSON.stringify(view));
    newView.spec.type = event.target.value;
    setView(newView);
  };

  const handleDimensionChange = (event) => {
    const newView = JSON.parse(JSON.stringify(view));
    newView.spec.group = event.target.value;
    newView.spec.series[0] = '';
    measureFields = measureFields.forEach(field => {
      field.disabled = false;
      if(field.id == event.target.value) {
        field.disabled = true;
      }
    });
    setView(newView);
  };

  const handleMeasureChange = (event) => {
    const newView = JSON.parse(JSON.stringify(view));
    newView.spec.series[0] = event.target.value;
    setView(newView);
  };

  return (
    <>
      <div className="flex  justify-start w-full py-10 pl-0">
        <div className="flex flex-col items-between h-full w-1/2 mb-10">
          <div className="self-start mb-4 font-avenir text-[30px] font-extrabold text-[#4D4D4D]">
            <p>{t('create-viz')}</p>
          </div>
          <div className="flex xl:flex-row flex-col bg-[#F7FAFC] justify-between p-2 rounded-xl xl:w-4/6">
            <button
              className={`flex items-baseline py-4 px-4 ${
                switchTab
                  ? 'bg-button-gradient rounded-2xl text-white'
                  : 'text-[#202020]'
              }  justify-center font-avenir text-[18px] font-medium`}
              onClick={() => setswitchTab(true)}
            >
              <img
                src="/images/pie-icon.svg"
                alt="orgs"
                className="w-4  h-4 mr-2"
              />
              {t('build-chart')}
            </button>
            <button
              className={`flex items-baseline py-4 px-4 ${
                switchTab
                  ? 'text-[#202020]'
                  : 'bg-button-gradient rounded-2xl text-white'
              } justify-center font-avenir text-[18px] font-medium1`}
              onClick={() => setswitchTab(false)}
            >
              <img
                src="/images/app-icon.svg"
                alt="orgs"
                className="w-4  h-4 mr-4 text-white"
              />
              {t('build-dashboard')}
            </button>
          </div>
        </div>
      </div>
      {switchTab ? (
        <div className="grid xl:grid-cols-12 grid-cols-1 pl-0 w-full xl:gap-x-4 gap-y-4 mb-20">
          <div className="xl:col-span-8 rounded-lg">
            <Chart view={view} />
          </div>
          <div className="col-span-4 rounded-lg flex flex-col p-8 bg-[#F7FAFC]">
            <h1 className="font-avenir text-[30px] text-[#343434] font-bold mb-8">
              {t('viz-builder')}
            </h1>
            <div className="flex flex-col mb-4">
              <span className="mb-2 font-avenir font-semibold text-[18px] text-[#424242]">
                {t('chart-type')}
              </span>
              <select
                value={view.spec.type}
                onChange={handleChartTypeChange}
                className="rounded-xl outline-none border-none font-avenir font-medium text-[16px] p-4"
              >
                <option value="" disabled selected>
                  {t('select')}
                </option>
                <option value="bar">{t('bar-chart')}</option>
                <option value="line">{t('line-chart')}</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <span className="mb-2 font-avenir font-semibold text-[18px] text-[#424242]">
                {t('dimension')}
              </span>
              <select
                value={view.spec.group}
                onChange={handleDimensionChange}
                disabled={!view.spec.type}
                className="rounded-xl outline-none border-none font-avenir font-medium text-[16px] p-4"
              >
                <option value="" disabled selected>
                  {t('select')}
                </option>
                {dimensionFields.map((field, index) => (
                  <option key={`dimension-${index}`} value={field.id}>
                    {field.id}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-10">
              <span className="mb-2 font-avenir font-semibold text-[18px] text-[#424242]">
                {t('measure')}
              </span>
              <select
                value={view.spec.series[0] || ''}
                onChange={handleMeasureChange}
                disabled={!view.spec.type || !view.spec.group}
                className="rounded-xl outline-none border-none font-avenir font-medium text-[16px] p-4"
              >
                <option value="" disabled selected>
                  {t('select')}
                </option>
                {measureFields.map((field, index) => (
                  <option key={`measure-${index}`} value={field.id} disabled={field.disabled}>
                    {field.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      ) : (
        <DashboardBuilder resource={resources[0]} />
      )}
    </>
  );
};

export default ChartBuilder;
