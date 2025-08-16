import { Button } from './ui/button';
import { Input } from './ui/input';
import { Instagram, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background text-primary py-12">
      <hr className="border-bh-dark-gray/20 mb-8 max-w-7xl mx-auto" aria-hidden="true" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Logo & Info */}
          <div className="animate-fade-in">
            <RouterLink to="/" aria-label="Home">
              <img
                src="/logo.png"
                alt="High Tier Media Logo"
                className="h-10 w-auto rounded-xl mb-4"
              />
            </RouterLink>
            <p className="text-sm text-muted-foreground">
              Founded by Louie Cannoy, crafting premium video content since 2015. Specializing in YouTube, podcasts, music videos, and more.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Me', 'Contact', 'Vault'].map((item) => (
                <li key={item}>
                  <RouterLink
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-bh-orange transition-colors duration-200"
                    aria-label={`Navigate to ${item}`}
                  >
                    {item}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/louiecannoy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-bh-orange transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.skool.com/coachreadycreators/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-bh-orange transition-colors duration-200"
                >
                  <Link className="w-4 h-4" />
                  Skool Community
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="animate-fade-in">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Your email"
                className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                type="email"
                aria-label="Email for newsletter subscription"
              />
              <Button
                className="rounded-xl bg-bh-orange text-white hover:bg-bh-orange-light shadow-apple transition-all duration-200"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}