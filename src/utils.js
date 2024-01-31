// Import necessary modules
import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

// Component to Set and Get Query Strings
const QueryStringExample = () => {
  // Use the useLocation hook to access the current URL
  const location = useLocation();

  // Use the useHistory hook to manage browser history
  const history = useHistory();

  // Function to handle setting query string
  const setQueryString = (key, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);

    // Use history.replace to update the URL without adding a new entry to the history stack
    history.replace({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  // Function to handle getting query string
  const getQueryString = (key) => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
  };

  // useEffect to demonstrate setting and getting query strings
  useEffect(() => {
    // Set query string
    setQueryString("exampleParam", "exampleValue");

    // Get query string
    const paramValue = getQueryString("exampleParam");
    console.log("Query String Value:", paramValue);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>React Query String Example</h1>
      <p>Check the console for the printed query string value.</p>
    </div>
  );
};

export default QueryStringExample;
