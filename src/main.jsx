import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./contexts/auth-context.jsx";
import { OffcanvasProvider } from "./contexts/offcanvas-context.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./app.jsx";
import "./index.css";
import DashboardPage from "./pages/dashboard.jsx";
import IncidentsPage from "./pages/incidents.jsx";
import LocationsPage from "./pages/locations.jsx";
import NewIncidentPage from "./pages/new-incident.jsx";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<DashboardPage />} />
        <Route path="incidents" element={<IncidentsPage />} />
        <Route path="incidents/new-incident" element={<NewIncidentPage />} />
        <Route path="locations" element={<LocationsPage />} />
      </Route>
      <Route path="*" element={<p>404, page not found!</p>} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <OffcanvasProvider>
        <RouterProvider router={appRouter} />
      </OffcanvasProvider>
    </AuthProvider>
  </StrictMode>
);
