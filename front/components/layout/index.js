import Head from 'next/head';
import {Container} from 'react-bootstrap';
import Nav from '~/components/nav';

const Layout = props => {
  const {activeKey, children} = props;

  return <Container>
    <Head>
      <title>Sukebench</title>
    </Head>

    <main>
      <h1 className='pt-3'>Sukebench</h1>
      <Nav activeKey={activeKey} />
      {children}
    </main>
  </Container>
};

export default Layout;
