import axios from "axios";

const url = "https://reqres.in/api/{resource}";

export const fetchListMany = async (page, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}?page=${page}`);

    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
};

export const fetchListOne = async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
};

export const updateData = async (id, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`${url}/${id}`);
    return response.data;
  } catch (err) {
    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
};
