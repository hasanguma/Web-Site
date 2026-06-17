import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Youtube, Facebook } from "lucide-react";
import { useState } from "react";
import { SiTiktok } from "react-icons/si";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/services", label: "خدماتنا" },
    { href: "/gallery", label: "معرض الصور" },
    { href: "/booking", label: "احجز موعداً" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="hidden items-center md:flex">
              <span className="text-3xl font-bold tracking-wide" style={{
                fontFamily: "'Scheherazade New', serif",
                background: 'linear-gradient(135deg, #D4A84B 0%, #F5E27A 40%, #A07F3A 60%, #F0C94A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 1px 2px rgba(160,127,58,0.3))',
              }}>
                صوت وتسجيلات الذهبية
              </span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between md:justify-end">
            <div className="md:hidden">
              <Link href="/" className="text-xl font-bold" style={{
                fontFamily: "'Scheherazade New', serif",
                background: 'linear-gradient(135deg, #D4A84B 0%, #F5E27A 40%, #A07F3A 60%, #F0C94A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                صوت وتسجيلات الذهبية
              </Link>
            </div>
            <Link
              href="/admin"
              className="text-sm font-medium text-muted-foreground hover:text-primary hidden md:block mr-4"
            >
              لوحة الإدارة
            </Link>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-b bg-background p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/admin"
                className="text-lg font-medium text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                لوحة الإدارة
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t py-12" style={{ backgroundColor: '#A07F3A' }}>
        <div className="container grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{
              fontFamily: "'Scheherazade New', serif",
              background: 'linear-gradient(135deg, #D4A84B 0%, #F5E27A 45%, #E3D5BB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>صوت وتسجيلات الذهبية</h3>
            <p className="text-lg leading-relaxed" style={{ color: '#E3D5BB', opacity: 0.85 }}>
              نوفر أفضل معدات الصوت والإضاءة لمناسباتكم من أعراس وحفلات. فريقنا من المحترفين جاهز لتقديم تجربة صوتية استثنائية لا تُنسى.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4" style={{ color: '#E3D5BB' }}>روابط سريعة</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-lg transition-colors hover:text-white" style={{ color: '#E3D5BB', opacity: 0.8 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-4" style={{ color: '#E3D5BB' }}>تواصل معنا</h4>
            <address className="not-italic space-y-3 text-lg" style={{ color: '#E3D5BB', opacity: 0.85 }}>
              <p>تركيا — كهرمان مرعش</p>
              <p dir="ltr" className="text-right">
                <a href="tel:05372806390" className="hover:text-white transition-colors">
                  05372806390 — أبو تيم
                </a>
              </p>
            </address>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(227,213,187,0.2)', color: '#E3D5BB' }}
                aria-label="يوتيوب"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(227,213,187,0.2)', color: '#E3D5BB' }}
                aria-label="تيك توك"
              >
                <SiTiktok className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: 'rgba(227,213,187,0.2)', color: '#E3D5BB' }}
                aria-label="فيسبوك"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="container mt-12 border-t pt-8 text-center" style={{ borderColor: 'rgba(227,213,187,0.3)', color: '#E3D5BB', opacity: 0.7 }}>
          <p>&copy; {new Date().getFullYear()} صوت وتسجيلات الذهبية. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
