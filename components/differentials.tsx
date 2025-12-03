
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, Settings, Award, Package, TrendingUp } from "lucide-react";
import contentData from "@/public/asasj_content.json";
import MagneticButton from "./magnetic-button";

const iconMap: Record<string, any> = {
  trophy: Trophy,
  users: Users,
  settings: Settings,
  award: Award,
  package: Package,
  trending: TrendingUp,
};

const Differentials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const differentials = contentData?.companyInfo?.differentials ?? [];

  return (
    <section id="diferenciais" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#15297c] to-[#15297c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Por Que Escolher a <span className="text-[#D98C3C]">AS&ASJ</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-4xl mx-auto mb-4 leading-relaxed px-4">
            Mais de quatro décadas conectando tecnologia internacional ao mercado brasileiro. 
            Nossa expertise, parcerias estratégicas e compromisso com a excelência nos tornam 
            o parceiro ideal para impulsionar seu negócio.
          </p>
          <div className="w-24 h-1 bg-[#D98C3C] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {differentials?.map((differential: any, index: number) => {
            const IconComponent = iconMap?.[differential?.icon ?? "award"] ?? Award;
            return (
              <motion.div
                key={differential?.title ?? index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Glass Morphism Card */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 h-full overflow-hidden">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#15297c]/0 via-[#D98C3C]/0 to-[#F58434]/0 group-hover:from-[#15297c]/10 group-hover:via-[#D98C3C]/5 group-hover:to-[#F58434]/10 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-3 sm:gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 sm:p-3 bg-[#D98C3C] rounded-lg shadow-lg flex-shrink-0"
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#15297c]" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                        {differential?.title ?? ""}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                        {differential?.description ?? ""}
                      </p>
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center px-4"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-white/20 inline-block max-w-2xl w-full">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Vamos Crescer Juntos?
            </h3>
            <p className="text-gray-100 mb-4 sm:mb-6 text-base sm:text-lg">
              Descubra como nossas soluções em abrasivos industriais podem 
              elevar a performance do seu negócio. Nossa equipe está pronta 
              para atender você.
            </p>
            <a href="#contato" className="block w-full sm:inline-block sm:w-auto">
              <MagneticButton className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D98C3C] hover:bg-[#F58434] text-gray-900 font-bold px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg">
                Fale com Nossos Especialistas
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;
