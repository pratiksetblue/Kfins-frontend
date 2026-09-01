import React from 'react';
import Header from '../components/common/Header'; 
import Footer from '../components/common/Footer';
import GlobalActions from '../components/common/GlobalActions';
import BreadcrumbSectionDivSection from '../components/sections/blog---Copy/BreadcrumbSectionDivSection.jsx';
import BlogSectionDivSection from '../components/sections/blog---Copy/BlogSectionDivSection.jsx';

export default function BlogCopyPage() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className='bg-color'><div id="smooth-content">
        <BreadcrumbSectionDivSection />
        <BlogSectionDivSection />
        <Footer />
      </div></div>
      <GlobalActions />
    </>
  );
}
