import { Sparkles, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 animate-float">
          <Sparkles className="h-6 w-6 text-gray-300" strokeWidth={1} />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-4 w-4 text-gray-400" strokeWidth={1} />
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: '4s' }}>
          <Sparkles className="h-5 w-5 text-gray-300" strokeWidth={1} />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
            <span className="text-sm font-medium text-gray-600">
              The World's Leading Game Service Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 animate-slide-up">
            Game Service
            <br />
            <span className="text-gray-600">Reimagined</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '200ms' }}>
            Experience the future of gaming with Newrank's revolutionary platform. 
            Connecting gamers worldwide with premium services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <button className="btn-apple magnetic group bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </button>

            <button className="btn-apple group border border-gray-300 text-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">1M+</div>
              <div className="text-gray-600">Active Gamers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">500+</div>
              <div className="text-gray-600">Premium Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;