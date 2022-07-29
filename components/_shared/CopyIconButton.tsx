import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const CopyIconButton: React.FC<{
  content: string;
  hintBeforeCopy: string;
  hintAfterCopy: string;
  id: string;
}> = ({ content, hintBeforeCopy, hintAfterCopy, id }) => {
  const [copied, setCopied] = useState(false);

  const disableCopiedState = () => {
    setTimeout(() => {
      setCopied(false);
      ReactTooltip.hide();
    }, 5000);
  };

  return (
    <>
      <button
        className="select-none"
        onClick={() => {
          navigator.clipboard.writeText(content);
          setCopied(true);
          disableCopiedState();

          //  This is a hack to make the tooltip refresh
          //  the text with the proper center alignment
          ReactTooltip.hide();
          ReactTooltip.show(document.getElementById('tooltip'));
        }}
      >
        <img
          src="/images/copy.svg"
          alt="copy"
          className={`transition all ease-in-out duration-400 h-7 w-7 opacity-50 hover:opacity-100 mt-1 ${
            copied ? 'opacity-100' : ''
          }`}
          data-tip
          data-for={id}
          id="tooltip"
        />
      </button>
      <ReactTooltip
        place="top"
        effect="solid"
        id={id}
        getContent={() => (copied ? hintAfterCopy : hintBeforeCopy)}
        className="bg-black text-white"
      />
    </>
  );
};

export default CopyIconButton;
