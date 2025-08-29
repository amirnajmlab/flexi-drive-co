import { useState } from "react";
import { Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const Fleet = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["all", ...new Set(cars.map(car => car.category))];

  const filteredCars = cars.filter(car => 
    selectedCategory === "all" || car.category === selectedCategory
  );

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.pricePerDay - b.pricePerDay;
      case "price-high":
        return b.pricePerDay - a.pricePerDay;
      case "seats":
        return b.seats - a.seats;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Complete Fleet
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of vehicles, each designed to meet your specific needs and budget.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Category Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Filter className="h-4 w-4 text-primary" />
                    Category
                  </label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.slice(1).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name A-Z</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="seats">Passenger Capacity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Showing {sortedCars.length} of {cars.length} vehicles
            </div>
          </CardContent>
        </Card>

        {/* Fleet Grid */}
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
        }>
          {sortedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* Empty State */}
        {sortedCars.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filters to see more results.
            </p>
            <Button onClick={() => setSelectedCategory("all")}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-surface-elevated rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Our team is here to help you find the perfect vehicle for your needs.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Fleet;