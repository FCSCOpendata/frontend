import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import CopyIconButton from '../CopyIconButton';

const Code: React.FC<any> = ({ language, children }) => {
  return (
    <>
      {/*   TODO: the background of the code should be #FEFEFE,
            check  it   later  as  it  doesn't  seem  to  be  a 
            straightforward implementation */}
      <div className="rounded-lg relative">
        <div className="absolute right-5 top-[1rem] z-50">
          <CopyIconButton
            hintBeforeCopy="Copy this snippet"
            hintAfterCopy="Copied"
            content={children}
            id="dev"
          />
        </div>
        <SyntaxHighlighter
          language={language}
          style={docco}
          customStyle={{
            backgroundColor: '#FEFEFE',
            borderRadius: '25px',
            padding: '10px',
            paddingLeft: '40px',
            paddingRigth: '20px',
          }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
