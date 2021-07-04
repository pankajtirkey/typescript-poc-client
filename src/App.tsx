import PageLayout from 'containers/PageLayout/PageLayout';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  );
};

export default App;
