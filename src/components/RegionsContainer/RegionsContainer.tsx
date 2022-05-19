import React from 'react';
import { useTypedSelector } from '@hooks';
import { useDispatch } from 'react-redux';
import { selectRegion } from '@redux/actions/restaurantsActions';

interface regionProps {
  id: number;
  name: string;
}

export const CategoriesContainer = () => {
  const { regions, selectedRegion } = useTypedSelector((state) => ({
    regions: state.restaurants.regions,
    selectedRegion: state.restaurants.selectedRegion,
  }));
  const dispatch = useDispatch();

  const handleClick = (regionId: number) => {
    dispatch(selectRegion(regionId));
  };

  return (
    <ul>
      {regions.map((region: regionProps) => (
        <li key={region.id}>
          <button type="button" onClick={() => handleClick(region.id)}>
            {region.name}
            {selectedRegion && region.id === selectedRegion.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesContainer;
