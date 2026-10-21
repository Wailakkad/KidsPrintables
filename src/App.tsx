/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter } from './lib/router';
import RootLayout from '../app/layout';
import HomePage from '../app/page';
import FallPackLandingPage from '../app/fall-preschool-activity-pack/page';
import HalloweenPackLandingPage from '../app/halloween-preschool-activity-pack/page';
import FreeHalloweenColoringPagesPage from '../app/free-halloween-coloring-pages/page';
import BlogIndexPage from '../app/blog/page';
import BlogPostPage from '../app/blog/[slug]/page';
import { SamplePreviewModal } from './components/SamplePreviewModal';

function RouteSwitch() {
  const { pathname } = useRouter();

  if (pathname === '/fall-preschool-activity-pack' || pathname === '/fall-preschool-activity-pack/') {
    return <FallPackLandingPage />;
  }

  if (
    pathname === '/halloween-preschool-activity-pack' ||
    pathname === '/halloween-preschool-activity-pack/'
  ) {
    return <HalloweenPackLandingPage />;
  }

  if (
    pathname === '/free-halloween-coloring-pages' ||
    pathname === '/free-halloween-coloring-pages/'
  ) {
    return <FreeHalloweenColoringPagesPage />;
  }

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
    </RouterProvider>
  );
}

