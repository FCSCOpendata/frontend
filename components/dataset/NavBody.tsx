import React from 'react';
import Information from './Information';
import Resources from './Resources';
const NavBody: React.FC<{ variables: any; navtype: string }> = ({
  variables,
  navtype,
}) => {
  if (navtype === 'overview') {
    return <Information variables={variables} />;
  } else if (navtype === 'resources') {
    return <Resources variables={variables} />;
  }
};

export default NavBody;
