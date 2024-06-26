import { Hero } from '@/components'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import Image from 'next/image'
import { fetchCars } from '@/utils'
import { all } from 'axios'
import {CarCard} from '@/components'
import { HomeProps } from '@/types'

export default async function Home({searchParams}:HomeProps) {
  const allCars=await fetchCars({
    manufacturer:searchParams.manufacturer||"",
    year:searchParams.year||2000,
    fuel:searchParams.fuel|| "",
    limit:searchParams.limit|| 10,
    model:searchParams.model|| ''
  });
  // console.log(allCars);

  const isDataEmpty=!Array.isArray(allCars) || allCars.length<1 || !allCars
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might liked</p>
        </div>

        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">
            {/* <CustomFilter title="fuel"/> */}
            {/* <CustomFilter title="year"/> */}
          </div>
        </div>

        {
          !isDataEmpty?(
            <section>
              <div className="home__cars-wrapper">
                {
                  allCars?.map((car)=><
                    CarCard car={car}
                  />)
                }
              </div>
            </section>
          ):(
            <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
          )
        }
        
      </div>
    </main>
  )
}

