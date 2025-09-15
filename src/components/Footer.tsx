import { Sparkles, Github, Twitter, MessageSquare } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "API", "Documentation"],
    Company: ["About", "Careers", "Blog", "Press Kit"],
    Resources: ["Community", "Support", "Status", "Terms"],
    Connect: ["Twitter", "Discord", "GitHub", "LinkedIn"],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-background" strokeWidth={1.5} />
              <span className="text-xl font-semibold tracking-tight">Newrank</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              The world's leading game service platform, connecting millions of gamers 
              with premium experiences and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group"
                aria-label="Discord"
              >
                <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="font-semibold text-background mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Newrank. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;