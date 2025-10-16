const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
const HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000;


export { API_BASE_URL, HEADERS, API_TIMEOUT };
