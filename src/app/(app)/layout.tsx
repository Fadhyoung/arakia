'use client';

import * as React from 'react';

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        {children}
      </body>
    </html>
  )
};
