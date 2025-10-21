import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-accent/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-services-page-title">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to align your business for success
            </p>
          </div>
        </section>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
