import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchChar = async (page = 1, filters = {}) => {
  try {
    const query = new URLSearchParams({ page, ...filters }).toString();
    const response = await axios.get(`${BASE_URL}/character?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export const fetchLoc = async (page = 1, filters = {}) => {
  try {
    const query = new URLSearchParams({ page, ...filters }).toString();
    const response = await axios.get(`${BASE_URL}/location?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export const fetchEpi = async (page = 1, filters = {}) => {
  try {
    const query = new URLSearchParams({ page, ...filters }).toString();
    const response = await axios.get(`${BASE_URL}/episode?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching episodes:", error);
    throw error;
  }
};
