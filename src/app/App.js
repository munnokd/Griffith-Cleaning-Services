"use client";

import React from 'react';
import AboutMe from "./components/AboutMe";
import BottomBar from './components/BottomBar';
import Contacts from "./components/Contacts";
import WhyUs from "./components/WhyUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import SnackbarProvider from 'react-simple-snackbar'

function App() {
  return (
    <div className='main_body'>
      <Navbar />
      <div className='w-[100%]'>
        <Home />
        <AboutMe />
        <WhyUs />
        <Services />
        {/* <Clients/> */}
        <SnackbarProvider>
          <Contacts />
        </SnackbarProvider>
        <div className='border-b-2 my-[10px] ' ></div>
        <BottomBar />
      </div>
    </div>

  );
}

export default App;
