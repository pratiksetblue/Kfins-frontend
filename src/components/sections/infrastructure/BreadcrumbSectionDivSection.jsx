import React from 'react';

export default function BreadcrumbSectionDivSection() {
  return <div className="section-component section-breadcrumbdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>World-Class <br/>Infrastructure</h1>
<p>Designed to deliver quality, efficiency, and reliable manufacturing excellence.</p>
</div>
</div>
<!-- Divider -->
<div class="divider-sm"></div>
</div>
` }} />;
}
