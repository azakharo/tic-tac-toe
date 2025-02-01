import {FC, memo} from 'react';
import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';

import {ROUTE__MAIN} from '@/shared/constants';
import Main from '@/pages/Main';

const Routes: FC = () => {
  return (
    <ReactRoutes>
      <Route path={ROUTE__MAIN} element={<Main />} />
      <Route path="*" element={<Navigate to={ROUTE__MAIN} replace />} />
    </ReactRoutes>
  );
};

export default memo(Routes);
