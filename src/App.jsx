import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from "./styles/GlobalStyles";
import Event from './Event';
import Intro from './Intro';
import Bar from './Bar';
import Features from './Features';
import Findout from './Findout';
import Footer from './Footer';
import Content from './Content';
import Events from './Events';

const App = () => {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
      <header>
        <Bar />
      </header>
      <Routes>
        <Route path="/" element={
          <>
            <Intro />
            <main>
              <Content></Content>
              <Features />
              <Findout />
              <Footer />
            </main>
          </>
        } />
        <Route path="/event" element={<Event />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

