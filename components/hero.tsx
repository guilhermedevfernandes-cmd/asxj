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
          <Image
            src="https://static.abacusaicdn.net/images/5fb595f0-d143-4884-95f7-e0be44361ce1.jpg"
            alt="Moderna instalação de fabricação de abrasivos diamantados"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#115E3E]/95 via-[#115E3E]/85 to-[#115E3E]/75" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <DiamondIcon size={28} className="text-[#FECD28]" />
              <span className="text-[#FECD28] font-semibold text-lg">
                Desde 1981
              </span>
            </div>

            {/* Title without animation */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Diamantes que elevam o desempenho da indústria.
            </h1>

            <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed">
              Conectando tecnologia internacional ao mercado brasileiro há mais de
              40 anos
            </p>

            {/* CTA Buttons with Magnetic Effect */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contato" className="inline-block">
                <button className="group inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95" style={{ backgroundColor: '#FECD28', color: '#000000' }}>
                  <span style={{ color: '#000000' }}>Solicite um Orçamento</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: '#000000', stroke: '#000000' }} />
                </button>
              </a>
              <a href="#produtos">
                <MagneticButton className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 border-2 border-white/30">
                  Conheça Nossos Produtos
                </MagneticButton>
              </a>
            </div>

            {/* Stats with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-[#FECD28]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#FECD28]" />
                  <div className="text-3xl font-bold text-white">40+</div>
                </div>
                <div className="text-sm text-gray-200">Anos de Experiência</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-[#FECD28]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#FECD28]" />
                  <div className="text-3xl font-bold text-white">5</div>
                </div>
                <div className="text-sm text-gray-200">Linhas de Produtos</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-[#FECD28]/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#FECD28]" />
                  <div className="text-3xl font-bold text-white">100%</div>
                </div>
                <div className="text-sm text-gray-200">Foco em Qualidade</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative w-32 h-32 mx-auto mb-4 bg-white/90 rounded-2xl flex items-center justify-center shadow-lg">
                    <ImageIcon className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-lg text-gray-600 font-semibold mb-2">Imagem Hero</p>
                  <p className="text-sm text-gray-500">Placeholder para imagem principal</p>
                </div>
              </div>
              {/* 
              TODO: Quando tiver a imagem, descomente e ajuste o caminho:
              Coloque a imagem em: /public/hero-image.jpg
              
              <Image
                src="/hero-image.jpg"
                alt="Diamantes industriais AS&ASJ"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              */}
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
