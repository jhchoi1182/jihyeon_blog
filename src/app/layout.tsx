import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'jihyeon의 블로그',
    template: 'jihyeon의 블로그 | %s',
  },
  description: '신입 개발자 jihyeon의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
