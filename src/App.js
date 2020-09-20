import React from 'react';
import styles from './app.module.css';
import Header from './components/header/header'
import Aside from './components/aside/aside'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header />
        <Aside />
        <Footer />
      </div>
    </div>
  );
}

export default App;
