import { useEffect, useState } from "react";
import s from "./main.module.scss";
import { NewOrder } from "./ui/NewOrders/NewOrder";
import RegisterModal from "../../widgets/RegisterModal/RegisterModal.jsx";

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

        <div className='container'>
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
      <RegisterModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          isSubmitted={isSubmitted}
          handleSubmi={handleSubmit}
          selectedOption={selectedOption}
          handleChange={handleChange}
      />
    </div>
  );
};
