import React from 'react';

export default function BreadcrumbSectionDivSection() {
  return <div className="section-component section-breadcrumbdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>Client <br/>
                     Success Stories</h1>
<p>See how we've transformed challenges into opportunities through smart strategies and proven results.</p>
</div>
</div>
</div>
` }} />;
}
