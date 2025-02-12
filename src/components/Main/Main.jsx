import { useEffect, useState } from "react";
import s from "./main.module.scss";
import { NewOrder } from "./ui/NewOrders/NewOrder";
import Modal from "react-modal";
import complete from "../../shared/assets/img/55 completed.svg";

Modal.setAppElement("#root");

export const Main = () => {
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
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.automatization}>
          <button className={s.title}>Автоматизация</button>
          <div className={s.subTitle}>швейного производства!</div>
        </div>

        <div>
          <NewOrder />
        </div>
        <div className={s.btn_wrap}>
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
                <img src={complete} alt="complete" className={s.complete_img} />
                <h2 className={s.complete_title}>Заявка отправлена!</h2>
                <p className={s.complete_desc}>
                  Скоро с ваши свяжутся наши консультанты <br /> Спасибо за
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
                        value={selectedOption}
                        onChange={handleChange}
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
