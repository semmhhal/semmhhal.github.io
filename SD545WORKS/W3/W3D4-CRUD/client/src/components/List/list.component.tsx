import { MouseEvent, useState } from "react";
import Product from "../../types/product.types";
import productService from "../../apis/services/product.service";
import pubSub from "pubsub-js";
import "./List.css";
import classNames from "classnames";

type Props = {
  products: Product[];
};
export default function List(props: Props) {
  const { products } = props;
  const [activeId, setActiveId] = useState<number>(-1);
  const showDetail = (prod: Product) => {
    pubSub.publish("products", prod);
    setActiveId(prod.id);
  };

  return (
    <div className="col">
      <ul className="list-group">
        {products.map((prod) => (
          <li
            className={classNames("list-group-item", {
              highlighted: activeId === prod.id,
            })}
            key={prod.id}
            onClick={(e) => showDetail(prod)}
          >
            {prod.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
