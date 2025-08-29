import { useState } from "react";
import { Calendar, MapPin, Car, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    pickupDate: "",
    returnDate: "",
    location: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking search:", formData);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-brand border border-green-600" style={{ borderWidth: '1px', borderColor: '#15803d' }}>
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Vehicle Type */}
            <div className="space-y-2 border border-green-600 rounded-lg p-4 bg-white" style={{ borderWidth: '1px', borderColor: '#15803d' }}>
              <Label htmlFor="vehicle-type" className="text-sm font-medium flex items-center gap-2">
                <Car className="h-4 w-4 text-primary" />
                Vehicle Type
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, vehicleType: value})}>
                <SelectTrigger id="vehicle-type">
                  <SelectValue placeholder="Select vehicle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="economy">Economy Car</SelectItem>
                  <SelectItem value="compact">Compact Car</SelectItem>
                  <SelectItem value="midsize">Midsize Car</SelectItem>
                  <SelectItem value="fullsize">Fullsize Car</SelectItem>
                  <SelectItem value="suv">Midsize SUV</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Pickup Date */}
            <div className="space-y-2 border border-green-600 rounded-lg p-4 bg-white" style={{ borderWidth: '1px', borderColor: '#15803d' }}>
              <Label htmlFor="pickup-date" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Pickup Date
              </Label>
              <Input
                id="pickup-date"
                type="date"
                value={formData.pickupDate}
                onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                className="w-full"
              />
            </div>

            {/* Return Date */}
            <div className="space-y-2 border border-green-600 rounded-lg p-4 bg-white" style={{ borderWidth: '1px', borderColor: '#15803d' }}>
              <Label htmlFor="return-date" className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Return Date
              </Label>
              <Input
                id="return-date"
                type="date"
                value={formData.returnDate}
                onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                className="w-full"
              />
            </div>

            {/* Location */}
            <div className="space-y-2 border border-green-600 rounded-lg p-4 bg-white" style={{ borderWidth: '1px', borderColor: '#15803d' }}>
              <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Pickup Location
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger id="location">
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

          {/* Search Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-8 py-3 bg-gradient-accent hover:bg-accent-hover text-accent-foreground font-semibold flex items-center gap-2 shadow-lg"
            >
              <Search className="h-5 w-5" />
              Search & Book
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;