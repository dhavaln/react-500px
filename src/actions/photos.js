import { fetchPhotos, fetchPhotoDetail } from '../data/api';

export const loadPhotos = (filter, page) => (dispatch) => {
  dispatch({type: 'FETCH_PHOTOS', selectedFilter: filter});
  fetchPhotos(filter, page)
  .then(function(response){
    dispatch(photosLoaded(response.data.photos, response.data.current_page, filter));
  })
  .catch(function(err){
    dispatch(loadingError(err))
  });
}

export const loadPhotoDetail = (id) => (dispatch) => {
    dispatch({type: 'FETCH_PHOTO_DETAIL'});
    fetchPhotoDetail(id)
    .then(response => {
      dispatch(photoDetailLoaded(response.data));
    })
    .catch(err => {
      dispatch(loadingError(err));
    })
}

function loadingError(message){
  return {
    type: 'PHOTOS_ERROR',
    message: message
  }
}

function photosLoaded(photos, page, filter){
  return {
    type: 'PHOTOS_LOADED',
    photos: photos,
    page: page,
    selectedFilter: filter
  }
}

function photoDetailLoaded(detail){
  return {
    type: 'PHOTO_DETAIL',
    detail,
  }
}
