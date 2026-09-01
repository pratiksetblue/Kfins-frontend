import React from 'react';

export default function AboutSectionThemeTwoSectionSection() {
  return <div className="section-component section-aboutthemetwo" dangerouslySetInnerHTML={{ __html: `
<section class="about-section theme-two">
<div class="container">
<div class="row g-5 align-items-center">
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2" style="translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);">
<img alt="" src="/assets/img/product-details/thermal_oil_pump1.jpg"/>
</div>
</div>
<div class="col-12 col-lg-6">
<!-- About Content -->
<div class="about-content ps-md-4">
<div class="section-heading">
<h2 class="mb-3">Built for Precision &amp; Performance</h2>
<p class="font-size-20">
                                       Our state-of-the-art manufacturing infrastructure is equipped with advanced machinery, precision testing equipment, and modern production facilities to ensure superior quality and consistent performance. Every stage of manufacturing, from raw material processing to final inspection, is carried out under strict quality control standards by experienced professionals. With a well-organized production setup and a commitment to continuous innovation, we efficiently meet the diverse requirements of industries across India and global markets while delivering reliable, high-performance pumping solutions.
                                </p></div>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
