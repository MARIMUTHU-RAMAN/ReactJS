function NTSTextbox(props) {
  return (
    <>
     {props.ismultiline ?  
     <textarea
      id={props.id}
      class={
        "nts-multiline-textbox p-2 " +
        props.class
      }
      placeholder={props.placeholder}
      disabled={props.disabled}
      maxlength={props.maxlength ? props.maxlength : "250"}
      onchange={props.onchange}
      required={props.required}
    ></textarea> : 
    <input
        id={props.id}
        class={
          "nts-textbox !pl-2 " +
          props.class
        }
        value={props.value ?? ""}
        title={props.title}
        oninput={props.oninput}
        placeholder={props.placeholder}
        minlength={props.minlength}
        maxlength={props.maxlength ? props.maxlength : "100"}
        onpaste={props.onpaste}
        label={props.label}
        type={props.type ? props.type : "text"}
        onclick={props.onclick}
        onchange={props.onchange}
        pattern={props.pattern}
        disabled={props.disabled}
        autoComplete="off"
        min={props.min}
        max={props.max}
      />}
      </>
  );
}

export default NTSTextbox;