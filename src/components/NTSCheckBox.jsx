// import NTSLabel from "@Controls/NTSLabel";

function NTSCheckbox(props) {
  return (
    <div class={`flex items-center gap-2`}>
    {props.position=="left" && <label class={props.labelclass}> {props.text}</label>}
     
      <input id={props.id} type="checkbox" 
      readOnly={props.readOnly} 
      class={"nts-checkbox-style " + props.class}
      name={props.name} 
      value={props.value} 
      required={props.required} 
      size={props.size} 
      label={props.label} 
      defaultchecked={props.defaultchecked} 
      checked={props.checked} 
      onClick={props.onclick} 
      disabled={props.disabled} 
      onchange={props.onchange} 
      gap={props.gap} />
    
    {(props.position=="right" || !props.position) && <label class={props.labelclass}> {props.text}</label>}
    </div>
  );
}

export default NTSCheckbox;