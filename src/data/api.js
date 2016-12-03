import axios from 'axios';

const URL = "https://api.500px.com/v1/photos";
const CONSUMER_KEY = "iNJ2Eb3qNLmOzp4AftO7EwddYyimvTat1DpdeOjk";

export function fetchPhotos(filter, page){
    return axios.get(URL,{
      params: {
        feature: filter,
        page: page || 2,
        consumer_key: CONSUMER_KEY,
        image_size: 6
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

export function searchPhotos(search, filter){
  
}
