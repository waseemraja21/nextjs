function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <html lang="en">
      <body>
        {children}
        <h2>Features products</h2>
      </body>
    </html>
  );
}
