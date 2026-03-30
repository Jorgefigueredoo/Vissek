import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoVissek from "@/assets/logo_vissek.png";

// Função para gerar as estrelas com parâmetros de densidade e área ajustáveis
const generateStars = (count: number, widthRange: number, heightRange: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * widthRange) - widthRange / 2;
    const y = Math.floor(Math.random() * heightRange) - heightRange / 2;
    stars.push(`${x}px ${y}px #ffffff`);
  }
  return stars.join(", ");
};

const Hero = () => {
  // Configuração do tracking do mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Deixa o movimento do mouse mais suave (efeito mola)
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Cria 3 camadas de parallax com movimentos diferentes para dar sensação de profundidade 3D
  const layer1X = useTransform(smoothX, (v) => v * -0.5);
  const layer1Y = useTransform(smoothY, (v) => v * -0.5);
  const layer2X = useTransform(smoothX, (v) => v * -1);
  const layer2Y = useTransform(smoothY, (v) => v * -1);
  const layer3X = useTransform(smoothX, (v) => v * -2);
  const layer3Y = useTransform(smoothY, (v) => v * -2);

  const [stars, setStars] = useState({ small: "", medium: "", large: "" });

  // Efeito para gerar as estrelas
  useEffect(() => {
    const rangeW = window.innerWidth * 3;
    const rangeH = window.innerHeight * 3;

    setStars({
      small: generateStars(1500, rangeW, rangeH),
      medium: generateStars(600, rangeW, rangeH),
      large: generateStars(300, rangeW, rangeH),
    });
  }, []);

  // Efeito para rastrear o mouse na página inteira (globalmente)
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 40;
      const moveY = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      
      {/* 1. Animated gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent opacity-50 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      {/* 2. Camada das Estrelas (Parallax) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {stars.small && (
          <>
            <motion.div
              className="absolute top-1/2 left-1/2 rounded-full w-[1px] h-[1px] bg-transparent opacity-40"
              style={{ boxShadow: stars.small, x: layer1X, y: layer1Y }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 rounded-full w-[2px] h-[2px] bg-transparent opacity-60"
              style={{ boxShadow: stars.medium, x: layer2X, y: layer2Y }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 rounded-full w-[3px] h-[3px] bg-transparent opacity-80"
              style={{ boxShadow: stars.large, x: layer3X, y: layer3Y }}
            />
          </>
        )}
      </div>

      {/* 3. Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-auto pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Logo com a margem exata definida anteriormente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="-mb-[58px] md:-mb-[90px] lg:-mb-[106px]"
          >
            <img src={logoVissek} alt="Vissek" className="h-52 md:h-72 lg:h-96 mx-auto drop-shadow-[0_0_60px_hsl(210_100%_60%/0.5)] drop-shadow-[0_0_120px_hsl(240_80%_65%/0.3)]" />
          </motion.div>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 relative z-10">
            <span className="bg-gradient-to-br from-white via-white to-gray-400 bg-clip-text text-transparent">
              Construindo o futuro
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              com tecnologia.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-body leading-relaxed"
          >
            Desenvolvemos soluções tecnológicas inteligentes para transformar ideias em realidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Botão WhatsApp */}
            <motion.a
              href="https://wa.me/5581999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium overflow-hidden w-full sm:w-auto flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            {/* Botão E-mail */}
            <motion.a
              href="mailto:contato@vissek.com"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto flex justify-center"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              E-mail
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating tech nodes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator (MOUSE BEM VISÍVEL) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-7 h-12 border-2 border-white/80 rounded-full flex items-start justify-center p-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] bg-white/5">
          <motion.div
            className="w-1.5 h-2.5 bg-white rounded-full"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;