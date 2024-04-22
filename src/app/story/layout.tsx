import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stories Section",
  description: "Stories Sections is great.",
};

export default function StoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-slate-300'>
        <h1>Yo, what up this is header</h1>
        {children}
        <h1>Yo, what up this is footer</h1>
        </body>
    </html>
  );
}
