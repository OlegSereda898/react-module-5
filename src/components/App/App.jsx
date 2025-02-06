import { Route, Routes } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import css from "./App.module.css";
import { AppBar } from "../AppBar/AppBar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Products = lazy(() => import("../../pages/Products"));
const ProductDetails = lazy(() => import("../../pages/ProductDetails"));
const Mission = lazy(() => import("../Mission"));
const Team = lazy(() => import("../Team"));
const Reviews = lazy(() => import("../Reviews"));

export const App = () => {
  return (
    <div className={css.container}>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
