import { Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might liked</p>
        </div>

        <div className="homr__filters">
          <SearchBar/>

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel"/> */}
            {/* <CustomFilter title="year"/> */}
          </div>
        </div>
      </div>
    </main>
  )
}
