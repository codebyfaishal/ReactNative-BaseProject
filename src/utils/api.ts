import axios from 'axios';

export const fetchData = async (url: string, setData: (data: any) => void, setLoading: (loading: boolean) => void) => {
  try {
    setLoading(true);
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
