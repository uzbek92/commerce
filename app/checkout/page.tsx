import { Suspense } from 'react';

import Footer from 'components/layout/footer';

export default async function ProductPage({ params }: { params: { handle: string } }) {

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        CHECK IT OUT

      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}