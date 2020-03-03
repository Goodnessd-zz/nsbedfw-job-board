import axios from 'axios';

export default axios.create({
  baseURL: "https://nsbedfw-job-board-backend.herokuapp.com/",
  responseType: "json",
  headers: {'Content-Type': 'application/json','Accept': 'application/json'}
});