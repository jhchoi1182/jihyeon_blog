import Profile from "./Profile";

export default function DndArea() {
  return (
    <section className="overflow-x-hidden">
      <div className="w-56 cursor-grab select-none">
        <Profile />
      </div>
    </section>
  );
}
