import axios from 'axios';

export function postFetch(url: string, headers?: object, body?: object) {
  return axios
    .post(url, body, headers)
    .then((res) => {
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((error) => {
      if (error.response) {
        return {
          success: false,
          data: error.response.data,
        };
      } else if (error.request) {
        return {
          success: false,
          data: error.request,
        };
      } else {
        return {
          success: false,
          data: error.message,
        };
      }
    });
}

export function getFetch(url: string, headers?: object) {
  return axios
    .get(url, headers)
    .then((res) => {
      return {
        success: true,
        data: res.data,
      };
    })
    .catch((error) => {
      if (error.response) {
        return {
          success: false,
          data: error.response.data,
        };
      } else if (error.request) {
        return {
          success: false,
          data: error.request,
        };
      } else {
        return {
          success: false,
          data: error.message,
        };
      }
    });
}
