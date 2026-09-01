import React from 'react';

export default function BreadcrumbSectionDivSection() {
  return <div className="section-component section-breadcrumbdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>Coming Soon</h1>
<p>Our blog is currently under development.<br/> Soon, you’ll find helpful insights, industry updates, and expert perspectives from K-Fins Pumps Pvt. Ltd.</p>
</div>
</div>
<!-- Divider -->
<div class="divider-sm"></div>
</div>
` }} />;
}
