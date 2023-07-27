

  const dadosUsuario = {
    "escolaridade": "Doutorado",
    "experienciaAplicativo": "Sim",
    "experienciaBancoDados": "Sim",
    "experienciaCommerce": "Sim",
    "experienciaLegados": "Sim",
    "experienciaMetodologia": "Sim",
    "experienciaRedes": "Sim",
    "frameworks": ["Graph QL (JavaScript Library)", "Flask (Python Framework)", "Express.js (JavaScript Framework)", "JUnit (Java Framework)"],
    "idade": "17",
    "linguagens": ["C#", "CSS", "Go"],
    "sistemas": ["Windows", "UNIX", "macOS"],
    "tecnologiasEmergentes": ["Internet das Coisas", "Inteligência Artificial", "Edge Computing"],
    "tempoExperiencia": "4 anos"
  };
  
  const vagas = {
    'Desenvolvedor Web': {
      descricao:
        'Desenvolvedor Web é responsável por criar e manter aplicações web, utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React ou Angular. Além disso, trabalha com bancos de dados, serviços web e integração com APIs. É fundamental ter conhecimentos em programação e design para criar interfaces amigáveis e responsivas. Salário médio: R$ 6.000,00.',
      linguagens: ['JavaScript', 'HTML', 'CSS'],
      frameworks: ['React JS  (JavaScript Library)', 'Angular (JavaScript Framework)', 'Node JS (JavaScript Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Inteligência Artificial', 'Internet das Coisas'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 6067,
    },
    'Desenvolvedor Mobile': {
      descricao:
        'Desenvolvedor Mobile desenvolve aplicativos para dispositivos móveis, como smartphones e tablets. Utiliza linguagens como JavaScript, Kotlin ou Swift, e frameworks como React Native ou Android SDK. O profissional deve ter conhecimento em desenvolvimento de interfaces e experiência do usuário para criar aplicativos atraentes e funcionais. Salário médio: R$ 5.500,00.',
      linguagens: ['JavaScript', 'Kotlin', 'Swift', 'Java'],
      frameworks: ['React Native  (JavaScript Library)', 'Android SDK', 'Node JS (JavaScript Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Inteligência Artificial', 'Computação em Nuvem'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3474,
    },
    'Engenheiro de Dados': {
      descricao:
        'Engenheiro de Dados é responsável por projetar e manter a infraestrutura de dados da empresa. Utiliza tecnologias como Hadoop, Spark, bancos de dados NoSQL e SQL. O profissional deve ter habilidades em análise e modelagem de dados, além de conhecimentos em processamento e análise de grandes volumes de dados. Salário médio: R$ 7.000,00.',
      linguagens: ['Python', 'R', 'Java'],
      frameworks: ['Django (Python Framework)','Flask (Python Framework)','Node JS (JavaScript Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Big Data', 'Computação em Nuvem'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7701,
    },
    'Analista de Segurança da Informação': {
      descricao:
        'Analista de Segurança da Informação é responsável por proteger as informações da empresa contra ameaças e ataques cibernéticos. Implementa políticas de segurança, realiza análises de vulnerabilidade e monitora a rede em busca de atividades suspeitas. O profissional deve ter conhecimento em segurança de redes, criptografia e proteção de dados. Salário médio: R$ 6.500,00.',
      linguagens: ['Python','Go', 'Ruby', 'C', 'C++' ],
      frameworks: ['Django (Python Framework)', 'Ruby on Rails (Ruby Framework)', 'Spring Boot (JavaScript Framework)', 'Angular (JavaScript Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Big Data', 'Computação em Nuvem', 'Inteligência Artificial', 'Computação em Nuvem', 'Blockchain'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 6933,
    },
    'Arquiteto de Software': {
      descricao:
        'Arquiteto de Software é responsável por projetar a arquitetura de sistemas de software, definindo sua estrutura, componentes e interações. Trabalha com linguagens de programação, frameworks e padrões de projeto para garantir a escalabilidade, confiabilidade e desempenho do sistema. O profissional deve ter habilidades em design de software e arquitetura de soluções. Salário médio: R$ 8.000,00.',
      linguagens: ['C#', 'C++', 'Python', 'Java'],
      frameworks: ['React JS (JavaScript Library)', 'Node JS (JavaScript Framework)', 'Spring Boot (JavaScript Framework)', 'Angular (JavaScript Framework)'],
      tecnologias: ['Computação em Nuvem', 'Aprendizado de Máquina', 'Edge Computing'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: true,
      salario_medio: 5786,
    },
    'Analista de Business Intelligence': {
      descricao:
        'Analista de Business Intelligence (BI) é responsável por coletar, analisar e transformar dados brutos em informações estratégicas para a empresa. Utiliza ferramentas de BI e bancos de dados para criar relatórios, dashboards e análises que auxiliem na tomada de decisões. O profissional deve ter conhecimento em análise de dados e modelagem de negócios. Salário médio: R$ 6.000,00.',
      linguagens: ['Python', 'R', 'JavaScript', 'Java'],
      frameworks: ['React JS (JavaScript Library)','Angular (JavaScript Framework)'],
      tecnologias: ['Computação em Nuvem', 'Aprendizado de Máquina', 'Big Data'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 4525,
    },
    'Desenvolvedor Front-end': {
      descricao:
        'Desenvolvedor Front-end é responsável por criar a interface e a experiência do usuário em aplicações web. Utiliza linguagens como HTML, CSS e JavaScript, além de frameworks como React ou Angular. O profissional deve ter habilidades em design responsivo e usabilidade para criar interfaces amigáveis e atraentes. Salário médio: R$ 5.500,00.',
      linguagens: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python'],
      frameworks: ['React JS  (JavaScript Library)', 'Angular (JavaScript Framework)'],
      tecnologias: ['Inteligência Artificial', 'Realidade Estendida', 'No-code/Low-code'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3036,
    },
    'Analista de Testes de Software': {
      descricao:
        'Analista de Testes de Software é responsável por garantir a qualidade e a estabilidade de aplicações antes de serem lançadas. Utiliza técnicas de testes, como testes funcionais, de regressão e de desempenho, para identificar e corrigir falhas no sistema. O profissional deve ter conhecimentos em automação de testes e metodologias ágeis. Salário médio: R$ 5.000,00.',
      linguagens: ['Java', 'Python', 'TypeScript', 'JavaScript', 'Ruby'],
      frameworks: ['Node JS (JavaScript Framework)', 'Angular (JavaScript Framework)', 'React JS (JavaScript Library)', 'React Native (JavaScript Library)'],
      tecnologias: ['Inteligência Artificial', 'Computação em Nuvem', 'Aprendizado de Máquina'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 4334,
    },
    'Desenvolvedor Full-stack': {
      descricao:
        'Desenvolvedor Full-stack é responsável por trabalhar tanto no Front-end quanto no Back-end de aplicações web. Utiliza linguagens como HTML, CSS, JavaScript, além de frameworks como React ou Angular no Front-end, e frameworks como Node.js ou Spring Boot no Back-end. O profissional deve ter habilidades em programação e conhecimento geral em desenvolvimento web. Salário médio: R$ 6.500,00.',
      linguagens: ['JavaScript', 'HTML', 'CSS', 'Python', 'Java'],
      frameworks: ['React JS  (JavaScript Library)', 'Angular (JavaScript Framework)', 'Node JS (JavaScript Framework)', 'Express.js (JavaScript Framework)'],
      tecnologias: ['Inteligência Artificial', 'Computação em Nuvem', 'Aprendizado de Máquina', 'Big Data'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 5206,
    },
    'Engenheiro de Machine Learning': {
      descricao:
        'Engenheiro de Machine Learning é responsável por desenvolver algoritmos e modelos de aprendizado de máquina para resolver problemas e tomar decisões. Utiliza linguagens como Python, bibliotecas de Machine Learning e técnicas de análise de dados para criar soluções inteligentes. O profissional deve ter habilidades em análise de dados e conhecimentos em aprendizado de máquina. Salário médio: R$ 7.000,00.',
      linguagens: ['Python', 'R', 'Java', 'C++'],
      frameworks: [],
      tecnologias: ['Aprendizado de Máquina', 'Inteligência Artificial'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7558,
    },
    'Desenvolvedor Back-end': {
      descricao:
        'Desenvolvedor Back-end é responsável por trabalhar na parte do servidor e infraestrutura de aplicações web. Utiliza linguagens como Java, Python ou PHP, e frameworks como Node.js ou Spring Boot. O profissional deve ter habilidades em desenvolvimento de APIs e conhecimentos em bancos de dados. Salário médio: R$ 6.000,00.',
      linguagens: ['Java', 'Python', 'JavaScript', 'C#', 'PHP'],
      frameworks: ['Spring Boot  (JavaScript Framework)', 'Django (Python Framework)', 'Express.js (JavaScript Framework)', 'Ruby on Rails (Ruby Framework)'],
      tecnologias: ['Big Data', 'Aprendizado de Máquina', 'Inteligência Artificial'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 4995,
    },
    'Analista de Dados': {
      descricao:
        'Analista de Dados é responsável por coletar, organizar e analisar dados para extrair informações valiosas para a empresa. Utiliza ferramentas de análise de dados, como SQL, Excel e Python. O profissional deve ter conhecimento em estatística, modelagem de dados e visualização de informações. Salário médio: R$ 6.500,00.',
      linguagens: ['R', 'Python', 'Java', 'JavaScript'],
      frameworks: [],
      tecnologias: ['Big Data', 'Aprendizado de Máquina', 'Inteligência Artificial', 'Internet das Coisas'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 9900,
    },

    'Analista de Sistemas': {
      descricao:
        'Analista de Sistemas é responsável por analisar e projetar soluções de software para atender às necessidades da empresa. Trabalha com linguagens de programação, bancos de dados e frameworks para desenvolver sistemas e aplicações. O profissional deve ter habilidades em análise de requisitos e conhecimentos em desenvolvimento de software. Salário médio: R$ 6.000,00.',
      linguagens: ['Python', 'Java', 'JavaScript', 'C#'],
      frameworks: ['Spring Boot  (JavaScript Framework)', 'Django (Python Framework)', 'React JS (JavaScript Library)', 'Angular (JavaScript Framework)', 'Flask (Python Framework)'],
      tecnologias: ['Big Data', 'Aprendizado de Máquina', 'Inteligência Artificial', 'Computação em Nuvem'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 5116,
    },
    'Cientista de Dados': {
      descricao:
        'Cientista de Dados é responsável por realizar análise de dados complexos, utilizando técnicas avançadas de estatística e aprendizado de máquina para desenvolver modelos preditivos e descritivos. O profissional deve ter habilidades em programação, matemática e análise de dados. Salário médio: R$ 8.000,00.',
      linguagens: ['Python', 'R'],
      frameworks: ['Flask (Python Framework)', 'Django (Python Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Big Data', 'Inteligência Artificial', 'Computação em Nuvem'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 8793,
    },
    'Especialista em Redes': {
      descricao:
        'Especialista em Redes é responsável por projetar, implementar e manter a infraestrutura de redes da empresa. Lida com switches, roteadores, firewalls e outras tecnologias para garantir a estabilidade e segurança da rede. O profissional deve ter conhecimento em protocolos de redes, segurança e virtualização. Salário médio: R$ 7.500,00.',
      linguagens: ['Python', 'C++', 'Java', 'JavaScript', 'Go'],
      frameworks: [],
      tecnologias: ['Computação em Nuvem', 'Internet das Coisas', 'Edge Computing', 'Blockchain'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: false,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7611,
    },
    'Especialista em E-commerce': {
      descricao:
        'Especialista em E-commerce é responsável por gerenciar e otimizar as operações de comércio eletrônico da empresa. Trabalha com plataformas de e-commerce, marketing digital, logística e análise de dados para impulsionar as vendas online. O profissional deve ter conhecimento em negócios online e estratégias de marketing. Salário médio: R$ 7.000,00.',
      linguagens: ['Javascript', 'Python', 'PHP', 'Java', 'Ruby'],
      frameworks: ['Ruby on Rails (Ruby Framework)', 'Django (Python Framework)', 'React JS (JavaScript Library)', 'Angular (JavaScript Framework)', 'Node JS (JavaScript Framework)'],
      tecnologias: ['Computação em Nuvem', 'Big Data', 'Inteligência Artificial'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 5231,
    },
    'Analista de Suporte Técnico': {
      descricao:
        'Analista de Suporte Técnico é responsável por prestar suporte e atendimento aos usuários da empresa, solucionando problemas em hardware, software e redes. O profissional deve ter habilidades em atendimento ao cliente, diagnóstico de problemas e conhecimentos técnicos em TI. Salário médio: R$ 4.000,00.',
      linguagens: ['JavaScript', 'Python'],
      frameworks: ['React JS (JavaScript Library)', 'Angular (JavaScript Framework)', 'Node JS (JavaScript Framework)'],
      tecnologias: ['Computação em Nuvem', 'Internet das Coisas'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: true,
      salario_medio: 4747,
    },
    'Especialista em Segurança Cibernética': {
      descricao:
        'Especialista em Segurança Cibernética é responsável por proteger a empresa contra ameaças virtuais. Implementa soluções de segurança, realiza testes de invasão e monitora a rede constantemente. O profissional deve ter conhecimento em técnicas de hacking ético, criptografia e políticas de segurança. Salário médio: R$ 7.500,00.',
      linguagens: ['Python', 'JavaScript', 'C++'],
      frameworks: ['Django (Python Framework)', 'Flask (Python Framework)', 'Spring Boot (JavaScript Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Inteligência Artificial'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 9366,
    },
    'Desenvolvedor de Jogos': {
      descricao:
        'Desenvolvedor de Jogos é responsável por criar jogos para diversas plataformas, como PC, consoles e dispositivos móveis. Utiliza linguagens como C#, C++ ou Java, e engines como Unity ou Unreal Engine. O profissional deve ter habilidades em programação, design de jogos e trabalho em equipe. Salário médio: R$ 6.000,00.',
      linguagens: ['C#', 'C++', 'Python'],
      frameworks: ['React Native (JavaScript Library)'],
      tecnologias: ['Realidade Estendida', 'Inteligência Artificial'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3293,
    },
    'Analista de Qualidade de Software': {
      descricao:
        'Analista de Qualidade de Software é responsável por garantir que os produtos e sistemas desenvolvidos atendam aos requisitos de qualidade. Realiza testes de software, identifica e relata defeitos, além de propor melhorias nos processos de desenvolvimento. O profissional deve ter conhecimentos em metodologias de teste e ferramentas de qualidade. Salário médio: R$ 5.500,00.',
      linguagens: ['JavaScript', 'Python', 'Java', 'C#'],
      frameworks: ['PyTest (Python Framework)', 'JUnit (Java Framework)'],
      tecnologias: ['Aprendizado de Máquina', 'Inteligência Artificial', 'Realidade Estendida'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 3621,
    },
    'Desenvolvedor de Realidade Virtual': {
      descricao:
        'Desenvolvedor de Realidade Virtual é responsável por criar experiências e aplicações em ambiente de realidade virtual. Utiliza linguagens como C# ou C++, e engines como Unity ou Unreal Engine. O profissional deve ter habilidades em programação, design de interação e conhecimentos em realidade virtual. Salário médio: R$ 6.500,00.',
      linguagens: ['C#', 'C++', 'Python'],
      frameworks: ['Unity  (C# Framework)', 'Unreal Engine (C++ Framework)'],
      tecnologias: ['Realidade Estendida', 'Computação em Nuvem', 'Internet das Coisas'],
      experiencia_banco_dados: false,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 5252,
    },
    'Analista de Marketing Digital': {
      descricao:
        'Analista de Marketing Digital é responsável por planejar e executar estratégias de marketing online. Utiliza ferramentas de análise de dados, gerenciamento de campanhas e mídias sociais para atrair e converter clientes. O profissional deve ter conhecimento em marketing digital e habilidades em comunicação. Salário médio: R$ 6.000,00.',
      linguagens: ['JavaScript', 'Python', 'PHP'],
      frameworks: ['Angular (JavaScript Framework)', 'React JS (JavaScript Library)', 'Node.js (JavaScript Framework)'],
      tecnologias: ['Computação em Nuvem', 'Big Data', 'Aprendizado de Máquina'],
      experiencia_banco_dados: false,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 4108,
    },
  };
  
  function calcularPontuacao(vaga) {
    let pontuacao = 0;
  
    // Verifica a escolaridade
    if (dadosUsuario.escolaridade === vaga.escolaridade) {
      pontuacao += 5;
    }
  
    // Verifica a experiência com aplicativos
    if (dadosUsuario.experienciaAplicativo === "Sim" && vaga.experiencia_desenvolvimento_mobile) {
      pontuacao += 3;
    }
  
    // Verifica a experiência com bancos de dados
    if (dadosUsuario.experienciaBancoDados === "Sim" && vaga.experiencia_banco_dados) {
      pontuacao += 4;
    }
  
    // Verifica a experiência com projetos de e-commerce
    if (dadosUsuario.experienciaCommerce === "Sim" && vaga.experiencia_e_commerce) {
      pontuacao += 2;
    }
  
    // Verifica a experiência com migração de sistemas legados
    if (dadosUsuario.experienciaLegados === "Sim" && vaga.experiencia_migracao_legados) {
      pontuacao += 3;
    }
  
    // Verifica a experiência com metodologias ágeis
    if (dadosUsuario.experienciaMetodologia === "Sim" && vaga.experiencia_desenvolvimento_agil) {
      pontuacao += 4;
    }
  
    // Verifica a experiência com redes de computadores
    if (dadosUsuario.experienciaRedes === "Sim" && vaga.experiencia_redes) {
      pontuacao += 4;
    }
  
    // Verifica a intersecção entre as linguagens de programação da vaga e do usuário
    const linguagensUsuario = new Set(dadosUsuario.linguagens);
    const intersecaoLinguagens = vaga.linguagens.filter(linguagem => linguagensUsuario.has(linguagem));
    pontuacao += intersecaoLinguagens.length;
  
    // Verifica a intersecção entre os frameworks da vaga e do usuário
    const frameworksUsuario = new Set(dadosUsuario.frameworks);
    const intersecaoFrameworks = vaga.frameworks.filter(framework => frameworksUsuario.has(framework));
    pontuacao += intersecaoFrameworks.length;
  
    // Verifica a intersecção entre as tecnologias emergentes da vaga e do usuário
    const tecnologiasUsuario = new Set(dadosUsuario.tecnologiasEmergentes);
    const intersecaoTecnologias = vaga.tecnologias.filter(tecnologia => tecnologiasUsuario.has(tecnologia));
    pontuacao += intersecaoTecnologias.length;
  
    // Verifica o tempo de experiência
    if (dadosUsuario.tempoExperiencia === vaga.tempoExperiencia) {
      pontuacao += 3;
    }
  
    return pontuacao;
  }
  
  // Função para encontrar a vaga mais adequada ao perfil do usuário
  function encontrarVagaAdequada(dadosUsuario, vagas) {
    let melhorPontuacao = -1;
    let vagaAdequada = null;
  
    for (const [nomeVaga, vaga] of Object.entries(vagas)) {
      const pontuacaoAtual = calcularPontuacao(vaga);
  
      if (pontuacaoAtual > melhorPontuacao) {
        melhorPontuacao = pontuacaoAtual;
        vagaAdequada = { nome: nomeVaga, descricao: vaga.descricao, salario_medio: vaga.salario_medio };
      }
    }
  
    return vagaAdequada;
  }
  
  // Encontra a vaga mais adequada ao perfil do usuário
  const vagaRecomendada = encontrarVagaAdequada(dadosUsuario, vagas);
  
  // Exibe a vaga recomendada
  console.log("Vaga Recomendada:");
  console.log("Nome:", vagaRecomendada.nome);
  console.log("Descrição:", vagaRecomendada.descricao);
  console.log("Salário Médio:", `R$ ${vagaRecomendada.salario_medio.toFixed(2)}`);