import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext";
import { FavoritesProvider } from "./context/FavoritesContext";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import ContactSeller from "./pages/ContactSeller";
import AddListing from "./pages/AddListing";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import About from "./pages/static/About";
import Contact from "./pages/static/Contact";
import Privacy from "./pages/static/Privacy";
import Terms from "./pages/static/Terms";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductsProvider>
          <FavoritesProvider>
            <BrowserRouter>
              <main className="min-h-screen bg-slate-50 text-slate-900">
                <Navbar />

                <div className="mx-auto max-w-[1470px] px-4 py-6 md:px-8 md:py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listings" element={<Listings />} />
                    <Route
                      path="/category/:categoryName"
                      element={<CategoryPage />}
                    />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route
                      path="/contact-seller/:id"
                      element={<ContactSeller />}
                    />
                    <Route path="/add-listing" element={<AddListing />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>

                <Footer />
              </main>
            </BrowserRouter>
          </FavoritesProvider>
        </ProductsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
