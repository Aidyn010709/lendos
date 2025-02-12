import s from "./automation.module.scss";
import { CardAutomation } from "./Card/Card";
import automate from "../../../../shared/assets/img/automate.png";

export const Automation = () => {
  return (
    <section className={s.wrapper} id="about">
      <div className={s.content}>
        <div className={s.desc}>
          <h2 className={s.title}>
            Автоматизируйте <br /> свое производство <br />
            одежды
          </h2>
          <p className={s.subTitle}>
            Отслеживайте все процессы своего швейного <br /> производства с
            помощью
            <b>TexFlow</b>.
          </p>
          <p className={s.subTitle}>
            Управление производством, заказами, <br /> сотрудниками, финансами в
            одном приложении.
          </p>
        </div>
        <div className={s.mainImage}>
          <img src={automate} alt="Automate production" />
        </div>
      </div>
      <CardAutomation />
    </section>
  );
};
