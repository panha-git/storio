import './site.css';

export const metadata = {
  title: 'STORIO — Every moment has a story',
  description:
    'Turn your meaningful moments, milestones, and memories into beautiful digital stories worth sharing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
