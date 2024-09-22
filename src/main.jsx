import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import { action } from "./components/GetInTouchForm";
import Splat from "./pages/Splat";
import Error from "./components/Error";
import { ThemeProvider } from "./components/ThemeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      action={action}
      element={<Layout />}
      errorElement={
        <Layout>
          <Error />
        </Layout>
      }
    >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="services" element={<Services />} />
      <Route path="*" element={<Splat />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
