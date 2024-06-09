import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./auth/Login";
import Home from "./views/Home";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Accordion from "./views/Accordion";
import Alert from "./views/Alert";
import Form from "./views/Form";
import DataTable from "./views/Table";
import Sample from "./views/sample.tsx";
import Register from "./auth/Register";
import Card from "./views/Card";
import Carousel from "./views/Carousel";
import Modal from "./views/Modal";
function Routes() {
  const Layout = () => {
    const [showNav, setShowNav] = useState(true);
    return (
      <>
        <Header showNav={!showNav} setShowNav={setShowNav} />
        <Sidebar showNav={!showNav} setShowNav={setShowNav} />
        <div className={`body-main ${showNav ? "" : "body-sm"}`}>
          <Outlet />
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "accordion",
          element: <Accordion />,
        },
        {
          path: "alert",
          element: <Alert />,
        },
        {
          path: "card",
          element: <Card />,
        },
        {
          path: "carousel",
          element: <Carousel />,
        },
        {
          path: "modal",
          element: <Modal />,
        },

        {
          path: "form",
          element: <Form />,
        },
        {
          path: "table",
          element: <DataTable />,
        },
        {
          path: "sample",
          element: <Sample />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default Routes;
