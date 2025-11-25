
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to get the correct href based on current page
  const getHref = (anchor: string) => {
    if (isHomePage) {
      return anchor; // Use anchor directly on home page
    }
    // When on other pages, redirect to home with anchor
    return `/${anchor}`;
  };

  // Handle scroll to anchor when navigating from other pages
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [isHomePage]);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#contato", label: "Contato" },
  ];

  const productLinks = [
    { href: "#produtos", label: "Todos os Produtos" },
    { href: "/liga-metalica", label: "Liga Metálica" },
    { href: "/liga-resinoide", label: "Liga Resinoide" },
    { href: "/cbn-borazon", label: "CBN - Borazon" },
    { href: "/diamante-naturais", label: "Diamante Naturais" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={getHref("#inicio")} className="flex items-center space-x-3">
            <div className="relative w-32 h-12">
              <Image
                src={isScrolled ? "/logo-colorida.png" : "/logo-branca.png"}
                alt="AS&ASJ Logo"
                fill
                className="object-contain transition-opacity duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks?.map((link) => {
              const href = getHref(link.href);
              return (
                <Link
                  key={link?.href ?? ""}
                  href={href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#15297c] hover:bg-gray-50"
                      : "text-white hover:text-[#FECD28] hover:bg-white/10"
                  }`}
                >
                  {link?.label ?? ""}
                </Link>
              );
            })}
            
            {/* Products Dropdown */}
            <DropdownMenu open={productsMenuOpen} onOpenChange={setProductsMenuOpen}>
              <DropdownMenuTrigger
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 outline-none ${
                  isScrolled
                    ? "text-gray-700 hover:text-[#15297c] hover:bg-gray-50 data-[state=open]:text-[#15297c] data-[state=open]:bg-gray-50"
                    : "text-white hover:text-[#FECD28] hover:bg-white/10 data-[state=open]:text-[#FECD28] data-[state=open]:bg-white/10"
                }`}
              >
                Produtos
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : ""}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className={`w-56 ${
                  isScrolled
                    ? "bg-white border-gray-200"
                    : "bg-white/95 backdrop-blur-sm border-gray-200"
                }`}
              >
                {productLinks.map((link) => {
                  const isAnchor = link.href.startsWith('#');
                  const href = isAnchor ? getHref(link.href) : link.href;
                  
                  return (
                    <DropdownMenuItem 
                      key={link.href} 
                      onClick={() => setProductsMenuOpen(false)}
                      asChild
                    >
                      {isAnchor ? (
                        <Link href={href} className="cursor-pointer w-full">
                          {link.label}
                        </Link>
                      ) : (
                        <Link href={href} className="cursor-pointer w-full">
                          {link.label}
                        </Link>
                      )}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks?.map((link) => {
                const href = getHref(link.href);
                return (
                  <Link
                    key={link?.href ?? ""}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#15297c] hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link?.label ?? ""}
                  </Link>
                );
              })}
              
              {/* Mobile Products Section */}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Produtos
                </div>
                {productLinks.map((link) => {
                  const isAnchor = link.href.startsWith('#');
                  const href = isAnchor ? getHref(link.href) : link.href;
                  return (
                    <Link
                      key={link.href}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-[#15297c] hover:bg-gray-50 rounded-md transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
