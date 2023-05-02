import React from 'react';
import Options from './options';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '50px'
  },
  column: {
    flex: '1 1 0px'
  }
}


function Home () {
    return (
      <>
        <h1 class="page-header">SHADOW BUDDY</h1>
        <div style={styles.container}>
          <div style={styles.column}>
            <h3>Who are We?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div style={styles.column}>
            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F002%2F792%2F538%2Fnon_2x%2Fdesign-of-build-teamwork-with-strategies-solving-puzzles-for-cooperation-construction-and-heavy-equipment-illustration-can-be-for-websites-posters-banners-mobile-apps-web-social-media-free-vector.jpg&f=1&nofb=1&ipt=4fe21d45361acf42d508c7e45e780e397579b649118546b7f7694d82a28e83b9&ipo=images' style={{height: '200px'}} alt='artwork' />
          </div>
        </div>
        <Options />
      </>
    )
}

export default Home;
