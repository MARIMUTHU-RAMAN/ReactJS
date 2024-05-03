import { createSignal, onMount } from "solid-js";
import NTSCard from "@components/NTSCard";
import img from "./assets/bridge.svg";
import NTSMultiSelectField from "@components/NTSMultiSelectField";
import NTSButton from "@components/NTSButton";
import NTSCheckbox from "./components/NTSCheckBox";
import NTSLink from "./components/NTSLink";
import NTSRadio from "./components/NTSRadio";
import NTSSelectField from "./components/NTSSelectField";
import NTSTextbox from "./components/NTSTextbox";
import NTSToggle from "./components/NTSToggle";
import NTSGridTable from "./components/NTSGridtable";

const ComponentsList = (props) => {

  onMount(() => {
    localStorage.setItem("authorized", "false");
  });

  const options = [
    { value: "", text: "Select" },
    { value: "opt1", text: "Option 1" },
    { value: "opt2", text: "Option 2" },
    { value: "opt3", text: "Option 3" },
    { value: "opt4", text: "Option 4" },
    { value: "opt5", text: "Option 5" },
  ];

  const optionsSingleField = [
    { id: "option1", name: "Option 1" },
    { id: "option2", name: "Option 2" },
    { id: "option3", name: "Option 3" },
  ];

  const defaultSelectedValues = ["opt1", "opt3"];
  const [selectedValues, setSelectedValues] = createSignal(defaultSelectedValues);
  const [toggleChange, setToggleChange] = createSignal(true);

  const handleSelectedValues = (values) => {
    setSelectedValues(values);
  };

  const [selectedOption, setSelectedOption] = createSignal("option3");

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

//Grid table


function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const generateRandomData = (count) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const randomName = getRandomName();
    const randomAge = getRandomAge();
    const randomCity = getRandomCity();
    const lastName = getLastname();
    data.push({ id: i, name: randomName, age: randomAge, city: randomCity, lastName :lastName });
  }
  return data;
};

const getRandomName = () => {
  const names = ["John", "Alice", "Bob", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Amelia"];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomAge = () => {
  return Math.floor(Math.random() * 50) + 20; // Random age between 20 and 70
};

const getRandomCity = () => {
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  return cities[Math.floor(Math.random() * cities.length)];
};

const getLastname = () => {
  const cities = ["sdsdsdsdNew York", "Losfdf Angeles", "Chicdfdfago", "Hdfdouston", "Phdfoenix", "Phildfadelphia", "Sadfn Antonio", "San dfDiego", "Dalldfas", "df Jose"];
  return cities[Math.floor(Math.random() * cities.length)];
};

const data = generateRandomData(100);

const columns = ["id", "name", "age", "city","lastName"];

  const components = [
    {
      componentName: "Button",
      component: (
        <div class="flex gap-4 m-2">
          <NTSButton text="default" ButtonType="default" />
          <NTSButton text="success" ButtonType="success" />
          <NTSButton text="danger" ButtonType="danger" />
          <NTSButton text="warning" ButtonType="warning" />
          <NTSButton text="dark" ButtonType="dark" />
          <NTSButton text="light" ButtonType="light" />
          <NTSButton text="link" ButtonType="link" />
          <NTSButton text="primary" ButtonType="primary" />
        </div>
      ),
    },
    {
      componentName: "Card",
      component: (
        <NTSCard
          title="Active Users"
          description="15,00,000 +"
          imageUrl={img}
          customCard={
            <div class="justify-end flex">
              <NTSButton text="See Users" ButtonType="success" />
            </div>
          }
        />
      ),
    },
    {
      componentName: "Checkbox",
      component: (
        <>
          <NTSCheckbox position="right" text="PDF" labelclass={"items-center text-green-500"} />
          <NTSCheckbox position="left" text="CSV" labelclass={"items-center text-blue-500"} />
          <NTSCheckbox position="right" text="JSON" labelclass={"items-center text-cyan-500"} />
        </>
      ),
    },
    { componentName: "Link", component: <NTSLink href="https://chat.openai.com/" opennewtab={true} text="Chat GPT Link" /> },
    {
      componentName: "Radio Button",
      component: (
        <>
          <NTSRadio position="left" name={"report_generation"} text="Generate Report" />
          <NTSRadio position="left" name={"report_generation"} text="Visualize" />
        </>
      ),
    },
    {
      componentName: "Select Field",
      component: (
        <>
          <NTSSelectField selectedOption={"option3"} isSearch={true} options={optionsSingleField} keyProp="id" textProp="name" onSelectChange={handleSelectChange} />
          <p>Selected Option: {selectedOption()}</p>
        </>
      ),
    },
    {
      componentName: "MultiSelect Field",
      component: (
        <>
          <NTSMultiSelectField class="!w-[24rem] bg-black" options={options} onSelectedValuesChange={handleSelectedValues} defaultSelectedValues={defaultSelectedValues} />
          <div class="mt-4">
            <h2 class="text-lg font-semibold mb-2">Selected Values:</h2>
            {selectedValues()?.map((value) => (
              <div>{value}</div>
            ))}
          </div>
        </>
      ),
    },
    { componentName: "Textbox", component: <NTSTextbox placeholder="Enter something..." /> },
    { componentName: "Multiline Textbox", component: <NTSTextbox placeholder="Enter something..." ismultiline /> },
    {
      componentName: "Toggle",
      component: (
        <>
          <NTSToggle checked togglechange={setToggleChange} turnoncss={"!bg-green-500"} turnoffcss={"!bg-red-500"} toggleStatus={toggleChange()} customcolor={"!bg-green-500"} />
          <span> Toggle Status : {toggleChange() ? "On" : "Off"}</span>
        </>
      ),
    },
    { componentName: "Grid Table", component: <NTSGridTable data={data} columns={columns} 
    sortColumn={true} 
    searchposition={'end'}
    // paginationposition={""}
    /> },
  ];

  return (
    <div class="container">
      <h1 class="text-2xl text-center italic font-bold text-blue-500">NTS Components List</h1>
      <div class="grid grid-cols-2 gap-4">
        <For each={components}>{(component) => (
            <div class="border p-4 ">
            <h2 class="text-xl font-bold text-blue-500  m-2">{component.componentName}</h2>
            {component.component}
          </div>
          )
          }
        </For>
      </div>
    </div>
  );
};

export default ComponentsList;
