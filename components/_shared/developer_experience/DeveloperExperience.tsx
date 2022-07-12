import { useState } from 'react';
import Tabs from './Tabs';
import Toggle from './Toggle';

const DeveloperExperience: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Toggle onToggle={() => setExpanded(!expanded)} expanded={expanded} />
      <div
        className={`transition-all ease-in-out duration-300 overflow-hidden ${
          expanded ? 'max-h-[10000px] opacity-1' : 'max-h-0 opacity-0'
        }`}
      >
        <Tabs />
      </div>
    </>
  );
};
export default DeveloperExperience;
