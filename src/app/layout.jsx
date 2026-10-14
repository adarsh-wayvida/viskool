import './globals.css';
import { SiteLayout } from '../components/SiteLayout.jsx';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  // Inter is a variable font, so we don't need to specify weights explicitly unless we want to restrict them.
  // By omitting 'weight', it includes all available weights (100-900) and italic styles natively if supported.
  // Actually, for variable fonts we don't strictly need weight, but specifying axes if needed.
  // Next.js handles variable fonts automatically if weight is omitted.
});

export const metadata = {
  title: "Viskool - India's Online Learning Platform",
  description: "Viskool - India's Online Learning Platform Prototype",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased">
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}
