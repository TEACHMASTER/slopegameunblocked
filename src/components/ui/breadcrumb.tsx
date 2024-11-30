'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/src/lib/utils'

interface BreadcrumbProps {
  lang: string
  className?: string
}

export function Breadcrumb({ lang, className }: BreadcrumbProps) {
  const pathname = usePathname()
  
  const segments = pathname
    .split('/')
    .filter(segment => segment !== '' && segment !== lang)
  
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${lang}/${segments.slice(0, index + 1).join('/')}`
    return {
      label: segment,
      path
    }
  })

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <nav 
        aria-label="Breadcrumb"
        className={cn(
          "flex items-center space-x-2 text-sm text-slate-700 dark:text-slate-300",
          "h-16 md:h-20 mt-16 md:mt-20",
          className
        )}
      >
        <Link 
          href={`/${lang}`}
          className="flex items-center hover:text-slate-900 dark:hover:text-slate-100"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>

        {breadcrumbItems.map((item, index) => (
          <div key={item.path} className="flex items-center">
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
            <Link
              href={item.path}
              className={cn(
                "ml-2 hover:text-slate-900 dark:hover:text-slate-100",
                index === breadcrumbItems.length - 1 && "font-medium text-slate-900 dark:text-slate-100"
              )}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
} 