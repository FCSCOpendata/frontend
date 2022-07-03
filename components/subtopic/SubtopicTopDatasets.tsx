import { useState } from 'react';
import List from '../search/List';

const SubtopicTopDatasets: React.FC = ({ subtopic }) => {
  //  TODO: extract the List in a way that we can
  //  reuse it here properly.   Have to wait  for
  //  merges before doing that.
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <List variables={{ id: 1 }} setQvariables={() => {}}></List>
    </>
  );
};

export default SubtopicTopDatasets;
