import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io";
import s from "./footer.module.scss";
import { RiTelegram2Fill } from "react-icons/ri";
import logo from "../../shared/assets/img/logo.svg";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.f_container} id="contact">
        <div className={s.f_content}>
          <div>
            <div className={s.logo_desc}>
              <img src={logo} alt="logo" />
              <div>
                <span>
                  Приложение, созданное специально для швейного <br />{" "}
                  производства, помогает сотрудникам эффективно <br /> управлять
                  своим временем и задачами.
                </span>
              </div>
            </div>

            <div className={s.contacts_navs}>
              <div className={s.contacts}>
                <span className={s.contacts_title}>Контакты</span>
                <div className={s.icon_wrap}>
                  <IoLogoInstagram className={s.icon} />
                  <p>@textflow.io</p>
                </div>
                <div className={s.icon_wrap}>
                  <RiTelegram2Fill className={s.icon} />
                  <p>@textflow_support</p>
                </div>
                <div className={s.icon_wrap}>
                  <IoLogoWhatsapp className={s.icon} />
                  <p>+(996) 990 889 880</p>
                </div>
                <div className={s.icon_wrap}>
                  <IoLogoWhatsapp className={s.icon} />
                  <p>+(996) 990 889 880</p>
                </div>
              </div>
              <div>
                <nav className={s.footer_nav}>
                  <span className={s.nav_title}>Навигация</span>
                  <a href="#" className={s.nav_link}>
                    Продукт
                  </a>
                  <a href="#" className={s.nav_link}>
                    Функции
                  </a>
                  <a href="#" className={s.nav_link}>
                    О нас
                  </a>
                  <a href="#" className={s.nav_link}>
                    Контакты
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
