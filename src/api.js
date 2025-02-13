import axios from "axios";

const API_URL = "http://localhost:7071/notes";

export const getNotes = () => axios.get(API_URL);
export const addNote = (content) => axios.post(API_URL, { id: 0, content });
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);
