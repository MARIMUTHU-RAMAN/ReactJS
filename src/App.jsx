import { createSignal, createEffect } from "solid-js";
import "./App.module.css"
function App() {
  const [dynamicMenu, setDynamicMenu] = createSignal();

  const [formData, setFormData] = createSignal([
    {
      parent: "",
      id: "",
      icon: "",
      url: "",
      submenus: [{ name: "", id: "", url: "", icon: "" }],
    },
  ]);

  // Add a new set of textboxes for submenu
  const addSubmenuTextbox = (parentIndex) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[parentIndex].submenus.push({ name: "", id: "", url: "", icon: "" });
      return newData;
    });
  };

  // Add a new parent menu
  const addParentMenu = () => {
    setFormData((prevData) => [...prevData, { parent: "", id: "", icon: "", url: "",  submenus: [{ name: "", id: "", url: "", icon: "" }] }]);
  };

  // Delete a parent menu
  const handleDeleteParent = (parentIndex) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData.splice(parentIndex, 1);
      return newData;
    });
  };

  // Delete a submenu
  const handleDeleteSubmenu = (parentIndex, submenuIndex) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[parentIndex].submenus.splice(submenuIndex, 1);
      return newData;
    });
  };

  // Handle changes in parent menu fields
  const handleParentInputChange = (e, field, parentIndex) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[parentIndex][field] = value;
      return newData;
    });
  };

  // Handle changes in submenu fields
  const handleSubmenuInputChange = (e, field, parentIndex, submenuIndex) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[parentIndex].submenus[submenuIndex][field] = value;
      return newData;
    });
  };

  // Form submission
  function handleSubmit(e) {
    e.preventDefault();
    const jsonData = formData().map(({ parent, id, icon, url, submenus }) => ({
      menu: {
        id: parent?.toLowerCase()?.replaceAll(" ", ""),
        name: parent,
        icon,
        url,
        submenus: submenus.map((submenu) => ({
          id: submenu.name?.toLowerCase()?.replaceAll(" ", ""),
          name: submenu.name,
          icon: submenu.icon,
          url: submenu.url,
        })),
      },
    }));
    setDynamicMenu(jsonData);
  }

  // createEffect(() => {
  //   console.log(dynamicMenu());
  // });

  /*Toggle Menu */

  const handleToggleMenu = (id) => {
    let alterData = [];
    for (let index = 0; index < dynamicMenu().length; index++) {
      alterData.push( {...dynamicMenu()?.[index], open: id == dynamicMenu()?.[index]?.menu?.id &&  !dynamicMenu()?.[index].open} );
    }
    setDynamicMenu(alterData);
  
  };


//Styles

const styleObject={
  menutextbox: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

}

  return (
    <>
      <div class="grid grid-flow-col h-screen">
        {/* Sidebar */}
        <div class="!w-96 col-span-1 bg-[#082e63] text-white shadow-md">
            <h2 class="text-xl font-semibold text-white mb-4 px-4 p-5">Menu Builder</h2>
            
            <ul>
              <li class="py-2">
                <button class="w-full flex items-center justify-between px-4 focus:outline-none accordion-btn">
                  <span class="bg-[#4281cf] rounded hover:rounded-xl w-full text-left p-2">Build Menu</span>
                </button>
              </li>
              {dynamicMenu()?.map((data, idx) => (
              
                <>
                  <li class="py-2 px-4">
                    <div class="hover:bg-[#4281cf] rounded-xl">
                    <button class="w-full flex items-center justify-between px-4 focus:outline-none accordion-btn" onclick={() => handleToggleMenu(data?.menu?.id)}>
                      <span class="break-all w-full text-left p-2">{data?.menu?.name}</span>
                      <i class={`fa-solid fa-caret-${data?.open? "down":"right"}`}></i>
                      
                    </button>
                    </div>
                    <ul class={`pl-4 hover:bg-[#4281cf] rounded-xl ${data?.open? "":"hidden"}`}>
                      {data?.menu?.submenus?.map((item) => (
                        <li class="py-2 pl-8">{item?.name}</li>
                      ))}
                    </ul>
                  </li>
                </>
              ))}
            </ul>
        </div>

        {/* Main Content */}
        <div class="col-span-8 rounded bg-[#082e63] text-white ">
          
            <h1 class="text-xl font-semibold mb-4 p-2 text-center italic bg-blue-400 rounded-lg m-4">MENU BUILDER</h1> 
            
            <form class="shadow-md p-4" onsubmit={handleSubmit}>
                <ul>
                  {formData().map((data, parentIndex) => (
                    <>
                      <li class="space-y-4 pt-4">
                        <h6 class="text-xl font-semibold text-white mb-4">Parent Menu {parentIndex + 1}</h6>
                        <div class="flex justify-between gap-4">
                          <input class={styleObject.menutextbox} required type="text" value={data.parent} onchange={(e) => handleParentInputChange(e, "parent", parentIndex)} placeholder="Parent Menu Name" />
                          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={data.url} onchange={(e) => handleParentInputChange(e, "url", parentIndex)} placeholder="Parent Menu Url" />
                          <input class={styleObject.menutextbox} type="text" value={data.icon} onchange={(e) => handleParentInputChange(e, "icon", parentIndex)} placeholder="Parent Menu Icon" />
                        </div>
                        <h6 class="text-xl font-semibold text-white mb-4">Sub Menu {parentIndex + 1}</h6>
                        {data.submenus.map((submenu, submenuIndex) => (
                          <div class="space-y-4">
                            <div class="flex justify-between gap-4">
                              <input class={styleObject.menutextbox} type="text" value={submenu.name} onchange={(e) => handleSubmenuInputChange(e, "name", parentIndex, submenuIndex)} placeholder="Submenu Name" />
                              <input class={styleObject.menutextbox} type="text" value={submenu.url} onchange={(e) => handleSubmenuInputChange(e, "url", parentIndex, submenuIndex)} placeholder="Submenu Url" />
                              <input class={styleObject.menutextbox} type="text" value={submenu.icon} onchange={(e) => handleSubmenuInputChange(e, "icon", parentIndex, submenuIndex)} placeholder="Submenu Icon" />
                            </div>
                            <div class="flex justify-end gap-4">
                              <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 text-xs" onClick={() => addSubmenuTextbox(parentIndex)}>
                                Add Submenu
                              </button>
                              <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 text-xs" onClick={() => handleDeleteSubmenu(parentIndex, submenuIndex)}>
                                Delete Submenu
                              </button>
                            </div>
                          </div>
                        ))}
                      </li>
                      <li class="py-2">
                        {formData().length - 1 == parentIndex && (
                          <button type="button" class="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addParentMenu}>
                            Add Parent Menu
                          </button>
                        )}
                        <button type="button" class="bg-red-500 hover:bg-red-700 text-xs text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" onClick={() => handleDeleteParent(parentIndex)}>
                          Delete Parent Menu
                        </button>
                      </li>
                    </>
                  ))}
                </ul>
              <div class="flex items-center justify-center pt-4">
                <button type="submit" class="bg-green-500 hover:bg-green-700 text-xs text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Build Menu
                </button>
              </div>
            </form>
        </div>
      </div>
    </>
  );
}

export default App;
