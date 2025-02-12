import s from "./cards.module.scss";

// eslint-disable-next-line react/prop-types
export const Cards = ({ icon, title, description }) => {
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <div className={s.icon_wrap}>
          <div className={s.icon}>{icon}</div>
        </div>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
