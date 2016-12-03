import { PHOTOS_FETCH, PHOTOS_ERROR, PHOTOS_LOADED } from '../actions/photos';

const initialState = {
  isLoading: false,
  isError: false,
  message: '',
  photos: [],
  filters: [
    {label: 'Popular', key:'popular'},
    {label: 'Highest Rated', key: 'hightest_rated'},
    {label: 'Upcoming', key: 'upcoming'},
    {label: 'Editors', key: 'editors'},
    {label: 'Fresh Today', key: 'fresh_today'},
    {label: 'Fresh Yesterday', key: 'fresh_yesterday'},
    {label: 'Fresh Week', key: 'fresh_week'}
  ],
  selectedFilter: 'popular',
  page: 1
}

export default function photos(state = initialState, action){
  switch(action.type){
    case PHOTOS_LOADED:
      return Object.assign({}, state,{
        photos: action.page === 1 ? filterNsfwPhotos(action.photos) : [...state.photos, ... filterNsfwPhotos(action.photos)],
        isLoading: false,
        isError: false,
        message: '',
        selectedFilter: action.selectedFilter,
        page: action.page
      });
    case PHOTOS_FETCH:
      if(state.selectedFilter !== action.selectedFilter){
        return Object.assign({}, state, {isLoading: true, selectedFilter: action.selectedFilter, photos: []});
      }else{
        return Object.assign({}, state, {isLoading: true, selectedFilter: action.selectedFilter});
      }
    case PHOTOS_ERROR:
      return Object.assign({}, state, {isLoading: false, isError: true, message: action.message});
    default:
      return state;
  }
}

function filterNsfwPhotos(photos){
  const filterPhotos = photos.filter(p => !p.nsfw);
  console.log(`filtered photos found ${photos.length - filterPhotos.length}`);
  return filterPhotos;
}
