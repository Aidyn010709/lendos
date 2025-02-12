import { useEffect } from "react";
import s from "./BurgerMenu.module.scss";

export const BurgerMenu = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={s.Burger}>
      <div className={s.header}>
        <button onClick={handleClick} className={s.button}>
          <svg
            fill="#000"
            className={`${s.burger6} ${s.ham} ${s.hamRotate} ${s.ham1} ${
              isOpen ? s.isClosed : ""
            }`}
            viewBox="0 0 100 100"
          >
            <path
              className={`${s.line} ${s.top}`}
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className={`${s.line} ${s.middle}`} d="m 30,50 h 40" />
            <path
              className={`${s.line} ${s.bottom}`}
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>
      </div>
      <div className={`${s.wrapper} ${isOpen ? s.active : ""}`}>
        <nav className={s.nav}>
          <a href="#product" className={s.item} onClick={closeMenu}>
            О продукте
          </a>
          <a href="#features" className={s.item} onClick={closeMenu}>
            Функции
          </a>
          {/* <a href="#" className={s.item}>
            О нас
          </a> */}
          <a href="#contact" className={s.item} onClick={closeMenu}>
            Контакты
          </a>
          <div className={s.buttons}>
            <button className={s.btn_reg}>Регистрация</button>
            <button className={s.btn_auth}>Войти</button>
          </div>
        </nav>
      </div>
    </div>
  );
};
