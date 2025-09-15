import { Monitor, Smartphone, Gamepad2, Users, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductShowcase = () => {
  const products = [
    {
      icon: Gamepad2,
      title: "Game Boosting",
      description: "Professional rank boosting services with 99% success rate",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: Users,
      title: "Team Services",
      description: "Find your perfect gaming team with our matching system",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: Shield,
      title: "Account Security",
      description: "Military-grade protection for all your gaming accounts",
      gradient: "from-gray-700 to-gray-500",
    },
    {
      icon: Monitor,
      title: "Game Coaching",
      description: "Learn from pros with personalized 1-on-1 coaching sessions",
      gradient: "from-gray-900 to-gray-700",
    },
    {
      icon: Smartphone,
      title: "Mobile Gaming",
      description: "Specialized services for mobile gaming platforms",
      gradient: "from-gray-800 to-gray-600",
    },
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Lightning-fast service delivery in under 24 hours",
      gradient: "from-gray-700 to-gray-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-gray-600 bg-clip-text text-transparent">
            Premium Game Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of gaming services designed to elevate your gaming experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover-lift bg-gradient-to-br from-card to-gray-50 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;