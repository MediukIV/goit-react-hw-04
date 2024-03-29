import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID splze3qGkkwbDpI9Es5qynMPccn391CUgvUpQ4TTPHE",
    "Content-Type": "application/json",
  },
});

const getPhotos = async ({ query, page }) => {
  try {
    const response = await instance.get("", {
      params: {
        query,
        page,
        per_page: 20,
        orientation: "landscape",
      },
    });
    return response;
  } catch (error) {
    throw new Error("bad request");
  }
};

export default getPhotos;