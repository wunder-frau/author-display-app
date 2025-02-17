import axios from "axios";
import { apiBaseUrl } from "../constants";

const notesUrl = `${apiBaseUrl}/notes`;
let token: string | null = null;

const setToken = (newToken: string | null) => {
  token = newToken ? `Bearer ${newToken}` : null;
};

const getAllByBook = async (bookId: string) => {
  const config = { headers: { Authorization: token } };
  const { data } = await axios.get<{ id: string; content: string }[]>(`${notesUrl}/${bookId}`, config);
  return data;
};

const create = async (bookId: string, content: string) => {
  const config = { headers: { Authorization: token } };
  const { data } = await axios.post<{ id: string; content: string }>(`${notesUrl}/${bookId}`, { content }, config);
  return data;
};

const update = async (noteId: string, content: string) => {
    if (!noteId) {
      throw new Error("Note ID is missing!");
    }
  
    const config = {
      headers: { Authorization: token },
    };
  
    const { data } = await axios.put<{ id: string; content: string }>(
      `${notesUrl}/${noteId}`,
      { content },
      config
    );
    return data;
  };

export default { setToken, getAllByBook, create, update };
