import { useState } from "react";
import s from "./header.module.scss";
import logo from "../../shared/assets/img/logo.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <a href="#" className={s.logo}>
          <img src={logo} alt="logo-header" className={s.logo_header}/>
        </a>
        <div className={s.burger}>
          <BurgerMenu isOpen={isBurgerOpen} setIsOpen={setIsBurgerOpen} />
        </div>
        <nav className={s.nav}>
          <a href="#about" className={s.item}>
            О продукте
          </a>
          <a href="#features" className={s.item}>
            Функции
          </a>
          <a href="#contact" className={s.item}>
            Контакты
          </a>
        </nav>
        <div className={s.buttons}>
          <button className={s.btn_reg}>Регистрация</button>
          <button className={s.btn_auth}>Войти</button>
        </div>
      </div>
    </header>
  );
};
