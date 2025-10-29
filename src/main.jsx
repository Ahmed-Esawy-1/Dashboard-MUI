import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Dashboard from "./pages/dahsboard/Dashboard";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Invoices from "./pages/invoices/Invoices";
import Form from "./pages/form/Form";
import Calender from "./pages/calender/Calender";
import Faq from "./pages/faq/Faq";
import BarChart from "./pages/barChar/BarChart";
import PieChart from "./pages/pieChar/PieChart";
import LineChart from "./pages/lineChar/LineChart";
import GeographyChart from "./pages/geographyChar/GeographyChart";
import NotFound from "./pages/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} />
      <Route path="invoices" element={<Invoices />} />

      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />

      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<GeographyChart />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
