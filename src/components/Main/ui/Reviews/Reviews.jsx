import styles from "./reviews.module.scss";
import user from "../../../../shared/assets/img/testi-author.png.png";

const reviews = [
  {
    id: 1,
    name: "Jacob",
    company: 'Фабрика "ALLIN"',
    text: "The staff is very friendly. When we entered the Hostel, we were pleasantly surprised that the photo on the website corresponds to reality. It's clear! We came to International competitions, so silence was very important. €",
  },
  {
    id: 2,
    name: "Emily",
    company: 'Компания "TravelGo"',
    text: "The staff is very friendly.When we entered the Hostel, we were pleasantly surprised that the photo on the website corresponds to reality. It's clear! We came to International competitions, so silence was very important. ё",
  },
  {
    id: 3,
    name: "Michael",
    company: 'Корпорация "TechMax"',
    text: "The staff is very friendly.When we entered the Hostel, we were pleasantly surprised that the photo on the website corresponds to reality. It's clear! We came to International competitions, so silence was very important. ё",
  },
  {
    id: 4,
    name: "Michael",
    company: 'Корпорация "TechMax"',
    text: "The staff is very friendly.When we entered the Hostel, we were pleasantly surprised that the photo on the website corresponds to reality. It's clear! We came to International competitions, so silence was very important. ё",
  },
  {
    id: 4,
    name: "Michael",
    company: 'Корпорация "TechMax"',
    text: "The staff is very friendly.When we entered the Hostel, we were pleasantly surprised that the photo on the website corresponds to reality. It's clear! We came to International competitions, so silence was very important. ё",
  },
];

const Reviews = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reviewsContainer}>
        <div className={styles.desc}>
          <h2 className={styles.title}>ОТЗЫВЫ</h2>
          <h2 className={styles.subtitle}>ГОЛОСА НАШИХ КЛИЕНТОВ</h2>
        </div>

        <div className={styles.cards}>
          {reviews.map((review) => (
            <>
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
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
