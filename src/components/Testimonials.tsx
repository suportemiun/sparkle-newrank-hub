import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Professional Gamer",
      avatar: "AC",
      rating: 5,
      text: "Newrank transformed my gaming career. The coaching services are unmatched, and I reached Diamond rank in just 3 months.",
    },
    {
      name: "Sarah Johnson",
      role: "Esports Enthusiast",
      avatar: "SJ",
      rating: 5,
      text: "The team-finding service connected me with amazing players. We're now competing in regional tournaments together.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Casual Gamer",
      avatar: "MR",
      rating: 5,
      text: "Security services gave me peace of mind. My accounts are safe, and the customer support is incredibly responsive.",
    },
    {
      name: "Emily Wang",
      role: "Content Creator",
      avatar: "EW",
      rating: 5,
      text: "The boosting service helped me create better content. My gameplay improved dramatically with their professional help.",
    },
    {
      name: "David Kim",
      role: "Tournament Organizer",
      avatar: "DK",
      rating: 5,
      text: "Newrank's reliability is outstanding. 99.9% uptime means our events run smoothly every single time.",
    },
    {
      name: "Lisa Thompson",
      role: "Mobile Gamer",
      avatar: "LT",
      rating: 5,
      text: "Their mobile gaming services are game-changing. Fast delivery and professional quality exceeded all expectations.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Loved by Gamers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our community says about their experience with Newrank
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover-lift bg-gradient-to-br from-card to-gray-50 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;