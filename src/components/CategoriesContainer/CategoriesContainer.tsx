import React from 'react';
import { Categories } from '@components';
import { useTypedSelector } from '@hooks';

export const CategoriesContainer = () => {
  const { categories } = useTypedSelector((state) => ({
    categories: state.restaurants.categories,
  }));

  return <Categories categories={categories} />;
};

export default CategoriesContainer;
