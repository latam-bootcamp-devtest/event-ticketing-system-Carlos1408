import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000/tickets" });

const bookTicket = async (body) => {
  try {
    const response = await api.post("bookTicket", body);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default { bookTicket };
