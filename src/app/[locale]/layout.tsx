import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound, usePathname} from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import '@/src/app/css/style.css'
import { Inter, Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import { Locale } from '@/src/i18n/config';
import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'
import { Metadata } from 'next';
import { Breadcrumb } from '@/src/components/ui/breadcrumb'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const permanent_marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap'
})


const hkgrotesk = localFont({
  src: [
    {
      path: '../fonts/HKGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/HKGrotesk-ExtraBold.woff2',
      weight: '800',
    },        
  ],
  variable: '--font-hkgrotesk',
  display: 'swap',  
})


export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getTranslations();
  const url = process.env.NEXT_PUBLIC_URL || 'https://slopegame.xyz/';
  const title = t('metadata.title');

    console.log('Description value:', t('metadata.description'));
  
  
  const defaultDescription = t('metadata.description');
  
  return {
    description: defaultDescription || '',
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `${title}`
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/android-chrome-192x192.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: {
      canonical: `${url}/${params.locale}`,
      languages: {
        'en-US': `${url}/en-US`,
      },
    },
    openGraph: {
      type: 'website',
      locale: params.locale,
      url: `${url}/${params.locale}`,
      title: title,
      description: defaultDescription,
      siteName: t('common.name'),
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: defaultDescription
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  } satisfies Metadata
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
 
  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} ${permanent_marker.variable} ${hkgrotesk.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header lang={params.locale as Locale} />
            <main className="grow">
              <div className="flex flex-col gap-2: 8px">
                <Breadcrumb lang={params.locale} />
                {children}
              </div>
            </main>
            <Footer/>
          </NextIntlClientProvider>
        </div>
      </body>
       <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DSV9ZS214G"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DSV9ZS214G');
        `}
      </Script>
    </html>
  )
}