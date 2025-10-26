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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45 z-10" />
        <div className="absolute inset-0 bg-cover bg-center blur-[1px]" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">Rutgers University Chess Club!</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Join us every Tuesday and Friday, 7-9 PM at Busch Student Center.
              <br />
              All skill levels welcome!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/membership">
                <Button className="bg-gradient-to-r from-primary to-pink-600 text-white hover:from-pink-600 hover:to-primary text-lg px-10 py-7 text-center font-bold shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:scale-105 transition-all duration-300 border-2 border-white/20">
                  Join Club
                </Button>
              </Link>
              <Link to="/events">
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-orange-600 hover:to-amber-500 text-lg px-10 py-7 text-center font-bold shadow-[0_0_30px_rgba(251,191,36,0.6)] hover:shadow-[0_0_40px_rgba(251,191,36,0.8)] hover:scale-105 transition-all duration-300 border-2 border-white/20">
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
            <Card className="bg-white text-foreground border-border shadow-lg">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-gray-900">Weekly Meetings</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Join us every Tuesday and Friday for casual games and tournaments
                </p>
                <Link to="/events" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground border-primary shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">All Welcome</h3>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Open to all Rutgers students and staff, no experience required
                </p>
                <Link to="/membership" className="text-primary-foreground text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white text-foreground border-border shadow-lg">
              <CardContent className="p-8 text-center">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2 text-gray-900">Tournaments</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Compete in USCF-rated tournaments and improve your skills
                </p>
                <Link to="/events" className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Join Our Club?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover what makes the Rutgers Chess Club the perfect place for chess enthusiasts of all levels
            </p>
          </div>

          {/* Selling Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* All Skill Levels */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">All Skill Levels</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The Rutgers Chess Club welcomes players of all abilities. Whether you're a complete beginner who is still learning how the pieces move to a seasoned competitor who has learned the ins and outs of the game for years, you'll find a welcoming environment that not only supports and encourages you but also challenges you to be your best self.
                </p>
              </CardContent>
            </Card>

            {/* Have Fun */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">Have Fun</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While we love serious matches and strategy sessions, we also know how to mix things up with fun variants like Bughouse and Atomic chess, games that keep everyone laughing, thinking fast, and staying creative. Every meeting has a lighthearted and welcoming atmosphere where you can relax, try new ideas, and simply enjoy playing.
                </p>
              </CardContent>
            </Card>

            {/* Learn and Improve */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">Learn and Improve</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Joining the Chess Club is one of the best ways to sharpen your strategic thinking and improve your game. We often review games together to understand key moments and strategies, helping everyone turn mistakes into valuable lessons. Whether you're aiming to master openings, improve your endgame, or simply think more critically, our club is designed to help you steadily improve your play.
                </p>
              </CardContent>
            </Card>

            {/* Compete */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">Compete</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For those with a competitive spirit, the Chess Club offers opportunities to test your skills in both casual and formal settings. Members can participate in in-house tournaments, such as our Blitz-Casual Tournaments, school competitions where they can earn cash prizes, or high-stakes regional events. Competition here isn't about perfection; it's about learning, pushing your limits, and experiencing the excitement that comes with every game.
                </p>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="bg-card border-border hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-card-foreground">Community</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  More than just a place to play, the Rutgers Chess Club is a community built around respect, friendship, and shared curiosity. You'll meet people who love the game as much as you do, and who are eager to connect through thoughtful conversation and fun matches. Our gatherings often extend beyond the chessboard, with social events and collaborative activities that strengthen our bonds as a group.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2">125+</div>
                <div className="text-primary-foreground/90 text-sm md:text-base">Active Members</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-primary-foreground/90 text-sm md:text-base">Meetings Per Year</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-primary-foreground/90 text-sm md:text-base">Tournaments</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl font-bold mb-2">100+</div>
                <div className="text-primary-foreground/90 text-sm md:text-base">Years of History</div>
              </div>
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