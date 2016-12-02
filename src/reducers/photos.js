
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
    case 'PHOTOS_LOADED':
      return Object.assign({}, state,{
        photos: action.page === 1 ? action.photos : [...state.photos, ...action.photos],
        isLoading: false,
        isError: false,
        message: '',
        selectedFilter: action.selectedFilter,
        page: action.page
      });
    case 'FETCH_PHOTOS':
      return Object.assign({}, state, {isLoading: true, selectedFilter: action.selectedFilter});
    case 'PHOTOS_ERROR':
      return Object.assign({}, state, {isLoading: false, isError: true, message: action.message});
    default:
      return state;
  }
}
