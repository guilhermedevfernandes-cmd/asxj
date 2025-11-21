
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Target, Globe, Lightbulb } from "lucide-react";
import Image from "next/image";
import contentData from "@/public/asasj_content.json";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companyInfo = contentData?.companyInfo ?? {};

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Nossa <span className="text-[#115E3E]">História</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            {companyInfo?.about ?? ""}
          </p>
        </motion.div>

        {/* Content Grid: Bullets Left + Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bullet Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#A7CE48]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#A7CE48]/10 rounded-lg">
                  <Target className="w-7 h-7 text-[#115E3E]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Nossa Missão
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {companyInfo?.mission ?? ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships Card */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#1CA653]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#1CA653]/10 rounded-lg">
                  <Globe className="w-7 h-7 text-[#1CA653]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Parcerias Internacionais
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Trabalhamos com os principais fabricantes mundiais de diamantes industriais e superabrasivos.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#678746]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-[#678746]/10 rounded-lg">
                  <Lightbulb className="w-7 h-7 text-[#678746]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Inovação Constante
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Acompanhamos as últimas tecnologias do mercado para oferecer as melhores soluções.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#115E3E] to-[#678746] shadow-xl">
              {/* Placeholder for user's image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-20 h-20 mx-auto mb-4 border-4 border-white/30 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold mb-2">Adicione sua Imagem</p>
                  <p className="text-sm text-white/80">Espaço reservado para foto da empresa</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-4 left-4 w-40 h-40 bg-[#FECD28]/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
