"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, Sparkles, Image as ImageIcon } from "lucide-react";
import { useRef } from "react";
import Particles from "./particles";
import MagneticButton from "./magnetic-button";
import DiamondIcon from "./diamond-icon";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <Particles />

      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* Desktop Image */}
          <Image
            src="/herobackground/opcao1_desktop.jpg"
            alt="Moderna instalação de fabricação de abrasivos diamantados"
            fill
            className="object-cover hidden md:block"
            priority
            sizes="100vw"
          />
          {/* Mobile Image */}
          <Image
            src="/herobackground/opcao1_mobile.jpg"
            alt="Moderna instalação de fabricação de abrasivos diamantados"
            fill
            className="object-cover md:hidden"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15297c]/95 via-[#15297c]/85 to-[#15297c]/75" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-7 h-7">
                <Image
                  src="/arquivos novos atualizacao/diamante.webp"
                  alt="Diamante"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[#D98C3C] font-semibold text-lg">
                Desde 1981
              </span>
            </div>

            {/* Title without animation */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Diamantes que elevam o desempenho da indústria.
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed">
              Conectando tecnologia internacional ao mercado brasileiro há mais de
              40 anos
            </p>

            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a href="https://wa.me/5511988575232" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95" style={{ backgroundColor: '#D98C3C', color: '#000000' }}>
                  <span style={{ color: '#000000' }}>Solicite um Orçamento</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" style={{ color: '#000000', stroke: '#000000' }} />
                </button>
              </a>
              <a href="#produtos" className="w-full sm:w-auto">
                <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 border-2 border-white/30">
                  Conheça Nossos Produtos
                </MagneticButton>
              </a>
            </div>

            {/* Stats with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-2 sm:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:border-[#D98C3C]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D98C3C]" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">40+</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-200 text-center">Anos de Experiência</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:border-[#D98C3C]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D98C3C]" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">5</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-200 text-center">Linhas de Produtos</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:border-[#D98C3C]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#D98C3C]" />
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">100%</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-200 text-center">Foco em Qualidade</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-none mt-8 lg:mt-0 flex items-center justify-center w-full"
          >
            <div className="relative w-full h-[700px] sm:h-[800px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1100px] flex items-center justify-center overflow-visible">
              <div className="relative w-full h-full">
                <Image
                  src="/FOTO DA DIREITA HERO/Imagem da direita Hero.png"
                  alt="Diamantes industriais AS&ASJ"
                  fill
                  className="object-contain"
                  style={{ transform: 'scale(3.5)', objectFit: 'contain' }}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
