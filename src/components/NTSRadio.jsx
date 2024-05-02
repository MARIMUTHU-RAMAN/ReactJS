// import NTSLabel from "@Controls/NTSLabel";

function NTSRadio(props) {
  return (
    <div class={`flex items-center gap-2 ${props.position=="left" ? "flex-row-reverse" : ""}`}>
      <input 
           id={props.id} 
           type="radio" 
           class={"nts-radio-style "+props.class}
           required={props.required} 
           label={props.label} 
           name={props.name} 
           size={props.size} 
           checked={props.checked} 
           defaultchecked={props.defaultchecked} 
           onclick={props.onclick} 
           onchange={props.onchange}
           disabled={props.disabled}
           />
     <label class={props.labelclass}> {props.text}</label>

      {/* <NTSLabel 
            for={props.id} 
            text={props.text} 
            class={props.class} 
            value={props.value} /> */}
    </div>
  );
}

export default NTSRadio;