import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for casual gamers",
      popular: false,
      features: [
        "Basic game boosting",
        "Community access",
        "Email support",
        "Mobile app access",
        "Basic security features",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Most popular choice for serious gamers",
      popular: true,
      features: [
        "Premium game boosting",
        "Priority team matching",
        "24/7 live support",
        "Advanced coaching sessions",
        "Military-grade security",
        "Custom gaming profiles",
        "Analytics dashboard",
      ],
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "For professional esports teams",
      popular: false,
      features: [
        "Unlimited premium services",
        "Dedicated account manager",
        "VIP support line",
        "Personal coaching team",
        "Enterprise security suite",
        "Custom integrations",
        "Advanced analytics",
        "Tournament organization",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Gaming Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your gaming potential with our flexible pricing plans designed for every type of gamer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`group hover-lift relative overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? "ring-2 ring-primary shadow-2xl scale-105 bg-gradient-to-br from-card to-gray-50 dark:to-gray-800"
                  : "bg-gradient-to-br from-card to-gray-50 dark:to-gray-900 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-gray-700 text-primary-foreground text-center py-2 text-sm font-semibold">
                    <Sparkles className="inline w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-8"} pb-4`}>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                
                <div className="mt-6">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className={`w-full btn-apple magnetic ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include 30-day money-back guarantee • No setup fees • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;