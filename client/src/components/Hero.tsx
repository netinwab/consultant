import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_background_collaboration_scene_225561f2.png";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
          Helping Businesses Align People, Processes, and Systems for Sustainable Growth
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto" data-testid="text-hero-subtext">
          We build confidence and collaboration through strategy, clarity, and culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            asChild
            className="text-base"
            data-testid="button-work-with-us"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              Work With Us
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
            data-testid="button-book-consultation"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
