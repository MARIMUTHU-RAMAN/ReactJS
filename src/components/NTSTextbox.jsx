
function NTSTextbox(props) {
  return (
    <div className={`grid ${props?.wfull != undefined ? props?.wfull : ""}`}>
     
      <input
        onKeyUp={props?.onKeyUp}
        type={props.type ? props.type : "text"}
        id={props.id}
        // {...props.register(props.id, { shouldValidate: true })}
        placeholder={props.title} autoComplete="off"
        disabled={props.disabled}
        tabIndex={props?.className?.includes("Disabled") ? "-1" : props?.tabIndex}
        min={props.min}
        max={props.max}
        autoFocus={props.focus}
        className={"nvl-TextBox " + props.className + "  " + (props.errors?.[props.id] ? "border-red " : "  border-gray-300") + (props.icon ? "" : " ")}
      />
    </div>
  );
}

export default NTSTextbox;