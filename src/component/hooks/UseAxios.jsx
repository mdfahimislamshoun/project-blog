import axios from "axios";

const axiosurl=axios.create({
 baseURL:"https://blog-server-a11.vercel.app",
})



const UseAxios = () => {
return axiosurl;

}

export default UseAxios;