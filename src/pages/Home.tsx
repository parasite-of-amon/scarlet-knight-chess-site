import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";
import trophyImage from "@/assets/trophy.jpg";
import about1Image from "@/assets/about-1.jpg";
import about2Image from "@/assets/about-2.jpg";
const Home = () => {
  return <div>
      {/* Hero Section */}
      <section className="relative bg-dark-bg text-dark-foreground py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/40 to-dark-bg/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Welcome to the
              <br />
              <span className="text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">Rutgers University Chess Club!</span>
            </h1>
            <p className="text-lg text-white/95 mb-4 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Whether you are just a beginner or have a ton of experience in the game of chess,
              this club is the place for you. Stop by to play games with other Scarlet Knights
              and discuss chess-related current events.
            </p>
            <p className="text-lg text-white/95 mb-4 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              We have in-person meetings and tournaments throughout the school year. You are
              welcome to bring your own boards, pieces, or clocks but supplies will be provided.
            </p>
            <p className="text-lg text-white mb-8 leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              We hold our meetings in Busch Student Center food court every Tuesday and Friday 7-9 PM!
            </p>
            <div className="flex gap-4">
              <Link to="/membership">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 text-center">
                  Get Started
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" className="text-dark-foreground border-dark-foreground hover:bg-dark-foreground hover:text-dark-bg text-lg px-8 py-6 text-center">
                  Our Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-30">
            <Card className="bg-dark-bg text-dark-foreground border-border/10">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Weekly Meetings</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Join us every Tuesday and Friday for casual games and tournaments
                </p>
                <Link to="/events" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-primary">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">Tournaments</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Compete in USCF-rated tournaments and improve your skills
                </p>
                <Link to="/events" className="text-primary-foreground text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-dark-bg text-dark-foreground border-border/10">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">All Welcome</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Open to all Rutgers students and staff, no experience required
                </p>
                <Link to="/membership" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={about1Image} alt="Chess players of different ages playing together" className="rounded-lg shadow-2xl" />
              <img src={about2Image} alt="Strategic chess gameplay" className="rounded-lg shadow-2xl" />
            </div>
            <div>
              <div className="inline-block mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="font-serif text-4xl font-bold mb-4">
                We Are Best Chess
                <br />
                Club in Town
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Serving Rutgers students for more than a century, we provide an inclusive
                environment for skill development and campus presence. Our mission is to
                foster a love for chess among students of all skill levels.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">Years Experienced</div>
                </div>
                <div className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-1">125+</div>
                  <div className="text-sm text-muted-foreground">Outstanding Members</div>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-bg text-dark-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">125+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Meetings Per Year</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Years of History</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-dark-bg text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/40 to-dark-bg/20 z-10" />
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${trophyImage})`
      }} />
        <div className="container mx-auto px-4 text-center relative z-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Join Our Club This Year
          </h2>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            We hold our meetings in Busch Student Center food court every Tuesday and Friday 7-9 PM!
            No fees, no attendance obligation, equipment provided.
          </p>
          <Link to="/membership">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              JOIN NOW
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;