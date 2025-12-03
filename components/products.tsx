
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import contentData from "@/public/asasj_content.json";

// Mapeamento de produtos para suas páginas
const productLinks: Record<string, string> = {
  "resin-bond": "/liga-resinoide",
  "metal-bond": "/liga-metalica",
  "borazon": "/cbn-borazon",
  "natural": "/diamante-naturais",
  "revestimentos": "/revestimentos",
  "pcd-pdc": "/pcd",
};

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = contentData?.products ?? [];

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nossos <span className="text-[#15297c]">Produtos</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            Soluções completas em abrasivos industriais para todas as suas necessidades
          </p>
          <div className="w-24 h-1 bg-[#15297c] mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products?.map((product: any, index: number) => (
            <ProductCard
              key={product?.name ?? index}
              product={product}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index, inView }: any) => {
  const productLink = productLinks[product?.id ?? ""];
  const hasLink = !!productLink;

  // Cores alternadas para as bordas
  const borderColors = ["#15297c", "#15297c", "#15297c", "#15297c", "#15297c"];
  const borderColor = borderColors[index % borderColors.length];

  // Mapeamento de produtos para nomes de imagens (usando os nomes exatos dos arquivos)
  const getProductImage = (productId: string) => {
    const imageMap: Record<string, string> = {
      "resin-bond": "Ligante Resinoide",
      "metal-bond": "Ligante Metalico", // Sem acento
      "borazon": "CBN",
      "natural": "Natural",
      "revestimentos": "spiky nickel",
      "pcd-pdc": "PCD"
    };
    return imageMap[productId] || null;
  };

  const imageName = getProductImage(product?.id ?? "");
  let imagePath: string | null = null;
  if (product?.id === "revestimentos") {
    imagePath = "/arquivos novos atualizacao/spiky nickel.avif";
  } else if (imageName) {
    imagePath = `/Fotos capa principal/${imageName}.png`;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border-t-4 group"
      style={{ borderTopColor: borderColor }}
    >

      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
        {imagePath ? (
          <>
            <Image
              src={imagePath}
              alt={product?.name ?? "Produto"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center image-placeholder hidden">
              <div className="text-center p-8">
                <div className="relative w-24 h-24 mx-auto mb-4 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                  <ImageIcon className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Imagem do produto</p>
                <p className="text-xs text-gray-500">{product?.name ?? ""}</p>
              </div>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="relative w-24 h-24 mx-auto mb-4 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 font-semibold mb-1">Imagem do produto</p>
              <p className="text-xs text-gray-500">{product?.name ?? ""}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
        {/* Left accent bar */}
        <div 
          className="absolute left-0 top-4 sm:top-6 bottom-4 sm:bottom-6 w-1 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: borderColor }}
        />
        
        {/* Logo EID */}
        <div className="relative w-20 h-20 mb-3">
          <Image
            src="/Logo da eid.png"
            alt="Logo EID"
            fill
            className="object-contain brightness-0 opacity-70"
          />
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#15297c] transition-colors">
          {product?.id === "resin-bond" ? "Ligante Resinoide" : 
           product?.id === "metal-bond" ? "Ligante Metálico" : 
           product?.id === "borazon" ? "CBN - Borazon" :
           product?.id === "revestimentos" ? "Revestimentos" :
           product?.id === "pcd-pdc" ? "PCD / PDC" :
           product?.name ?? ""}
        </h3>
        <p className="text-xs sm:text-sm font-semibold mb-3" style={{ color: borderColor }}>
          {product?.subtitle ?? ""}
        </p>

        {/* Button/Link */}
        {hasLink ? (
          <Link
            href={productLink}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold transition-all duration-300 self-start px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-50 group/link"
            style={{ color: borderColor }}
          >
            Saiba Mais
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold self-start px-3 sm:px-4 py-2 rounded-lg opacity-50 cursor-not-allowed" style={{ color: borderColor }}>
            Em breve
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Products;
