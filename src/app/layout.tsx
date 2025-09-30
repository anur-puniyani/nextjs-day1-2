export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> |{" "}
          <a href="/contact">Contact</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
