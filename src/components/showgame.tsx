import { getLocale } from 'next-intl/server'
import GameIframe from './GameIframe'
import { allPosts } from 'contentlayer/generated'
import { useLocale } from 'next-intl';

export default function ShowGame({ slug }: { slug: string }) {
  const locale = useLocale();
  const post = allPosts.find((post) => post.slug === `${locale}/game/`+slug)

  if (!post?.src) return

  return (
    <section className="relative mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-10 md:pb-10">
          <div className="relative mt-5 max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            <div className="md:w-[680px] py-12 md:py-20 md:min-h-[500px] min-h-[250px]">
              <GameIframe src={post.src || ''} title={post.title || ''} logoSrc={`${process.env.NEXT_PUBLIC_URL}/images/${post.logoSrc}`}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}