import useTranslation from 'next-translate/useTranslation';

const FourOhFour = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <main className="fof-main">
        <div className="fof">
          <h1>{t('error-404-t')}</h1>
          <h3 className="text-2xl mb-10">{t('error-404-m')}</h3>
          <a href="/">{t('error-404-l')}</a>
        </div>
      </main>
    </>
  );
};

export default FourOhFour;
