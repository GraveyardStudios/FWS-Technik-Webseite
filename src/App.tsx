import { Suspense } from "react";
import ShoppingPage from "./components/shopping/ShoppingPage";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import EventsPage from "./components/events/EventsPage";
import Home from "./components/home";
import Dashboard from "./components/dashboard/Dashboard";
import routes from "tempo-routes";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/shopping" element={<ShoppingPage />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
