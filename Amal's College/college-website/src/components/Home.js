import React from 'react';
import { useGlobalSearch } from '../hooks/useGlobalSearch';
import SecondaryNavbar from './SecondaryNavbar';
import HeroSection from './HeroSection';
import FlashNews from './FlashNews';
import SVGBackground from './SVGBackground';
import Carousel from './Carousel';
import About from './About';
import Courses from './Courses';
import StudentLife from './StudentLife';
import PrincipalNote from './PrincipalNote';
import Alumni from './Alumni';

const Home = () => {
  // Enable global search functionality
  useGlobalSearch();
  return (
    <div className="home-page">
      <SecondaryNavbar />
      <HeroSection />
      <FlashNews />
      <SVGBackground />
      <Carousel />
      <About />
      <Courses />
      <StudentLife />
      <PrincipalNote />
      <Alumni />
    </div>
  );
};

export default Home;
