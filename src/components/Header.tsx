import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'BYOT', href: '#byot' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Company', href: '#company' },
  ];

  const countries = [
    { flag: '🇮🇳', code: 'IN', phone: '+91-9946 86 9229' },
    { flag: '🇺🇸', code: 'US', phone: '+1-551-554-0052' },
    { flag: '🇦🇪', code: 'AE', phone: '+971-542443022' },
    { flag: '🇶🇦', code: 'QA', phone: '+974-66866431' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 hover:text-primary transition-smooth"
              >
                <Globe className="w-4 h-4" />
                English
                <ChevronDown className="w-3 h-3" />
              </button>
              {isLanguageOpen && (
                <div className="absolute top-full left-0 mt-2 bg-card shadow-card border border-border rounded-lg p-2 min-w-[200px]">
                  {countries.map((country) => (
                    <div key={country.code} className="flex items-center gap-3 p-2 hover:bg-accent rounded transition-smooth">
                      <span className="text-lg">{country.flag}</span>
                      <span className="font-medium">{country.code}</span>
                      <span className="text-muted-foreground text-sm">{country.phone}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span>🇮🇳 +91-9946 86 9229</span>
            <span>🇺🇸 +1-551-554-0052</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">
              buddhi<span className="text-coral">voice</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="coral" size="sm">
              Click to contact
            </Button>
            <Button variant="outline" size="sm" onClick={() => navigate('/signin')}>
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-6">
              <Button variant="coral" size="sm">
                Click to contact
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;