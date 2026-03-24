import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logoVissek from "@/assets/logo_vissek.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-glow animate-glow-pulse" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10 px-6 text-center">
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

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.95] mb-6">
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
