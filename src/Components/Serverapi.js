import axios from "axios";

export const submitContactForm = async (data) => {
  // JSONPlaceholder fake API URL
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.post(url, data);
    console.log("API Response:", response.data); // Console me dikhega
    return response.data;
  } catch (error) {
    console.error(" API Error:", error);
    throw error;
  }
};
