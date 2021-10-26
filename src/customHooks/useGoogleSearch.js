import { useState, useEffect } from 'react';

const useGoogleSearch = (term) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;
  const CONTEXT_KEY = process.env.REACT_APP_SEARCH_ENGINE_ID;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [term]);

  return { data };
};

export default useGoogleSearch;
