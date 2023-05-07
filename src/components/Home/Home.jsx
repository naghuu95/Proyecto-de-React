import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListcontainer';
import { Banner } from '../Banner/Banner';

function Home() {
  return (
    <>
      <Banner/>
      <ItemListContainer />
    </>
  );
}

export default Home;