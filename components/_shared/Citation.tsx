import { AR } from '../../hooks/locale';
import CopyIconButton from './CopyIconButton';

const Citation: React.FC<{ dtype: string; title: string }> = ({
  dtype,
  title,
}) => {
  return (
    <div className={`divide-y divide-slate-400 rounded-xl w-100 `}>
      <div className="font-avenir text-bold p-2">Cite this {dtype}</div>
      <div className="font-avenir text-sm p-4">
        {title} -{' '}
        <span className={`text-[#1F356C] ${AR('ml-2', 'mr-2')}}`}>
          {typeof window !== 'undefined' ? window.location.href : ''}
        </span>
        <CopyIconButton
          hintBeforeCopy="Copy this snippet"
          hintAfterCopy="Copied"
          id="dataset"
          content={`${title} - ${
            typeof window !== 'undefined' ? window.location.href : ''
          }`}
        />
      </div>
    </div>
  );
};

export default Citation;
