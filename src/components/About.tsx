import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-heading font-medium text-primary tracking-widest uppercase mb-4">
              Sobre nós
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient leading-tight mb-8">
              Tecnologia com propósito
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-6">
              Somos uma startup focada na criação de soluções tecnológicas inovadoras, com ênfase em performance, escalabilidade e experiência do usuário.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Acreditamos que a tecnologia é o caminho para resolver os desafios mais complexos do mundo. Nossa visão de longo prazo nos guia na construção de ferramentas que fazem a diferença.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
