import Image from 'next/image'

import Link from 'next/link'

import Socials from '../components/Socials'

const Header = () => {
	return (
		<header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
			<div className='container mx-auto'>
				<div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
					<Link href={'/'}>
						{/* <Image
              className="animate-spin-slow "
              src={"./logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
						<h3 className='text-[26px] font-thin'>
							arslan
							<span className='font-bold'> garayev</span>
							<span className='font-bold text-accent'> .</span>
						</h3>
					</Link>
					<Socials />
				</div>
			</div>
		</header>
	)
}

export default Header
