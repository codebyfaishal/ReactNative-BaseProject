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

// export const postData = async (url: string, data: any, setResponse: (data: any) => void, setLoading: (loading: boolean) => void) => {
//     try {
//       setLoading(true);
//       const response = await axios.post(url, data, {
//         headers: {
//           'Content-Type': 'application/json; charset=UTF-8',
//         },
//       });
//       setResponse(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };


export const postData = async (url: string, data: any) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error in postData:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };

  export const putData = async (url: string, data: any) => {
    try {
      const response = await axios.put(url, data, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      return response.data; // Return the response data
    } catch (error) {
      console.error('Error in putData:', error);
      throw error; // Rethrow the error to handle it in the component
    }
  };
