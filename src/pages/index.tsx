import { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import Header from '../components/Header';

export default function Home() {

  async function getData() {
    const response = await axios.get('/api/finance');
    console.log(response);
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Next CurrencyMoney</title>
      </Head>
      <Header />
    </>
  )
}
