import React from 'react';

export default function SectionSection() {
  return <div className="section-component section-" dangerouslySetInnerHTML={{ __html: `
<section>
<!-- ====== counter ====== -->
<div class="container">
<div class="row">
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">30</span>+</h2>
<h3 class="mb-0 h5">Years of Experience</h3>
</div>
</div>
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">100K</span>+</h2>
<h3 class="mb-0 h5">Products Manufactured</h3>
</div>
</div>
<div class="col-6 col-sm-6 col-lg-3">
<div class="cta-card-two">
<h2 class="mb-0"><span class="counter">10K</span>+</h2>
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
