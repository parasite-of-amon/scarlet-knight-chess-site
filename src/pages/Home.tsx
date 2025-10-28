import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { FlashCard } from "@/components/FlashCard";
import heroImage from "@/assets/hero-bg.jpg";
import trophyImage from "@/assets/trophy.jpg";
import allSkillLevelsImage from "@/assets/all-skill-levels.jpg";
import haveFunImage from "@/assets/have-fun.jpg";
import learnImproveImage from "@/assets/learn-improve.jpg";
import competeImage from "@/assets/compete.jpg";
import communityImage from "@/assets/community.jpg";
import { slideshowImages } from "@/lib/slideshowImages";

const Home = () => {

  return <div>
      {/* Hero Section */}
      <section className="relative bg-dark-bg text-dark-foreground py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15 z-10" />
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
                <Button className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-7 text-center font-bold shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:scale-105 transition-all duration-300 border-2 border-white/90">
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

      {/* Stats Section with Background Image */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slideshowImages[5]})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg text-center border border-white/10">
                <Globe className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-5xl font-bold text-white mb-2">120<span className="text-yellow-400">+</span></p>
                <p className="text-white/80">Active Members</p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <p className="text-5xl font-bold text-gray-900 mb-2">10<span className="text-yellow-500">+</span></p>
                <p className="text-gray-600">Tournaments</p>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg text-center border border-white/10">
                <Users className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-5xl font-bold text-white mb-2">5<span className="text-yellow-400">+</span></p>
                <p className="text-white/80">Weekly Events</p>
              </div>

              <div className="bg-white p-8 rounded-lg text-center">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <p className="text-5xl font-bold text-gray-900 mb-2">$500<span className="text-yellow-500">+</span></p>
                <p className="text-gray-600">In Prizes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section with Flash Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Why Join Rutgers Chess Club
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Flash Cards */}
            <div className="space-y-6">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The Rutgers Chess Club welcomes players of all abilities. Whether you're a complete beginner learning how pieces move or a seasoned competitor, you'll find a welcoming environment that supports and challenges you to be your best self.
              </p>

              <div className="space-y-4">
                <FlashCard
                  title="All Skill Levels Welcome"
                  content="From beginners learning how pieces move to advanced players refining complex strategies, everyone finds their place in our supportive and challenging environment."
                  bgColor="bg-white"
                />
                <FlashCard
                  title="Competitive Tournaments"
                  content="Test your skills in USCF-rated tournaments, Blitz events, and high-stakes regional competitions. Win prizes and improve your ranking."
                  bgColor="bg-gray-50"
                />
                <FlashCard
                  title="Community & Fun"
                  content="Join a community built on respect, friendship, and shared passion. Play fun variants like Bughouse and Atomic chess while making lasting connections."
                  bgColor="bg-white"
                />
              </div>
            </div>

            {/* Right: Slideshow with Quote Overlay */}
            <div className="relative">
              <GalleryCarousel images={slideshowImages} autoPlay={true} interval={4000} />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900/95 text-white p-6 md:p-8">
                <p className="text-gray-300 leading-relaxed mb-3 text-sm md:text-base italic">
                  "The Rutgers Chess Club offers opportunities to test your skills in both casual and formal settings. From Blitz tournaments to high-stakes regional events, there's always a chance to compete and grow."
                </p>
                <p className="text-yellow-500 font-semibold text-sm md:text-base">— Chess Club Member</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-yellow-600 font-semibold mb-3 tracking-wide">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Why Join Rutgers Chess Club
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-900 text-white p-8 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src={allSkillLevelsImage} alt="All skill levels" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">All Skill Levels</h3>
              <p className="text-gray-300 leading-relaxed">
                From beginners learning the basics to advanced players refining strategies, everyone finds their place in our supportive community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-yellow-500 cursor-pointer">
              <img src={learnImproveImage} alt="Learn and improve" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Learn & Improve</h3>
              <p className="text-gray-600 leading-relaxed">
                Master openings, improve your endgame, and think more critically with our mentor-mentee programs and training sessions.
              </p>
            </div>

            <div className="bg-gray-900 text-white p-8 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img src={communityImage} alt="Community" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="font-serif text-2xl font-bold mb-4">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Built on respect, friendship, and shared passion. Connect with fellow chess enthusiasts through engaging matches and conversations.
              </p>
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