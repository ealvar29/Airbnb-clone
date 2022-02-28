import Image from 'next/image'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/*Left Section */}
      <div className="relative my-auto flex h-10 cursor-pointer items-center">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle Section */}
      <div className="flex items-center rounded-full border-2 py-2 md:border-2 md:shadow-sm">
        <input
          className="flex-grow bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400 outline-none"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon className="hidden h-8 cursor-pointer rounded-full bg-red-500 p-2 text-white md:mx-2 md:inline-flex" />
      </div>
      {/* Right Section */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  )
}

export default Header
