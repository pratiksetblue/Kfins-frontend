import React from 'react';

export default function DividerDivSection() {
  return <div className="section-component section-dividerdiv" dangerouslySetInnerHTML={{ __html: `
<div class="divider"></div>
` }} />;
}
