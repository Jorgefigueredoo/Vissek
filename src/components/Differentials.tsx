import { motion } from "framer-motion";
import { Rocket, Zap, Target, Shield } from "lucide-react";

const differentials = [
  { icon: Rocket, title: "Inovação contínua", description: "Sempre um passo à frente, explorando novas tecnologias e metodologias." },
  { icon: Zap, title: "Alta performance", description: "Soluções otimizadas para máxima velocidade e escalabilidade." },
  { icon: Target, title: "Foco no usuário", description: "Cada decisão é guiada pela experiência e necessidade do usuário final." },
  { icon: Shield, title: "Segurança e confiabilidade", description: "Infraestrutura robusta com as melhores práticas de segurança." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading font-medium text-primary tracking-widest uppercase mb-4">
            Diferenciais
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient">
            Por que a Vissek?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl border border-border bg-card mx-auto mb-5 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsl(240_80%_65%/0.1)]">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
