
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
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
            Sobre <span className="text-[#15297c]">Nós</span>
          </h2>
          <div className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl space-y-4">
            {companyInfo?.about?.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Content Grid: Bullets Left + Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left: Bullet Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#15297c]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-[#15297c]/10 rounded-lg">
                  <Target className="w-5 h-5 sm:w-7 sm:h-7 text-[#15297c]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Nossa Missão
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {companyInfo?.mission ?? ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#15297c]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-[#15297c]/10 rounded-lg">
                  <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-[#15297c]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Parcerias Internacionais
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Trabalhamos com os principais fabricantes mundiais de diamantes industriais e superabrasivos.
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#15297c]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 p-2 sm:p-3 bg-[#15297c]/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 sm:w-7 sm:h-7 text-[#15297c]" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Inovação Constante
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Acompanhamos as últimas tecnologias do mercado para oferecer as melhores soluções.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Imagem para o Sobre.jpg"
                alt="Sobre a AS&ASJ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
