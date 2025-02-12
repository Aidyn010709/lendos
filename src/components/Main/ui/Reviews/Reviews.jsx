import styles from "./reviews.module.scss";
import user from "../../../../shared/assets/img/testi-author.png.png";

const reviews = [
  {
    id: 1,
    name: "Тахмина",
    company: 'Фабрика  “Dalida”',
    text: "Отличные ребята! С самого начала и до сих пор со мной на связи остаются, тех.поддержка на высоте. Большие молодцы, спасибо вам!",
  },
  {
    id: 2,
    name: "Ильяз",
    company: 'Фабрика  “Ailin”',
    text: "Использую TexFlow уже пару месяцев, все отлично работает! Автоматизировали процесс калькуляции зарплаты, и контроля производства заказов.",
  },
  {
    id: 3,
    name: "Жалил",
    company: "Фабрика  “Quurchaq”",
    text: "Провели мне консультацию, объяснили подробно и понятно, все понравилось приобрел систему, первый месяц работы и уже вижу результат. Работа стала идти быстрее и без ошибок. Спасибо",
  },
  {
    id: 4,
    name: "Тахмина",
    company: 'Фабрика  “Dalida”',
    text: "Отличные ребята! С самого начала и до сих пор со мной на связи остаются, тех.поддержка на высоте. Большие молодцы, спасибо вам!",
  },
  {
    id: 5,
    name: "Ильяз",
    company: 'Фабрика  “Ailin”',
    text: "Использую TexFlow уже пару месяцев, все отлично работает! Автоматизировали процесс калькуляции зарплаты, и контроля производства заказов.",
  },
];

const Reviews = () => {
  return (
    <div>
      <div className={styles.reviewsContainer}>
        <div className={styles.desc}>
          <h2 className={styles.title}>ОТЗЫВЫ</h2>
          <h2 className={styles.subtitle}>ГОЛОСА НАШИХ КЛИЕНТОВ</h2>
        </div>

        <div className={styles.cards}>
          {reviews.map((review) => (
              <div key={review.id} className={styles.reviewCard}>
                <div className={styles.avatar}>
                  <img src={user} alt="sdcs" className={styles.img} />
                  <div>
                    <h4>{review.name}</h4>
                    <p className={styles.company}>{review.company}</p>
                  </div>
                </div>
                <p className={styles.text}>{review.text}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
