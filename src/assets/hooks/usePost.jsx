import { useState } from "react";
function usePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function postRequest(baseUrl, requestBody) {
    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error("Bad Network response");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError(error);
    }
  }
  return {
    error,
    data,
    postRequest,
  };
}

export default usePost;
