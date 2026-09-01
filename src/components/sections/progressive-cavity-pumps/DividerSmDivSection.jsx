import React from 'react';

export default function DividerSmDivSection() {
  return <div className="section-component section-dividersmdiv" dangerouslySetInnerHTML={{ __html: `
<div class="divider-sm"></div>
` }} />;
}
