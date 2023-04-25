import { useState, useEffect } from "react";

const apiRoot = "https://cwms-data.usace.army.mil/cwms-data/timeseries";

function useAPISeries(office, tsNames, start, end) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const requests = [];

    tsNames.forEach((tsName) => {
      let paramList = `office=${office}&name=${tsName}`; // if you use let or var, you can change this, if its conts, you cannot change a constant

      if(start && end)
      {
        const startDate = new Date(start);
        const endDate = new Date(end);
        paramList += `&begin=${startDate.toISOString()}&end=${endDate.toISOString()}`
      }
      const url = `${apiRoot}?${paramList}`;

      requests.push(
        fetch(url, {
          method: "GET",
          headers: { Accept: "application/json;version=2;" },
        })
      );
    });

    Promise.all(requests)
      .then((responseArray) => {
        return responseArray.map((response) => response.json());
      })
      .then((jsonArray) => {
        Promise.all(jsonArray).then((fulfilledArray) => {
          setResults(fulfilledArray);
        });
      });
  }, [tsNames, start, end]);

  return results;
}

export default useAPISeries;
