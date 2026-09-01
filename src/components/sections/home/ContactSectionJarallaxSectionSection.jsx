import React from 'react';

export default function ContactSectionJarallaxSectionSection() {
  return <div className="section-component section-contactjarallax" dangerouslySetInnerHTML={{ __html: `
<section class="contact-section jarallax" style="background-image: url('/assets/img/about-banner.jpg');">
<!-- Divider -->
<div class="counter-bg-space"></div>
<!-- ====== counter ====== -->
<div class="container">
<div class="row">
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">28</span>+</h2>
<h3 class="mb-0 h5">Years of Experience</h3>
</div>
</div>
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">100</span>+</h2>
<h3 class="mb-0 h5">Team Members</h3>
</div>
</div>
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">500</span>+</h2>
<h3 class="mb-0 h5">Worldwide Client</h3>
</div>
</div>
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">500</span>+</h2>
<h3 class="mb-0 h5">Distributor Network</h3>
</div>
</div>
</div>
</div>
</section>
` }} />;
}
