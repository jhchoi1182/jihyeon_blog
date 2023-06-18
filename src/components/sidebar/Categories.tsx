import CategoryTag from "./CategoryTag";

type CategoriesProps = {
  categories: string[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="flex flex-row flex-wrap w-64 lg:w-52 text-center my-10 pointer-events-auto">
      <CategoryTag category="ALL" />
      {categories.sort().map((category, i) => (
        <CategoryTag key={i} category={category} />
      ))}
    </div>
  );
}
