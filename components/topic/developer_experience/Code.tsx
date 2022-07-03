import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Code: React.FC = (props: any) => {
  const language = props.language;
  return (
    <>
      {/*   TODO: the background of the code should be #FEFEFE,
            check  it   later  as  it  doesn't  seem  to  be  a 
            straightforward implementation */}
      <div className="rounded-lg p-10">
        <SyntaxHighlighter language={language} style={docco}>
          {props.children}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
