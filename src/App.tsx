import PageLayout from 'containers/PageLayout/PageLayout';
import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App: FC = (): ReactElement => (
  <BrowserRouter>
    <PageLayout />
  </BrowserRouter>
);

export default App;
