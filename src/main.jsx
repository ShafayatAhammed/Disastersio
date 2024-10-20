import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TypesProvider } from "./contexts/types-context.jsx";
import { OffcanvasProvider } from "./contexts/offcanvas-context.jsx";
import { ChatProvider } from "./contexts/chat-context.jsx";
import { IncidentsProvider } from "./contexts/incidents-context.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import App from "./app.jsx";
import "./index.css";
import DashboardPage from "./pages/dashboard.jsx";
import IncidentsPage from "./pages/incidents.jsx";
import LocationsPage from "./pages/locations.jsx";
import NewIncidentPage from "./pages/new-incident.jsx";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <div className="flex flex-col justify-center gap-2 px-4 text-center xspghd:gap-6 xspghd:flex-row xspghd:items-center xspghd:text-start xspghd:justify-start xspghd:px-0">
          <div className="xspghd:pr-6 xspghd:border-r xspghd:border-slate-400">
            <h1 className="text-3xl font-bold md:text-4xl xl4:text-5xl">404</h1>
          </div>
          <div>
            <p className="text-lg font-medium md:text-xl xl4:text-2xl text-slate-500">
              This page could not be found.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            type="button"
            className="px-6 flex justify-center items-center py-2 text-lg xl4:text-xl font-bold transition-colors rounded-lg bg-high-pmr hover:bg-[#d44c04] text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<DashboardPage />} />
        <Route path="incidents" element={<IncidentsPage />} />
        <Route path="incidents/new-incident" element={<NewIncidentPage />} />
        <Route path="locations/:incidentId" element={<LocationsPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OffcanvasProvider>
      <ChatProvider>
        <IncidentsProvider>
          <TypesProvider>
            <RouterProvider router={appRouter} />
          </TypesProvider>
        </IncidentsProvider>
      </ChatProvider>
    </OffcanvasProvider>
  </StrictMode>
);
