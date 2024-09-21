import initialRender from "./initialRender";
import listener from "./listener";

class Invoice {
  init() {
    console.log("Invoice App Start");
    initialRender();
    listener();
  }
}

export default Invoice;
