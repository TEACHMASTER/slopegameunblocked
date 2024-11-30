import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/favicon.ico'
import {useTranslations} from 'next-intl';
import type { Locale } from "@/src/i18n/config"
import { LanguageSwitcher } from "../language-switcher"
import { Button } from './button'

export default function Header({lang, nav = true}: {
  nav?: boolean,
  lang: Locale,
}) {
  const t = useTranslations('nav'); 

  return (
    <header className="fixed w-full z-30 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-permanent-marker bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500"
            >
              Slope Game
            </Link>
          </div>

          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow justify-end">
              <ul className="flex items-center gap-2 list-none">
                {/* <li>
                  <Link href={`/${lang}/cargamesunblocked`}>
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="h-9 px-4 text-slate-900 dark:text-slate-100 hover:text-slate-900 dark:hover:text-slate-100"
                    >
                      {t('games')}
                    </Button>
                  </Link>
                </li> */}
                <li className="flex items-center">
                  <LanguageSwitcher />
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}