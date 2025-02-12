import { Cards } from "../../../../../widgets/Cards/Cards";
import fabric from "../../../../../shared/assets/icons/fabric.svg";
import mobile from "../../../../../shared/assets/icons/mobile.svg";
import nav from "../../../../../shared/assets/icons/navigation.svg";
import peoples from "../../../../../shared/assets/icons/peoples.svg";
import stroke from "../../../../../shared/assets/icons/stroke.svg";
import hands from "../../../../../shared/assets/icons/hands.svg";

import s from "./card.module.scss";

export const CardAutomation = () => {
  return (
    <div className={s.cards}>
      <Cards
        icon={<img src={fabric} alt="fabric icon" />}
        title="Ваша фабрика в вашем кармане"
        description="Контролируйте производство ваших заказов на всех этапах производства, через телефон!"
      />
      <Cards
        icon={<img src={mobile} alt="fabric icon" />}
        title="Удобный интерфейс"
        description="Разобраться может любой человек, независимо от технических знаний. Гораздо легче чем 1С или мой склад."
      />
      <Cards
        icon={<img src={nav} alt="fabric icon" />}
        title="Отчеты в 1 клик"
        description="Получайте отчеты о производительности ваших сотрудников в любое время, нажав всего 1 кнопку!"
      />
      <Cards
        icon={<img src={peoples} alt="fabric icon" />}
        title="100+ сотрудников"
        description="Контролируйте производство ваших заказов на всех этапах производства, через телефон! "
      />
      <Cards
        icon={<img src={stroke} alt="fabric icon" />}
        title="3x быстрее"
        description="Ускорьте сбор информации о всех процессах на своем производстве в режиме реального времени. "
      />
      <Cards
        icon={<img src={hands} alt="fabric icon" />}
        title="5x дешевле"
        description="Качественное приложение, не значит дорогое приложение! Наши цены приятно вас удивят.  "
      />
    </div>
  );
};
