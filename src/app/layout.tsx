import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import CategoryContextProvider from "@/context/CategoryContext";
import Sidebar from "@/components/sidebar";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "jihyeon의 블로그",
    template: "jihyeon의 블로그 | %s",
  },
  description: "신입 개발자 jihyeon의 블로그",
  icons: {
    icon: "/favicon.ico",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const setThemeMode = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`;

  return (
    <html lang="en" className={`${sans.className}`}>
      <body className="flex flex-col w-full mx-auto dark:bg-dark dark:text-slate-100">
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Header />
        <main className="flex">
          <CategoryContextProvider>
            <Sidebar />
            <section className="w-full sm:ml-0">{children}</section>
          </CategoryContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
