import { createSignal } from "solid-js";

const NTSMultiSelectField = (props) => {

  const { options, defaultSelectedValues, onSelectedValuesChange } = props;
  const [isOpen, setIsOpen] = createSignal(false);
  const [selectedOptions, setSelectedOptions] = createSignal(defaultSelectedValues || []);
  const [searchTerm, setSearchTerm] = createSignal("");
  const [searchOptions, setSearchOptions] = createSignal(options);

  const toggleDropdown = () => setIsOpen(!isOpen());

  const toggleOption = (value) => {
    const currentIndex = selectedOptions().indexOf(value);
    const newSelectedOptions = [...selectedOptions()];
    if (currentIndex === -1) {
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }
    setSelectedOptions(newSelectedOptions);
    onSelectedValuesChange(newSelectedOptions);
  };

  const selectAllOptions = () => {
    if (selectedOptions().length === options.length) {
      setSelectedOptions([]);
      onSelectedValuesChange([]); 
    } else {
      setSelectedOptions(options.map((option) => option.value));
      onSelectedValuesChange(options.map((option) => option.value));
    }
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const filteredOptions = options.filter((option) =>
      option.text.toLowerCase().includes(searchTerm().toLowerCase())
    );
    setSearchOptions(filteredOptions);
  };

  return (
    <div class={`nts-multiselect-container`}>
      <div class="nts-selectfield-width">
        <button
          type="button"
          class={`nts-multiselect-toggle ${props.class}`}
          onClick={toggleDropdown}
        >
          {selectedOptions().length === 0 ? (
            <span>{`Select ${props.optionname ?? "Options"}`}</span>
          ) : (
            <span class="nts-toggle-section">
              {selectedOptions().map((selectedOption) => (
                <span class="nts-selected-options">
                  {options.find((option) => option.value === selectedOption)?.text}
                  <svg
                    class="ml-1 h-4 w-4 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOption(selectedOption);
                    }}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              ))}
            </span>
          )}
          <svg
            class={`-mr-1 ml-2 h-5 w-5 ${isOpen() ? "transform rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L10 13.586l6.293-6.293a1 1 0 111.414 1.414l-7 7z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen() && (
        <div class={`nts-multiselect-option-container ${props.class}`}>
          <div class="py-1 px-4">
            <input
              type="text"
              class="nts-multiselect-search"
              placeholder="Search"
              value={searchTerm()}
              onInput={searchHandler}
            />
          </div>
          {}
          <div class={`py-1 ${searchOptions().length > 0 ? "" : "px-4"}`}>
            <div class={`nts-selected-multiselect-container ${searchOptions().length > 0 ? "" : "!hidden"}`}>
              <input
                type="checkbox"
                class="nts-multiselect-checkbox"
                checked={selectedOptions().length === options.length}
                onChange={selectAllOptions}
              />
              <span class="ml-2">Select All</span>
            </div>
            {searchOptions().length > 0 ? (
              searchOptions().map((option) => (
                <div class="nts-selected-multiselect-container">
                  <input
                    type="checkbox"
                    class="nts-multiselect-checkbox"
                    value={option.value}
                    checked={selectedOptions().includes(option.value)}
                    onChange={() => toggleOption(option.value)}
                  />
                  <span class="ml-2">{option.text}</span>
                </div>
              ))
            ) : (
              <div>{`${props.customnotfound ?? "No Options found"}`}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NTSMultiSelectField;