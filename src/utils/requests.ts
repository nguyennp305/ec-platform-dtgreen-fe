import axios from "axios";

const service = axios.create({
  baseURL: process.env.BASE_URL, // url = base url + request url
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const token = localStorage.getItem("custom-auth-token");
    if (token) {
      config.headers["X-Access-Token"] = token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  (response) => {
    // Some example codes here:
    // code == 20000: success
    // code == 50001: invalid access token
    // code == 50002: already login in other place
    // code == 50003: access token expired
    // code == 50004: invalid user (user not exist)
    // code == 50005: username or password is incorrect
    // You can change this part for your own usage.
    const res = response.data;
    if (res.code !== 20000) {
      console.error("error", res.message || "Error");
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        const userConfirm = window.confirm(
          "You have been logged out. You can cancel and stay on this page, or log in again",
        );
        if (userConfirm) {
          // xử lý thêm event refresh và reset-token
          location.reload(); // To prevent bugs from vue-router
        }
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return response.data;
    }
  },
  (error) => {
    console.error("error", error.message);
    return Promise.reject(error);
  },
);

export default service;
