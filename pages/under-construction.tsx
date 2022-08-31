import { useRouter } from 'next/router';

const UnderConstruction = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="object">
        <div className="object-rope"></div>
        <div className="object-shape">
          Coming <span className="soon">Soon</span>
        </div>
      </div>
      <div className="text-center font-avenir pt-60">
        <h1 className="text-4xl">This page is under construction</h1>
        <p className="text-lg opacity-50">
          Switch to English for more content,{' '}
          <button
            onClick={() => {
              router.push(router.asPath, null, {
                locale: 'en',
              });
            }}
          >
            click here
          </button>
          !
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
