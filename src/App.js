import React from 'react';
import styles from './app.module.css';
import Header from './components/header/header'
import Aside from './components/aside/aside'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Aside/>
      </div>
    </div>
  );
}

export default App;
