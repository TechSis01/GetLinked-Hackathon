// import { useState } from "react";

// const baseUrl = "https://backend.getlinked.ai";
// function useFetch(url, method = "GET", payload = {}) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const [url, setUrl] = useState("");
  
//   async function getRequest(url){
//     setUrl(url)
//     requestHandler()
//   }

//   async function postRequest(url,payload = {}){
//     setUrl(url)
//     requestHandler()
//   }
//   async function deleteRequest(url,payload = {}){
//     setUrl(url)
//     requestHandler()
//   }
//   async function updateRequest(url,payload = {}){
//     setUrl(url)
//     requestHandler()
//   }
//   async function requestHandler(){
//     try {
//       const apiUrl = `${baseUrl}${url}`
//       const response = await fetch(apiUrl, {
//         method:method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
//       if (!response.ok) {
//         throw new Error("Bad Network response");
//       }
//       const responseData = await response.json();
//       setData(responseData);
//     } catch (error) {
//       setError(error);
//     }
//   }

  

//   return {
//     data,
//     error
//   };
// }

// export default useFetch;
