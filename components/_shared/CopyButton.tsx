import React, { useState } from 'react';

const CopyButton: React.FC<{
  content: string;
  children: React.ReactNode;
}> = ({ content, children }) => {
  const icons = {
    share: '/images/share.svg',
    check: '/images/check.svg',
  };

  const [copied, setCopied] = useState(false);

  return (
    <>
      <button
        className={`font-semibold text-md select-none flex items-center rounded-full border-[1px] py-2 px-5 
          transition-all opacity-50 hover:opacity-100 hover:border-[#80E47E] hover:bg-[#80E47E] ${
            copied ? 'opacity-100 border-[#80E47E] bg-[#80E47E]' : ''
          }`}
        onClick={() => {
          navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 5000);
        }}
      >
        <img
          src={!copied ? icons.share : icons.check}
          alt="copy"
          className={`mr-2 h-4 w-4`}
        />
        {/* TODO: improve visuals */}
        {children}
      </button>
    </>
  );
};

export default CopyButton;
