import CopyIconButton from './CopyIconButton';

const Citation: React.FC<{ dtype: string; title: string }> = ({
  dtype,
  title,
}) => {
  return (
    <div
      className={`divide-y divide-slate-400 rounded-xl  w-100 ${
        dtype === 'Dataset' ? 'xl:ml-72' : ''
      }`}
    >
      <div className="font-[Avenir] text-bold p-2">Cite this {dtype}</div>
      <div className="font-[Avenir] text-sm p-4">
        {title} -{' '}
        <span className="text-[#1F356C] mr-2">
          {typeof window !== 'undefined' ? window.location.href : ''}
        </span>
        <CopyIconButton
          hintBeforeCopy="Copy this snippet"
          hintAfterCopy="Copied"
          content={`${title} - ${
            typeof window !== 'undefined' ? window.location.href : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Citation;
