
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Differentials from "@/components/differentials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import WhatsAppButton from "@/components/whatsapp-button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <About />
      <Differentials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
