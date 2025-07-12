import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="max-w-screen w-full mx-auto">
          <nav className="flex justify-between items-center p-3 bg-(--foreground) text-[--text]">
            <div className="flex flex-row gap-2">
              <div className="text-lg font-bold">Bela Mesa</div>
              <div className="text-lg italic">ateliê</div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
