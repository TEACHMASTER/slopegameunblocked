import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link'
import Image from 'next/image'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import BackgroundImage from '@/public/images/unnamed.png'

export default function Hero() {
  const t = useTranslations('hero');

  return (
     <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-10 md:pb-10">
          {/* Content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl -mx-20 -z-10 overflow-hidden mb-12 mt-0 md:mb-0"
              aria-hidden="true"
            >
              {/* Illustration */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={BackgroundImage}
                  alt="Slope Game Background"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    opacity: 0.6
                  }}
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="md:w-[640px] py-12 md:py-20 md:min-h-[480px]">
              {/* Copy */}
              <h1 className="text-5xl font-extrabold font-hkgrotesk !text-slate-100 mb-6">
                {t('description') }{' '}
                <span className="font-permanent-marker text-blue-500 font-normal whitespace-nowrap">
                  {t('title1') }{' '}
                  <span className="inline-flex relative">
                    <svg
                      className="absolute right-0 top-full mt-1 max-w-none -z-10"
                      width="135"
                      height="9"
                      viewBox="0 0 135 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white"
                        fillRule="nonzero"
                        d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
                        opacity=".32"
                      />
                    </svg>
                    {t('title2') }
                  </span>
                  <span className="text-slate-100">.</span>
                </span>
              </h1>
              <p className="!text-slate-100 text-lg  mb-8" >
                { t('desc')}
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
              >
                <div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 group shadow-sm" href="/slope">
                    { t('btn')}{' '}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
                <div className="sm:flex sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-3">
                  <div className="inline-flex -space-x-3 -ml-0.5">
                    <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar01} width={28} height={28} alt="Slope Game Avatar 01" />
                    <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar02} width={28} height={28} alt="Slope Game Avatar 02" />
                    <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar03} width={28} height={28} alt="Slope Game Avatar 03" />
                    <Image className="rounded-full border-2 border-slate-800 box-content" src={Avatar04} width={28} height={28} alt="Slope Game Avatar 04" />
                  </div>
                  <div className="text-xs text-slate-100 font-medium">+120K</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}