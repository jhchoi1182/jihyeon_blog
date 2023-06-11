import CategoryTag from "./CategoryTag";

type CategoriesProps = {
  categories: string[];
};

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="text-center my-10">
      <CategoryTag category="ALL" />
      {categories.sort().map((category, i) => (
        <CategoryTag key={i} category={category} />
      ))}
    </div>
  );
}
