import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/favicon.ico'
export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="shrink-0 flex flex-col md:flex-row items-center">
                {/* Logo */}
                <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Eggy Car Unblocked">
                  <Image src={Logo} width={30} height={30} alt="Eggy Car Unblocked - Play Eggy Car & Fun Egg Game Online" />
                </Link>
                <p className="text-sm ml-4">
                  Copyright © slopegame<span className="md:hidden lg:inline">. All rights reserved.</span>
                </p>
              </div>
            </div>
            <ul className="inline-flex space-x-2">
              {/* <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="#0"
                  aria-label="YouTube"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.8 12.8c-.2-1.3-.8-2.2-2.2-2.4C19.4 10 16 10 16 10s-3.4 0-5.6.4c-1.4.2-2.1 1.1-2.2 2.4C8 14.1 8 16 8 16s0 1.9.2 3.2c.2 1.3.8 2.2 2.2 2.4 2.2.4 5.6.4 5.6.4s3.4 0 5.6-.4c1.4-.3 2-1.1 2.2-2.4.2-1.3.2-3.2.2-3.2s0-1.9-.2-3.2ZM14 19v-6l5 3-5 3Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href=""
                  aria-label="Telegram"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </a>
              </li> */}
              {/* <li>
                <a
                  className="flex justify-center items-center text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                  href="https://github.com/TEACHMASTER/eggycarunblocked.com"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li> */}
            </ul>
            {/* Social links */}
            {/* <div className="flex space-x-4 text-xs ml-4 list-none">
              <ul className="flex flex-col space-y-2">
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Eggy Car Unblocked
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Cool Car Games
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Unblocked Race Games
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Egg Drop Near Me
                  </p>
                </li>
              </ul>

              <ul className="flex flex-col space-y-2">
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Bouncy Egg Game
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Car Rush Unblocked
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Park Your Car Game
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Egg Cart Game
                  </p>
                </li>
              </ul>

              <ul className="flex flex-col space-y-2">
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Cool Math Games Easter Egg Hunt Answer
                  </p>
                </li>
                <li>
                  <p className="text-left  transition duration-150 ease-in-out">
                    Car Parking Unblocked
                  </p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
