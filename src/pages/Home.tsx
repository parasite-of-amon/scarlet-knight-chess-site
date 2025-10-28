import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import heroImage from "@/assets/hero-bg.jpg";
import trophyImage from "@/assets/trophy.jpg";
import allSkillLevelsImage from "@/assets/all-skill-levels.jpg";
import haveFunImage from "@/assets/have-fun.jpg";
import learnImproveImage from "@/assets/learn-improve.jpg";
import competeImage from "@/assets/compete.jpg";
import communityImage from "@/assets/community.jpg";
import img1 from "@/assets/DSC00602_Original.jpg";
import img2 from "@/assets/DSC00604_Original.jpg";
import img3 from "@/assets/DSC00605_Original.jpg";
import img4 from "@/assets/DSC00608_Original.jpg";
import img5 from "@/assets/DSC00610_Original.jpg";
import img6 from "@/assets/DSC00611_Original.jpg";
import img7 from "@/assets/DSC00622_Original.jpg";
import img8 from "@/assets/DSC00624_Original.jpg";
import img9 from "@/assets/IMG_0387.jpg";
import img10 from "@/assets/IMG_1927.jpg";
import img11 from "@/assets/IMG_1930.jpg";
import img12 from "@/assets/IMG_1931.jpg";
import img13 from "@/assets/IMG_1933.jpg";
import img14 from "@/assets/IMG_5055.jpg";
import img15 from "@/assets/1500.jpg";
import img16 from "@/assets/1500 (1).jpg";
import img17 from "@/assets/1500 (2).jpg";
import img18 from "@/assets/1500 (3).jpg";
import img19 from "@/assets/20240902_151146.jpg";
import img20 from "@/assets/20240903_201103.jpg";
import img21 from "@/assets/20250914_1604110.jpg";
import img22 from "@/assets/6377F711-0269-4222-BB11-69F46DF41E39.jpg";
import img23 from "@/assets/d80570a6-d3f2-4ab7-b001-dd252fe1e540.jpg";
import img24 from "@/assets/image0.jpg";
import img25 from "@/assets/1q9z7qwlkqp61.png";
import img26 from "@/assets/Screenshot_20240921-000732.png";
const Home = () => {
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14,
    img15, img16, img17, img18,
    img19, img20, img21, img22, img23, img24, img25, img26
  ];

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

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Why Join Rutgers Chess Club?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Selling Points */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src={allSkillLevelsImage} alt="All skill levels" className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">All Skill Levels</h3>
                  <p className="text-muted-foreground">
                    The Rutgers Chess Club welcomes players of all abilities. Whether you're a complete beginner who is still learning how the pieces move to a seasoned competitor who has learned the ins and outs of the game for years, you'll find a welcoming environment that not only supports and encourages you but also challenges you to be your best self.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src={haveFunImage} alt="Have fun" className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Have Fun</h3>
                  <p className="text-muted-foreground">
                    While we love serious matches and strategy sessions, we also know how to mix things up with fun variants like Bughouse and Atomic chess, games that keep everyone laughing, thinking fast, and staying creative.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src={learnImproveImage} alt="Learn and improve" className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Learn and Improve</h3>
                  <p className="text-muted-foreground">
                    Whether you're aiming to master openings, improve your endgame, or simply think more critically, our club is here to help you steadily improve your play, especially with our mentor-mentee programs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src={competeImage} alt="Compete" className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Compete</h3>
                  <p className="text-muted-foreground">
                    For those with a competitive spirit, the Chess Club offers opportunities to test your skills in both casual and formal settings. Members can participate in in-house tournaments, such as our Blitz-Casual Tournaments, school competitions where they can earn cash prizes, or high-stakes regional events.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src={communityImage} alt="Community" className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Community</h3>
                  <p className="text-muted-foreground">
                    Our community is built around respect, friendship, and shared curiosity. Here, you will meet people who love chess just as much as you do and who are eager to connect through fun matches and engaging conversations.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Stats */}
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">120+</p>
                    <p className="text-muted-foreground">Active Members</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">$500+</p>
                    <p className="text-muted-foreground">in Annual Prizes</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-primary" />
                  <div>
                    <p className="text-3xl font-bold text-foreground">10+</p>
                    <p className="text-muted-foreground">Tournaments per Year</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-serif text-xl font-semibold mb-3 text-foreground">Skill Distribution</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Beginner</span>
                    <span className="font-semibold text-foreground">30%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Intermediate</span>
                    <span className="font-semibold text-foreground">50%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Advanced</span>
                    <span className="font-semibold text-foreground">20%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-center text-sm text-muted-foreground">
                  🏫 Open to all Rutgers students
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Memories from Our Events
            </h2>
            <GalleryCarousel images={galleryImages} autoPlay={true} interval={4000} />
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