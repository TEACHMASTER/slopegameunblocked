import Hero from '@/src/components/hero'
import Description from '@/src/components/description'
import Testimonials from '@/src/components/testimonials'
import RelatedPosts from '@/src/components/related-posts'
import GamesList from '@/src/components/gameslist'
import ShareModel from '@/src/components/sharemodel'

export default function Home() {
  return (
    <div>
      <Hero />
      <GamesList slug="slope" />
      {/* <RelatedPosts slug="eggycar" /> */}
      <Description slug="/shouye" />
      <Testimonials slug="/shouye" />
      <ShareModel />
    </div>
  )
}
