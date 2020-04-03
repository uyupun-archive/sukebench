import Head from 'next/head';
import {Container} from 'react-bootstrap';
import BaseNav from '../baseNav';

const Layout = props => {
  const {activeKey, children} = props;

  return <Container>
    <Head>
      <title>Sukebench</title>
    </Head>

    <main>
      <h1 className='pt-3'>Sukebench</h1>
      <BaseNav activeKey={activeKey} />
      {children}
    </main>
  </Container>
};

export default Layout;
