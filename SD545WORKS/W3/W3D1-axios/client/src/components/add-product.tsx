import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";
import axios from "axios";
import Product from "../types/products";

type Props = {
  onAddNewProd: (prod: Product) => void;
};

export default function AddProduct(props: Props) {
  const { onAddNewProd } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  //another way of doing it

  //   const [product, setProduct] = useState<Product>({
  //     title: "",
  //     price: 0,
  //     description: "",
  //   });
  //   const { title, price, description } = product;

  //   const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setProduct({ ...product, [name]: value });
  //   };

  //   const changeDescription=(e:changeEvent<HTMLTextAreaElement>)=>{
  //     setProduct({...product,description:e.target.value})
  //   }

  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8000/products", {
      title,
      price,
      description,
    });
    if (response.status === 201) {
      onAddNewProd(response.data);
      setTitle("");
      setPrice("");
      setDescription("");
    }
  };
  return (
    <div>
      <h2>Add a new Product</h2>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            value={title}
            onChange={changeTitle}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={changePrice}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            onChange={changeDescription}
            value={description}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
