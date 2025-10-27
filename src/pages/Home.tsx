import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Award, Target, Brain, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import trophyImage from "@/assets/trophy.jpg";
import allSkillLevelsImage from "@/assets/all-skill-levels.jpg";
import haveFunImage from "@/assets/have-fun.jpg";
import learnImproveImage from "@/assets/learn-improve.jpg";
import competeImage from "@/assets/compete.jpg";
import communityImage from "@/assets/community.jpg";
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="font-serif text-4xl md:text-5xl font-bold mb-2">
      {count}{suffix}
    </div>
  );
};

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

      {/* Why Join Section - Alternating Blocks */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Why Join Rutgers Chess Club?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              More than a club. A place to learn, grow, and belong.
            </p>
          </div>

          {/* Block 1: All Skill Levels - Image Right */}
          <div className="mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  All Skill Levels Welcome
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're just learning how pawns move or calculating mate-in-5, you're welcome here. 
                  Beginners and advanced players learn from one another in a no-pressure, supportive space.
                </p>
              </div>
              <div className="order-1 md:order-2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
                  <img 
                    src={allSkillLevelsImage} 
                    alt="Diverse students playing chess" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Have Fun - Image Left */}
          <div className="mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
                  <img 
                    src={haveFunImage} 
                    alt="Students laughing over chess variants" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Play Hard, Laugh Harder
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We mix up serious strategy with chaotic fun. Bughouse, Atomic, and other chess variants 
                  keep every meeting fresh, creative, and filled with laughter.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: Learn and Improve - Image Right */}
          <div className="mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Learn. Grow. Master.
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Join workshops, game reviews, and our mentor-mentee program to sharpen your strategic thinking. 
                  Whether it's openings or endgames, there's always something to explore.
                </p>
              </div>
              <div className="order-1 md:order-2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
                  <img 
                    src={learnImproveImage} 
                    alt="One-on-one game analysis" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 4: Compete - Image Left */}
          <div className="mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
                  <img 
                    src={competeImage} 
                    alt="Tournament scene with trophy" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Tournaments That Push You
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Compete casually or seriously—from blitz nights to regionals. Win prizes, test your skill, 
                  and enjoy the thrill of competitive chess, Rutgers style.
                </p>
              </div>
            </div>
          </div>

          {/* Block 5: Community - Image Right */}
          <div className="mb-24 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  A Real Community
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our club goes beyond the board. Build friendships, attend socials, and be part of something 
                  bigger than a weekly match.
                </p>
              </div>
              <div className="order-1 md:order-2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-105">
                  <img 
                    src={communityImage} 
                    alt="Group social gathering" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(343,100%,25%)] text-primary-foreground p-12 md:p-16 shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
                By The Numbers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                <div className="space-y-2">
                  <Users className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <AnimatedCounter end={120} suffix="+" />
                  <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Active Members</div>
                </div>
                <div className="space-y-2">
                  <Trophy className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <AnimatedCounter end={12} suffix="+" />
                  <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Tournaments/Year</div>
                </div>
                <div className="space-y-2">
                  <Brain className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <AnimatedCounter end={5} suffix="+" />
                  <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Mentors Available</div>
                </div>
                <div className="space-y-2">
                  <Target className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <AnimatedCounter end={4} suffix="+" />
                  <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Weekly Meetings</div>
                </div>
                <div className="space-y-2 col-span-2 md:col-span-1">
                  <DollarSign className="w-8 h-8 mx-auto mb-3 opacity-90" />
                  <AnimatedCounter end={500} suffix="+" />
                  <div className="text-primary-foreground/90 text-sm md:text-base font-medium">Annual Cash Prizes</div>
                </div>
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