import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Feature from '../components/Feature';
import Statistic from '../components/Statistic';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Quickly</title>
        <meta
          name="description"
          content="With Quickly's easy-to-use system, receive early payment nd invoicing tools for any business—from professional services to independent contractors."
          key="desc"
        />
      </Head>
      <Nav />
      <Header />
      <Statistic />
      <Feature />
      <Footer />
    </>
  );
};
export default Home;
