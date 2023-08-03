import axios from "axios";

const BASE_URL = 'https://books-backend.p.goit.global/books/category?category='
const CATEGOTY = 'Trade Fiction Paperback'

export const getBooksList = async () => {
    const response = await axios.get(`${BASE_URL}${CATEGOTY}`);
    return response;
}