import { MapPin, Clock, Phone, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Location = () => {
  const locations = [
    {
      name: "Downtown Office",
      address: "123 Main St, City, State 12345",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM",
      services: ["Full Fleet", "24hr Return", "Airport Shuttle"],
      isMain: true
    },
    {
      name: "Airport Terminal",
      address: "456 Airport Blvd, Terminal 2, Level 1",
      phone: "+1 (555) 123-4568",
      hours: "Daily: 6AM-12AM",
      services: ["Express Pickup", "Flight Monitoring", "Late Returns"],
      isMain: false
    },
    {
      name: "North Branch",
      address: "789 North Ave, City, State 12345",
      phone: "+1 (555) 123-4569",
      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-5PM",
      services: ["Local Fleet", "Free Delivery", "Weekend Specials"],
      isMain: false
    },
    {
      name: "South Branch",
      address: "321 South Blvd, City, State 12345",
      phone: "+1 (555) 123-4570",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      services: ["Compact Cars", "Business Rentals", "Long-term"],
      isMain: false
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find DriveNow locations near you. We have convenient pickup points 
            throughout the city for your rental needs.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-12">
          <Card className="overflow-hidden">
            <div className="aspect-[16/9] bg-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map integration showing all DriveNow locations
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    {location.name}
                  </CardTitle>
                  {location.isMain && (
                    <Badge className="bg-primary text-primary-foreground">Main Office</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">{location.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">{location.hours}</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Pickup & Return</h4>
                <p className="text-sm text-muted-foreground">
                  All locations offer same-day pickup with advance booking. Return your vehicle 
                  to any DriveNow location at no extra charge.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">After Hours Return</h4>
                <p className="text-sm text-muted-foreground">
                  Secure key drop boxes available at all locations for returns outside business hours. 
                  Instructions will be provided with your rental.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Airport Shuttle</h4>
                <p className="text-sm text-muted-foreground">
                  Free shuttle service available from downtown office to airport terminal. 
                  Advance booking required - call us for scheduling.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Location;