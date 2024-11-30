import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { Fragment } from 'react'
import { Mdx } from './mdx/mdx'
import { useLocale } from 'next-intl'
import { Game} from '@/src/lib/dataType'
import { useTranslations } from 'next-intl';
export default function Testimonials({ slug }: { slug: string }) {
  const t = useTranslations('testimonials');
  const locale = useLocale();   
  const game = allPosts.find((post) => post.slug === `${locale}` + slug);
  if (!game) return
  const items = game?.items as Game[]
  if (!items) return

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mb-12">
            <h2 className='text-3xl font-bold '>{ t('title')}</h2>
              <p className="border-l-4 border-gray-500 dark:border-gray-400 pl-4 italic text-gray-600">
                { t('desc')}
              </p>
          </div>
              
          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, index) => (
              <Fragment key={index}>
                <div className="p-5 glass rounded-3xl odd:rotate-1 even:-rotate-1">
                  <div className="flex items-start mb-4">
                    <Image className="shrink-0 rounded-full mr-3" src={`${process.env.NEXT_PUBLIC_URL}/images/${item.logoSrc}`} width={48} height={48} alt={item.name || ''} />
                    <div>
                      <h3 className="font-hkgrotesk font-extrabold">{item.title}</h3>
                    </div>
                  </div>
                  <p>
                    {item.description}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}