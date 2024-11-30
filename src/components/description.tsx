'use client'

import { allPosts } from 'contentlayer/generated'
import { Mdx } from './mdx/mdx'
import { useLocale } from 'next-intl';

export default function description({ slug }: { slug: string }) {
  const locale = useLocale();   
  const post = allPosts.find((post) => post.slug === `${locale}`+slug)

  if (!post?.body.raw) return

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-10">
            <Mdx code={post.body.code} />
          </div>
        </div>
    </section>
  )
}