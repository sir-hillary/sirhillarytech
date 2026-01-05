import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const contactAPI = {
  sendMessage: async (formData) => {
    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data?.error || 
                       error.response.data?.message || 
                       `Server error: ${error.response.status}`);
      } else if (error.request) {
        throw new Error('No response from server. Please check your connection.');
      } else {
        throw new Error(error.message || 'Failed to send message');
      }
    }
  }
};