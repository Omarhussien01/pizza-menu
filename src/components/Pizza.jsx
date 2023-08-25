/* eslint-disable react/prop-types */
export default function Pizza(props) {
  return (
    <div className="pizza">
      <img src={`\\${props.photoName}`} alt="" />

      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
