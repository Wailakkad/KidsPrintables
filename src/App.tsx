/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './lib/router';
import RootLayout from '../app/layout';
import HomePage from '../app/page';
import BlogIndexPage from '../app/blog/page';
import BlogPostPage from '../app/blog/[slug]/page';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { EmailCapturePopup } from './components/EmailCapturePopup';

function RouteSwitch() {
  const { pathname } = useRouter();

  if (pathname === '/blog' || pathname === '/blog/') {
    return <BlogIndexPage />;
  }

  if (pathname.startsWith('/blog/')) {
    const slug = pathname.replace('/blog/', '').replace(/\/$/, '');
    return <BlogPostPage slug={slug} />;
  }

  return <HomePage />;
}

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  return (
    <RouterProvider onOpenSampleModal={() => setSampleModalOpen(true)}>
      <RootLayout>
        <RouteSwitch />
      </RootLayout>
      <SamplePreviewModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
      <EmailCapturePopup />
    </RouterProvider>
  );
}

