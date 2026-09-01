import React from 'react';

export default function BreadcrumbSectionBgImgJarallaxDivSection() {
  return <div className="section-component section-breadcrumbbgimgjarallaxdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section bg-img jarallax" style="background-image: url('/assets/img/about-banner.jpg');">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>Error</h1>
<ul class="list-unstyled">
<li><a href="/">Home</a></li>
<li>Error</li>
</ul>
</div>
</div>
<!-- Divider -->
<div class="divider"></div>
</div>
` }} />;
}
