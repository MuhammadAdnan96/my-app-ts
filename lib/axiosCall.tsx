import axios from "axios";

const axiosCall = (userName: any, password: any, setError: any) => {
  const apiResponse = axios({
    url: "https://fakestoreapi.com/auth/login",
    method: "POST",
    data: {
      username: userName,
      password: password,
    },
  }).then((res: { data: { token: string } }) => {
    localStorage.setItem("userToken", res.data.token);
    return res.data.token;
  });
  // .catch((err) => {
  //   console.log(err.response);
  //   setError(err.response.data);
  // });
  return apiResponse;
};
export default axiosCall;
