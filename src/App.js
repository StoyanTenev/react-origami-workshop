import React from 'react';
import styles from './app.module.css';
import Header from './components/header/header'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
      </div>
    </div>
  );
}

export default App;
