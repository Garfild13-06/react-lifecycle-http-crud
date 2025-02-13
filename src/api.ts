import axios from "axios";

const API_URL = "http://localhost:7071/notes";

export interface Note {
  id: number;
  content: string;
}

export const getNotes = () => axios.get<Note[]>(API_URL);
export const addNote = (content: string) => axios.post(API_URL, { id: 0, content });
export const deleteNote = (id: number) => axios.delete(`${API_URL}/${id}`);
