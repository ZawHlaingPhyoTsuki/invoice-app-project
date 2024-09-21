import { productSidebar } from "./selectors";

export const manageInventoryBtnHandler = () => {
    console.log(productSidebar.classList.remove("translate-x-full"));
    console.log(productSidebar.classList.add("duration-300"));
};

export const closeSidebarBtnHandler = () => {
  console.log(productSidebar.classList.add("translate-x-full"));
};

