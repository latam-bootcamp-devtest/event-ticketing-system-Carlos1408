import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/events" });

const getAll = async () => {
  try {
    const response = await api.get();
    return response.data.events;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getById = async (id) => {
  try {
    const response = await api.get(id);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { getAll, getById };
