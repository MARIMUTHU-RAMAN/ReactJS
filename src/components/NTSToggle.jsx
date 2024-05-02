function NTSToggle(props) {

  const getToggleStatus =(value)=>{
    props.togglechange(value)
  }

  return (
    <>
      <div className="nts-toggle-container">
        <label className="toggler-wrapper style-1">
          <input
            type="checkbox"
            id={props.id}
            checked={props.checked}
            name={props.name}
            onclick={props.onclick}
            onchange={(e)=>getToggleStatus(e.target.checked)}
          />
          <div class={`toggler-slider ${props.toggleStatus ? `${props.turnoncss ?? "!bg-blue-500" }` : props.turnoffcss ?? ""}`}>
            <span class="text-xs p-1 pt-2 text-white">on</span>
            <div class={`toggler-knob ${props.customnobcss}`}></div>
            <span class="text-xs p-1 pt-2 text-white">off</span>
          </div>
        </label>
      </div>
    </>
  );
}

export default NTSToggle;