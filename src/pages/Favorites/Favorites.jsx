import TeacherCard from "components/TeacherCard/TeacherCard";
import Section from "components/Section/Section";
import Container from "components/Container/Container";
import { useEffect } from "react";
import { auth } from "server/firebaseConfig.js";
import { useDispatch } from "react-redux";
import { fetchFavorites } from "../../redux/favorite/favoriteOperation";
import useFavorites from "hooks/useFavorites";
import useUpdateFavorites from "hooks/useUpdateFavorites";
import css from "./Favorites.module.css";

export default function Favorites() {
  const { updateFavorites, isFavoriteBtn } = useUpdateFavorites();
  const { favorites } = useFavorites();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites(user));
    }
  }, [user, dispatch]);

  return (
    <Section>
      <Container>
        <h1 className={css.title}>Favorites</h1>
        {favorites.length === 0 && (
          <p className={css.empty}>Your Favorites list is empty</p>
        )}
        {favorites.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
            isFavoriteBtn={isFavoriteBtn}
            updateFavorites={updateFavorites}
          />
        ))}
      </Container>
    </Section>
  );
}
