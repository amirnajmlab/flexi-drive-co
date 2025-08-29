import { useState } from "react";
import { supabase } from "@/supabaseClient";
import { Calendar, MapPin, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  { value: "Muscat", label: "Muscat" },
  { value: "Salalah", label: "Salalah" },
  { value: "Sohar", label: "Sohar" },
];
const carTypes = [
  { value: "SUV", label: "SUV" },
  { value: "Sedan", label: "Sedan" },
  { value: "Hatchback", label: "Hatchback" },
  { value: "Luxury", label: "Luxury" },
];

const BookingForm = () => {
  const [form, setForm] = useState({
    pickupLocation: "",
    carType: "",
    pickupDate: "",
    returnDate: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!form.pickupLocation || !form.carType || !form.pickupDate || !form.returnDate) {
      setError("⚠️ Please fill in all fields.");
      return;
    }
    if (new Date(form.returnDate) <= new Date(form.pickupDate)) {
      setError("⚠️ Return date must be after pickup date.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("bookings").insert([
      {
        pickup_location: form.pickupLocation,
        car_type: form.carType,
        pickup_date: form.pickupDate,
        return_date: form.returnDate,
      },
    ]);
    setLoading(false);
    if (error) {
      setError("❌ Error saving booking: " + error.message);
    } else {
      setSuccess("✅ Booking saved successfully!");
      setForm({ pickupLocation: "", carType: "", pickupDate: "", returnDate: "" });
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-brand border border-green-600" style={{ borderWidth: "1px", borderColor: "#15803d" }}>
      <CardContent className="p-8 backdrop-blur-lg bg-white/70">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">Find Your Perfect Car</h2>
        <p className="text-center text-muted-foreground mb-6">Choose from our extensive fleet of modern vehicles</p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="form-group flex flex-col">
            <Label htmlFor="pickupLocation" className="mb-2 font-semibold text-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Pickup Location
            </Label>
            <select
              id="pickupLocation"
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={handleChange}
              className="p-3 border-2 border-gray-200 rounded-xl focus:border-green-600 text-base"
            >
              <option value="">Select location</option>
              {locations.map(loc => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group flex flex-col">
            <Label htmlFor="carType" className="mb-2 font-semibold text-foreground flex items-center gap-2">
              <Car className="h-4 w-4 text-primary" /> Car Type
            </Label>
            <select
              id="carType"
              name="carType"
              value={form.carType}
              onChange={handleChange}
              className="p-3 border-2 border-gray-200 rounded-xl focus:border-green-600 text-base"
            >
              <option value="">Select car type</option>
              {carTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div className="form-group flex flex-col">
            <Label htmlFor="pickupDate" className="mb-2 font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Pickup Date
            </Label>
            <Input
              id="pickupDate"
              name="pickupDate"
              type="date"
              value={form.pickupDate}
              onChange={handleChange}
              className="p-3 border-2 border-gray-200 rounded-xl focus:border-green-600 text-base"
            />
          </div>
          <div className="form-group flex flex-col">
            <Label htmlFor="returnDate" className="mb-2 font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" /> Return Date
            </Label>
            <Input
              id="returnDate"
              name="returnDate"
              type="date"
              value={form.returnDate}
              onChange={handleChange}
              className="p-3 border-2 border-gray-200 rounded-xl focus:border-green-600 text-base"
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-2">
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg text-lg transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Booking..." : "Search & Book"}
            </Button>
          </div>
          {error && <div className="col-span-4 error text-red-600 text-center mt-2 text-base">{error}</div>}
          {success && <div className="col-span-4 success text-green-600 text-center mt-2 text-base">{success}</div>}
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;