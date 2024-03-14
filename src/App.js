import React from 'react';
import { Windmill } from '@windmill/react-ui';
import Layout from './components/common/layout';
import Charts from './pages/charts/Charts';

function App() {
  return (
    <Windmill usePreferences>
     <Layout>
      <Charts />
    </Layout>
    </Windmill>
  );
}

export default App;
