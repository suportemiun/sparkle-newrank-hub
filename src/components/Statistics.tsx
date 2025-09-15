import { useEffect, useState } from "react";
import { Trophy, Users, Star, Clock } from "lucide-react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const stats = [
    {
      icon: Users,
      number: 2500000,
      suffix: "+",
      label: "Active Gamers",
      description: "Worldwide community",
    },
    {
      icon: Trophy,
      number: 850000,
      suffix: "+",
      label: "Services Completed",
      description: "Successfully delivered",
    },
    {
      icon: Star,
      number: 4.9,
      suffix: "/5",
      label: "Customer Rating",
      description: "Average satisfaction",
    },
    {
      icon: Clock,
      number: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "Platform availability",
    },
  ];

  const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(increment * step, target));
        
        if (step >= steps) {
          clearInterval(timer);
          setCurrent(target);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [target, isVisible]);
    
    return (
      <span>
        {target < 10 ? current.toFixed(1) : Math.floor(current).toLocaleString()}
        {suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="statistics" className="py-24 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Numbers That Speak
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join millions of gamers who trust Newrank for their gaming journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover-lift"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;