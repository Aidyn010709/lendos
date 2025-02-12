import { Otchet } from "../otchet/Otchet";
import s from "./neworder.module.scss";
import photo_product from "../../../../shared/assets/img/photo_product.png";

export const NewOrder = () => {
  const width = window.innerWidth;

  console.log(width)
  return (
    <div className={s.wrapper}>
      <div className={s.mainCard}>
        <h3 className={s.card_title}>Футболка Игорь WB</h3>
        <div className={s.card_content}>
          <div className={s.wrap_card_img}>
            <img src={photo_product} alt="card-img" className={s.card_img} />
          </div>
          <div className={s.desc}>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Категория:</div>
              <div className={s.desc_content_name_value}>Футболка</div>
            </div>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Общее количество:</div>
              <div className={s.desc_content_name_value}>4000</div>
            </div>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Ткань:</div>
              <div className={s.desc_content_name_value}>супрем</div>
            </div>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Размеры:</div>
              <div className={s.desc_content_name_value}>42,44,46,48</div>
            </div>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Дата запуска:</div>
              <div className={s.desc_content_name_value}>31.12.2023</div>
            </div>
            <div className={s.desc_content_name}>
              <div className={s.desc_content_name_title}>Срок сдачи:</div>
              <div className={s.desc_content_name_value}>31.12.2023</div>
            </div>
          </div>
        </div>
        <div className={s.feedback}>
          <span className={s.feedback_title}>Комментарий</span>
          {width <= 768
              ? null
              :
              <>
                <div className={s.border}></div>
                <p className={s.feedback_desc}>
                  Клиент просит выделить особое внимание на качество товара.
                </p>
              </>
          }
        </div>
      </div>
      <Otchet/>
    </div>
  );
};
