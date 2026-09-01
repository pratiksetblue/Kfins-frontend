import React from 'react';

export default function AboutSectionThemeTwoBgWhiteSectionSection() {
  return <div className="section-component section-aboutthemetwobgwhite" dangerouslySetInnerHTML={{ __html: `
<section class="about-section theme-two bg-white">
<!-- <div class="divider"></div> -->
<div class="container-fluid">
<div class="row g-5 align-items-center mobile-reverse">
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2">
<!-- <img src="assets/img/product-details/progressive_cavity_pumps1.jpg" alt=""> -->
<div class="video-banner">
<video autoplay="" class="banner-video" loop="" muted="" playsinline="">
<source src="/assets/img/video/progressive_cavity _pumps.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
<div class="col-12 col-lg-6">
<div class="divider-mobile"></div>
<!-- About Content -->
<div class="about-content ps-md-4">
<div class="section-heading">
<h2 class="mb-3">Working Principle</h2>
<ul>
<li>The pumping elements are stator and rotor.</li>
<li>The stator is made of resilient elastomeric materials and bonded to stator tubes.</li>
<li>A single helical rotor rolls eccentrically in double threaded helix stator of twice the pitch length</li>
<li>The opposing cavities fill and empty simultaneously resulting in a pulsation less flow</li>
<li>The liquid travels axially with relatively low velocity and minimum agitation.</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<!-- <div class="divider"></div> -->
</section>
` }} />;
}
