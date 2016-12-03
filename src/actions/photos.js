import { fetchPhotos, fetchPhotoDetail } from '../data/api';

export const PHOTOS_FETCH = 'FETCH_PHOTOS';
export const PHOTOS_ERROR = 'PHOTOS_ERROR';
export const PHOTOS_LOADED = 'PHOTOS_LOADED';

export const loadPhotos = (filter, page) => (dispatch) => {
  dispatch({type: PHOTOS_FETCH, selectedFilter: filter});
  fetchPhotos(filter, page)
  .then(function(response){
    dispatch(photosLoaded(response.data.photos, response.data.current_page, filter));
  })
  .catch(function(err){
    dispatch(loadingError(err))
  });
}

function loadingError(message){
  return {
    type: PHOTOS_ERROR,
    message: message
  }
}

function photosLoaded(photos, page, filter){
  return {
    type: PHOTOS_LOADED,
    photos: photos,
    page: page,
    selectedFilter: filter
  }
}
