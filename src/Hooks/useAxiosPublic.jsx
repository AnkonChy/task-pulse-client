import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-pulse-server-snowy.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
