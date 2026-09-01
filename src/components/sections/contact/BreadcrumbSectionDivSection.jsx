import React from 'react';

export default function BreadcrumbSectionDivSection() {
  return <div className="section-component section-breadcrumbdiv" dangerouslySetInnerHTML={{ __html: `
<div class="breadcrumb-section">
<div class="container">
<!-- Breadcrumb Content -->
<div class="breadcrumb-content">
<div class="divider"></div>
<h1>Reach Out Today</h1>
<p>Connect with our experts to discuss your goals and discover how we can help your business grow.</p>
</div>
</div>
</div>
` }} />;
}
