import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Tags } from '../../components/_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import { AR, fixTranslations } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { CloudDownloadIcon } from '@heroicons/react/outline';
import Share from './Share';
import Citation from './Citation';
import Rate from './Rate';

const About: React.FC<{ variables: any }> = ({ variables }) => {
  const { t } = useTranslation('common');
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;

  //  Displays error if no results, as dataset should exist
  if (error || !data?.dataset)
    return <ErrorMessage error={error} message="Error loading dataset" />;
  const { result } = data.dataset;

  result.tags.forEach((el) => fixTranslations(el));

  return (
    <div className="flex flex-col mb-10">
      <div className="flex flex-row mb-4 text-[#4D4D4D] font-avenir font-extrabold text-2xl lg:text-[36px] lg:leading-[56px]">
        <h1 className={`inline ${AR('ml-4', 'mr-4')} `}>
          {result.title}{' '}
          <img
            src="/images/plant-icon.svg"
            alt="Dataset title"
            className="inline w-6"
          />
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-x-8 mb-4 text-[#595959] text-[20px] font-normal">
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img
            src="/images/library-icon.svg"
            alt="organization"
            className="w-5 h-3"
          />
          <Link href={`/@${result.organization.name}`}>
            <a href={`/@${result.organization.name}`}>
              {result.organization.title}
            </a>
          </Link>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img
            src="/images/print-icon.svg"
            alt="date created"
            className="w-5 h-3 "
          />
          <span>
            {t('created') +
              ' ' +
              new Date(result.created).toLocaleDateString('en-GB')}
          </span>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img
            src="/images/clock-icon.svg"
            alt="date updated"
            className="w-5 h-3"
          />
          <span>
            {t('updated') +
              ' ' +
              new Date(result.updated).toLocaleDateString('en-GB')}
          </span>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img
            src="/images/book-icon.svg"
            alt="license"
            className="w-5  h-3"
          />
          <span>{result.license_title}</span>
        </div>
        {result.total_downloads > 0 ? (
          <div
            className="font-avenir flex text-sm py-2 items-baseline"
            title={t('download-count')}
          >
            <CloudDownloadIcon className={`w-5  h-3`} />
            <span>{result.total_downloads}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex justify-start gap-x-4 md:gap-x-8 mb-4 text-[#595959] text-[20px] font-normal items-baseline">
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <span>{t('share')}: </span>
          <Share title={result.title} />
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <span>{t('cited')}: </span>
          <Citation title={result.title} />
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <span>{t('rate')}: </span>
          <Rate title={result.title} id={result.id} />
        </div>
      </div>
      <article className="font-avenir text-[#595959] text-[20px] font-normal  mb-4">
        {result.description?.replace(/<[^>]*>?/gm, '') || ''}
      </article>
      <div className="flex flex-row font-avenir font-normal text-[15px] text-[#074106]">
        <Tags
          tags={result.tags}
          style={`rounded-full bg-[#80E47E] py-2 px-4 ${AR('', 'mr-4')}`}
        />
      </div>
    </div>
  );
};

export default About;
