import { GetServerSideProps } from 'next';
import utils from '../utils';
import Head from 'next/head';
import Form from '../components/search/NewForm';
import List from '../components/search/List';
import OpenData101 from '../components/home/main/OpenData101';
import { useEffect, useState } from 'react';
import DeveloperExperience from '../components/_shared/developer_experience/DeveloperExperience';
import ScrollIndicator from '../components/_shared/ScrollIndicator';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

type Props = {
  variables: any;
};

const Search: React.FC<Props> = ({ variables }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { searchPage } = router.query;

  const [destination, setDestination] = useState('');
  const [amount, setAmount] = useState(0);
  const [qvariables, setQvariables] = useState(variables);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sideFilter, setSideFilter] = useState({
    organization: [],
    groups: [],
  });

  useEffect(() => {
    setDestination(document.location.href);
  }, []);

  useEffect(() => {
    if (searchPage) {
      setTimeout(() => {
        document
          .getElementById('datasets')
          .scrollIntoView({ behavior: 'smooth' });
        //  NOTE: this timeout might not be ideal
        //  but without it there must be  another
        //  wait to wait for the datasets loading
      }, 500);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{`${t('datasets')} | ${t('title')}`}</title>
      </Head>
      <ScrollIndicator
        firstImage={{
          url: '/images/scroll_indicator_icon_1.svg',
          alt: 'First stop',
        }}
        lastImage={{
          url: '/images/scroll_indicator_icon_1.svg',
          alt: 'First stop',
        }}
        stops={[{ id: 'search' }, { id: 'dev-exp' }, { id: 'open-data-101' }]}
      />

      <div id="search">
        <Form
          variables={qvariables}
          setQvariables={setQvariables}
          setSideFilter={setSideFilter}
          sideFilter={sideFilter}
          onPageChange={(page) => {
            router.query.searchPage = page + '';
            router.push(router, undefined, { shallow: true });
            setDestination(document.location.href);
            document
              .getElementById('datasets')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <div className="container mx-auto">
          <div className="mb-12 mx-10 md:mx-16 lg:mx-28 mt-12">
            <div className="px-4">
              <h1 className="font-semibold text-xl sm:text-2xl">
                {amount}{' '}
                {amount == 1 ? t('dataset-single') : t('dataset-plural')}
              </h1>

              <List
                variables={qvariables}
                noXMargin={true}
                setQvariables={setQvariables}
                show_amount={false}
                setCount={setAmount}
                onPageChange={(page) => {
                  router.query.searchPage = page + '';
                  router.push(router, undefined, { shallow: true });
                  setDestination(document.location.href);
                  document
                    .getElementById('datasets')
                    .scrollIntoView({ behavior: 'smooth' });
                }}
                page={searchPage ? Number(searchPage) : undefined}
              />
            </div>
          </div>
          <div className="mx-10 md:mx-28" id="dev-exp">
            <DeveloperExperience
              api={
                typeof window !== 'undefined'
                  ? qvariables.q || qvariables.fq
                    ? `${window.location.origin}/api/search?q=${
                        qvariables.q ? encodeURI(qvariables.q) : ''
                      }&fq=${qvariables.fq}`
                    : `${window.location.origin}/api/search?q=dataset_name`
                  : ''
              }
            />
          </div>
        </div>
      </div>

      <div id="open-data-101">
        <OpenData101 />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query || {};

  const variables = utils.convertToCkanSearchQuery(query);

  return {
    props: {
      variables,
    },
  };
};

export default Search;
