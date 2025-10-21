import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our insights and updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-accent/20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4" data-testid="text-footer-logo">
              Align
            </h3>
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-footer-tagline">
              People. Purpose. Performance.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-description">
              Building confidence and collaboration through strategy, clarity, and culture.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-quick-links">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer inline-block"
                    data-testid={`link-footer-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-contact">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@alignconsulting.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4" />
                hello@alignconsulting.com
              </a>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4" data-testid="text-footer-newsletter">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-newsletter-description">
              Receive insights and updates directly in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-newsletter-email"
              />
              <Button type="submit" size="sm" data-testid="button-newsletter-submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} Align Consulting. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button
                variant="default"
                size="sm"
                asChild
                data-testid="button-footer-book-session"
              >
                <Link href="/contact">Book a Session</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                data-testid="button-footer-make-payment"
              >
                <Link href="/contact">Make a Payment</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
