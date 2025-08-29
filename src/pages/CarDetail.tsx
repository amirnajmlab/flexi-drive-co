import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Users, Settings, Gauge, Star, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cars } from "@/data/cars";
import CarCard from "@/components/CarCard";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);
  const [bookingData, setBookingData] = useState({
    pickupDate: "",
    returnDate: "",
    location: ""
  });

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Link to="/fleet">
            <Button>Back to Fleet</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedCars = car.relatedCars ? cars.filter(c => car.relatedCars?.includes(c.id)) : [];
  const calculateDays = () => {
    if (!bookingData.pickupDate || !bookingData.returnDate) return 1;
    const pickup = new Date(bookingData.pickupDate);
    const returnDate = new Date(bookingData.returnDate);
    const diffTime = Math.abs(returnDate.getTime() - pickup.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(diffDays, 1);
  };

  const totalPrice = car.pricePerDay * calculateDays();

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/fleet" className="hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Fleet
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Image & Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Car Details */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {car.category}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{car.name}</h1>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">${car.pricePerDay}</div>
                  <div className="text-muted-foreground">per day</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 p-3 bg-surface-elevated rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{car.seats} Seats</div>
                    <div className="text-sm text-muted-foreground">Capacity</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-surface-elevated rounded-lg">
                  <Settings className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{car.transmission}</div>
                    <div className="text-sm text-muted-foreground">Transmission</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-surface-elevated rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{car.minAge}+ Years</div>
                    <div className="text-sm text-muted-foreground">Min Age</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 bg-surface-elevated rounded-lg">
                  <Gauge className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{car.mpg} MPG</div>
                    <div className="text-sm text-muted-foreground">Fuel Economy</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {car.faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-brand">
              <CardHeader>
                <CardTitle>Book This Car</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Input
                      id="pickup-date"
                      type="date"
                      value={bookingData.pickupDate}
                      onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="return-date">Return Date</Label>
                    <Input
                      id="return-date"
                      type="date"
                      value={bookingData.returnDate}
                      onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Pickup Location</Label>
                    <Select onValueChange={(value) => setBookingData({...bookingData, location: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="downtown">Downtown Office</SelectItem>
                        <SelectItem value="airport">Airport Terminal</SelectItem>
                        <SelectItem value="north">North Branch</SelectItem>
                        <SelectItem value="south">South Branch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>${car.pricePerDay}/day × {calculateDays()} days</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice}</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-accent hover:bg-accent-hover text-accent-foreground font-semibold">
                  Book Now - ${totalPrice}
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Free cancellation up to 24 hours before pickup
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Cars */}
        {relatedCars.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Discover More Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCars.map((relatedCar) => (
                <CarCard key={relatedCar.id} car={relatedCar} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetail;