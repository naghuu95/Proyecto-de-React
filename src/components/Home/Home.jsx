import React from 'react';
import ItemListContainer from '../ItemListContainer/ItemListcontainer';
import { Banner } from '../Banner/Banner';
import { Banner2 } from '../Banner2/Banner2';


function Home() {
  return (
    <>
      <Banner/>
      <ItemListContainer />
      <Banner2/>
    </>
  );
}

export default Home;