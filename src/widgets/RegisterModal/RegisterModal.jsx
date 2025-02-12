import React from 'react';
import s from "./RegisterModal.module.scss";
import Modal from "react-modal";
import complete from "../../shared/assets/img/55 completed.svg";

Modal.setAppElement("#root");

const RegisterModal = ({isModalOpen, closeModal, isSubmitted, handleSubmit, selectedOption, handleChange}) => {
    return (
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
    );
};

export default RegisterModal;