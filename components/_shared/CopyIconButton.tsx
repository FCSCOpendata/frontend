import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

const CopyIconButton: React.FC<{
  content: string;
  hintBeforeCopy: string;
  hintAfterCopy: string;
}> = ({ content, hintBeforeCopy, hintAfterCopy }) => {
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
          // TODO: maybe use cop.svg. Check that.
          src="/images/copy.svg"
          alt="copy"
          className={`transition all ease-in-out duration-400 h-5 w-5 opacity-50 hover:opacity-100 mt-1 ${
            copied ? 'opacity-100' : ''
          }`}
          data-tip
          id="tooltip"
        />
      </button>
      <ReactTooltip
        place="top"
        effect="solid"
        getContent={() => (copied ? hintAfterCopy : hintBeforeCopy)}
      />
    </>
  );
};

export default CopyIconButton;
