import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-heading font-medium text-primary tracking-widest uppercase mb-4">
              Contato
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Vamos conversar?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-10 leading-relaxed">
              Tem um projeto em mente ou quer saber mais sobre a Vissek? Entre
              em contato — estamos prontos para ouvir.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:jorgeafiguerado@gmail.com?subject=Assunto Aqui&body=Olá Jorge, gostaria de saber sobre os serviços da Vissek."
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-heading font-medium transition-all duration-300 hover:shadow-[0_0_40px_hsl(240_80%_65%/0.3)] hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Enviar e-mail
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5581973324911&text=Olá, Vissek! Vim pelo site e gostaria de saber sobre todos os seus serviços!&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border text-muted-foreground font-heading font-medium transition-all duration-300 hover:text-foreground hover:border-muted-foreground"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
