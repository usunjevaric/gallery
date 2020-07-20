import API from "./API";

export const fetchImages = (pageNumber = 1, term = "") => {
  return API.get("/", { params: { page: pageNumber, q: term } })
    .then((res) => res.data)
    .catch((err) => err);
};
