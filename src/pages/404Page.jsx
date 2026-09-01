import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionBgImgJarallaxDivSection from '../components/sections/404/BreadcrumbSectionBgImgJarallaxDivSection.jsx';
import ErrorSectionDivSection from '../components/sections/404/ErrorSectionDivSection.jsx';


export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper"><div id="smooth-content">
        <BreadcrumbSectionBgImgJarallaxDivSection />
        <ErrorSectionDivSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
