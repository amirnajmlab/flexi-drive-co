import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About DriveNow
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since 2015, we've been committed to providing reliable, affordable car rental 
            services that put our customers first. Your journey is our mission.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                We maintain the highest standards in vehicle quality and customer service.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building lasting relationships with customers and supporting local communities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously improving our services with the latest technology and trends.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Care</h3>
              <p className="text-sm text-muted-foreground">
                Every interaction is guided by genuine care for our customers' needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  DriveNow was founded in 2015 with a simple mission: to make car rental 
                  accessible, affordable, and hassle-free for everyone. What started as a 
                  small family business with just five vehicles has grown into a trusted 
                  rental service serving thousands of customers annually.
                </p>
                <p>
                  Our founder, Sarah Johnson, experienced firsthand the frustrations of 
                  traditional car rental services and decided to create something better. 
                  With a focus on transparency, customer service, and modern technology, 
                  DriveNow has revolutionized the rental experience.
                </p>
                <p>
                  Today, we maintain a fleet of over 200 vehicles, from fuel-efficient 
                  economy cars to spacious SUVs. Every car in our fleet is carefully 
                  maintained, regularly inspected, and equipped with modern safety features.
                </p>
                <p>
                  We're proud to serve our community and look forward to being part of 
                  your next adventure, business trip, or daily commute.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;