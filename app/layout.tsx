import '@/app/ui/global.css';
import { inter, courier_prime, arvo } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${arvo.className} antialiased`}>{children}</body>
    </html>
  );
}
