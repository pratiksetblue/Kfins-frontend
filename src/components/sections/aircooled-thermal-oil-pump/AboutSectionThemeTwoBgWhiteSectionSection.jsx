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
<!-- <img src="assets/img/product-details/thermal_oil_pump.png" alt=""> -->
<div class="video-banner">
<video autoplay="" class="banner-video" loop="" muted="" playsinline="">
<source src="/assets/img/video/aircooled_thermal_oil_pump.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
<div class="col-12 col-lg-6">
<div class="divider-mobile"></div>
<!-- About Content -->
<div class="about-content ps-md-4">
<div class="section-heading">
<h2 class="mb-3">Application</h2>
<p class="apli-text">
                                 The up series comprises horizontal single stage
                                 centrifugal pumps, specially designed for the
                                 pumping of thermal fluids at a high
                                 temperature, in an industrial installation,
                                 without needing any type of external
                                 refrigeration. The hydraulic characteristics of
                                 pumps are in accordance with the standard DIN
                                 and all international for pumps. This means
                                 that for each installation the most suitable
                                 pump can be used to give optimum
                                 performance.</p>
</div>
</div>
</div>
</div>
</div>
<!-- <div class="divider"></div> -->
</section>
` }} />;
}
