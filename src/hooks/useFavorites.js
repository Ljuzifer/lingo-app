import { useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoading,
  selectStatus,
  selectError,
} from '../redux/favorite/favoriteSelectors';


const useFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  return {
    favorites,
    isLoading,
    status,
    error,
  };
};

export default useFavorites;
