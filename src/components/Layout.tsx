
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl md:text-2xl font-bold text-slate-800 hover:text-purple-700 transition-colors">
                Mya The Disciplinarian
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-purple-700 bg-purple-50"
                        : "text-slate-600 hover:text-purple-700 hover:bg-purple-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Link to="/booking">Book Session</Link>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-purple-700 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-purple-700 bg-purple-50"
                      : "text-slate-600 hover:text-purple-700 hover:bg-purple-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                  <Link to="/booking" onClick={() => setIsMenuOpen(false)}>Book Session</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">Mya The Disciplinarian</h3>
              <p className="text-slate-300 text-sm">
                Professional discipline services with discretion, respect, and expertise.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-6 pt-6 text-center text-slate-400">
            <p className="text-sm">&copy; 2024 Mya The Disciplinarian. All rights reserved.</p>
            <p className="mt-1 text-xs">
              Privacy guaranteed. Professional services for consenting adults only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
