import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ميزانيتي - تتبع المصاريف والميزانية الشخصية',
  description: 'تطبيق ويب تقدمي (PWA) عربي لإدارة المصاريف الشخصية والميزانية بالدينار الجزائري.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning style={{ margin: 0, padding: 0, backgroundColor: '#0B0F19', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
