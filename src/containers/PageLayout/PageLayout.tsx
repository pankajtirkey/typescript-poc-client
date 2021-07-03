import { Container } from '@material-ui/core';
import Footer from 'components/UI/Footer/Footer';
import Header from 'components/UI/Header/Header';
import { FC } from 'react';

const PageLayout: FC = () => {
  return (
    <Container>
      <Header />
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </Container>
  );
};

export default PageLayout;
