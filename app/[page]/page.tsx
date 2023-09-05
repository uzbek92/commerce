import type { Metadata } from 'next';

import { PageProps } from '.next/types/app/page';
import Prose from 'components/prose';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export const revalidate = 43200; // 12 hours

export async function generateMetadata(page: PageProps): Promise<Metadata> {
  const params = page.params;

  if (!page) return notFound();

  return {
    title: params.title,
    description: '',
    openGraph: {
      publishedTime: params.createdAt || new Date(),
      modifiedTime: params.updatedAt || new Date(),
      type: 'article'
    }
  };
}

export default async function Page(page: PageProps) {
  // params.page === 'checkout' && (page = CHECKOUT_PAGE_PROPS);
  console.log(page)
  const params = {
    body: '',
    updatedAt: new Date().toISOString(),
    ...page.params
  };

  if (!page) return notFound();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">{params.title}</h1>
      <Prose className="mb-8"  html={params.body as string} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date(params.updatedAt))}.`}
      </p>
    </>
  );
}
