import s from "./otchet.module.scss";
import orders from "../../../../shared/assets/icons/orders.svg";

export const Otchet = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.mainCard}>
        <p className={s.zarplata}>Зарплатный отчёт</p>
        <p>Добавить сотрудника</p>
      </div>
      <div className={s.buttonContainer}>
        <button className={s.btn}>Создать первый заказ</button>
      </div>
      <div className={s.order_card}>
        <div className={s.order_icon}>
          <img src={orders} alt="otchet" />
        </div>
        <span className={s.status}>Статус заказа</span>
        <h3>Производство</h3>
      </div>
    </div>
  );
};
