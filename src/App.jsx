import HomePage from "./routes/homePage/homePage";
import "./layout.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
      ],
    },
  ]);
  // <div className="layout">
  //   <div className="navbar">
  //     <Navbar />
  //   </div>
  //   <div className="content">
  //     <HomePage />
  //   </div>
  // </div>
  return <RouterProvider router={router} />;
}

export default App;
