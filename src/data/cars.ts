export interface Car {
  id: string;
  category: string;
  name: string;
  model: string;
  seats: number;
  transmission: string;
  minAge: number;
  mpg: string;
  image: string;
  description: string;
  features: string[];
  pricePerDay: number;
  faq: { question: string; answer: string }[];
  relatedCars?: string[];
}

export const cars: Car[] = [
  {
    id: "chevy-spark",
    category: "Economy Car",
    name: "Chevy Spark or Similar",
    model: "Chevy Spark",
    seats: 4,
    transmission: "Automatic",
    minAge: 21,
    mpg: "27-35",
    image: "https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/sign/img/car/Chevrolet_Spark_.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzI4ZWQ3MC1mYTg1LTRlNGMtOWRhYy03NzBmZDBjYTZmZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvY2FyL0NoZXZyb2xldF9TcGFya18ud2VicCIsImlhdCI6MTc1NjUwNzUxOSwiZXhwIjoxNzU3MTEyMzE5fQ.KzPkvZTmYwaqP5dkV4A2FjdFiyiI6pUSNdU7_c0LKfA",
    description: "Zip through the city with our Chevy Spark — a compact and fuel-efficient car perfect for urban adventures. With nimble handling, modern features, and surprising interior space, this small but mighty hatchback makes every drive easy and fun. Whether you need a quick commute or a budget-friendly rental, the Spark has you covered.",
    features: ["Fuel Efficient", "City Friendly", "Easy Parking", "Modern Tech"],
    pricePerDay: 31,
    faq: [
      { question: "What is an economy car?", answer: "A compact, fuel-efficient vehicle designed for budget-conscious travelers." },
      { question: "Are they easy to drive in busy cities?", answer: "Absolutely, compact size makes them perfect for city driving and easy parking." },
      { question: "Can I upgrade?", answer: "Yes, upgrades to midsize or SUV available at booking or pickup." },
      { question: "Can I take it outside the city?", answer: "Yes, allowed with minor restrictions for long-distance travel." },
      { question: "Fuel efficiency?", answer: "Average 30–35 MPG for excellent fuel economy." },
      { question: "Transmission?", answer: "Automatic transmission only for easy driving." }
    ],
    relatedCars: ["hyundai-accent", "hyundai-elantra"]
  },
  {
    id: "hyundai-accent",
    category: "Compact Car", 
    name: "Hyundai Accent or Similar",
    model: "Hyundai Accent",
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    mpg: "27-35",
    image: "https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/sign/img/car/Hyundai_Accent_.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzI4ZWQ3MC1mYTg1LTRlNGMtOWRhYy03NzBmZDBjYTZmZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvY2FyL0h5dW5kYWlfQWNjZW50Xy53ZWJwIiwiaWF0IjoxNzU2NTA3NTI5LCJleHAiOjE3NTcxMTIzMjl9.86_nZDSD2ZatVYRmblxqJaIViW6EX0RLmNH5iwCHmfo",
    description: "Drive with ease and efficiency in our Hyundai Accent — the perfect compact car for both city streets and longer drives. With its sleek design, fuel efficiency, and comfortable interior, the Accent offers a smooth ride without compromising on space. Ideal for solo travelers or small groups.",
    features: ["Spacious Interior", "Fuel Efficient", "Smooth Ride", "Tech Features"],
    pricePerDay: 35,
    faq: [
      { question: "What makes compact cars different?", answer: "More space than economy cars while maintaining excellent fuel efficiency." },
      { question: "Is it good for long trips?", answer: "Yes, perfect for both city driving and highway travel." },
      { question: "Seating capacity?", answer: "Comfortably seats 5 passengers." },
      { question: "MPG rating?", answer: "Achieves 27–35 MPG depending on driving conditions." },
      { question: "Age requirement?", answer: "Minimum age of 21 years required." },
      { question: "Transmission type?", answer: "Automatic transmission only for convenience." }
    ],
    relatedCars: ["chevy-spark", "hyundai-elantra"]
  },
  {
    id: "hyundai-elantra",
    category: "Midsize Car",
    name: "Hyundai Elantra or Similar", 
    model: "Hyundai Elantra",
    seats: 5,
    transmission: "Automatic",
    minAge: 21,
    mpg: "33-43",
    image: "https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/sign/img/car/Hyundai_Elantra_.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzI4ZWQ3MC1mYTg1LTRlNGMtOWRhYy03NzBmZDBjYTZmZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvY2FyL0h5dW5kYWlfRWxhbnRyYV8ud2VicCIsImlhdCI6MTc1NjUwNzUzNywiZXhwIjoxNzU3MTEyMzM3fQ.bQLKsqm6ouMkjQa9BjbeW2Z2czsE-XBVdWV9wIZBt3k",
    description: "Drive in style and efficiency with our Hyundai Elantra — a sleek sedan designed for comfort and fuel savings. With its spacious interior, smooth handling, and advanced tech features, it's perfect for city commutes or weekend getaways.",
    features: ["Premium Interior", "Advanced Tech", "Excellent MPG", "Smooth Handling"],
    pricePerDay: 45,
    faq: [
      { question: "MPG rating?", answer: "Outstanding 33–43 MPG for excellent fuel economy." },
      { question: "Passenger capacity?", answer: "Seats 5 passengers comfortably." },
      { question: "Good for business trips?", answer: "Yes, modern features and comfort ideal for professionals." },
      { question: "Suitable for out-of-town trips?", answer: "Perfect for both city driving and long-distance travel." },
      { question: "Age requirement?", answer: "Minimum age of 21 years." },
      { question: "Transmission type?", answer: "Automatic transmission for ease of use." }
    ],
    relatedCars: ["hyundai-accent", "nissan-altima"]
  },
  {
    id: "nissan-altima",
    category: "Fullsize Car",
    name: "Nissan Altima or Similar",
    model: "Nissan Altima", 
    seats: 5,
    transmission: "Automatic",
    minAge: 25,
    mpg: "28-39",
    image: "https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/sign/img/car/Nissan_Altima_.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzI4ZWQ3MC1mYTg1LTRlNGMtOWRhYy03NzBmZDBjYTZmZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvY2FyL05pc3Nhbl9BbHRpbWFfLndlYnAiLCJpYXQiOjE3NTY1MDc1NTUsImV4cCI6MTc1NzExMjM1NX0.En62VuavKgotJDR51sls0hkP9gsgfJsQ6gBdkZy2YxA",
    description: "Enjoy a smooth and efficient ride with our Nissan Altima — a stylish sedan built for comfort, performance, and reliability. With its spacious interior, advanced safety features, and responsive handling, this car is perfect for city commutes and long road trips.",
    features: ["Spacious Cabin", "Advanced Safety", "Premium Comfort", "Powerful Engine"],
    pricePerDay: 55,
    faq: [
      { question: "Difference from midsize cars?", answer: "More space, enhanced comfort, and stronger performance capabilities." },
      { question: "Minimum age requirement?", answer: "Drivers must be 25+ years old." },
      { question: "MPG efficiency?", answer: "Achieves 28–39 MPG average fuel economy." },
      { question: "Family friendly?", answer: "Seats 5 passengers with ample comfort for families." },
      { question: "Good for road trips?", answer: "Excellent choice for long-distance travel." },
      { question: "Transmission options?", answer: "Automatic transmission only." }
    ],
    relatedCars: ["hyundai-elantra", "hyundai-tucson"]
  },
  {
    id: "hyundai-tucson",
    category: "Midsize SUV",
    name: "Hyundai Tucson or Similar",
    model: "Hyundai Tucson",
    seats: 5,
    transmission: "Automatic", 
    minAge: 25,
    mpg: "26-33",
    image: "https://onnnbeqeewfpgdcczgjm.supabase.co/storage/v1/object/sign/img/car/Hyundai_Tucson.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzI4ZWQ3MC1mYTg1LTRlNGMtOWRhYy03NzBmZDBjYTZmZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWcvY2FyL0h5dW5kYWlfVHVjc29uLndlYnAiLCJpYXQiOjE3NTY1MDc1NDgsImV4cCI6MTc1NzExMjM0OH0.9VwDQnvqgcsvrJ9ow9IPrB0e3txf-AIM6xqbyjvS4VM",
    description: "Drive with confidence in our Hyundai Tucson — a versatile and stylish SUV ready for any adventure. With its spacious interior, advanced safety features, and smooth handling, the Tucson is perfect for city driving or weekend getaways.",
    features: ["Higher Seating", "Cargo Space", "All-Weather Ready", "Advanced Safety"],
    pricePerDay: 65,
    faq: [
      { question: "Passenger and cargo capacity?", answer: "5 seats with generous cargo space for luggage and gear." },
      { question: "MPG for an SUV?", answer: "Efficient 26–33 MPG despite SUV size." },
      { question: "Age requirement?", answer: "Minimum 25 years old required." },
      { question: "Suitable for long drives?", answer: "Yes, ideal for both urban driving and long trips." },
      { question: "Safety features?", answer: "Equipped with comprehensive advanced safety technology." },
      { question: "Transmission type?", answer: "Automatic transmission for smooth driving." }
    ],
    relatedCars: ["nissan-altima"]
  }
];