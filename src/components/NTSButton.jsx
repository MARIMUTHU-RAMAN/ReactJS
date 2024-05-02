function NTSButton(props) {
  return (
    <button 
          id={props.id} 
          type={props.type}
          onClick={props.onClick}
          disabled={props.disabled} 
          class={props.ButtonType == "success" ? " nts-button-success" : 
                    props.ButtonType == "danger" ? " nts-button-danger " :
                    props.ButtonType == "warning" ? " nts-button-warning " : 
                    props.ButtonType == "dark" ? " nts-button-dark " :
                    props.ButtonType == "light" ? " nts-button-light " : 
                    props.ButtonType == "link" ? " nts-button-link  " :
                    props.ButtonType == "primary" ? "nts-button-primary ": 
                    props.ButtonType == "default" ? "nts-button "
                    : props.class}>
          {props.text}
    </button>
  );
}

export default NTSButton;