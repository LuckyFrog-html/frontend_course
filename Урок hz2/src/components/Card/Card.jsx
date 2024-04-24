import classNames from "classnames";import "./Card.scss";

const Card = ({ name, setSpec, spec }) => {
    return (
        <div
            onClick={() => setSpec(name === spec ? "" : name)}
            className={classNames("card", { active: spec === name })}>
            <div className="card__image">картинка</div>
            <div className="card__content">
                <p>Спец</p>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;
