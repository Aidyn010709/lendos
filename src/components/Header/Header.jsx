import {useEffect, useState} from "react";
import s from "./header.module.scss";
import logo from "../../shared/assets/img/logo.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import RegisterModal from "../../widgets/RegisterModal/RegisterModal.jsx";

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

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
          <button onClick={openModal} className={s.btn_reg}>Регистрация</button>
          <a href='https://admin.texflow.online/'>
            <button className={s.btn_auth}>Войти</button>
          </a>
        </div>
      </div>
      <RegisterModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          isSubmitted={isSubmitted}
          handleSubmi={handleSubmit}
          selectedOption={selectedOption}
          handleChange={handleChange}
      />
    </header>
  );
};
