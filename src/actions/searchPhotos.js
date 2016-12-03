import { fetchPhotosWithTerm } from '../data/api';

export const PHOTO_SEARCH_FETCH = 'PHOTO_SEARCH_FETCH';
export const PHOTO_SEARCH_ERROR = 'PHOTO_SEARCH_ERROR';
export const PHOTO_SEARCH_LOADED = 'PHOTO_SEARCH_LOADED';

export const searchPhotos = (search) => (dispatch) => {
    dispatch({type: PHOTO_SEARCH_FETCH, search});
    fetchPhotosWithTerm(search)
    .then(response => {
      dispatch(searchResult(response.data));
    })
    .catch(err => {
      dispatch(loadingError(err));
    })
}

function loadingError(err){
  return {
    type: PHOTO_SEARCH_ERROR,
    message: err.message
  }
}

function searchResult(detail){
  return {
    type: PHOTO_SEARCH_LOADED,
    photos: detail.photos,
    page: detail.current_page
  }
}
