// src/app/not-found.tsx
'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NotFound() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div 
        data-aos="fade-down"
        className="text-center"
      >
        <h1 className="font-permanent-marker text-6xl md:text-8xl text-slate-800 dark:text-slate-100 mb-6">
          404
        </h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/logo.png"
            alt="Crashed car"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          Oops! Wrong Turn!
        </h2>
        <p className="mb-8 max-w-md mx-auto text-slate-600 dark:text-slate-300">
          Looks like your car took a wrong turn! This track doesn't exist, but don't worry - you can get back to the main race!
        </p>
        <Link 
          href="/"
          className={`
            inline-flex items-center justify-center 
            px-6 py-3 rounded-md
            font-medium text-base
            no-underline  /* 移除下划线 */
            bg-blue-500 hover:bg-slate-700  /* 亮色主题背景 */
            dark:bg-slate-200 dark:hover:bg-slate-300  /* 暗色主题背景 */
            text-white  /* 亮色主题文字颜色 */
            dark:text-slate-900  /* 暗色主题文字颜色 */
            transition-colors duration-150 ease-in-out
            shadow-sm hover:shadow
            focus:outline-none focus:ring-2 focus:ring-slate-400
          `}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Back to Home Track
        </Link>
      </div>
    </div>
  );
}
