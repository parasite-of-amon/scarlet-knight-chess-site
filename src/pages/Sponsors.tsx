import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Sponsors = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Sponsors
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're grateful for the support of our sponsors who help make our chess club activities possible.
              Their contributions enable us to host tournaments, provide equipment, and create a welcoming
              environment for all chess enthusiasts.
            </p>
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Current Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <span className="text-muted-foreground text-sm">Sponsor Logo {i}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-center">
                    Sponsor Name
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Sponsor Section */}
      <section className="py-20 bg-dark-bg text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Become a Sponsor
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Support the Rutgers University Chess Club and help us grow our community.
              Sponsorship opportunities are available at various levels to suit your organization's goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-background">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-2">Bronze</h3>
                  <p className="text-2xl font-bold text-primary mb-4">$500</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground">
                    <li>• Logo on website</li>
                    <li>• Social media mention</li>
                    <li>• Thank you in newsletter</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-background border-primary border-2">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-2">Silver</h3>
                  <p className="text-2xl font-bold text-primary mb-4">$1,000</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground">
                    <li>• All Bronze benefits</li>
                    <li>• Logo at events</li>
                    <li>• Tournament naming rights</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-background">
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold mb-2">Gold</h3>
                  <p className="text-2xl font-bold text-primary mb-4">$2,500+</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground">
                    <li>• All Silver benefits</li>
                    <li>• Featured sponsor status</li>
                    <li>• Custom partnership package</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Interested in sponsoring the Rutgers University Chess Club? 
              We'd love to hear from you and discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href="mailto:sponsors@rutgerschess.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail size={20} />
                sponsors@rutgerschess.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-primary hover:underline">
                <Phone size={20} />
                (123) 456-7890
              </a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Contact Us About Sponsorship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
