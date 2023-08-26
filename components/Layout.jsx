import { useGlobalData } from '../context/GlobalDataContext';
import { useEffect, useRef, useState } from 'react';

import Header from './Header';

const Layout = ({ children, globalProps }) => {
  const { changeGlobalData } = useGlobalData(globalProps);

  useEffect(() => {
    changeGlobalData(globalProps);
  }, []);

  return (
    <div>
      <Header data={globalProps} />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
