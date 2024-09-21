// They are handlers but put in inventory cz it is business logic

import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./states";

export const addNewProductBtnHandler = () => {
  // console.log("add new product");
  const createId = uuidv4();
  productGroup.append(
    createProductCard(
      createId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );

  productSelect.append(new Option(`${newProductName.value} - ${newProductPrice.valueAsNumber}`, createId));

  products.push({
    id: createId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });

  console.log(products);

  newProductName.value = null;
  newProductPrice.value = null;
};

// export const productRender = (products) => {
//     products.forEach((product) => {
//         productGroup.append(
//             createProductCard(product.id, product.name, product.price)
//         )
//     });
// }

export const productRender = (products) => {
    products.forEach(({id, name, price}) => {
        productGroup.append(
            createProductCard(id, name, price)
        );
        productSelect.append(new Option(`${name} - ${price}`, id))
    });
}

export const createProductCard = (id, name, price) => {
  const productCard = productCardTemplate.content.cloneNode(true);
  const currentProductCard = productCard.querySelector(".product-card");
  const productName = productCard.querySelector(".product-name");
  const productPrice = productCard.querySelector(".product-price");

  currentProductCard.id = id;

  productName.innerText = name;
  productPrice.innerText = price;

  //   newProductName.value = null;
  //   newProductPrice.value = null; //bcz of this, value does not go to option

  return productCard;
};
