import { Container } from '@material-ui/core';
import PageLayout from 'containers/PageLayout/PageLayout';
import { FC } from 'react';

const App: FC = () => {
  return (
    <Container maxWidth='md'>
      <PageLayout />
    </Container>
  );
};

export default App;
