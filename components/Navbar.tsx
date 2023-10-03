import Link from 'next/link'
import Image from 'next/image'
import { CustomButton } from '.'

function Navbar() {
  return (
    <header className='w-full absolute z-0'>
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-14">
        <Link href="/" className='flex justify-center items-center'>
            <Image src="/logo.svg"alt="Car Hub Logo" width={118}height={18} className='object-contain' />
        </Link>

        <CustomButton title="Sign In" btnType="button"
            containerStyles="bg-white text-primary-black min-w-[130px] rounded-full mt-5 z-1"
        />
      </nav>
    </header>
  )
}

export default Navbar
