import React from 'react';
import Hero from '../Hero/Hero';

export default Home => {

  return (
    <React.Fragment>
      <main>
          <Hero header={true}></Hero>
      </main>
    </React.Fragment>
  );
}
