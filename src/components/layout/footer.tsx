import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Youtube, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080B11] text-[#F5F0EB] border-t border-[#C5A25D]/20">
      <div className="max-w-7xl mx-auto py-20 px-6 lg:px-16">
        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full ring-1 ring-border overflow-hidden">
                <Image
                  src="/assets/otho-crest-logo.jpg"
                  alt="OTHO Crest"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl text-[#F5F0EB]">OTHO</span>
            </div>
            <p className="font-sans text-sm text-[#F5F0EB]/60 mt-3">
              Real Estate. With a clearer perspective.
            </p>
          </div>

          {/* Column 2: Advisory */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#C5A25D] mb-6">
              ADVISORY
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/advisory/residential" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Residential
              </Link>
              <Link href="/advisory/commercial-real-estate" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Commercial
              </Link>
              <Link href="/advisory/land-plotted-developments" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Land & Plotted
              </Link>
              <Link href="/advisory/investment-advisory" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Investment Advisory
              </Link>
              <Link href="/advisory/project-marketing" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Project Marketing
              </Link>
              <Link href="/advisory/strategic-advisory" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Strategic Advisory
              </Link>
            </div>
          </div>

          {/* Column 3: Corridors */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#C5A25D] mb-6">
              CORRIDORS
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/locations/kokapet" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Kokapet
              </Link>
              <Link href="/locations/neopolis" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Neopolis
              </Link>
              <Link href="/locations/financial-district" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Financial District
              </Link>
              <Link href="/locations/hitech-city" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                HITEC City
              </Link>
              <Link href="/locations/narsingi" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Narsingi
              </Link>
              <Link href="/locations/gachibowli" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Gachibowli
              </Link>
              <Link href="/locations/airport-corridor" className="font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors block">
                Airport Corridor
              </Link>
            </div>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#C5A25D] mb-6">
              CONNECT
            </h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@otho.co.in" className="flex items-center gap-3 font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors">
                <Mail size={16} />
                <span>contact@otho.co.in</span>
              </a>
              <a href="tel:+919949041919" className="flex items-center gap-3 font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors">
                <Phone size={16} />
                <span>+91 99490 41919</span>
              </a>
              <a href="https://wa.me/919949041919" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a href="https://www.youtube.com/@OthoRealty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors">
                <Youtube size={16} />
                <span>YouTube</span>
              </a>
              <a href="https://www.google.com/maps/place/Otho+Realty+Pvt+Ltd/data=!4m2!3m1!1s0x0:0x2bc83106c33c7eb9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-sm text-[#F5F0EB]/70 hover:text-[#D4AF6E] transition-colors">
                <MapPin size={16} />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Address Block */}
        <div className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#F5F0EB]/40 mb-8 max-w-2xl">
          <p>
            Otho Advisory & Consultancy, E5, Tapasya Apartments, behind ICICI Bank, opp. Rockwell International School, Kokapet, Hyderabad, Telangana 500075
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F5F0EB]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#F5F0EB]/40 font-sans">
            © {currentYear} OTHO Realty Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#F5F0EB]/40 font-sans">
            <Link href="/privacy-policy" className="hover:text-[#F5F0EB]/70 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#F5F0EB]/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
