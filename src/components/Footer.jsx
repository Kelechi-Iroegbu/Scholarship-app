import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Program', path: '/' },
  { label: 'Application', path: '/applications' },
  { label: 'Scholars', path: '/scholars' },
  { label: 'News', path: '/news' },
  { label: 'About', path: '/about' },
  { label: 'Privacy', path: '/privacy' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-band text-band-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground shrink-0">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h3 className="font-heading text-base font-semibold">Agu Egbe Foundation</h3>
          </div>
          <p className="mt-4 text-sm text-band-foreground/70 leading-relaxed">
            Empowering Ovim's youth through education and opportunity.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-band-foreground/20 text-band-foreground/80 hover:border-secondary hover:text-secondary transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-band-foreground/80 hover:text-secondary transition rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold">Contact</h4>
          <p className="mt-4 text-sm text-band-foreground/70">National Youth Leader</p>
          <p className="text-sm font-semibold text-band-foreground">Engr Nnamdi Ekebuike</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:08036000021" className="flex items-center gap-2 text-band-foreground/80 hover:text-secondary transition">
                <Phone className="h-4 w-4 shrink-0" /> +234 803 600 0021
              </a>
            </li>
            <li>
              <a href="mailto:info@aguegbefoundation.org" className="flex items-center gap-2 text-band-foreground/80 hover:text-secondary transition">
                <Mail className="h-4 w-4 shrink-0" /> info@aguegbefoundation.org
              </a>
            </li>
            <li className="flex items-start gap-2 text-band-foreground/70">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>Ovim, Isuikwuato LGA<br />Abia State, Nigeria</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-base font-semibold">Newsletter</h4>
          <p className="mt-4 text-sm text-band-foreground/70 leading-relaxed">
            Stay updated on scholarship opportunities and news.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex items-center rounded-md border border-band-foreground/20 bg-band-foreground/5 overflow-hidden"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 py-2.5 text-sm text-band-foreground placeholder:text-band-foreground/50 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-full shrink-0 items-center justify-center bg-secondary px-3.5 py-2.5 text-secondary-foreground hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-band-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-band-foreground/75">
          © {new Date().getFullYear()} Agu Egbe Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}