```console
# ✅ Default Layout – readonly children only
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

# ✅ With children readonly & name mutable (intersection type)
export default function RootLayout({
  children,
  name,
}: Readonly<{
  children: React.ReactNode;
}> & { name: string }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {name}
      </body>
    </html>
  );
}

# ✅ Using single props object (not destructured)
export default function RootLayout(anyName: Readonly<{
  children: React.ReactNode;
  name: string;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {anyName.children}
        {anyName.name}
      </body>
    </html>
  );
}

# ✅✅ Recommended – Clean props type with readonly child and mutable name
type Propss = {
  readonly children: React.ReactNode;
  name: string; // mutable
};

export default function RootLayout({ children, name }: Propss) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {name}
      </body>
    </html>
  );
}
