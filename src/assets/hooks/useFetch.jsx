import { useState } from "react";

const baseUrl = "https://backend.getlinked.ai";
function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function getRequest(urlPath) {
    return await requestHandler(urlPath, "GET");
  }

  async function postRequest(urlPath, payload = {}) {
    return await requestHandler(urlPath, "POST", payload);
  }

  async function deleteRequest(urlPath, payload = {}) {
    return await requestHandler(urlPath, "DELETE", payload);
  }

  async function updateRequest(urlPath, payload = {}) {
    return await requestHandler(urlPath, "UPDATE", payload);
  }

  async function requestHandler(url, method, payload = {}) {
    const apiUrl = `${baseUrl}${url}`;
    try {
      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Bad Network response");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      setError(error);
    }
  }

  return {
    get: getRequest,
    post: postRequest,
    delete: deleteRequest,
    update: updateRequest,
  };
}

export default useFetch;
