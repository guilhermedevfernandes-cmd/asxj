"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { Shield, Zap, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PCDPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#15297c] via-[#0f1f5a] to-[#15297c] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/PCD cabeçalho.png"
            alt="Fundo PCD"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#15297c]/95 via-[#15297c]/85 to-[#15297c]/75" />
        </div>
        
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              PCD & PCBN
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Soluções de Alto Desempenho para Usinagem Industrial
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-300 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Alta precisão</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>Máxima durabilidade</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Alto desempenho</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Oferecemos materiais de corte em <strong>PCD (Polycrystalline Diamond)</strong> e <strong>PCBN (Polycrystalline Cubic Boron Nitride)</strong> para aplicações que exigem alta precisão, durabilidade e estabilidade térmica. Indicados para indústrias como automotiva, aeroespacial, metalmecânica, hidráulica, madeira, plásticos e compósitos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCD Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="border-l-4 border-[#15297c] pl-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PCD – Diamante Policristalino
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Ideal para usinagem de materiais não ferrosos, o PCD garante:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Características Principais</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Excelente resistência ao desgaste</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Alta estabilidade térmica</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Aresta de corte extremamente afiada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Acabamento superficial superior</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicações</h3>
                <p className="text-gray-700">
                  Alumínio (inclusive alto teor de silício), cobre, plásticos, MDF, madeira, cerâmicas verdes, compósitos e MMC.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PCBN Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="border-l-4 border-[#15297c] pl-6 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                PCBN – Nitreto Cúbico de Boro Policristalino
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Recomendado para materiais ferrosos endurecidos, o PCBN oferece:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Características Principais</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Desempenho excepcional em altas temperaturas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Vida útil muito superior ao carbeto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#15297c] mr-3 mt-0.5 flex-shrink-0" />
                    <span>Estabilidade em corte contínuo e interrompido</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Aplicações</h3>
                <p className="text-gray-700">
                  Aços endurecidos, ferros fundidos, sinterizados, superligas (ex.: Inconel), componentes automotivos e peças de alta resistência ao desgaste.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Por que escolher nossos materiais?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#15297c] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Alta precisão e repetibilidade</h3>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#15297c] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Redução de custos com retrabalho e setup</h3>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#15297c] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Desempenho superior em processos críticos</h3>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-[#15297c] mr-4 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Suporte técnico especializado para escolha do grau ideal</h3>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#15297c] to-[#0f1f5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fale com um especialista
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Precisa de ajuda para escolher o PCD ou PCBN ideal para sua aplicação?
            </p>
            <Link
              href="https://wa.me/5511988575232?text=Olá! Gostaria de saber mais sobre PCD e PCBN."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors duration-300 shadow-lg text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Clique aqui para falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
