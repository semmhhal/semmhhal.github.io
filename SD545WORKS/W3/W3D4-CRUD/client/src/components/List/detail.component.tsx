import React, { useState, useEffect } from "react";
import Product from "../../types/product.types";
import PubSub from "pubsub-js";
import productService from "../../apis/services/product.service";

type Props = {
  onDeleteProductById: (id: number) => void;
};

export default function Detail(props: Props) {
  const { onDeleteProductById } = props;
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const token = PubSub.subscribe("products", (msg, data) => {
      setProduct(data);
    });

    return () => {
      PubSub.unsubscribe(token);
    };
  }, []);
  const deleteById = async () => {
    const response = await productService.deleteProductById(product!.id);
    if (response.status === 200) {
      setProduct(null);
      onDeleteProductById(product!.id);
    }
  };
  return (
    <div className="col">
      {product ? (
        <>
          <p>Product Id: {product.id}</p>
          <p>Product Title: {product.title}</p>
          <p>Product Price: {product.price}</p>
          <p>Product Description: {product.description}</p>
          <p>
            <button className="btn btn-danger" onClick={deleteById}>
              Delete
            </button>
          </p>
        </>
      ) : (
        <h2>Please Click element on left side</h2>
      )}
    </div>
  );
}
