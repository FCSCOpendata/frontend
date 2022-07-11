import { useState } from 'react';
import Tabs from './Tabs';
import Toggle from './Toggle';

const DeveloperExperience: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Toggle onToggle={() => setExpanded(!expanded)} expanded={expanded} />
      <div
        className={`transition-all overflow-hidden ${
          expanded ? 'max-h-max' : 'max-h-0'
        }`}
      >
        <Tabs />
      </div>
    </>
  );
};
export default DeveloperExperience;
