import axios from 'axios';

const fetchCategories = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const data = await axios.get(url);

  return data.data;
};

export default fetchCategories;
