import s from "./button.module.scss";

// eslint-disable-next-line react/prop-types
export const Button = ({ text }) => {
  return (
    <button className={s.button}>
      {text}
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
  );
};
