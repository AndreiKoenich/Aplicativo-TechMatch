 const vagas = {
    'Desenvolvedor Web': {
      descricao:
        'Desenvolvedor Web é responsável por criar e manter aplicações web, utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React ou Angular. Além disso, trabalha com bancos de dados, serviços web e integração com APIs. É fundamental ter conhecimentos em programação e design para criar interfaces amigáveis e responsivas.',
      linguagens: ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'PHP', 'Ruby','TypeScript', 'C#'],
      frameworks: ['React.js', 'Angular.js', 'Vue.js', 'Express.js', 'Ruby on Rails'],
      tecnologias: ['WebAssembly (Wasm)', 'Progressive Web Apps (PWAs)','JAMstack (JavaScript, APIs e Markup)'],
      sistemas: ['Windows', 'macOs', 'Linux'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 6067,
      url: 'https://roadmap.sh/react'
    },
    'Desenvolvedor Mobile': {
      descricao:
        'Desenvolvedor Mobile desenvolve aplicativos para dispositivos móveis, como smartphones e tablets. Utiliza linguagens como JavaScript, Kotlin ou Swift, e frameworks como React Native ou Android SDK. O profissional deve ter conhecimento em desenvolvimento de interfaces e experiência do usuário para criar aplicativos atraentes e funcionais.',
      linguagens: ['JavaScript', 'Kotlin', 'Swift', 'Java', 'Dart', 'C#'],
      frameworks: ['React Native', 'Ionic', 'Xamarin', 'Flutter', 'Figma', 'SwiftUI'],
      tecnologias: ['Kotlin Multiplatform', '5G', 'Inteligência Artificial', 'Segurança em Apps Móveis'],
      sistemas: ['Windows', 'iOs', 'Android'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3474,
      url: 'https://roadmap.sh/android',
    },
    'Engenheiro de Dados': {
      descricao:
        'Engenheiro de Dados é responsável por projetar e manter a infraestrutura de dados da empresa. Utiliza tecnologias como Hadoop, Spark, bancos de dados NoSQL e SQL. O profissional deve ter habilidades em análise e modelagem de dados, além de conhecimentos em processamento e análise de grandes volumes de dados.',
      linguagens: ['Python', 'R', 'Java', 'Go', 'Ruby', 'Scala', 'SQL'],
      frameworks: ['Hadoop','Spark','Kafka','Flink','Airflow'],
      tecnologias: ['Lakehouse Architecture', 'Streaming', 'Processamento de Linguagem Natural (NLP) para Dados', 'Federated Learning'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7701,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Analista de Segurança da Informação': {
      descricao:
        'Analista de Segurança da Informação é responsável por proteger as informações da empresa contra ameaças e ataques cibernéticos. Implementa políticas de segurança, realiza análises de vulnerabilidade e monitora a rede em busca de atividades suspeitas. O profissional deve ter conhecimento em segurança de redes, criptografia e proteção de dados.',
      linguagens: ['Python','Go', 'Ruby', 'C', 'C++', 'Java', 'Javascript', 'Bash', 'PowerShell' ],
      frameworks: ['Metasploit','Wireshark','Nessus','Snort'],
      tecnologias: ['Zero Trust Architecture', 'Segurança de Dispositivos IoT', 'Segurança em Nuvem Híbrida'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 6933,
      url: 'https://roadmap.sh/cyber-security',
    },
    'Arquiteto de Software': {
      descricao:
        'Arquiteto de Software é responsável por projetar a arquitetura de sistemas de software, definindo sua estrutura, componentes e interações. Trabalha com linguagens de programação, frameworks e padrões de projeto para garantir a escalabilidade, confiabilidade e desempenho do sistema. O profissional deve ter habilidades em design de software e arquitetura de soluções.',
      linguagens: ['C#', 'C++', 'Python', 'Java', 'Javascript', 'Ruby', 'PHP'],
      frameworks: ['Spring','ASP.NET','Ruby on Rails', 'Angular.js', 'Django'],
      tecnologias: ['Arquitetura de Microsserviços', 'Edge Computing', 'Arquitetura Orientada a Eventos'],
      sistemas: ['Windows', 'Linux', 'macOS', 'Unix'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: true,
      salario_medio: 5786,
      url: 'https://roadmap.sh/software-architect',
    },
    'Desenvolvedor Front-end': {
      descricao:
        'Desenvolvedor Front-end é responsável por criar a interface e a experiência do usuário em aplicações web. Utiliza linguagens como HTML, CSS e JavaScript, além de frameworks como React ou Angular. O profissional deve ter habilidades em design responsivo e usabilidade para criar interfaces amigáveis e atraentes.',
      linguagens: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Python', 'Ruby', 'Java', 'C#', 'Swift'],
      frameworks: ['React.js', 'Angular.js', 'Vue.js', 'Svelte', 'Ember.js'],
      tecnologias: ['JAMstack (JavaScript, APIs e Markup)', 'WebAssembly (Wasm)', 'Aplicativos Web Progressivos (PWAs)'],
      sistemas: ['Windows', 'Linux', 'macOS', 'ChromeOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3036,
      url: 'https://roadmap.sh/frontend',
    },
    'Analista de Testes de Software': {
      descricao:
        'Analista de Testes de Software é responsável por garantir a qualidade e a estabilidade de aplicações antes de serem lançadas. Utiliza técnicas de testes, como testes funcionais, de regressão e de desempenho, para identificar e corrigir falhas no sistema. O profissional deve ter conhecimentos em automação de testes e metodologias ágeis.',
      linguagens: ['Java', 'Python', 'C#', 'JavaScript', 'Ruby', 'Swift', 'Kotlin', 'Perl', 'PHP'],
      frameworks: ['Selenium', 'JUnit', 'TestNG', 'Cucumber', 'Appium'],
      tecnologias: ['Testes de Segurança de Aplicações (AST)','Automação de Testes', 'Testes de Performance e Escalabilidade'],
      sistemas: ['Windows', 'Linux', 'macOS', 'Android'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 4334,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Desenvolvedor Full-stack': {
      descricao:
        'Desenvolvedor Full-stack é responsável por trabalhar tanto no Front-end quanto no Back-end de aplicações web. Utiliza linguagens como HTML, CSS, JavaScript, além de frameworks como React ou Angular no Front-end, e frameworks como Node.js ou Spring Boot no Back-end. O profissional deve ter habilidades em programação e conhecimento geral em desenvolvimento web.',
      linguagens: ['JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'Ruby', 'PHP', 'C#', 'TypeScript', 'Kotlin', 'Swift', 'Go'],
      frameworks: ['React.js', 'Angular.js', 'Vue.js', 'Django', 'Node.js'],
      tecnologias: ['Progressive Web Apps (PWAs)', 'Integração de APIs', 'DevOps',],
      sistemas: ['Windows', 'Linux', 'macOS', 'ChromeOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 5206,
      url: 'https://roadmap.sh/full-stack',
    },
    'Engenheiro de Machine Learning': {
      descricao:
        'Engenheiro de Machine Learning é responsável por desenvolver algoritmos e modelos de aprendizado de máquina para resolver problemas e tomar decisões. Utiliza linguagens como Python, bibliotecas de Machine Learning e técnicas de análise de dados para criar soluções inteligentes.',
      linguagens: ['Python', 'R', 'Java', 'C++', 'Julia', 'MatLab', 'Scala', 'Go', 'Ruby', 'Rust'],
      frameworks: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'MXNet'],
      tecnologias: ['Federated Learning', 'Aprendizado por Transferência (Transfer Learning)', 'AutoML (Aprendizado de Máquina Automatizado)'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7558,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Desenvolvedor Back-end': {
      descricao:
        'Desenvolvedor Back-end é responsável por trabalhar na parte do servidor e infraestrutura de aplicações web. Utiliza linguagens como Java, Python ou PHP, e frameworks como Node.js ou Spring Boot. O profissional deve ter habilidades em desenvolvimento de APIs e conhecimentos em bancos de dados.',
      linguagens: ['Java', 'Python', 'Ruby', 'C#', 'PHP', 'Go', 'Kotlin', 'Rust', 'Swift', 'JavaScript'],
      frameworks: ['Spring', 'ASP.NET', 'Ruby on Rails', 'Django', 'Node.js'],
      tecnologias: ['Serverless Computing', 'Microsserviços e Arquiteturas Distribuídas', 'Escalabilidade e Otimização de Desempenho'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 4995,
      url: 'https://roadmap.sh/backend',
    },
    'Analista de Dados': {
      descricao:
        'Analista de Dados é responsável por coletar, organizar e analisar dados para extrair informações valiosas para a empresa. Utiliza ferramentas de análise de dados, como SQL, Excel e Python. O profissional deve ter conhecimento em estatística, modelagem de dados e visualização de informações.',
      linguagens: ['R', 'Python', 'Java', 'SQL', 'Scala', 'Julia', 'SAS', 'MatLab', 'Ruby', 'Perl'],
      frameworks: ['Spark','Tableau', 'Tidyverse', 'Pandas', 'NumPy'],
      tecnologias: ['Big Data', 'Análise de Dados em Tempo Real', 'Inteligência Artificial'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 9900,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Analista de Sistemas': {
      descricao:
        'Analista de Sistemas é responsável por analisar e projetar soluções de software para atender às necessidades da empresa. Trabalha com linguagens de programação, bancos de dados e frameworks para desenvolver sistemas e aplicações. O profissional deve ter habilidades em análise de requisitos e conhecimentos em desenvolvimento de software.',
      linguagens: ['Python', 'Java', 'JavaScript', 'C#', 'Ruby', 'PHP', 'Kotlin', 'Go', 'Typescript'],
      frameworks: ['Scaled Agile', 'Scrum', 'BPMN (Business Process Model and Notation', 'ERD (Entity-Relationship Diagram)', 'TOGAF (The Open Group Architecture Framework)', 'UML (Unified Modeling Language)'],
      tecnologias: ['Serverless Computing', 'Inteligência Artificial', 'Segurança Cibernética e Proteção de Dados'],
      sistemas: ['Windows', 'Linux', 'macOS', 'Unix'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 5116,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Cientista de Dados': {
      descricao:
        'Cientista de Dados é responsável por realizar análise de dados complexos, utilizando técnicas avançadas de estatística e aprendizado de máquina para desenvolver modelos preditivos e descritivos. O profissional deve ter habilidades em programação, matemática e análise de dados.',
      linguagens: ['Python', 'R', 'SQL', 'Java', 'Scala', 'Julia', 'MatLab', 'SAS', 'C++', 'Ruby'],
      frameworks: ['TensorFlow', 'Scikit-Learn', 'Keras', 'Pandas', 'Spark', 'PyTorch', 'NumPy'],
      tecnologias: ['Processamento de Linguagem Natural (NLP) para Dados', 'Inteligência Artificial', 'Aprendizado Profundo (Deep Learning)'],
      sistemas: ['Windows', 'Linux', 'macOS', 'Unix'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 8793,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Especialista em Redes': {
      descricao:
        'Especialista em Redes é responsável por projetar, implementar e manter a infraestrutura de redes da empresa. Lida com switches, roteadores, firewalls e outras tecnologias para garantir a estabilidade e segurança da rede. O profissional deve ter conhecimento em protocolos de redes, segurança e virtualização.',
      linguagens: ['Python', 'C++', 'Java', 'JavaScript', 'Go', 'Perl', 'PowerShell', 'C'],
      frameworks: ['Cisco', 'Wireshark', 'GNS3', 'Nmap', 'Open vSwitch'],
      tecnologias: ['5G', 'Redes Definidas por Software (SDN)', 'Redes Privadas Virtuais (VPNs) de Próxima Geração'],
      sistemas: ['Windows', 'Linux', 'Junos'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: false,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 7611,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Especialista em E-commerce': {
      descricao:
        'Especialista em E-commerce é responsável por gerenciar e otimizar as operações de comércio eletrônico da empresa. Trabalha com plataformas de e-commerce, marketing digital, logística e análise de dados para impulsionar as vendas online. O profissional deve ter conhecimento em negócios online e estratégias de marketing.',
      linguagens: ['Javascript', 'Python', 'PHP', 'Java', 'Ruby', 'HTML', 'CSS', 'C#'],
      frameworks: ['Magento', 'Shopify', 'WooCommerce', 'BigCommerce'],
      tecnologias: ['Inteligência Artificial', 'Blockchain'],
      sistemas: ['Windows', 'Linux'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 5231,
      url: 'https://roadmap.sh/blockchain',
    },
    'Especialista em Segurança Cibernética': {
      descricao:
        'Especialista em Segurança Cibernética é responsável por proteger a empresa contra ameaças virtuais. Implementa soluções de segurança, realiza testes de invasão e monitora a rede constantemente. O profissional deve ter conhecimento em técnicas de hacking ético, criptografia e políticas de segurança.',
      linguagens: ['Python', 'JavaScript', 'C++', 'Java', 'PowerShell', 'Ruby', 'PHP', 'SQL', 'Bash', 'Go', 'C'],
      frameworks: ['NIST Cybersecurity', 'MITRE ATT&CK', ],
      tecnologias: ['Edge Computing', 'Zero Trust Architecture', 'Inteligência Artificial'],
      sistemas: ['Windows', 'Linux'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 9366,
      url: 'https://roadmap.sh/cyber-security',
    },
    'Desenvolvedor de Jogos': {
      descricao:
        'Desenvolvedor de Jogos é responsável por criar jogos para diversas plataformas, como PC, consoles e dispositivos móveis. Utiliza linguagens como C#, C++ ou Java, e engines como Unity ou Unreal Engine. O profissional deve ter habilidades em programação, design de jogos e trabalho em equipe.',
      linguagens: ['C#', 'C++', 'Python','Java','Lua','JavaScript','Swift','Kotlin'],
      frameworks: ['Phaser', 'Godot', 'Unity', 'Unreal Engine'],
      tecnologias: ['Inteligência Artificial','Realidade Aumentada', 'Jogos em Nuvem', 'Streaming'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: true,
      experiencia_migracao_legados: false,
      salario_medio: 3293,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Analista de Qualidade de Software': {
      descricao:
        'Analista de Qualidade de Software é responsável por garantir que os produtos e sistemas desenvolvidos atendam aos requisitos de qualidade. Realiza testes de software, identifica e relata defeitos, além de propor melhorias nos processos de desenvolvimento. O profissional deve ter conhecimentos em metodologias de teste e ferramentas de qualidade.',
      linguagens: ['Java', 'Python',],
      frameworks: ['Selenium', 'JUnit', 'TestNG', 'Cucumber', 'Appium'],
      tecnologias: ['Inteligência Artificial','Automação de Testes', 'Testes de Segurança de Aplicações (AST)'],
      sistemas: ['Windows', 'Linux', 'macOS'],
      experiencia_banco_dados: true,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: false,
      experiencia_e_commerce: false,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 3621,
      url: 'https://roadmap.sh/roadmaps',
    },
    'Analista de Marketing Digital': {
      descricao:
        'Analista de Marketing Digital é responsável por planejar e executar estratégias de marketing online. Utiliza ferramentas de análise de dados, gerenciamento de campanhas e mídias sociais para atrair e converter clientes. O profissional deve ter conhecimento em marketing digital e habilidades em comunicação.',
      linguagens: ['JavaScript', 'Python', 'PHP'],
      frameworks: ['Google Analytics', 'Googles Ads', 'HubSpot', 'Moz'],
      tecnologias: ['Blockchain','Automação de Marketing','Publicidade em Redes Sociais'],
      sistemas: ['Windows', 'Linux', 'macOS', 'ChromeOS'],
      experiencia_banco_dados: false,
      experiencia_desenvolvimento_agil: true,
      experiencia_redes: true,
      experiencia_e_commerce: true,
      experiencia_desenvolvimento_mobile: false,
      experiencia_migracao_legados: false,
      salario_medio: 4108,
      url: 'https://roadmap.sh/roadmaps',
    }

  };

export let encontrarVagaAdequada = function(dados) {
  function calcularPontuacao(vaga) {
    let pontuacao = 0;

    // Verifica a escolaridade
    if (dados.escolaridade === vaga.escolaridade) {
      pontuacao += 5;
    }

    // Verifica a experiência com aplicativos
    if (dados.experienciaAplicativo === "Sim" && vaga.experiencia_desenvolvimento_mobile) {
      pontuacao += 3;
    }

    // Verifica a experiência com bancos de dados
    if (dados.experienciaBancoDados === "Sim" && vaga.experiencia_banco_dados) {
      pontuacao += 4;
    }

    // Verifica a experiência com projetos de e-commerce
    if (dados.experienciaCommerce === "Sim" && vaga.experiencia_e_commerce) {
      pontuacao += 2;
    }

    // Verifica a experiência com migração de sistemas legados
    if (dados.experienciaLegados === "Sim" && vaga.experiencia_migracao_legados) {
      pontuacao += 3;
    }

    // Verifica a experiência com metodologias ágeis
    if (dados.experienciaMetodologia === "Sim" && vaga.experiencia_desenvolvimento_agil) {
      pontuacao += 4;
    }

    // Verifica a experiência com redes de computadores
    if (dados.experienciaRedes === "Sim" && vaga.experiencia_redes) {
      pontuacao += 4;
    }

    // Verifica a intersecção entre as linguagens de programação da vaga e do usuário
    const linguagensUsuario = new Set(dados.linguagens || []);
    const intersecaoLinguagens = (vaga.linguagens || []).filter(linguagem => linguagensUsuario.has(linguagem));
    pontuacao += intersecaoLinguagens.length;

      // Verifica a intersecção entre os sistemas operacionais da vaga e do usuário
      const sistemasUsuario = new Set(dados.sistemas || []);
      const intersecaoSistemas = (vaga.sistemas || []).filter(sistemas => sistemasUsuario.has(sistemas));
      pontuacao += intersecaoSistemas.length;

    // Verifica a intersecção entre os frameworks da vaga e do usuário
    const frameworksUsuario = new Set(dados.frameworks || []);
    const intersecaoFrameworks = (vaga.frameworks || []).filter(framework => frameworksUsuario.has(framework));
    pontuacao += intersecaoFrameworks.length;

    // Verifica a intersecção entre as tecnologias emergentes da vaga e do usuário
    const tecnologiasUsuario = new Set(dados.tecnologiasEmergentes || []);
    const intersecaoTecnologias = (vaga.tecnologias || []).filter(tecnologia => tecnologiasUsuario.has(tecnologia));
    pontuacao += intersecaoTecnologias.length;

    // Verifica o tempo de experiência
    if (dados.tempoExperiencia === vaga.tempoExperiencia) {
      pontuacao += 3;
    }

    return pontuacao;
  }

  let vagasComPontuacao = [];

  for (const [nomeVaga, vaga] of Object.entries(vagas)) {
    const pontuacaoAtual = calcularPontuacao(vaga);
    vagasComPontuacao.push({ nome: nomeVaga, descricao: vaga.descricao, salario_medio: vaga.salario_medio, url: vaga.url ?? "https://roadmap.sh/roadmaps", pontuacao: pontuacaoAtual })
  }

  vagasComPontuacao.sort((a, b) => { return b.pontuacao - a.pontuacao })

  // Ordenar as vagas pelo salário em ordem decrescente e, em caso de empate, pela pontuação
  vagasComPontuacao.sort((a, b) => {
    if (b.salario_medio !== a.salario_medio) {
      return b.salario_medio - a.salario_medio;
    } else {
      return b.pontuacao - a.pontuacao;
    }
  });

  return vagasComPontuacao.slice(0,3);
};
