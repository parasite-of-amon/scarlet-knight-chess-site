import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/95 to-dark-bg/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <span className="text-primary">About</span>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800"
                alt="Chess players"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <div className="text-4xl">🏆</div>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                We Are Best Chess
                <br />
                Club Since 2010
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Rutgers University Chess Club has been serving students for more than a century.
                We provide an inclusive environment for skill development and maintain a strong campus
                presence. Our club welcomes players of all levels, from beginners to experienced players.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">12+</div>
                  <div className="text-sm text-muted-foreground">Years Experienced</div>
                </div>
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-5xl font-bold text-primary mb-2">125+</div>
                  <div className="text-sm text-muted-foreground">Outstanding Members</div>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                About Us
              </Button>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-dark-bg text-dark-foreground border-none">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create an inclusive environment where chess enthusiasts of all skill levels
                  can come together to learn, compete, and grow. We strive to be the premier
                  chess organization at Rutgers University.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to foster skill development through regular meetings, tournaments,
                  and training sessions. We aim to build a strong community of chess players while
                  maintaining an active campus presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary text-sm font-medium mb-4 uppercase tracking-wider">
                Why Choose Us
              </p>
              <h2 className="font-serif text-4xl font-bold mb-6">
                12 Years Of Experience in
                <br />
                Chess Course
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Best Chess Courses</span>
                  <span className="text-primary font-bold">95%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Expert Coach</span>
                  <span className="text-primary font-bold">93%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "93%" }} />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground font-medium">Best Awards</span>
                  <span className="text-primary font-bold">90%</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }} />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800"
                alt="Chess course"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
