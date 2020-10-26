import axios from 'axios';

const baseUrl = "http://localhost:3001/";

class Api {
    fetchUsers = () => axios.get(`${baseUrl}data`);
};

export default Api;
