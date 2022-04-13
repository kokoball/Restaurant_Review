import React from 'react';

interface restaurantProps {
  name: string;
  category: string;
  address: string;
}

interface RestaurantFormProps {
  restaurant: restaurantProps;
  onChange: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const RestaurantForm = ({ restaurant, onChange, onClick }: RestaurantFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    onChange({ name, value });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        value={restaurant.address}
        onChange={handleChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
};

export default RestaurantForm;
