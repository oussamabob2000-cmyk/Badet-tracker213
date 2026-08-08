import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ميزانيتي - تتبع المصاريف والميزانية الشخصية',
  description: 'تطبيق ويب تقدمي (PWA) عربي لإدارة المصاريف الشخصية والميزانية بالدينار الجزائري.',
};

export default function Home() {
  return (
    <main
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#0B0F19',
      }}
    >
      <iframe
        src="/app.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          display: 'block',
        }}
        title="ميزانيتي PWA"
      />
    </main>
  );
}

