document.addEventListener('DOMContentLoaded', () => {
  const conteudo = [
    {
      titulo: "Números Naturais",
      subtitulos: [
        { nome: "Números Naturais", caminho: "conteudos/num-naturais/numeros-naturais.html" },
        { nome: "Ordem",caminho: "conteudos/num-naturais/ordem.html" },
        { nome: "Adição",caminho: "conteudos/num-naturais/adicao.html" },
        { nome: "Subtração",caminho: "conteudos/num-naturais/subtracao.html" },
        { nome: "Múltiplos",caminho: "conteudos/num-naturais/multiplos.html" },
        { nome: "Multiplicação",caminho: "conteudos/num-naturais/multiplicacao.html" },
        { nome: "Múltiplos Comuns",caminho: "conteudos/num-naturais/multiplos-comuns.html" },
        { nome: "Potenciação",caminho: "conteudos/num-naturais/potenciacao.html" },

      ],
    },
    {
      titulo: "Representação dos Naturais",
      subtitulos: [
        // { nome: "Conceito", texto: "Frações representam partes de um todo. Exemplo: 1/2 é metade de algo." },
        // { nome: "Operações com frações", texto: "As operações com frações incluem adição, subtração, multiplicação e divisão com numeradores e denominadores." }
      ]
    },
    {
      titulo: "Os inteiros e suas propriedas",
      subtitulos: [
        // { nome: "Figuras planas", texto: "Figuras planas são formas geométricas com duas dimensões, como quadrado, triângulo e círculo." },
        // { nome: "Volume", texto: "Volume é a quantidade de espaço ocupado por um corpo tridimensional." },
        // { nome: "Área", texto: "Área é a medida da superfície de uma figura plana. Exemplo: a área de um quadrado é lado × lado." }
      ]
    },
    {
      titulo: "A aritmética dos restos",
      subtitulos: [
        // { nome: "Figuras planas", texto: "Figuras planas são formas geométricas com duas dimensões, como quadrado, triângulo e círculo." },
        // { nome: "Volume", texto: "Volume é a quantidade de espaço ocupado por um corpo tridimensional." },
        // { nome: "Área", texto: "Área é a medida da superfície de uma figura plana. Exemplo: a área de um quadrado é lado × lado." }
      ]
    }
  ];

  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');
  const btnMostrarSidebar = document.getElementById('btnMostrarSidebar');
  const btnEsconderSidebar = document.getElementById('btnEsconderSidebar');

  // Sidebar dinâmica
  conteudo.forEach((item, index) => {
    const divItem = document.createElement('div');
    divItem.classList.add('item');

    const titulo = document.createElement('div');
    titulo.classList.add('titulo');
    titulo.textContent = item.titulo;

    const subitens = document.createElement('div');
    subitens.classList.add('subitens');

    item.subtitulos.forEach((sub, subIndex) => {
      const subItem = document.createElement('div');
      subItem.classList.add('subitem');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `chk-${index}-${subIndex}`;

      const label = document.createElement('label');
      label.setAttribute('for', checkbox.id);

      const spanTexto = document.createElement('span');
      spanTexto.textContent = sub.nome;
      spanTexto.classList.add('subtitulo-texto');

      // Exibir o conteúdo no mainContent
      spanTexto.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(sub.caminho)
          .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o conteúdo.');
            return response.text();
          })
          .then(html => {
            mainContent.innerHTML = html;
          })
          .catch(error => {
            mainContent.innerHTML = `<p>${error.message}</p>`;
          });
      });

      label.appendChild(spanTexto);
      subItem.appendChild(checkbox);
      subItem.appendChild(label);
      subitens.appendChild(subItem);
    });

    titulo.addEventListener('click', () => {
      subitens.classList.toggle('mostrar');
    });

    divItem.appendChild(titulo);
    divItem.appendChild(subitens);
    sidebar.appendChild(divItem);
  });

  // Exibir/Esconder Sidebar 
  btnEsconderSidebar.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    btnEsconderSidebar.style.display = 'none';
    setTimeout(() => {
      btnMostrarSidebar.style.display = 'block';
    }, 150); 
  });

  btnMostrarSidebar.addEventListener('click', () => {
    sidebar.classList.remove('hidden');
    btnMostrarSidebar.style.display = 'none';
    setTimeout(() => {
      btnEsconderSidebar.style.display = 'block';
    }, 240);
  });

  // Atualização da barra de progresso
  function atualizarProgresso() {
    const checkboxes = document.querySelectorAll('#sidebar input[type="checkbox"]');
    const total = checkboxes.length;
    const marcados = Array.from(checkboxes).filter(chk => chk.checked).length;
    const porcentagem = total ? Math.round((marcados / total) * 100) : 0;

    const barra = document.getElementById('progress-bar');
    const texto = document.getElementById('progress-text');

    barra.style.width = porcentagem + '%';
    texto.textContent = porcentagem + '%';
  }

  //checkboxes
  sidebar.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      atualizarProgresso();
    }
  });

  // Inicializa progresso 
  atualizarProgresso();
});



