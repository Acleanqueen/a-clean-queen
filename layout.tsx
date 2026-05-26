import "./globals.css";

export const metadata = {
  title: "A Clean Queen",
  description: "Professional cleaning services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"></html>
      <body>{children}</body>
    </html>
  );
}
