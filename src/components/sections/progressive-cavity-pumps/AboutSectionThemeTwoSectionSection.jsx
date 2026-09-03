import React from 'react';

export default function AboutSectionThemeTwoSectionSection() {
  return <div className="section-component section-aboutthemetwo" dangerouslySetInnerHTML={{ __html: `
<section class="about-section theme-two technical-details-w">
<div class="divider-sm"></div>
<div class="container">
<div class="row g-5 align-items-center">
<div class="col-12 col-lg-6">
<!-- About Content -->
<div class="about-content ps-md-4">
<div class="section-heading">
<h2 class="mb-3">Features</h2>
<ul class="pcp-f">
<li><b>Positive Displacement :</b> As having a single rotating element, progressive cavities are generated and it gives a uniform and metered flow required.

</li>
<li>
<b>Non- Clogging :</b> It can handle solid in suspension or media having a high percentage of solids
</li>
<li><b>Self Priming :</b> can work in negative suction, so do not require a foot valve.</li>
<li><b>Silent Running :</b> As the rotor runs inside the steady stator, so it makes a little noise. Gentle pumping action minimizes shear and crushes damage.
</li>
<li>
<b>Reversible :</b> As it has a reversible rotation capability; a progressive cavity pump can perform with the same efficiency in the clockwise or anti-clockwise direction.
</li>
<li><b>Low NPSH Requirement :</b> As having a suction lift capability it can perform in vacuum condition.</li>
<li><b>Separate Bearing Housing :</b> Fluid cannot enter in the bearing housing which gives the life to bearings and easy for maintenance
</li>
<li><b>Low running speeds :</b> ideal for abrasive applications.</li>

<li><b>Elastomer Options :</b> Stators are available in a wide range of elastomers to suit different applications.</li>

<li><b>Easy Maintenance :</b> Easy to dismantle and assemble without special tools.</li>

</ul>
</div>
</div>
</div>
<div class="col-12 col-lg-6">
<!-- About Video -->
<div class="about-video-content fadeInUp" data-delay="0.2">
<img src="/assets/img/product-details/progressive_cavity_pumps.png"/>
</div>
</div>
</div>
</div>
<div class="divider-sm"></div>
</section>
` }} />;
}
