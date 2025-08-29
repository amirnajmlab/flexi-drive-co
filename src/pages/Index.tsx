import { Link } from "react-router-dom";
import { CheckCircle, Users, Shield, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Index = () => {
  const featuredCars = cars.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-500 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Rent Your Perfect Car
              <span className="block text-yellow-500">Drive Your Dreams</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up">
              Choose from our premium fleet of modern, reliable vehicles. 
              Perfect for any journey, any destination.
            </p>
          </div>

          {/* Booking Form */}
          <div className="animate-scale-in">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Featured Fleet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular vehicles, each offering comfort, reliability, and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/fleet">
              <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
                View Complete Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-surface-elevated">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose DriveNow?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making your car rental experience seamless, affordable, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
                <p className="text-muted-foreground">
                  Simple online booking process with instant confirmation and flexible pickup options.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Round-the-clock customer support to assist you whenever you need help.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safe & Secure</h3>
                <p className="text-muted-foreground">
                  All vehicles regularly maintained and sanitized for your safety and peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Flexible Hours</h3>
                <p className="text-muted-foreground">
                  Extended pickup and return hours to accommodate your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Multiple Locations</h3>
                <p className="text-muted-foreground">
                  Convenient pickup locations throughout the city including airport terminals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Modern fleet with latest models, advanced safety features, and premium comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your perfect vehicle today and experience the freedom of the open road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fleet">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Browse Fleet
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px] bg-accent hover:bg-accent-hover text-accent-foreground">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
