import Link from 'next/link';
import * as timeago from 'timeago.js';
import { useQuery } from '@apollo/react-hooks';
import { ErrorMessage, Tags } from '../../components/_shared';
import { GET_DATASET_QUERY } from '../../graphql/queries';

const About: React.FC<{ variables: any }> = ({ variables }) => {
  const { data, loading, error } = useQuery(GET_DATASET_QUERY, { variables });

  if (loading) return <div>Loading</div>;
  if (error) return <ErrorMessage message="Error loading dataset" />;
  const { result } = data.dataset;

  return (
    <div className="flex flex-col mb-10">
      <div className="flex flex-row mb-4 text-[#4D4D4D] font-[Avenir] font-extrabold text-[36px]">
        <h1 className="inline mr-4">
          {result.title}{' '}
          <img
            src="/images/plant-icon.svg"
            alt="Dataset title"
            className="inline w-6"
          />
        </h1>
      </div>
      <div className="flex justify-start gap-x-8 mb-4 text-[#787878] text-[20px] font-normal">
        <div className="font-[Avenir] flex text-sm py-2 items-baseline">
          <img src="/images/library-icon.svg" alt="orgs" className="w-5 h-3" />
          <Link href={`/@${result.organization.name}`}>
            <a href={`/@${result.organization.name}`}>
              {result.organization.title}
            </a>
          </Link>
        </div>
        <div className="font-[Avenir] flex text-sm py-2 items-baseline">
          <img src="/images/print-icon.svg" alt="orgs" className="w-5 h-3 " />
          <span>{'Created ' + timeago.format(result.created)}</span>
        </div>
        <div className="font-[Avenir] flex text-sm py-2 items-baseline">
          <img src="/images/clock-icon.svg" alt="orgs" className="w-5 h-3" />
          <span>
            {'Updated at' +
              new Date(result.updated).toLocaleDateString('en-GB')}
          </span>
        </div>
        <div className="font-[Avenir] flex text-sm py-2 items-baseline">
          <img src="/images/book-icon.svg" alt="orgs" className="w-5  h-3" />
          <span>{result.license_title}</span>
        </div>
      </div>
      <article className="font-[Avenir] text-[#7C7C7C] text-[20px] font-normal mb-4">
        {result.description?.replace(/<[^>]*>?/gm, '') ||
          'This dataset does not have a description yet.'}
      </article>
      <div className="flex flex-row font-[Avenir] font-normal text-[15px] text-[#086F06]">
        <Tags
          tags={result.tags}
          style={'rounded-full bg-[#80E47E] py-2 px-4 mr-4'}
        />
      </div>
    </div>
  );
};

export default About;
