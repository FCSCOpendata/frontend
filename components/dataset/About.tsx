import Link from 'next/link';
import * as timeago from 'timeago.js';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Tags } from '../../components/_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';
import { AR, fixTranslations } from '../../hooks/locale';
import useTranslation from 'next-translate/useTranslation';
import { CloudDownloadIcon } from '@heroicons/react/outline';

const About: React.FC<{ variables: any }> = ({ variables }) => {
  const { t } = useTranslation('common');
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  result.tags.forEach((el) => fixTranslations(el));

  return (
    <div className="flex flex-col mb-10">
      <div className="flex flex-row mb-4 text-[#4D4D4D] font-avenir font-extrabold text-[36px]">
        <h1 className={`inline ${AR('ml-4', 'mr-4')}`}>
          {result.title}{' '}
          <img
            src="/images/plant-icon.svg"
            alt="Dataset title"
            className="inline w-6"
          />
        </h1>
      </div>
      <div className="flex justify-start gap-x-8 mb-4 text-[#787878] text-[20px] font-normal">
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img src="/images/library-icon.svg" alt="orgs" className="w-5 h-3" />
          <Link href={`/@${result.organization.name}`}>
            <a href={`/@${result.organization.name}`}>
              {result.organization.title}
            </a>
          </Link>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img src="/images/print-icon.svg" alt="orgs" className="w-5 h-3 " />
          <span>
            {t('created') +
              ' ' +
              new Date(result.created).toLocaleDateString('en-GB')}
          </span>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img src="/images/clock-icon.svg" alt="orgs" className="w-5 h-3" />
          <span>
            {t('updated') +
              ' ' +
              new Date(result.updated).toLocaleDateString('en-GB')}
          </span>
        </div>
        <div className="font-avenir flex text-sm py-2 items-baseline">
          <img src="/images/book-icon.svg" alt="orgs" className="w-5  h-3" />
          <span>{result.license_title}</span>
        </div>
        {result.total_downloads > 1 ? (
          <div className="font-avenir flex text-sm py-2 items-baseline">
            <CloudDownloadIcon className={`w-5  h-3`} />
            <span>{result.total_downloads}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <article className="font-avenir text-[#7C7C7C] text-[20px] font-normal mb-4">
        {result.description?.replace(/<[^>]*>?/gm, '') ||
          'This dataset does not have a description yet.'}
      </article>
      <div className="flex flex-row font-avenir font-normal text-[15px] text-[#086F06]">
        <Tags
          tags={result.tags}
          style={`rounded-full bg-[#80E47E] py-2 px-4 ${AR('', 'mr-4')}`}
        />
      </div>
    </div>
  );
};

export default About;
