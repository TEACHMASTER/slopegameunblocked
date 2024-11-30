import Image from 'next/image'
import Host01 from '@/public/images/host-04.jpg'

export default function Sidebar() {
  return (
    <aside className="md:w-72 md:shrink-0">
      <div className="glass relative rounded-3xl p-6">
        <div className="absolute top-0 right-0 -mt-8 mr-14 pointer-events-none" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50">
            <path
              fill="#FCD34D"
              d="M.71 13.283A22.888 22.888 0 0 0 12.205.206c.125-.345 2.162 11.236 9.026 13.47 0 0-8.305 3.98-10.272 11.862.008.11-.47-6.26-10.249-12.255ZM48 36.768a24 24 0 0 0 12.06-13.76c.13-.36 2.26 11.8 9.5 14.14 0 0-8.71 4.18-10.78 12.45-.03.11-.53-6.57-10.78-12.83Z"
            />
          </svg>
        </div>
        <h4 className="font-hkgrotesk font-extrabold mb-4">Hosts & Guests</h4>
        <ul className="space-y-3">
          <li className="flex items-center">
            <Image className="shrink-0 rounded-full mr-3" src={Host01} width={44} height={44} alt="Host 04" />
            <div>
              <div className="font-hkgrotesk font-extrabold text-sm ">Sarah Mendes</div>
              <div>
                <a className="block font-hkgrotesk font-medium text-blue-500 text-3xs hover:underline" href="#0">
                  @saramendes
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  )
}