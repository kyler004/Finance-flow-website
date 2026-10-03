import type {Metadata} from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'FinanceFlow | Buy, trade, and hold 350+ cryptocurrencies',
  description: 'Buy, trade, and hold 350+ cryptocurrencies. Fast, secure transactions with 256-bit encryption and real-time trading.',
  openGraph: {
    title: 'FinanceFlow | Buy, trade, and hold 350+ cryptocurrencies',
    description: 'Buy, trade, and hold 350+ cryptocurrencies. Fast, secure transactions with 256-bit encryption and real-time trading.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FinanceFlow | Buy, trade, and hold 350+ cryptocurrencies',
    description: 'Buy, trade, and hold 350+ cryptocurrencies. Fast, secure transactions with 256-bit encryption and real-time trading.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`font-sans bg-[#010725] text-white antialiased selection:bg-[#0328EE] selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
