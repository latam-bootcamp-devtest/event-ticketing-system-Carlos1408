import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/users" });

const getEvents = async (id) => {
  try {
    const response = await api.get(`/${id}/tickets`);
    return response.data.events;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { getEvents };
