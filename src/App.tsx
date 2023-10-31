import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavouritesPage from "./pages/FavouritesPage";
import NewMeetupPage from "./pages/NewMeetupPage";

export default function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetup" element={<NewMeetupPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}
