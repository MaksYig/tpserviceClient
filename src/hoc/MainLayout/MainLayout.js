import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import makeStyles from './styles'

export default function MainLayout(props) {
  return (
    <div className='MainLayout'>
      <div className='SiteContent'>
        <Header />
        <main className='Main'>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
}
