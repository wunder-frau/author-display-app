import axios from 'axios';

const baseUrl = 'http://localhost:3001/books';

interface Book {
  title: string;
  id: string;
}

const getAll = (): Promise<Book[]> => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (book: Book): Promise<Book> => {
  return axios.post(baseUrl, book).then((response) => response.data);
};

export default {
  getAll,
  create,
};
