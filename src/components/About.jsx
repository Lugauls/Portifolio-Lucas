import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor FullStack JS/PY
            </h3>

            <p className="text-muted-foreground">
               Como desenvolvedor em crescimento, atualmente estou direcionando minha carreira para o full-stack, utilizando JavaScript e Python. Tenho experiência com Node.js, Express e FastAPI no back-end, além de trabalhar com React e Tailwind CSS no front-end para criar interfaces modernas e eficientes. Meu objetivo é construir aplicações completas, escaláveis e com boas práticas, evoluindo continuamente nas principais tecnologias do ecossistema web. </p>

            <p className="text-muted-foreground">
                Acho muito legais e interessantes as tecnologias do ecossistema web, especialmente JavaScript e Python. Tenho experiência com Node.js, Express e FastAPI no back-end, além de React e Tailwind CSS no front-end, e estou sempre aprendendo para aprimorar minhas habilidades.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em contato
              </a>

              <a
                href="/Curriculo.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Curriculo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Back-End Development</h4>
                  <p className="text-muted-foreground">
                    Desenvolvendo APIs e serviços utilizando Node.js, Express e FastAPI, com foco em desempenho e boas práticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Front-End Development</h4>
                  <p className="text-muted-foreground">
                    Criando interfaces responsivas utilizando Tailwind CSS, React e boas práticas de UI/UX.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Docker & AI</h4>
                  <p className="text-muted-foreground">
                    Aprendendo e aplicando Docker e conceitos de IA para melhorar a criação e o fluxo de desenvolvimento de projetos..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};