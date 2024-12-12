import style from "./AppCard.module.css";

const AppCard = () => {
  return (
    <div className="container">
      <div className="card-top"></div>
      <div className={style.cardBottom}>
        <h4 className={style.title}>Titolo del post</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className={style.btn}>LEGGI DI PIU</button>
      </div>
    </div>
  );
};

export default AppCard;
