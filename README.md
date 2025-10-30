Salvando Vidas

Salvando Vidas é um site institucional desenvolvido para divulgar projetos sociais voltados à inclusão social, educação comunitária e solidariedade.
O projeto permite que visitantes conheçam as ações da organização, visualizem projetos em andamento e se cadastrem como voluntários ou doadores.

Estrutura do projeto:

salvando-vidas/
│
├── index.html
├── projetos.html
├── cadastro.html
│
├── CSS/
│   ├── style-index.css
│   ├── style-projetos.css
│   ├── style-cadastro.css
│
├── imagens/
│   ├── logomarca.png
│   ├── educaçao.webp
│   ├── estudo2.jpeg
│   ├── aula informatica.jpg
│   ├── informatica2.jpg
│   ├── Doaçao de alimentos.jpeg
│   ├── criancas alimentando.jpeg
│   ├── doaçao roupa.jpg
│   ├── doacao-roupas-2.jpg
│
├── script.js
│
└── README.md



  Páginas Principais

  Início — index.html

Apresenta a missão da organização e informações institucionais:
	•	Missão, visão e valores;
	•	Seção “Quem somos” com imagens ilustrativas;
	•	Informações de contato (endereço, telefone e e-mail);
	•	Link direto para conhecer os projetos.

  Projetos — projetos.html

Lista os principais projetos sociais:
	•	Educação Digital: cursos de informática básica;
	•	Doação Solidária: arrecadação e entrega de alimentos;
	•	Agasalhos para Todos: doação de roupas a famílias carentes.
Cada projeto possui:
	•	Título, descrição e galeria de imagens;
	•	Botão “Quero participar” que leva ao formulário de cadastro.

  Cadastro — cadastro.html

Formulário para inscrição de voluntários ou doadores:
	•	Coleta dados pessoais e de endereço;
	•	Valida informações (nome, CPF, e-mail, telefone, idade etc.);
	•	Exibe mensagens de sucesso ou erro após o envio;
	•	Design responsivo e acessível.

⸻

  Design e Estilo

O projeto utiliza um sistema de design consistente com variáveis CSS definidas em :root, permitindo fácil manutenção.

Paleta principal:
	•	Azul escuro: #1E3A8A (primário)
	•	Azul claro: #3B82F6
	•	Laranja: #F59E0B (secundário)
	•	Amarelo claro: #FBBF24
	•	Cinza claro: #F9FAFB

As folhas de estilo são separadas por página para facilitar ajustes específicos:
	•	style-index.css
	•	style-projetos.css
	•	style-cadastro.css

⸻

  Funcionalidades do JavaScript

O arquivo script.js implementa:
	1.	Carregamento dinâmico (SPA simplificada) — permite trocar o conteúdo de páginas sem recarregar todo o site.
	2.	Template de projetos — popula automaticamente os projetos na página Projetos.
	3.	Validação de formulário — checa campos obrigatórios, formatos e idade mínima (18 anos).
	4.	Mensagens dinâmicas — exibe feedback visual de sucesso ou erro.

⸻

  Responsividade e Acessibilidade
	•	Layout totalmente responsivo com Flexbox e Grid CSS.
	•	Elementos com rótulos ARIA e uso adequado de role, aria-label e aria-labelledby.
	•	Textos e contrastes adequados para boa legibilidade.


  Tecnologias utilizadas

Tecnologia               Função

HTML5                    Estrutura semântica e acessível
CSS3                     Estilização moderna e responsiva
JavaScript(Vanilla)      Interatividade e validação
Flexbox & Grid           Layont adaptável
ARIA Roles               Acessibilidade aprimorada



