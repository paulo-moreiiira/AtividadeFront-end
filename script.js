document.addEventListener('DOMContentLoaded', () => {

  /* SPA */
  const links = document.querySelectorAll('nav ul li a');
  const main = document.querySelector('main');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      
      if (href.endsWith('.html') && !href.includes('cadastro') && !href.includes('projetos')) {
        e.preventDefault();

        fetch(href)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newMain = doc.querySelector('main');
            if (newMain) {
              main.innerHTML = newMain.innerHTML;
            }
            document.title = doc.title;
            setupFormValidation();
          })
          .catch(err => console.error('Erro ao carregar página:', err));
      }
    });
  });

  /* SISTEMA DE TEMPLATES PARA PROJETOS */
  function setupTemplates() {
    const projectList = document.querySelector('.project-list');
    if (!projectList) return;

    const projetos = [
      {
        titulo: "Projeto Educação Digital",
        descricao: "Capacitação em informática básica para jovens.",
        imagens: ["imagens/aula informatica.jpg", "imagens/informatica2.jpg"]
      },
      {
        titulo: "Projeto Doação Solidária",
        descricao: "Doação de alimentos para famílias carentes.",
        imagens: ["imagens/Doaçao de alimentos.jpeg", "imagens/criancas alimentando.jpeg"]
      },
      {
        titulo: "Projeto Agasalhos para Todos",
        descricao: "Doação de roupas para famílias carentes.",
        imagens: ["imagens/doaçao roupa.jpg", "imagens/doacao-roupas-2.jpg"]
      }
    ];

    projectList.innerHTML = '';

    projetos.forEach(projeto => {
      const article = document.createElement('article');
      article.classList.add('project');

      article.innerHTML = `
        <h2>${projeto.titulo}</h2>
        <p>${projeto.descricao}</p>
        <div class="project-images">
          ${projeto.imagens.map(img => `<img src="${img}" alt="${projeto.titulo}">`).join('')}
        </div>
        <a class="btn" href="cadastro.html">Quero participar</a>
      `;
      projectList.appendChild(article);
    });
  }

  setupTemplates();

  /* VALIDAÇÃO DO FORMULÁRIO */
  function setupFormValidation() {
    const form = document.querySelector('#cadastroForm');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const cpf = form.cpf.value.trim();
      const telefone = form.telefone.value.trim();
      const nasc = form.nasc.value;
      const cep = form.cep.value.trim();
      const cidade = form.cidade.value.trim();
      const estado = form.estado.value;

      let errors = [];

      if (nome.length < 3) errors.push("O nome deve ter ao menos 3 caracteres.");
      if (!email.match(/^\S+@\S+\.\S+$/)) errors.push("E-mail inválido.");
      if (!cpf.match(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/)) errors.push("CPF inválido.");
      if (!telefone.match(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)) errors.push("Telefone inválido.");
      if (nasc) {
        const birthDate = new Date(nasc);
        const age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 18) errors.push("Você deve ter ao menos 18 anos.");
      } else {
        errors.push("Data de nascimento é obrigatória.");
      }
      if (!cep.match(/^\d{5}-?\d{3}$/)) errors.push("CEP inválido.");
      if (cidade.length === 0) errors.push("Cidade obrigatória.");
      if (!estado) errors.push("Selecione um estado.");

      const mensagemSucesso = document.getElementById('mensagem-sucesso');
      const mensagemErro = document.getElementById('mensagem-erro');

      if (errors.length === 0) {
        mensagemErro.style.display = 'none';
        mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
        mensagemSucesso.style.display = 'block';
        form.reset();
      } else {
        mensagemSucesso.style.display = 'none';
        mensagemErro.innerHTML = errors.join('<br>');
        mensagemErro.style.display = 'block';
      }
    });
  }

  setupFormValidation(); // Inicializa validação

});

