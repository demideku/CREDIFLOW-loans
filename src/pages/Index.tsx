import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Index;
