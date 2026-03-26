import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoVissek from "@/assets/logo_vissek.png";

// Função para gerar as estrelas com parâmetros de densidade e área ajustáveis
const generateStars = (count: number, widthRange: number, heightRange: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    // Espalhamos as estrelas por uma área massiva (range) centrada na tela
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

  // NOVO: Efeito para rastrear o mouse na página inteira (globalmente)
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Calcula a distância do mouse em relação ao centro da tela
      const moveX = (clientX / window.innerWidth - 0.5) * 40;
      const moveY = (clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    // Adiciona o listener na janela inteira
    window.addEventListener("mousemove", handleGlobalMouseMove);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    // Removemos o onMouseMove daqui
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Camada das Estrelas (Background interativo cobrindo a tela inteira) */}
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

      {/* Glow effect */}
      <div className="absolute inset-0 bg-glow animate-glow-pulse z-0 pointer-events-none" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10 px-6 text-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="-mb-8 md:-mb-12"
          >
            <img src={logoVissek} alt="Vissek" className="h-52 md:h-72 lg:h-96 mx-auto drop-shadow-[0_0_60px_hsl(210_100%_60%/0.5)] drop-shadow-[0_0_120px_hsl(240_80%_65%/0.3)]" />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8x2 font-heading font-bold tracking-tight leading-[0.95] mb-6">
            <span className="text-gradient">Construindo o futuro</span>
            <br />
            <span className="text-foreground">com tecnologia</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed"
          >
            A Vissek desenvolve soluções tecnológicas inteligentes para transformar ideias em realidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-heading font-medium text-base transition-all duration-300 hover:shadow-[0_0_40px_hsl(240_80%_65%/0.3)] hover:scale-105"
            >
              Fale conosco
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-muted-foreground font-heading font-medium text-base transition-all duration-300 hover:text-foreground hover:border-muted-foreground"
            >
              Saiba mais
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;  