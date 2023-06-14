import Sidebar from "@/components/sidebar/Sidebar";

type HomeLayout = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <main className="flex">
      <Sidebar />
      <section>{children}</section>
    </main>
  );
}
