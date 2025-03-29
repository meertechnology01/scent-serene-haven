import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import IncenseArt from "./pages/IncenseArt";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ScentPairing from "./pages/ScentPairing";
import DIYAromatherapy from "./pages/DIYAromatherapy";
import GiftGuide from "./pages/GiftGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const WHATSAPP_LINK = "https://wa.me/8173110051?fbclid=PAZXh0bgNhZW0CMTEAAaYiSaLYLMTPiDot4Le764t7FFTlOMIDJFLlUhT6ModDx1hWIvwsSy7baF8_aem_KXTee3Cuynewv2_EUbOIeQ";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/incense-art" element={<IncenseArt />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/scent-pairing" element={<ScentPairing />} />
            <Route path="/diy-aromatherapy" element={<DIYAromatherapy />} />
            <Route path="/gift-guide" element={<GiftGuide />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Cart whatsappLink={WHATSAPP_LINK} />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
