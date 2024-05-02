
const NTSCard = (props) => {

  return (
    <div class={"card"}>
      <img class={"card-image"} src={props.imageUrl} alt={props.title} />
      <div class={"card-content"}>
        <div class={"card-title"}>{props.title}</div>
        <p class={"card-description"}>{props.description}</p>
      </div>
      {props.customCard}
    </div>
  );
};

export default NTSCard;
