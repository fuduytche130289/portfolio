import axios from "axios";

let axiosInstance = null;
let headers = {
    "Content-Type": "application/json",
};

function setHeaders(inputHeaders) {
    headers = inputHeaders;
}

function getHeaders() {
    return headers;
}

function getInstance() {
    if (axiosInstance != null) {
        return axiosInstance;
    }
    axiosInstance = axios.create({
        baseURL: import.meta.env.VITE_SOME_KEY,
        headers: getHeaders(),
    });
    //hook interceptor cài ở đây
    axiosInstance.interceptors.request.use((config) => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTJhODkyY2Y1YTNlNDE1MzhhNjIxM2UwYjAxNDU0MiIsInN1YiI6IjY0OWFhNmIxYTZkZGNiMDEzYWQ5MTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5j5WL7uNYfWhoGRAVER-AdlTBpDmEMzTfPley_9b_LU';
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error?.response?.status === 401) {
                localStorage.removeItem("token");
                // alert('Bạn phải đăng nhập để truy cập vào api này');
                window.location.href = "/login";
            }
            return Promise.reject(error);
        }
    );
    return axiosInstance;
}

function get(endpointApiUrl, payload = {}) {
    return getInstance().get(endpointApiUrl, {
        params: payload,
    });
}

function post(endpointApiUrl, payload = {}) {
    return getInstance().post(endpointApiUrl, payload);
}

function put(endpointApiUrl, payload = {}) {
    return getInstance().put(endpointApiUrl, payload);
}

function del(endpointApiUrl, payload = {}) {
    return getInstance().delete(endpointApiUrl, payload);
}

export const Axios = {
    axiosInstance,
    getHeaders,
    setHeaders,
    get,
    post,
    put,
    del,
};
