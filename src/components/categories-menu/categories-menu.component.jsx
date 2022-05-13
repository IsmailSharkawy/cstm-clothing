import CategoryItem from "../categories-item/category-item.component";
import { categories } from "../categories-config/categories";

const Menu = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Menu;
