import { fetchPhotoDetail } from '../data/api';

export const PHOTO_DETAIL_FETCH = 'PHOTO_DETAIL_FETCH';
export const PHOTO_DETAIL_ERROR = 'PHOTO_DETAIL_ERROR';
export const PHOTO_DETAIL_LOADED = 'PHOTO_DETAIL_LOADED';

export const loadPhotoDetail = (id) => (dispatch) => {
    dispatch({type: PHOTO_DETAIL_FETCH});

    fetchPhotoDetail(id)
    .then(response => {
      dispatch(photoDetailLoaded(response.data));
    })
    .catch(err => {
      dispatch(loadingError(err));
    })
}

function loadingError(err){
  return {
    type: PHOTO_DETAIL_ERROR,
    message: err.message
  }
}

function photoDetailLoaded(detail){
  return {
    type: PHOTO_DETAIL_LOADED,
    detail,
  }
}
