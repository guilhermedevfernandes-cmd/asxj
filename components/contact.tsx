
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Erro ao enviar mensagem");
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e?.target?.name ?? ""]: e?.target?.value ?? "",
    });
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Entre em <span className="text-[#15297c]">Contato</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            Estamos prontos para atender suas necessidades e fornecer as melhores soluções
          </p>
          <div className="w-24 h-1 bg-[#15297c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Fale Conosco
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                Nossa equipe está pronta para fornecer consultoria técnica especializada e ajudá-lo a encontrar a solução perfeita para sua aplicação.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 sm:p-3 bg-[#15297c]/10 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#15297c]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Telefone/WhatsApp</h4>
                  <a href="https://wa.me/5511988575232" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gray-700 hover:text-[#15297c] break-all">
                    (11) 98857-5232
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 sm:p-3 bg-[#15297c]/10 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#15297c]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">E-mail</h4>
                  <a href="mailto:asjcontato@hotmail.com" className="text-sm sm:text-base text-gray-700 hover:text-[#15297c] break-all">
                    asjcontato@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="p-2 sm:p-3 bg-[#15297c]/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#15297c]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Localização</h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Atibaia - SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#15297c] to-[#15297c] rounded-xl p-6 sm:p-8 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Horário de Atendimento</h4>
              <p className="text-sm sm:text-base text-gray-100">
                Segunda a Sexta: 8h às 17h
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData?.name ?? ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15297c] focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData?.email ?? ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15297c] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData?.phone ?? ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15297c] focus:border-transparent transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData?.company ?? ""}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15297c] focus:border-transparent transition-all"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData?.message ?? ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15297c] focus:border-transparent transition-all resize-none"
                  placeholder="Descreva sua necessidade ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#15297c] hover:bg-[#0f1f5a] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                * Campos obrigatórios. Suas informações serão tratadas com confidencialidade.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
