import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import Footer from "@/components/Footer"; // Add this import



const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Works />
      </main>
    </div>
  );
};

export default Index;