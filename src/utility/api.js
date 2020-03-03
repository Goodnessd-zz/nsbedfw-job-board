import axios from 'axios';

export default axios.create({
  baseURL: "https://nsbedfw-job-board-backend.herokuapp.com/",
  responseType: "json",
});