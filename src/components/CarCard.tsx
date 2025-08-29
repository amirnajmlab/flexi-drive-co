import { Link } from "react-router-dom";
import { Users, Settings, Calendar, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-brand transition-all duration-300 hover:-translate-y-1 animate-fade-in">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-4/5 h-4/5 object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Badge variant="secondary" className="mb-2">
              {car.category}
            </Badge>
            <h3 className="font-semibold text-lg text-foreground">{car.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${car.pricePerDay}</div>
            <div className="text-sm text-muted-foreground">per day</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Settings className="h-4 w-4 text-primary" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{car.minAge}+ years</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="h-4 w-4 text-primary" />
            <span>{car.mpg} mpg</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {car.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {car.features.slice(0, 3).map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/car/${car.id}`} className="w-full">
          <Button className="w-full bg-gradient-primary hover:bg-primary-hover">
            View Details & Book
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CarCard;