import axios from 'axios';

const URL = "https://api.500px.com/v1/photos";
const CONSUMER_KEY = "iNJ2Eb3qNLmOzp4AftO7EwddYyimvTat1DpdeOjk";

export function fetchPhotos(filter, page){
    return axios.get(URL,{
      params: {
        feature: filter,
        page: page || 1,
        consumer_key: CONSUMER_KEY,
        image_size: 6,
        rpp: 50,
        exclude: "nude"
      }
    });
}

export function fetchPhotoDetail(id){
  return axios.get(`${URL}/${id}?comments`,{
    params:{
      consumer_key: CONSUMER_KEY
    }
  })
}

export function fetchPhotosWithTerm(search, filter, page){
  return axios.get(`${URL}/search`,{
    params:{
      term: search,
      page: page || 1,
      consumer_key: CONSUMER_KEY,
      image_size: 6,
      rpp: 50,
      exclude: "nude"
    }
  })
}
