import axios from "axios";

const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&image_type=photo&pretty=true`;

export const fetchImages = (term = "") => {
  return axios
    .get(`${url}&q=${term}`)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
