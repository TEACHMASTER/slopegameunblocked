import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Description from '@/src/components/description'
import Testimonials from '@/src/components/testimonials' 
import ShowGame from '@/src/components/showgame'
import { defaultLocale } from '@/src/i18n/config'
export async function generateMetadata({ params }: {
  params: { slug: string ,locale:string}
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === `${params.locale}/game/`+params.slug)

  if (!post) return

  const { title, description } = post

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale? '':'/'+params.locale}/${params.slug}/`,
    },
  }
}

export default  function SinglePost({ params }: {
  params: { slug: string,locale:string }
}) {

  const post = allPosts.find((post) => post.slug === `${params.locale}/game/`+params.slug)

  if (!post) notFound()

  return (
    <>
      {/* <Testimonials slug="/shouye" /> */}
      {/* <RelatedPosts slug="eggycar" /> */}
      <ShowGame slug={params.slug} />
      <Description slug={`/game/${params.slug}` } />
    </>
  )
}
