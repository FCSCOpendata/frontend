import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { AR } from '../../../hooks/locale';
import CopyIconButton from '../CopyIconButton';
import useTranslation from 'next-translate/useTranslation';

const Code: React.FC<any> = ({ language, children }) => {
  const { t } = useTranslation('common');
  return (
    <>
      {/*   TODO: the background of the code should be #FEFEFE,
            check  it   later  as  it  doesn't  seem  to  be  a 
            straightforward implementation */}
      <div className="rounded-lg relative">
        <div className={`absolute right-5 top-[1rem] z-50`}>
          <CopyIconButton
            hintBeforeCopy={t('copy-snippet')}
            hintAfterCopy={t('copied')}
            content={children}
            id="dev"
          />
        </div>
        <div dir="ltr">
          <SyntaxHighlighter
            language={language}
            className="syntax"
            style={docco}
            customStyle={{
              backgroundColor: '#FEFEFE',
              borderRadius: '25px',
              padding: '10px',
              paddingLeft: '40px',
              paddingRigth: '20px',
              paddingTop: '35px',
            }}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Code;
