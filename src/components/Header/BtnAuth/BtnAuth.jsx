import css from "./BtnAuth.module.css";
import BasicModal from "components/Modal/BasicModal";
import AuthModal from "components/Form/AuthForm/AuthModal";
import useAuth from "hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/auth/authOperation";
import useModal from "hooks/useModal";
import sprite from "images/InlineSprite.svg";
import { clearFavorites } from "../../../redux/favorite/favoriteSlice";
import { selectRandomStyle } from "../../../redux/auth/authSelectors";

export default function BtnAuth() {
  const dispatch = useDispatch();
  const { isModalOpen, modalContent, openModal, closeModal } = useModal();
  const { user, IsAuthCheck } = useAuth();
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearFavorites());
  };

  const randomStyle = useSelector(selectRandomStyle);

  return (
    <>
      {IsAuthCheck ? (
        <div className={css.list_btn}>
          <p className={css.name}>Hello, {user.displayName}</p>{" "}
          <button className={css.btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <ul className={css.list_btn}>
          <li>
            <button
              className={css.btn_login}
              onClick={() => openModal("login")}
              style={{ "--login-color": randomStyle.btn }}
            >
              <svg style={{ "--login-icon-color": randomStyle.btn }}>
                <use xlinkHref={`${sprite}#login`} />
              </svg>
              Log in
            </button>
          </li>
          <li>
            <button
              className={css.btn}
              onClick={() => openModal("registration")}
            >
              Registration
            </button>
          </li>
        </ul>
      )}
      {IsAuthCheck ? (
        <button className={css.btn_login_mob} onClick={handleLogout}>
          <svg className={css.icon_book}>
            <use xlinkHref={`${sprite}#logout`} />
          </svg>
        </button>
      ) : (
        <button
          className={css.btn_login_mob}
          onClick={() => openModal("login")}
        >
          <svg className={css.icon_book}>
            <use xlinkHref={`${sprite}#avatarUser`} />
          </svg>
        </button>
      )}

      {isModalOpen && (
        <BasicModal isModal={closeModal}>
          <AuthModal modalContent={modalContent} isModal={closeModal} />
        </BasicModal>
      )}
    </>
  );
}
