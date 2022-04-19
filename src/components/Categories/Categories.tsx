import React from 'react';

interface CategoriesProps {
  categories: category;
}

export interface category {
  map: any;
  id: number | string;
  name: string;
}

export const Categories = ({ categories }: CategoriesProps) => {
  console.log(typeof categories, 123);
  return (
    <ul>
      {categories.map((category: category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default Categories;
