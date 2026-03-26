import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    // Aplicada a classe 'glass' para igualar à Navbar
    <footer className="relative z-10 glass border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-foreground mb-1">Vissek</h3>
            <p className="text-sm text-muted-foreground font-body">Tecnologia do futuro, hoje.</p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Github, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-foreground hover:border-muted-foreground hover:bg-foreground/5 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Vissek. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;