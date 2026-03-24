import { motion } from "framer-motion";
import { Code2, BrainCircuit, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Soluções digitais",
    description: "Desenvolvimento de aplicações modernas com arquitetura robusta e código de alta qualidade.",
  },
  {
    icon: BrainCircuit,
    title: "Sistemas inteligentes",
    description: "Integração de inteligência artificial e automação para otimizar processos e decisões.",
  },
  {
    icon: Layers,
    title: "Plataformas escaláveis",
    description: "Infraestrutura preparada para crescer junto com o seu negócio, sem comprometer a performance.",
  },
  {
    icon: Sparkles,
    title: "Inovação tecnológica",
    description: "Pesquisa e desenvolvimento de novas abordagens para problemas complexos do mercado.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-heading font-medium text-primary tracking-widest uppercase mb-4">
            O que fazemos
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient">
            Nossas capacidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_60px_hsl(240_80%_65%/0.06)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
