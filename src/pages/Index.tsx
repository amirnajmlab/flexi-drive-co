import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Shield, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect } from "react";

const Index = () => {
  const featuredCars = cars.slice(0, 3);

  useEffect(() => {
    const el = document.getElementById("hero-motion-title");
    if (el) {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center px-4 lg:px-0"
        style={{
          backgroundImage: "url(https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/public/BG/new%20hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fff"
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0 animate-fade-in" />
        <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex flex-col items-center justify-center py-20 animate-slide-up">
          <h1
            className="text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg animate-fade-in font-peyda-bold"
            style={{
              opacity: 0.2,
              transform: 'translateY(-40px)',
              transition: 'opacity 1s ease, transform 1s ease',
            }}
            id="hero-motion-title"
          >
            Rent Your Perfect Car
            <span className="block text-yellow-400 text-3xl lg:text-4xl mt-2 font-light font-peyda-light">Drive Your Dreams</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 max-w-xl mx-auto mb-8 animate-slide-up font-peyda-regular">
            Choose from our premium fleet of modern, reliable vehicles. Perfect for any journey, any destination.
          </p>
          <div className="w-full mt-4 animate-fade-in">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#fff' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
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
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform">
                View Complete Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#fff' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose DriveNow?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to making your car rental experience seamless, affordable, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Minimal icon cards */}
            {[{icon:CheckCircle,title:'Easy Booking',desc:'Simple online booking process with instant confirmation and flexible pickup options.'},{icon:Users,title:'24/7 Support',desc:'Round-the-clock customer support to assist you whenever you need help.'},{icon:Shield,title:'Safe & Secure',desc:'All vehicles regularly maintained and sanitized for your safety and peace of mind.'},{icon:Clock,title:'Flexible Hours',desc:'Extended pickup and return hours to accommodate your schedule.'},{icon:MapPin,title:'Multiple Locations',desc:'Convenient pickup locations throughout the city including airport terminals.'},{icon:Star,title:'Premium Quality',desc:'Modern fleet with latest models, advanced safety features, and premium comfort.'}].map((item, idx) => (
              <Card key={item.title} className="text-center border-none shadow-none bg-white/80">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    {React.createElement(item.icon, { className: "h-8 w-8 text-green-600" })}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-500 to-yellow-400 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your perfect vehicle today and experience the freedom of the open road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/fleet">
              <Button size="lg" variant="secondary" className="min-w-[200px] bg-white text-green-600 font-bold shadow-md hover:bg-green-100">
                Browse Fleet
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px] bg-green-700 hover:bg-green-800 text-white font-bold shadow-md">
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
