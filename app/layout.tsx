import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ميزانيتي - تتبع المصاريف والميزانية الشخصية',
  description: 'تطبيق ويب تقدمي (PWA) عربي لإدارة المصاريف الشخصية والميزانية بالدينار الجزائري.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className="h-full w-full overflow-hidden">
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#0B0F19',
          overflow: 'hidden',
          height: '100dvh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}

