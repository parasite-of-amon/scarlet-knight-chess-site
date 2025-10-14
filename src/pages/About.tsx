import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/40 to-dark-bg/20 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=1200')",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <span className="text-primary">About</span>
          </div>
        </div>
      </section>

      {/* Main About Content - Editable by Admin */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="min-h-[400px] border-2 border-dashed border-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              This section can be edited by admins.
              <br />
              Sign in as admin to add content here.
            </p>
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

    </div>
  );
};

export default About;
