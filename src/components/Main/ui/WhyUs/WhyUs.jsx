import s from "./whyus.module.scss";
import user from "../../../../shared/assets/img/user.svg";
import sort from "../../../../shared/assets/icons/Sort.svg";
import employee_card_img2 from "../../../../shared/assets/img/employee_card_img2.svg";
import employee_card_img from "../../../../shared/assets/img/employee_card_img.svg";
import order from "../../../../shared/assets/img/order_img.svg";
import order2 from "../../../../shared/assets/img/order_img2.svg";
import phone from "../../../../shared/assets/img/phone.svg";
import phone2 from "../../../../shared/assets/img/req_phone.svg";
import system from "../../../../shared/assets/img/system.svg";
import popup from "../../../../shared/assets/img/popup_massage.svg";
import esssential from "../../../../shared/assets/icons/essential.svg";
import skidka from "../../../../shared/assets/icons/skidka.svg";
import Modal from "react-modal";
import complete from "../../../../shared/assets/img/55 completed.svg";
import { useEffect, useState } from "react";

Modal.setAppElement("#root");

export const WhyUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const width = window.innerWidth;

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
    <div className={s.wrapper}>
      <div className={s.container} id="features">
        <h2> Почему выбирают нас ?</h2>
        <h2 className={s.func}>функции</h2>
        <div className={s.card_employess}>
          <div className={s.card_info}>
            <div className={s.desc}>
              <p className={s.desc_p}>Управление сотрудниками</p>
              <span className={s.desc_span}>
                Создавайте заказы и управляйте работой сотрудников
              </span>
            </div>
            <div className={s.some_card}>
              <div className={s.about_employee}>
                <div className={s.his_name}>
                  <img src={user} className={s.employee_img} alt='user'/>
                  <div>
                    <h4>Дияз Баиров</h4>
                    <span>Закройщик</span>
                  </div>
                </div>
                <div>
                  <img src={sort} alt="icon"/>
                </div>
              </div>
              <div className={s.empl_img}>
                <img src={employee_card_img2} alt="sdc"/>
              </div>
            </div>
          </div>
          <div className={s.someCard_wrap}>
            <div className={s.some_card}>
              <div className={s.xz2_img}>
                <img
                    src={employee_card_img}
                    alt="sdc"
                    style={{
                      width: "100%",
                    }}
                />
              </div>
            </div>
            <div className={s.desc}>
              <p className={s.desc_p}>Управление финансами</p>
              <span className={s.desc_span}>
                Отслеживайте каждый сом выплаченый <br/> сотрудникам!
              </span>
            </div>
          </div>
        </div>

        <div className={width <= 496 ? s.card_employess : s.card_auto}>
          <div className={width <= 496 && s.card_info}>
            <div className={s.desc}>
              <p className={s.desc_p}>Автоматизация заказов</p>
              <span className={s.desc_span}>
                Ведите весь производственный учет с телефона.
              </span>
            </div>
            <div className={s.some_card}>
              <div className={s.auto_image_wrap}>
                <img
                    src={order}
                    alt="sdc"
                />
              </div>
            </div>
          </div>
          <div>
            <div className={s.some_card}>
              <div>
                <img
                    src={order2}
                    alt="sdc"
                    style={{
                      width: "100%",
                    }}
                />
              </div>
            </div>
            <div className={s.desc}>
              <p className={s.desc_p}>Управление производством </p>
              <span className={s.desc_span}>
                Сладите за статистикой и за скоростью работы ваших сотрудников
                для улучшение производительности!
              </span>
            </div>
          </div>
        </div>

        <div className={s.card_employess}>
          <div className={width <= 496 && s.card_info}>
            <div className={s.desc}>
              <p className={s.desc_p}>
                Управление заказами <br/> и сотрудниками
              </p>
              <span className={s.desc_span}>
                Интуитивно понятный интерфйес, управляйте заказами сотрудниками
                и финансами в одном вместе
              </span>
            </div>
            <div className={s.some_card}>
              <div>
                <img
                    src={system}
                    alt="sdc"
                    className={s.xz_img}
                    style={{
                      width: "100%",
                    }}
                />
              </div>
            </div>
          </div>
          <div className={width <= 496 && s.someCard_wrap}>
            <div className={s.some_card_phone}>
              <div className={s.img_wrap}>
                <img
                    src={phone}
                    alt="sdc"
                    style={{
                      width: "100%",
                    }}
                />
              </div>
            </div>
            <div className={s.desc}>
              <p className={s.desc_p}>Доступ с телефона</p>
              <span className={s.desc_span}>
                Наш продукт лоступен с любых устройств
              </span>
            </div>
          </div>
        </div>

        <div className={s.request}>
          {width > 496 &&
              <div className={s.req_img_wrap}>
            <img src={phone2} alt="img" className={s.req_img}/>
            <div className={s.popup}>
              <img src={popup} alt="img"/>
            </div>
          </div>}

          <div
              className={s.req_wrap}
              style={{
                width: "100%",
              }}
          >
            <h3 className={s.req_title}>
              Запросите <br/> демонстрацию
            </h3>
            <p className={s.req_desc}>
              Абсолютно бесплатная и подробная консультация!
            </p>

            <div className={s.req_cards}>
              <div className={s.req_card}>
                <img src={esssential} alt="icon"/>
                <div>
                  <h4 className={s.req_card_title}>Поможем внедрить</h4>
                  <span className={s.req_card_desc}>
                    Оценим <br/> производительность <br/> вашей фабрики
                  </span>
                </div>
              </div>
              <div className={s.req_card}>
                <img src={skidka} alt="icon"/>

                <div>
                  <h4 className={s.req_card_title}>Скидка есть !</h4>
                  <span className={s.req_card_desc}>
                    Сделаем вам <br/> персональную скидку.
                  </span>
                </div>
              </div>
            </div>
            <div className={s.btn_wrap_req}>
              <button className={s.button} onClick={openModal}>
                Получить демонстрацию
                <span className={s.icon}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.modal_wrap}>
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Registration Modal"
            className={s.customModal}
            overlayClassName={s.customOverlay}
        >
          <div className={s.modalContent}>
            {isSubmitted ? (
                <div className={s.successMessage}>
                  <img src={complete} alt="complete" className={s.complete_img}/>
                  <h2 className={s.complete_title}>Заявка отправлена!</h2>
                  <p className={s.complete_desc}>
                    Скоро с ваши свяжутся наши консультанты <br/> Спасибо за
                    обращение!
                  </p>
                  <button className={s.modalSubmit} onClick={closeModal}>
                    Далее
                  </button>
                </div>
            ) : (
                <>
                  <h2 className={s.modalTitle}>Информация о вас</h2>
                  <form className={s.form} onSubmit={handleSubmit}>
                    <div>
                      <label className={s.label}>
                        ФИО (владельца или естественного лица)
                      </label>
                      <input
                          type="text"
                          className={s.modalInput}
                          placeholder="ФИО"
                          required
                      />
                      <label className={s.label}>
                        Сколько у вас сотрудников на производстве?
                      </label>
                      <input
                          type="text"
                          className={s.modalInput}
                          placeholder="Введите количество"
                          required
                      />
                      <div className={s.selectContainer}>
                        <label className={s.label} htmlFor="accounting-method">
                          Как вы ведете свой учет?
                        </label>
                        <select
                            id="accounting-method"
                            className={s.select}
                            // value={selectedOption}
                            // onChange={handleChange}
                            required
                        >
                          <option disabled value="">
                            Выбрать ответ
                          </option>
                          <option value="1C">1C</option>
                          <option value="МойСклад">МойСклад</option>
                          <option value="Excel">Excel</option>
                          <option value="На бумаге">На бумаге</option>
                          <option value="Другое">Другое</option>
                        </select>
                      </div>

                      <label className={s.label}>Введите номер телефона</label>
                      <input
                          type="tel"
                          className={s.modalInput}
                          placeholder="Введите номер"
                          required
                      />
                    </div>
                    <button type="submit" className={s.modalSubmit}>
                      Далее
                    </button>
                  </form>
                </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};
