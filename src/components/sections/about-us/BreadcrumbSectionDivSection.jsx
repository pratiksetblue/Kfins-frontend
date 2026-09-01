import React from 'react';

export default function BreadcrumbSectionDivSection() {
  return <div className="section-component section-breadcrumbdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>About <br/>K-FINS Pumps</h1>
<p>Engineering Excellence. Trusted Worldwide.</p>
</div>
</div>
<!-- Divider -->
<div class="divider"></div>
</div>
` }} />;
}
