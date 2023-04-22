import axios from "axios";

const url = "https://reqres.in/api/";

export const login = async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${url}login`, data);
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
};

export const register = async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${url}register`, data);
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
};

export const logout = async () => {
  const response = await axios.post(`${url}logout`);
  return response.data;
};
