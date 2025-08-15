# Portfólio – Lucas Borges

Uma apresentação online desenvolvida com React, Tailwind CSS e Vite, com deploy na Vercel. Este site destaca minhas habilidades em backend com C#, desenvolvimento frontend com React/Tailwind, e práticas de DevOps com Microsoft Azure.

---

##  Tecnologias Utilizadas

- **Frontend:** React, Tailwind CSS  
- **Build & Deploy:** Vite e Vercel  
- **Outros:** Lucide Icons, GitHub para controle de versão

---

##  Estrutura do Projeto

| Pasta              | Descrição                                                       |
|-------------------|------------------------------------------------------------------|
| `src/`            | Código frontend com componentes, páginas, lógica e estilos       |
| `public/`         | Arquivos estáticos como curriculo.pdf, ícones e imagens       |
| `components/`     | Componentes reutilizáveis (ex: ThemeToggle, formulários, botões) |
| `pages/`          | Rotas do site (ex: Home.jsx, NotFound.jsx)                  |
| `api/` (opcional) | Rotas servidor para salvar mensagens em banco (ex: Supabase)     |
| `.env`            | Variáveis de ambiente para chaves e configurações secretas      |

---

##  Funcionalidades Principais

- **Troca de tema (Light/Dark)** com persistência no `localStorage`  
- **Download do currículo** a partir da pasta `public`  
- **Formulário de contato funcional** integrado com backend para armazenamento de mensagens  
- **Design responsivo** garantido pelo Tailwind CSS  
- Deploy estável e rápido via Vercel para acesso global

---

##  Como Executar Localmente

1. Clonar o repositório:  
   ````
   git clone https://github.com/Lugauls/Portifolio-Lucas.git
   cd Portifolio-Lucas

2.Instalar dependências:

   ``npm install``

3.Rodar localmente no modo de desenvolvimento:

  `` npm run dev``

4.Abrir http://localhost:3000 no navegador!

5.Para build otimizada e deploy automático com Vercel:
  `` npm run build
   npm run preview``
   

##  Deploy

O site está hospedado no Vercel e configurações como variáveis de ambiente foram definidas para garantir deploy contínuo. Basta fazer push no main e o site atualiza automaticamente.

##  Próximos Passos

Adicionar sistema para ler e exibir mensagens do formulário em uma página administrativa


Otimizações de acessibilidade e performance contínua

##  Contato

LinkedIn: Lucas Borges

Email: lucasborges046@gmail.com

Currículo para download: disponível no botão “Baixar Currículo” na página inicial












































































































