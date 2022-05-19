import axios from 'axios';

const fetchRegions = async () => {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const data = await axios.get(url);

  return data.data;
};

export default fetchRegions;
