import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { GalleryCarousel } from "@/components/GalleryCarousel";
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

const About = () => {
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14,
    img15, img16, img17, img18,
    img19, img20, img21, img22, img23, img24, img25, img26
  ];

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

          {/* Gallery Section */}
          <div className="mt-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Our Club in Action
            </h2>
            <GalleryCarousel images={galleryImages} autoPlay={true} interval={4000} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
