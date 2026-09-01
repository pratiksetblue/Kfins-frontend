import React from 'react';

export default function AboutSectionThemeTwoBgWhiteSectionSection() {
  return <div className="section-component section-aboutthemetwobgwhite" dangerouslySetInnerHTML={{ __html: `
<section class="about-section theme-two bg-white">
<div class="container-fluid">
<div class="row g-5 align-items-center mobile-reverse">
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2">
<!-- <img src="assets/img/product-details/investment_casting_pump1.jpg" alt=""> -->
<div class="video-banner">
<video autoplay="" class="banner-video" loop="" muted="" playsinline="">
<source src="/assets/img/video/investment_casting_pumps.mp4" type="video/mp4"/>
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
                                       The Investment Casting Pumps are suitable for the chemical and petrochemical industries. Easily pumped media are acids, caustics, sulfate, phosphate, ammonia, nitrogen, nitrates, chlorides, dyes, oils, solvents, sulfides, alcohols, light hydrocarbons, aromatize, condensates, etc. The Investment Casting Pumps are also suitable for pharmaceuticals, papers &amp; pulps, textile, and food processing industries.</p>
</div>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
