import "./globals.css";


export const metadata = {
  title: "Crypto Coins",
  description: "Crypto Coins Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
