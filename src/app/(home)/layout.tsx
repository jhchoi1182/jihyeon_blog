import Sidebar from "@/components/sidebar";
import CategoryContextProvider from "@/context/CategoryContext";

type HomeLayout = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <main className="flex">
      <CategoryContextProvider>
        <Sidebar />
        <section className="ml-80 w-full ">{children}</section>
      </CategoryContextProvider>
    </main>
  );
}
