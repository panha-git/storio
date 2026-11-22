import './globals.css';

export const metadata = {
  title: 'Storio — Stories worth staying for',
  description:
    'Find your next favorite read with Storio, a cozy corner for stories worth sharing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
