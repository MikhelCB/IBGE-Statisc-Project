async function fetchDataFromAPI(url) {
  try {
    const response = await fetch(url);

    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response body as JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error for further handling
  }
}

// Example usage:
const apiUrl = "https://randomuser.me/api/?results=5"; // Replace with your API endpoint

fetchDataFromAPI(apiUrl)
  .then((data) => {
    console.log("Fetched data:", data);
    // Process the data here
  })
  .catch((error) => {
    console.error("Failed to fetch or process data:", error);
  });
