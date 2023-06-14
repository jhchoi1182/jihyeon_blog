import Sidebar from "@/components/sidebar/Sidebar";
import CategoryContextProvider from "@/context/CategoryContext";

type HomeLayout = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <main className="flex">
      <CategoryContextProvider>
        <Sidebar />
        <section>{children}</section>
      </CategoryContextProvider>
    </main>
  );
}
