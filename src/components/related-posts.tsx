import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { Fragment } from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function RelatedPosts({ slug }: { slug: string }) {
  const locale = useLocale()
  const currentPost = allPosts.find((post) => post.slug === `${locale}/blog/${slug}`)
  
  // 获取相关文章（同类别的其他文章，最多3篇）
  const relatedPosts = allPosts
    .filter(post => 
      post.slug.startsWith(`${locale}/blog/`) && 
      post.slug !== `${locale}/blog/${slug}` &&
      post.category === currentPost?.category
    )
    .slice(0, 9)

  if (!relatedPosts.length) return null

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold">Related Games You Might Like</h2>
            <p className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
              Discover more exciting games similar to this one
            </p>
          </div>

          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPosts.map((post, index) => (
              <Fragment key={index}>
                <Link href={`/${locale}/game/${post.slug.split('/').pop()}`}>
                  <div className="p-5 glass rounded-3xl odd:rotate-1 even:-rotate-1 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start mb-4">
                      <Image 
                        className="shrink-0 rounded-full mr-3" 
                        src={`${process.env.NEXT_PUBLIC_URL}/images/${post.logoSrc}`}
                        width={48} 
                        height={48} 
                        alt={post.title || ''} 
                      />
                      <div>
                        <h3 className="font-hkgrotesk font-extrabold">{post.title}</h3>
                        <p className="text-sm text-slate-500">{post.category}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 