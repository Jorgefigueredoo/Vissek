import { motion } from "framer-motion";
import { Rocket, Gauge, Users, Lock } from "lucide-react";
import { useState } from "react";

interface DifferentiatorProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

function DifferentiatorItem({ icon: Icon, title, description, index }: DifferentiatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
        whileHover={{ x: 10 }}
      >
        <div className="flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-white/10 transition-all duration-300">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
              <Icon className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-400 leading-relaxed pt-2">{description}</p>
            </motion.div>

            {!isExpanded && (
              <p className="text-gray-500 text-sm mt-2">Clique para expandir</p>
            )}
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

const Differentials = () => {
  const differentiators = [
    {
      icon: Rocket,
      title: "Inovação Contínua",
      description:
        "Investimos constantemente em pesquisa e desenvolvimento para trazer as tecnologias mais recentes aos nossos clientes. Nossa equipe está sempre atualizada com as últimas tendências em IA, cloud computing e arquiteturas modernas.",
    },
    {
      icon: Gauge,
      title: "Alta Performance",
      description:
        "Otimização de código, arquiteturas distribuídas e cache inteligente garantem que suas aplicações respondam em milissegundos. Benchmarking contínuo e monitoramento em tempo real para máxima eficiência.",
    },
    {
      icon: Users,
      title: "Foco no Usuário",
      description:
        "Design thinking e UX research aplicados em cada projeto. Criamos interfaces intuitivas que seus usuários vão adorar, com testes de usabilidade e iterações baseadas em dados reais de comportamento.",
    },
    {
      icon: Lock,
      title: "Segurança Robusta",
      description:
        "Proteção de dados em múltiplas camadas, criptografia end-to-end, e compliance com LGPD e GDPR. Auditorias regulares de segurança e testes de penetração para garantir que seus dados estejam sempre protegidos.",
    },
  ];

  return (
    <section id="diferenciais" className="relative py-32 px-6 overflow-hidden">
      {/* Fundo escuro em harmonia com a Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Por que a Vissek?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Diferenciais que colocam sua empresa à frente da concorrência
          </p>
        </motion.div>

        <div className="space-y-4">
          {differentiators.map((item, index) => (
            <DifferentiatorItem key={index} {...item} index={index} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Differentials;