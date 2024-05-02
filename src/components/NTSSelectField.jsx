import { createSignal, createMemo } from "solid-js";
import NTSTextbox from "./NTSTextbox";

const NTSSelectField = (props) => {
  const [selectedOption, setSelectedOption] = createSignal(props.selectedOption);
  const [searchQuery, setSearchQuery] = createSignal("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    props.onSelectChange(event.target.value);
  };

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredOptions = createMemo(() => {
    let searchQueryresult="",text;
    const query = searchQuery().toLowerCase();
    searchQueryresult = props.options.filter((option) => {
      text = option[props.textProp].toString().toLowerCase();
      return text.includes(query);
    });

    if (searchQueryresult.length==0) {
      searchQueryresult = [{ [props.keyProp]: "notfound", [props.textProp]: "No option Found" }];
    }
    return searchQueryresult
  });

  return (
    <div class="nts-selectfield">
      {props.isSearch && <NTSTextbox type="text" value={searchQuery()} oninput={handleInput} placeholder="Search..." />}
      <select class={"nts-selectfield-style " + props.class} onchange={handleSelectChange} value={selectedOption()}>
        {props.excludeselect && <option value={""}>{"Select"}</option>}
        {filteredOptions().map((option, index) => (
          <option key={index} value={option[props.keyProp] ?? "value"}>
            {option[props.textProp] ?? "text"}

          </option>
        ))}
      </select>
    </div>
  );
};

export default NTSSelectField;
