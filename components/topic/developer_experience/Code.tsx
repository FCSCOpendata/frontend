import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code: React.FC = (props: any) => {
  const language = props.language;
  console.log(props);
  return (
    <>
      <div className="rounded-lg p-10 bg-[#FEFEFE]">
        <SyntaxHighlighter language={language} style={docco}>
          {props.children}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Code;
