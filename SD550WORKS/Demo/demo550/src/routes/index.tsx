import BookList from "../Component/BookList";
import AddProduct from "../Component/AddProduct";
import Child from "../Component/Child";
import Child2 from "../Component/Child2";
import EditProduct from "../Component/EditProduct";
import Addbook from "../Component/addbook";
import Editbook from "../Component/Editbook";

export default [
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "child",
  //         element: <Child />,
  //       },
  //       {
  //         path: "child2",
  //         element: <Child2 />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/addproduct",
  //     element: <AddProduct />,
  //   },
  //   {
  //     path: "/editproduct/:id",
  //     element: <EditProduct />,
  //   },
  //   {
  //     path: "*",
  //     element: <p>Page Not found</p>,
  //   },
  {
    path: "/home",
    element: <BookList />,
  },
  {
    path: "/",
    element: <BookList />,
  },
  {
    path: "/addbook",
    element: <Addbook />,
  },
  {
    path: "/editbook",
    element: <Editbook />,
  },
];
