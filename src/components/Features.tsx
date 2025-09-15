import { Zap, Shield, Globe, Cpu, Users, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant game launches and zero-lag performance with our optimized infrastructure.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-level security protocols protect your data and ensure safe gaming environments.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect to our worldwide network of servers for seamless gaming across continents.",
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Advanced AI algorithms optimize your gaming experience and match you with perfect opponents.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join millions of gamers in our vibrant community ecosystem with social features.",
    },
    {
      icon: Trophy,
      title: "Pro Features",
      description: "Access professional-grade tools, analytics, and services to elevate your gaming.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Why Choose Newrank?
          </h2>
          <p className="text-xl text-gray-600 animate-slide-up" style={{ animationDelay: '200ms' }}>
            Built for gamers, by gamers. Our platform combines cutting-edge technology 
            with intuitive design to deliver the ultimate gaming experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group hover-lift bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-black transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <button className="btn-apple magnetic bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;