import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@assets/generated_images/About_section_professional_portrait_3d479e10.png";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
                About Align Consulting
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We Align People and Systems for Real Impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src={aboutImage}
                  alt="Professional consulting team"
                  className="w-full h-auto rounded-md shadow-lg"
                  data-testid="img-about"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-about-headline">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-1">
                  At Align, we believe that sustainable growth comes from the perfect harmony between your people, processes, and systems. We partner with businesses to create clarity, build confidence, and foster collaboration at every level.
                </p>
                <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-2">
                  Our approach is rooted in understanding your unique challenges and opportunities. We don't just provide advice—we work alongside you to implement lasting change that drives measurable results.
                </p>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-3">
                  With years of experience across industries, our team brings deep expertise in strategy, operations, and organizational development. We're committed to your success.
                </p>
                <Button asChild data-testid="button-view-services">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="bg-accent/20 rounded-md p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-values-title">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-1-title">
                    Clarity
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-value-1-description">
                    We bring clear thinking to complex challenges, making the path forward visible and achievable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-2-title">
                    Collaboration
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-value-2-description">
                    Success happens when people work together. We foster environments where teams thrive.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-3-title">
                    Confidence
                  </h3>
                  <p className="text-muted-foreground" data-testid="text-value-3-description">
                    We empower leaders and teams with the tools and mindset to tackle any challenge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
