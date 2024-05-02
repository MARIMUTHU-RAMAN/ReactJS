
const NTSLink = (props) => {

  return (
    <a href={props.href} target={props.opennewtab ? `_blank` : ""} class={`nts-link-style ${props.class}`}>
      {props.text}
    </a>
  );
};

export default NTSLink;
