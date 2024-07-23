import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import BlogHome from "./pages/Blog";
import ReturnPolicy from "./pages/cancellation";
import DivaCoins from "./pages/DivaCoins";
// import DivueensCSR from "./pages/DivueensCSR";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import TeamSection from "./pages/TeamSection";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/Privacy";
import HelpCenter from "./pages/HelpCenter";
import FaqsPage from "./pages/FAQ";
import SpecialOffer from "./pages/SpecialOffer";
import ProductDetails from "./pages/ProductDetails";
import WhoWeAre from "./components/Who we are/WhoWeAre";
import StoreLocator from "./components/StoreLocator/StoreLocator";
import MemberShip from "./pages/MemberShip";
import VirtualTryOnPage from "./pages/VirtualTryOnPage";
import Sell from "./pages/sellOnDivueens";
import OrderDetails from "./pages/OrderDetails";
import ProfilePage from "./pages/Profile";
import Relate from "./pages/Relation";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />     {/* Landing page */}
        <Route path="/products" element={<ProductList />} /> {/* Product list page */}

        {/* Profile page */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product-description" element={<ProductDetails />} />

        {/* Login page
        <Route path="/login" element={<Auth />} /> */}

        
        {/* Other Pages */}
        <Route path="/special-offers" element={<SpecialOffer />} />
        <Route path="/our-team" element={<TeamSection />} />
        {/* <Route path="/CSR" element={<DivueensCSR />} /> */}
        <Route path="/coins" element={<DivaCoins />} />
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/frequently-asked-questions" element={<FaqsPage />} />
        <Route path="/contact-us" element={<StoreLocator />} />
        <Route path="/help-center" element={<HelpCenter/>} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/shipping-delivery" element={<></>} />
        <Route path="/sell-on-divueens" element={<Sell />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blogs" element={<BlogHome/>} />
        <Route path="/about-us" element={<WhoWeAre />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/membership" element={<MemberShip />} />
        <Route path="/order-now" element={<OrderDetails />} />
        <Route path="/investor-relation" element={<Relate />} />
        <Route path="/virtual-try-on" element={<VirtualTryOnPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
