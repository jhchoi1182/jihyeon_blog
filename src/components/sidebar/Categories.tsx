import CategoryTag from "./CategoryTag";

type CategoriesProps = {
  categories: string[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="flex flex-row justify-center flex-wrap w-full lg:w-52 my-10 pointer-events-auto">
      <CategoryTag category="ALL" />
      {categories.sort().map((category, i) => (
        <CategoryTag key={i} category={category} />
      ))}
    </div>
  );
}
