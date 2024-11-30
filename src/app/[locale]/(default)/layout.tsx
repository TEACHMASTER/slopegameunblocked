import { defaultLocale } from '@/src/i18n/config'

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/${locale==defaultLocale? '':locale}`,
    },
  };
}

export default function DefaultLayout({
  children,
  params
}: {
    children: React.ReactNode,
    params: {locale:string}
  }) { 
  
  return (
    <>
      <main className="grow">
        {children}
      </main>
    </>
  )
}
