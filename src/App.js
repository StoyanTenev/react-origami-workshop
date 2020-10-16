import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import styles from './app.module.css';
import Authenticate from './Authenticate';
import Navigation from './Navigation';

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Authenticate>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </Authenticate>
      </div>
    </div>
  );
}

export default App;
