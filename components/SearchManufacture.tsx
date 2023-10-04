import { manufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import {useState,Fragment} from 'react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

function SearchManufacturer({manufacture,setManufacture}:manufactureProps) {

  const[query,setQuery]=useState('');

  const filteredManufactures=query===""?manufacturers:manufacturers.filter((item)=>(
    item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase())
  ))
  return (
    <div className="search-manufacture">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-[14px]'>
            <Image src="/car-logo.svg" width={20} height={20} className='ml-4' alt="car-logo"/>
          </Combobox.Button>

          <Combobox.Input className="searchmanufacturer__input"
          placeholder="volswagen"
          displayValue={(manufacturer:string)=>manufacturer}
          onChange={(e)=>setQuery(e.target.value)}
          />

          <Transition as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
          >

<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredManufactures.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufactures.map((person) => (
                  <Combobox.Option
                    key={person}
                    className={({ active }) =>
                      `relative search-manufacturer__option${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
