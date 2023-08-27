import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const vagas = {
  'Desenvolvedor Web': {
    descricao:
      'Desenvolvedor Web é responsável por criar e manter aplicações web, utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React ou Angular. Além disso, trabalha com bancos de dados, serviços web e integração com APIs. É fundamental ter conhecimentos em programação e design para criar interfaces amigáveis e responsivas.',

  },
  'Desenvolvedor Mobile': {
    descricao:
      'Desenvolvedor Mobile desenvolve aplicativos para dispositivos móveis, como smartphones e tablets. Utiliza linguagens como JavaScript, Kotlin ou Swift, e frameworks como React Native ou Android SDK. O profissional deve ter conhecimento em desenvolvimento de interfaces e experiência do usuário para criar aplicativos atraentes e funcionais.',

  },
  'Engenheiro de Dados': {
    descricao:
      'Engenheiro de Dados é responsável por projetar e manter a infraestrutura de dados da empresa. Utiliza tecnologias como Hadoop, Spark, bancos de dados NoSQL e SQL. O profissional deve ter habilidades em análise e modelagem de dados, além de conhecimentos em processamento e análise de grandes volumes de dados.',

  },
  'Analista de Segurança da Informação': {
    descricao:
      'Analista de Segurança da Informação é responsável por proteger as informações da empresa contra ameaças e ataques cibernéticos. Implementa políticas de segurança, realiza análises de vulnerabilidade e monitora a rede em busca de atividades suspeitas. O profissional deve ter conhecimento em segurança de redes, criptografia e proteção de dados.',

  },
  'Arquiteto de Software': {
    descricao:
      'Arquiteto de Software é responsável por projetar a arquitetura de sistemas de software, definindo sua estrutura, componentes e interações. Trabalha com linguagens de programação, frameworks e padrões de projeto para garantir a escalabilidade, confiabilidade e desempenho do sistema. O profissional deve ter habilidades em design de software e arquitetura de soluções.',

  },
  'Desenvolvedor Front-end': {
    descricao:
      'Desenvolvedor Front-end é responsável por criar a interface e a experiência do usuário em aplicações web. Utiliza linguagens como HTML, CSS e JavaScript, além de frameworks como React ou Angular. O profissional deve ter habilidades em design responsivo e usabilidade para criar interfaces amigáveis e atraentes.',

  },
  'Analista de Testes de Software': {
    descricao:
      'Analista de Testes de Software é responsável por garantir a qualidade e a estabilidade de aplicações antes de serem lançadas. Utiliza técnicas de testes, como testes funcionais, de regressão e de desempenho, para identificar e corrigir falhas no sistema. O profissional deve ter conhecimentos em automação de testes e metodologias ágeis.',

  },
  'Desenvolvedor Full-stack': {
    descricao:
      'Desenvolvedor Full-stack é responsável por trabalhar tanto no Front-end quanto no Back-end de aplicações web. Utiliza linguagens como HTML, CSS, JavaScript, além de frameworks como React ou Angular no Front-end, e frameworks como Node.js ou Spring Boot no Back-end. O profissional deve ter habilidades em programação e conhecimento geral em desenvolvimento web.',

  },
  'Engenheiro de Machine Learning': {
    descricao:
      'Engenheiro de Machine Learning é responsável por desenvolver algoritmos e modelos de aprendizado de máquina para resolver problemas e tomar decisões. Utiliza linguagens como Python, bibliotecas de Machine Learning e técnicas de análise de dados para criar soluções inteligentes.',

  },
  'Desenvolvedor Back-end': {
    descricao:
      'Desenvolvedor Back-end é responsável por trabalhar na parte do servidor e infraestrutura de aplicações web. Utiliza linguagens como Java, Python ou PHP, e frameworks como Node.js ou Spring Boot. O profissional deve ter habilidades em desenvolvimento de APIs e conhecimentos em bancos de dados.',

  },
  'Analista de Dados': {
    descricao:
      'Analista de Dados é responsável por coletar, organizar e analisar dados para extrair informações valiosas para a empresa. Utiliza ferramentas de análise de dados, como SQL, Excel e Python. O profissional deve ter conhecimento em estatística, modelagem de dados e visualização de informações.',

  },
  'Analista de Sistemas': {
    descricao:
      'Analista de Sistemas é responsável por analisar e projetar soluções de software para atender às necessidades da empresa. Trabalha com linguagens de programação, bancos de dados e frameworks para desenvolver sistemas e aplicações. O profissional deve ter habilidades em análise de requisitos e conhecimentos em desenvolvimento de software.',

  },
  'Cientista de Dados': {
    descricao:
      'Cientista de Dados é responsável por realizar análise de dados complexos, utilizando técnicas avançadas de estatística e aprendizado de máquina para desenvolver modelos preditivos e descritivos. O profissional deve ter habilidades em programação, matemática e análise de dados.',

  },
  'Especialista em Redes': {
    descricao:
      'Especialista em Redes é responsável por projetar, implementar e manter a infraestrutura de redes da empresa. Lida com switches, roteadores, firewalls e outras tecnologias para garantir a estabilidade e segurança da rede. O profissional deve ter conhecimento em protocolos de redes, segurança e virtualização.',

  },
  'Especialista em E-commerce': {
    descricao:
      'Especialista em E-commerce é responsável por gerenciar e otimizar as operações de comércio eletrônico da empresa. Trabalha com plataformas de e-commerce, marketing digital, logística e análise de dados para impulsionar as vendas online. O profissional deve ter conhecimento em negócios online e estratégias de marketing.',

  },
  'Especialista em Segurança Cibernética': {
    descricao:
      'Especialista em Segurança Cibernética é responsável por proteger a empresa contra ameaças virtuais. Implementa soluções de segurança, realiza testes de invasão e monitora a rede constantemente. O profissional deve ter conhecimento em técnicas de hacking ético, criptografia e políticas de segurança.',

  },
  'Desenvolvedor de Jogos': {
    descricao:
      'Desenvolvedor de Jogos é responsável por criar jogos para diversas plataformas, como PC, consoles e dispositivos móveis. Utiliza linguagens como C#, C++ ou Java, e engines como Unity ou Unreal Engine. O profissional deve ter habilidades em programação, design de jogos e trabalho em equipe.',

  },
  'Analista de Qualidade de Software': {
    descricao:
      'Analista de Qualidade de Software é responsável por garantir que os produtos e sistemas desenvolvidos atendam aos requisitos de qualidade. Realiza testes de software, identifica e relata defeitos, além de propor melhorias nos processos de desenvolvimento. O profissional deve ter conhecimentos em metodologias de teste e ferramentas de qualidade.',

  },
  'Analista de Marketing Digital': {
    descricao:
      'Analista de Marketing Digital é responsável por planejar e executar estratégias de marketing online. Utiliza ferramentas de análise de dados, gerenciamento de campanhas e mídias sociais para atrair e converter clientes. O profissional deve ter conhecimento em marketing digital e habilidades em comunicação.',
  }
};

export default function RoteiroEstudosScreen({ route }) {
  const vagaInfo = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{vagaInfo.name}</Text>
      <Text style={styles.description}>{vagaInfo.descricao}</Text>
      {vagaInfo.name === 'Desenvolvedor Web' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>HTML (HyperText Markup Language):</Text>
          <Text>
            Aprenda a estrutura básica de um documento HTML.
            Entenda as tags, elementos e atributos HTML.
            Crie páginas web simples com cabeçalhos, parágrafos, listas e links.
          </Text>
          <Text style={styles.topic}>CSS (Cascading Style Sheets):</Text>
          <Text>
            Compreenda o que é CSS e como ele é usado para estilizar páginas web.
            Aprenda a aplicar estilos a elementos HTML, como cores, fontes e margens.
            Saiba usar seletores, classes e IDs para estilização.
          </Text>
          <Text style={styles.topic}>JavaScript:</Text>
          <Text>
            Introdução aos conceitos básicos de programação.
            Aprenda a manipular elementos HTML usando JavaScript.
            Explore variáveis, estruturas condicionais (if/else) e loops.
          </Text>
          <Text style={styles.topic}>Versionamento de Código:</Text>
          <Text>
            Familiarize-se com sistemas de controle de versão, como Git.
            Entenda os conceitos de repositório, commit e branch.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Responsive Web Design:</Text>
          <Text>
            Aprenda a criar layouts que se adaptam a diferentes tamanhos de tela.
            Utilize media queries e técnicas de layout flexível e grid.
          </Text>
          <Text style={styles.topic}>Frameworks Front-end:</Text>
          <Text>
            Explore frameworks como Bootstrap, Foundation ou Materialize para agilizar o desenvolvimento.
            Compreenda o sistema de grid e os componentes oferecidos pelo framework escolhido.
          </Text>
          <Text style={styles.topic}>Manipulação avançada de DOM (Document Object Model):</Text>
          <Text>
            Aprofunde-se na manipulação de elementos HTML e eventos usando JavaScript.
            Explore a criação de elementos dinamicamente e a interação com formulários.
          </Text>
          <Text style={styles.topic}>Introdução a Back-end:</Text>
          <Text>
            Saiba o que é o lado do servidor e sua importância.
            Aprenda sobre linguagens back-end, como Node.js, Python, Ruby ou PHP.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Backend Development:</Text>
          <Text>
            Escolha uma linguagem de programação back-end para se aprofundar.
            Aprenda a criar rotas, lidar com solicitações HTTP e interagir com bancos de dados.
          </Text>
          <Text style={styles.topic}>Bancos de Dados:</Text>
          <Text>
            Aprenda sobre bancos de dados relacionais (ex: MySQL, PostgreSQL) e não relacionais (ex: MongoDB).
            Entenda como projetar esquemas de banco de dados e executar consultas.
          </Text>
          <Text style={styles.topic}>Segurança Web:</Text>
          <Text>
            Familiarize-se com práticas de segurança, como proteção contra ataques de injeção (SQL, XSS) e autenticação inadequada.
            Aprenda sobre HTTPS, tokens de autenticação e políticas de segurança do navegador.
          </Text>
          <Text style={styles.topic}>Performance e Otimização:</Text>
          <Text>
            Saiba como otimizar o carregamento de páginas, reduzir o tempo de resposta do servidor e melhorar a eficiência do código.
            Explore ferramentas de análise de desempenho e diagnóstico.
          </Text>
          <Text style={styles.topic}>Arquitetura de Aplicativos Web:</Text>
          <Text>
            Compreenda os padrões de arquitetura, como MVC (Model-View-Controller) e MVVM (Model-View-ViewModel).
            Aprenda a criar aplicativos web escaláveis e bem estruturados.
          </Text>
          <Text style={styles.topic}>Automação e Ferramentas de Construção:</Text>
          <Text>
            Explore ferramentas como Webpack e Gulp para automatizar tarefas de desenvolvimento.
            Aprenda sobre empacotamento de recursos, minificação e compilação de código.
          </Text>

          <Text style={styles.subtitle}>Nível Profissional:</Text>
          <Text style={styles.topic}>Testes e Qualidade de Código:</Text>
          <Text>
            Aprenda sobre testes unitários, testes de integração e testes end-to-end.
            Explore frameworks de testes como Jest, Mocha ou Jasmine.
          </Text>
          <Text style={styles.topic}>Desenvolvimento de Aplicações Single-Page (SPA):</Text>
          <Text>
            Aprofunde-se no desenvolvimento de SPAs com frameworks como React, Vue.js ou Angular.
            Compreenda conceitos como roteamento, estado global e componentização.
          </Text>
          <Text style={styles.topic}>Autenticação e Autorização Avançadas:</Text>
          <Text>
            Aprenda a implementar autenticação com OAuth, OpenID Connect ou JWT.
            Explore técnicas avançadas de autorização baseadas em papéis e permissões.
          </Text>
          <Text style={styles.topic}>Integração de APIs e Microserviços:</Text>
          <Text>
            Saiba como consumir APIs externas e integrar serviços em sua aplicação.
            Aprenda sobre microsserviços e suas vantagens/arquitetura.
          </Text>
          <Text style={styles.topic}>Escalabilidade e Monitoramento:</Text>
          <Text>
            Explore técnicas para lidar com tráfego intenso e escalonar suas aplicações.
            Aprenda a usar ferramentas de monitoramento e registro de logs.
          </Text>
          <Text style={styles.topic}>Tendências e Novas Tecnologias:</Text>
          <Text>
            Mantenha-se atualizado sobre as tendências atuais, como Progressive Web Apps (PWAs), WebAssembly, Serverless, entre outras.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Desenvolvedor Mobile' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Linguagens de Desenvolvimento Mobile:</Text>
          <Text>
            Explore linguagens como Java, Kotlin, Swift e Objective-C.
            Aprenda os conceitos básicos e sintaxe dessas linguagens.
          </Text>
          <Text style={styles.topic}>Desenvolvimento Nativo:</Text>
          <Text>
            Entenda o desenvolvimento de aplicativos nativos para cada plataforma.
            Aprenda a criar interfaces, lidar com eventos e navegação.
          </Text>
          <Text style={styles.topic}>Introdução ao React Native e Flutter:</Text>
          <Text>
            Conheça os frameworks React Native e Flutter para desenvolvimento mobile.
            Saiba como criar aplicativos multiplataforma usando abordagens diferentes.
          </Text>
          <Text style={styles.topic}>Versionamento de Código:</Text>
          <Text>
            Familiarize-se com sistemas de controle de versão, como Git.
            Entenda os conceitos de repositório, commit e branch.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>UI/UX Design para Mobile:</Text>
          <Text>
            Explore os princípios de design para criar interfaces amigáveis e atrativas.
            Compreenda as diretrizes de design das plataformas móveis.
          </Text>
          <Text style={styles.topic}>Componentização e Reutilização de Código:</Text>
          <Text>
            Aprenda a criar componentes reutilizáveis para agilizar o desenvolvimento.
            Explore boas práticas de arquitetura de código.
          </Text>
          <Text style={styles.topic}>Navegação e Gerenciamento de Estado:</Text>
          <Text>
            Saiba como implementar navegação entre telas e gerenciar o estado da aplicação.
            Explore soluções como React Navigation e gerenciadores de estado.
          </Text>
          <Text style={styles.topic}>Consumo de APIs:</Text>
          <Text>
            Aprenda a fazer requisições HTTP e consumir dados de APIs em aplicativos mobile.
            Compreenda como lidar com respostas assíncronas.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Desenvolvimento Avançado com Frameworks:</Text>
          <Text>
            Aprofunde-se no uso de frameworks como React Native ou Flutter.
            Explore recursos avançados, plugins e integrações.
          </Text>
          <Text style={styles.topic}>Testes e Depuração:</Text>
          <Text>
            Aprenda a escrever testes unitários e realizar depuração eficiente.
            Utilize ferramentas de inspeção e depuração das plataformas.
          </Text>
          <Text style={styles.topic}>Integração com Recursos do Dispositivo:</Text>
          <Text>
            Saiba como acessar recursos do dispositivo, como câmera, GPS e notificações.
            Explore bibliotecas e APIs para interações avançadas.
          </Text>
          <Text style={styles.topic}>Publicação e Distribuição:</Text>
          <Text>
            Aprenda como publicar seus aplicativos nas lojas de aplicativos (App Store, Google Play).
            Compreenda os processos de revisão e distribuição.
          </Text>
          <Text style={styles.topic}>Tendências e Futuro do Desenvolvimento Mobile:</Text>
          <Text>
            Mantenha-se atualizado sobre as tendências em desenvolvimento mobile.
            Explore tecnologias emergentes e possíveis direções futuras.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Engenheiro de Dados' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Conceitos de Engenharia de Dados:</Text>
          <Text>
            Compreenda o papel do Engenheiro de Dados na coleta e processamento de dados.
            Aprenda sobre pipeline de dados e etapas básicas de ETL (Extração, Transformação e Carga).
          </Text>
          <Text style={styles.topic}>Introdução a Bancos de Dados:</Text>
          <Text>
            Explore bancos de dados SQL e NoSQL.
            Entenda as diferenças entre eles e como modelar dados.
          </Text>
          <Text style={styles.topic}>Linguagens de Consulta:</Text>
          <Text>
            Aprenda linguagens de consulta SQL para extrair informações de bancos de dados.
            Explore o básico de consultas, filtros e junções.
          </Text>
          <Text style={styles.topic}>Introdução a Big Data:</Text>
          <Text>
            Entenda os conceitos de Big Data e os desafios em lidar com grandes volumes de dados.
            Explore tecnologias como Hadoop e Spark.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Modelagem de Dados:</Text>
          <Text>
            Aprenda técnicas de modelagem para estruturar e organizar os dados.
            Compreenda conceitos de normalização e denormalização.
          </Text>
          <Text style={styles.topic}>Processamento de Dados:</Text>
          <Text>
            Aprofunde-se em ETL e processamento de dados.
            Explore ferramentas e frameworks para transformação de dados em pipelines.
          </Text>
          <Text style={styles.topic}>Armazenamento e Distribuição:</Text>
          <Text>
            Saiba como armazenar e distribuir dados em ambientes distribuídos.
            Explore bancos de dados distribuídos e sistemas de arquivos.
          </Text>
          <Text style={styles.topic}>Trabalhando com Streams:</Text>
          <Text>
            Aprenda a lidar com fluxos contínuos de dados em tempo real.
            Explore tecnologias para processamento de streams.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Arquiteturas de Dados:</Text>
          <Text>
            Compreenda arquiteturas de dados escaláveis e de alto desempenho.
            Explore modelos como Data Warehouses e Data Lakes.
          </Text>
          <Text style={styles.topic}>Otimização de Consultas:</Text>
          <Text>
            Aprenda técnicas avançadas para otimizar consultas em bancos de dados.
            Explore índices, particionamento e cache.
          </Text>
          <Text style={styles.topic}>Segurança e Privacidade:</Text>
          <Text>
            Familiarize-se com práticas de segurança e privacidade de dados.
            Saiba como proteger informações sensíveis e atender a regulamentações.
          </Text>
          <Text style={styles.topic}>Orquestração de Pipelines:</Text>
          <Text>
            Aprenda a orquestrar pipelines de dados complexos.
            Explore ferramentas como Apache Airflow.
          </Text>

          <Text style={styles.subtitle}>Nível Profissional:</Text>
          <Text style={styles.topic}>Streaming e Processamento em Tempo Real:</Text>
          <Text>
            Aprofunde-se em tecnologias para processamento de streams em tempo real.
            Explore frameworks como Kafka e Kinesis.
          </Text>
          <Text style={styles.topic}>Integração de Dados:</Text>
          <Text>
            Saiba como integrar dados de diferentes fontes.
            Explore ferramentas de ETL e integração de dados.
          </Text>
          <Text style={styles.topic}>Machine Learning e Engenharia de Dados:</Text>
          <Text>
            Entenda como a Engenharia de Dados se relaciona com projetos de Machine Learning.
            Aprenda a preparar dados para treinamento e inferência de modelos.
          </Text>
          <Text style={styles.topic}>Escalabilidade e Performance:</Text>
          <Text>
            Explore técnicas para lidar com dados em escala.
            Aprenda a otimizar o desempenho de pipelines e consultas.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Segurança da Informação' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Segurança da Informação:</Text>
          <Text>
            Entenda os fundamentos da segurança da informação.
            Aprenda sobre os princípios de confidencialidade, integridade e disponibilidade.
          </Text>
          <Text style={styles.topic}>Princípios de Rede Segura:</Text>
          <Text>
            Compreenda os conceitos de firewall, VPN e redes privadas.
            Aprenda como proteger a comunicação entre sistemas.
          </Text>
          <Text style={styles.topic}>Criptografia Básica:</Text>
          <Text>
            Explore os conceitos básicos de criptografia.
            Entenda como criptografar dados para garantir sua segurança.
          </Text>
          <Text style={styles.topic}>Conformidade e Regulamentações:</Text>
          <Text>
            Familiarize-se com regulamentações de segurança, como GDPR e HIPAA.
            Saiba como manter a conformidade legal em relação à segurança.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Identificação de Vulnerabilidades:</Text>
          <Text>
            Aprenda a identificar vulnerabilidades em sistemas e redes.
            Explore ferramentas de varredura de vulnerabilidades.
          </Text>
          <Text style={styles.topic}>Gerenciamento de Acesso:</Text>
          <Text>
            Compreenda os princípios de autenticação e autorização.
            Aprenda a gerenciar o acesso a recursos de forma segura.
          </Text>
          <Text style={styles.topic}>Monitoramento de Segurança:</Text>
          <Text>
            Saiba como monitorar eventos de segurança e identificar ameaças.
            Explore ferramentas de SIEM (Security Information and Event Management).
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Gestão de Incidentes:</Text>
          <Text>
            Aprofunde-se na resposta a incidentes de segurança.
            Saiba como lidar com ataques cibernéticos e mitigar danos.
          </Text>
          <Text style={styles.topic}>Engenharia Reversa:</Text>
          <Text>
            Aprenda sobre engenharia reversa e análise de malware.
            Compreenda como identificar e entender ameaças através de análise de código.
          </Text>
          <Text style={styles.topic}>Testes de Intrusão:</Text>
          <Text>
            Explore testes de intrusão (pentest) para avaliar a segurança de sistemas.
            Aprenda a simular ataques para identificar vulnerabilidades.
          </Text>

          <Text style={styles.subtitle}>Nível Profissional:</Text>
          <Text style={styles.topic}>Governança de Segurança:</Text>
          <Text>
            Compreenda a importância da governança de segurança.
            Saiba como implementar políticas e procedimentos de segurança.
          </Text>
          <Text style={styles.topic}>Compliance Avançado:</Text>
          <Text>
            Aprofunde-se nas regulamentações de segurança e compliance.
            Saiba como auditar e manter a conformidade em ambientes complexos.
          </Text>
          <Text style={styles.topic}>Análise Forense:</Text>
          <Text>
            Aprenda sobre análise forense de sistemas comprometidos.
            Saiba como coletar e preservar evidências para investigações.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Arquiteto de Software' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Arquitetura de Software:</Text>
          <Text>
            Entenda os conceitos básicos de arquitetura de software.
            Compreenda a importância da arquitetura na qualidade do software.
          </Text>
          <Text style={styles.topic}>Design Patterns:</Text>
          <Text>
            Aprenda sobre padrões de design comuns, como Singleton e Factory.
            Entenda como aplicar esses padrões para resolver problemas de design.
          </Text>
          <Text style={styles.topic}>Princípios de Design Sólido:</Text>
          <Text>
            Compreenda os princípios SOLID para criar código modular e de fácil manutenção.
            Aprenda sobre Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation e Dependency Inversion.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Padrões Arquiteturais:</Text>
          <Text>
            Explore padrões arquiteturais como MVC, MVVM, Microservices e Monolith.
            Compreenda os benefícios e desafios de cada padrão.
          </Text>
          <Text style={styles.topic}>Comunicação entre Componentes:</Text>
          <Text>
            Aprenda a definir interfaces e contratos entre componentes.
            Explore técnicas de comunicação síncrona e assíncrona.
          </Text>
          <Text style={styles.topic}>Escalabilidade e Desempenho:</Text>
          <Text>
            Saiba como projetar sistemas escaláveis e lidar com aumento de carga.
            Aprenda sobre cache, balanceamento de carga e otimizações de desempenho.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Arquitetura de Microservices:</Text>
          <Text>
            Aprofunde-se na arquitetura de microservices.
            Saiba como dividir sistemas em serviços independentes e escaláveis.
          </Text>
          <Text style={styles.topic}>Segurança na Arquitetura:</Text>
          <Text>
            Compreenda os princípios de segurança na arquitetura de software.
            Aprenda a proteger dados sensíveis e prevenir vulnerabilidades.
          </Text>
          <Text style={styles.topic}>Integração de Tecnologias:</Text>
          <Text>
            Explore a integração de diferentes tecnologias e sistemas.
            Aprenda a definir APIs, protocolos de comunicação e formatos de dados.
          </Text>

          <Text style={styles.subtitle}>Nível Profissional:</Text>
          <Text style={styles.topic}>Arquitetura para Escalabilidade Horizontal:</Text>
          <Text>
            Aprenda a projetar sistemas que podem ser escalados horizontalmente.
            Explore técnicas de particionamento e distribuição de dados.
          </Text>
          <Text style={styles.topic}>Arquitetura para Alta Disponibilidade:</Text>
          <Text>
            Saiba como criar sistemas altamente disponíveis e resilientes.
            Aprenda sobre failover, redundância e recuperação de desastres.
          </Text>
          <Text style={styles.topic}>Arquitetura Cloud:</Text>
          <Text>
            Explore a arquitetura de aplicações na nuvem.
            Aprenda a utilizar serviços de nuvem para escalabilidade e flexibilidade.
          </Text>
          <Text style={styles.topic}>Tendências em Arquitetura de Software:</Text>
          <Text>
            Mantenha-se atualizado sobre as tendências mais recentes em arquitetura de software.
            Aprenda sobre serverless, edge computing, arquitetura sem servidor, entre outras.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Desenvolvedor Front-End' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>HTML (HyperText Markup Language):</Text>
          <Text>
            Aprenda a estrutura básica de um documento HTML.
            Entenda as tags, elementos e atributos HTML.
            Crie páginas web simples com cabeçalhos, parágrafos, listas e links.
          </Text>
          <Text style={styles.topic}>CSS (Cascading Style Sheets):</Text>
          <Text>
            Compreenda o que é CSS e como ele é usado para estilizar páginas web.
            Aprenda a aplicar estilos a elementos HTML, como cores, fontes e margens.
            Saiba usar seletores, classes e IDs para estilização.
          </Text>
          <Text style={styles.topic}>JavaScript:</Text>
          <Text>
            Introdução aos conceitos básicos de programação.
            Aprenda a manipular elementos HTML usando JavaScript.
            Explore variáveis, estruturas condicionais (if/else) e loops.
          </Text>
          <Text style={styles.topic}>Frameworks Front-End:</Text>
          <Text>
            Explore frameworks como React, Vue.js ou Angular.
            Aprenda a criar componentes reutilizáveis e interações dinâmicas.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Layout Responsivo:</Text>
          <Text>
            Aprenda a criar layouts que se adaptam a diferentes tamanhos de tela.
            Utilize media queries e técnicas de layout flexível e grid.
          </Text>
          <Text style={styles.topic}>Estilização Avançada:</Text>
          <Text>
            Aprofunde-se na estilização de elementos usando CSS avançado.
            Aprenda a usar pré-processadores como SASS ou LESS.
          </Text>
          <Text style={styles.topic}>Gerenciamento de Estado:</Text>
          <Text>
            Compreenda o gerenciamento de estado em aplicações front-end.
            Utilize bibliotecas como Redux ou Vuex para compartilhar dados entre componentes.
          </Text>
          <Text style={styles.topic}>Integração de APIs:</Text>
          <Text>
            Aprenda a fazer requisições HTTP e integrar dados externos.
            Trabalhe com JSON, REST e GraphQL.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Performance e Otimização:</Text>
          <Text>
            Saiba como otimizar o desempenho de aplicações front-end.
            Realize lazy loading, code splitting e otimização de imagens.
          </Text>
          <Text style={styles.topic}>Testes de Interface:</Text>
          <Text>
            Aprenda a escrever testes para a interface do usuário.
            Utilize ferramentas como Jest, Testing Library ou Cypress.
          </Text>
          <Text style={styles.topic}>Acessibilidade:</Text>
          <Text>
            Compreenda os princípios de design acessível.
            Aprenda a usar ARIA roles e testar a acessibilidade em suas aplicações.
          </Text>
          <Text style={styles.topic}>Build e Deploy:</Text>
          <Text>
            Saiba como empacotar e implantar suas aplicações front-end.
            Utilize ferramentas como Webpack ou Parcel.
          </Text>
          <Text style={styles.topic}>Tendências em Front-End:</Text>
          <Text>
            Mantenha-se atualizado sobre as tendências mais recentes em desenvolvimento front-end.
            Aprenda sobre JAMstack, PWAs, Web Components, entre outras.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Testes de Software' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução aos Testes de Software:</Text>
          <Text>
            Entenda a importância dos testes de software na garantia da qualidade.
            Conheça os diferentes tipos de testes e suas finalidades.
          </Text>
          <Text style={styles.topic}>Metodologias de Teste:</Text>
          <Text>
            Aprenda sobre testes funcionais, testes de regressão e testes de usabilidade.
            Compreenda as etapas de planejamento, execução e documentação dos testes.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Testes de Automação:</Text>
          <Text>
            Explore técnicas de automação de testes utilizando frameworks como Selenium ou Cypress.
            Aprenda a criar scripts de teste para agilizar a execução de casos de teste repetitivos.
          </Text>
          <Text style={styles.topic}>Testes de Desempenho:</Text>
          <Text>
            Compreenda a importância dos testes de desempenho e como identificar gargalos.
            Utilize ferramentas como JMeter ou Gatling para simular cargas de usuários.
          </Text>
          <Text style={styles.topic}>Testes de Segurança:</Text>
          <Text>
            Saiba como realizar testes de segurança para identificar vulnerabilidades em aplicações.
            Explore técnicas como teste de penetração e análise estática de código.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Integração Contínua e Entrega Contínua (CI/CD):</Text>
          <Text>
            Aprenda a integrar testes automatizados em pipelines de CI/CD.
            Compreenda como automatizar a execução de testes em ambientes de staging e produção.
          </Text>
          <Text style={styles.topic}>Testes em Ambientes Complexos:</Text>
          <Text>
            Explore testes de integração, testes de microserviços e testes em aplicações distribuídas.
            Compreenda como lidar com cenários complexos de teste em ambientes modernos.
          </Text>
          <Text style={styles.topic}>Metodologias Ágeis e DevOps:</Text>
          <Text>
            Familiarize-se com práticas ágeis e colaborativas de desenvolvimento.
            Aprenda a trabalhar em equipes multidisciplinares e a integrar testes ao processo DevOps.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Desenvolvedor Full-Stack' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>HTML (HyperText Markup Language):</Text>
          <Text>
            Aprenda a estrutura básica de um documento HTML.
            Entenda as tags, elementos e atributos HTML.
            Crie páginas web simples com cabeçalhos, parágrafos, listas e links.
          </Text>
          <Text style={styles.topic}>CSS (Cascading Style Sheets):</Text>
          <Text>
            Compreenda o que é CSS e como ele é usado para estilizar páginas web.
            Aprenda a aplicar estilos a elementos HTML, como cores, fontes e margens.
            Saiba usar seletores, classes e IDs para estilização.
          </Text>
          <Text style={styles.topic}>JavaScript:</Text>
          <Text>
            Introdução aos conceitos básicos de programação.
            Aprenda a manipular elementos HTML usando JavaScript.
            Explore variáveis, estruturas condicionais (if/else) e loops.
          </Text>
          <Text style={styles.topic}>Banco de Dados:</Text>
          <Text>
            Saiba como projetar um banco de dados relacional.
            Aprenda a escrever consultas SQL para recuperar e manipular dados.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Frameworks Front-end:</Text>
          <Text>
            Explore frameworks como React, Vue.js ou Angular para criar interfaces interativas.
            Aprenda sobre componentização e gerenciamento de estado.
          </Text>
          <Text style={styles.topic}>APIs e Serviços Web:</Text>
          <Text>
            Compreenda o funcionamento de APIs RESTful.
            Aprenda a criar endpoints e consumir dados de APIs externas.
          </Text>
          <Text style={styles.topic}>Backend Development:</Text>
          <Text>
            Escolha uma linguagem de programação (ex: Node.js, Python, Java) para o backend.
            Aprenda a criar rotas, lidar com solicitações HTTP e interagir com bancos de dados.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Autenticação e Autorização:</Text>
          <Text>
            Aprenda a implementar sistemas de autenticação e autorização em aplicações web.
            Explore técnicas como tokens JWT e OAuth.
          </Text>
          <Text style={styles.topic}>Arquitetura de Software:</Text>
          <Text>
            Compreenda os padrões arquiteturais, como MVC e microserviços.
            Aprenda a criar aplicações escaláveis e bem estruturadas.
          </Text>
          <Text style={styles.topic}>Deploy e Hospedagem:</Text>
          <Text>
            Saiba como implantar aplicações em ambientes de produção.
            Explore serviços de hospedagem e gerenciamento de servidores.
          </Text>
          <Text style={styles.topic}>Segurança e Otimização:</Text>
          <Text>
            Familiarize-se com práticas de segurança para proteger aplicações web.
            Aprenda a otimizar o desempenho da aplicação, reduzindo o tempo de carregamento e a latência.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Engenheiro de Machine Learning' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução ao Machine Learning:</Text>
          <Text>
            Compreenda os conceitos básicos de aprendizado de máquina.
            Saiba a diferença entre aprendizado supervisionado, não supervisionado e por reforço.
          </Text>
          <Text style={styles.topic}>Python para Machine Learning:</Text>
          <Text>
            Aprenda a usar a linguagem Python para desenvolver algoritmos de aprendizado de máquina.
            Familiarize-se com bibliotecas como NumPy, Pandas e Scikit-Learn.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Modelos de Machine Learning:</Text>
          <Text>
            Explore algoritmos de classificação, regressão e clusterização.
            Aprenda a avaliar e selecionar modelos adequados para diferentes problemas.
          </Text>
          <Text style={styles.topic}>Pré-processamento de Dados:</Text>
          <Text>
            Saiba como lidar com dados ausentes, normalização e transformações.
            Aprenda sobre seleção de features e redução de dimensionalidade.
          </Text>
          <Text style={styles.topic}>Avaliação de Modelos:</Text>
          <Text>
            Compreenda métricas de avaliação, como precisão, recall, F1-score e curva ROC.
            Aprenda a realizar validação cruzada para avaliar o desempenho do modelo.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Deep Learning:</Text>
          <Text>
            Explore redes neurais artificiais e arquiteturas de deep learning, como redes convolucionais e recorrentes.
            Aprenda a usar frameworks como TensorFlow e PyTorch para construir e treinar modelos complexos.
          </Text>
          <Text style={styles.topic}>Processamento de Linguagem Natural (NLP):</Text>
          <Text>
            Aprenda a trabalhar com texto e linguagem natural.
            Explore técnicas de tokenização, embedding de palavras e modelagem de tópicos.
          </Text>
          <Text style={styles.topic}>Reinforcement Learning:</Text>
          <Text>
            Compreenda os fundamentos do aprendizado por reforço.
            Aprenda a implementar algoritmos Q-learning e políticas de exploração.
          </Text>
          <Text style={styles.topic}>Implantação de Modelos:</Text>
          <Text>
            Saiba como implantar modelos em produção.
            Aprenda sobre contêineres, APIs e serviços em nuvem para hospedar modelos.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Pesquisa em Machine Learning:</Text>
          <Text>
            Explore tópicos avançados de pesquisa em aprendizado de máquina.
            Aprofunde-se em temas como interpretabilidade, adversarial attacks e ética em IA.
          </Text>
          <Text style={styles.topic}>Projetos e Competições:</Text>
          <Text>
            Trabalhe em projetos práticos de machine learning.
            Participe de competições como o Kaggle para aprimorar suas habilidades.
          </Text>
          <Text style={styles.topic}>Aprendizado Contínuo:</Text>
          <Text>
            Mantenha-se atualizado com as últimas pesquisas e avanços em machine learning.
            Explore blogs, conferências e cursos online para expandir seus conhecimentos.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Desenvolvedor Back-end' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução ao Back-end:</Text>
          <Text>
            Compreenda a função do desenvolvedor back-end em uma aplicação.
            Saiba como o back-end se comunica com o front-end e o banco de dados.
          </Text>
          <Text style={styles.topic}>Linguagens de Programação Back-end:</Text>
          <Text>
            Aprenda linguagens como Node.js, Python, Ruby ou PHP.
            Entenda as características de cada linguagem e escolha a mais adequada para o projeto.
          </Text>
          <Text style={styles.topic}>Construção de APIs:</Text>
          <Text>
            Aprenda a criar APIs RESTful para fornecer dados e funcionalidades ao front-end.
            Compreenda conceitos como endpoints, métodos HTTP e respostas JSON.
          </Text>
          <Text style={styles.topic}>Banco de Dados:</Text>
          <Text>
            Introdução a bancos de dados relacionais (ex: MySQL) e não relacionais (ex: MongoDB).
            Aprenda a modelar esquemas de banco de dados e executar consultas.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Frameworks Back-end:</Text>
          <Text>
            Explore frameworks como Express.js, Django, Ruby on Rails ou Laravel.
            Aprenda a criar rotas, controladores e gerenciar autenticação.
          </Text>
          <Text style={styles.topic}>Autenticação e Autorização:</Text>
          <Text>
            Saiba como implementar sistemas de autenticação e autorização seguros.
            Explore JWT, OAuth e outras técnicas para proteger recursos do back-end.
          </Text>
          <Text style={styles.topic}>Testes de Unidade e Integração:</Text>
          <Text>
            Aprenda a escrever testes para garantir a qualidade do código.
            Explore ferramentas como Jest, Mocha ou PHPUnit.
          </Text>
          <Text style={styles.topic}>Sistemas de Cache:</Text>
          <Text>
            Compreenda a importância do cache em aplicações back-end.
            Aprenda a usar sistemas de cache como Redis para melhorar o desempenho.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Microserviços:</Text>
          <Text>
            Explore a arquitetura de microserviços para criar aplicações escaláveis.
            Aprenda a dividir a aplicação em serviços independentes e interconectados.
          </Text>
          <Text style={styles.topic}>Segurança no Back-end:</Text>
          <Text>
            Aprofunde-se em práticas de segurança, como proteção contra ataques de injeção (SQL, XSS) e CSRF.
            Saiba como proteger APIs e dados sensíveis.
          </Text>
          <Text style={styles.topic}>Implantação e DevOps:</Text>
          <Text>
            Saiba como implantar aplicações back-end em ambientes de produção.
            Explore conceitos de integração contínua, entrega contínua e monitoramento.
          </Text>
          <Text style={styles.topic}>Escalabilidade e Otimização:</Text>
          <Text>
            Aprenda a dimensionar aplicações para lidar com tráfego intenso.
            Explore técnicas de otimização de consultas de banco de dados e desempenho do servidor.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Arquitetura de Software:</Text>
          <Text>
            Aprofunde-se em padrões de arquitetura, como MVC, MVVM e Clean Architecture.
            Saiba como projetar sistemas robustos e de fácil manutenção.
          </Text>
          <Text style={styles.topic}>Monitoramento e Diagnóstico:</Text>
          <Text>
            Explore ferramentas de monitoramento de desempenho e diagnóstico de problemas.
            Aprenda a identificar gargalos e otimizar aplicações em produção.
          </Text>
          <Text style={styles.topic}>Gerenciamento de Dependências:</Text>
          <Text>
            Compreenda a importância do gerenciamento de dependências em aplicações back-end.
            Aprenda a usar ferramentas como npm, pip ou composer.
          </Text>
          <Text style={styles.topic}>Contribuição Open Source:</Text>
          <Text>
            Participe da comunidade open source, contribuindo para projetos relevantes.
            Aprenda a colaborar, criar pull requests e receber feedback.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Dados' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Análise de Dados:</Text>
          <Text>
            Compreenda o papel do analista de dados na interpretação de informações.
            Saiba como dados são coletados, processados e usados para tomada de decisões.
          </Text>
          <Text style={styles.topic}>Linguagens de Programação para Dados:</Text>
          <Text>
            Aprenda linguagens como Python e R para análise estatística e manipulação de dados.
            Entenda como carregar, limpar e visualizar conjuntos de dados.
          </Text>
          <Text style={styles.topic}>Análise Descritiva e Visualização:</Text>
          <Text>
            Aprenda a resumir e visualizar dados por meio de gráficos e tabelas.
            Explore bibliotecas como matplotlib, seaborn e pandas.
          </Text>
          <Text style={styles.topic}>Fundamentos de Estatística:</Text>
          <Text>
            Compreenda conceitos estatísticos básicos, como média, mediana e desvio padrão.
            Aprenda a realizar testes de hipóteses simples.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Manipulação e Limpeza de Dados:</Text>
          <Text>
            Aprofunde-se em técnicas para tratar dados ausentes, duplicados e inconsistentes.
            Saiba como transformar dados em formatos úteis para análise.
          </Text>
          <Text style={styles.topic}>Análise Exploratória de Dados:</Text>
          <Text>
            Aprenda a investigar relações entre variáveis e identificar padrões nos dados.
            Utilize ferramentas como gráficos de dispersão e matriz de correlação.
          </Text>
          <Text style={styles.topic}>Aprendizado de Máquina para Análise:</Text>
          <Text>
            Introdução ao aprendizado de máquina e técnicas de classificação e regressão.
            Aprenda a usar bibliotecas como scikit-learn para construir modelos simples.
          </Text>
          <Text style={styles.topic}>Bancos de Dados e SQL:</Text>
          <Text>
            Entenda bancos de dados relacionais, consultas SQL e como extrair informações relevantes.
            Aprenda a usar bancos de dados como PostgreSQL e MySQL.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Análise de Séries Temporais:</Text>
          <Text>
            Aprofunde-se em análise de dados temporais e previsões.
            Aprenda a modelar tendências e sazonalidades em séries temporais.
          </Text>
          <Text style={styles.topic}>Aprendizado de Máquina Avançado:</Text>
          <Text>
            Explore técnicas avançadas de aprendizado de máquina, como árvores de decisão, SVM e redes neurais.
            Aprenda a ajustar hiperparâmetros e avaliar a performance dos modelos.
          </Text>
          <Text style={styles.topic}>Visualização Interativa de Dados:</Text>
          <Text>
            Aprenda a criar visualizações interativas usando bibliotecas como Plotly e D3.js.
            Crie dashboards e painéis interativos para explorar dados.
          </Text>
          <Text style={styles.topic}>Processamento de Dados em Escala:</Text>
          <Text>
            Saiba como lidar com grandes volumes de dados usando ferramentas como Hadoop e Spark.
            Aprenda a distribuir e processar dados de forma eficiente.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Análise de Texto e Processamento de Linguagem Natural:</Text>
          <Text>
            Aprofunde-se em análise de texto, sentimentos e tópicos.
            Aprenda a usar bibliotecas como NLTK e spaCy para processar linguagem natural.
          </Text>
          <Text style={styles.topic}>Análise de Redes Sociais e Grafos:</Text>
          <Text>
            Explore análise de redes sociais, detecção de comunidades e centralidade.
            Aprenda a usar bibliotecas como NetworkX para analisar grafos.
          </Text>
          <Text style={styles.topic}>Inteligência de Negócios (BI) e Visualização Avançada:</Text>
          <Text>
            Saiba como criar painéis de BI avançados para auxiliar na tomada de decisões.
            Utilize ferramentas como Tableau e Power BI.
          </Text>
          <Text style={styles.topic}>Ética e Privacidade em Análise de Dados:</Text>
          <Text>
            Aprofunde-se em questões éticas relacionadas à coleta e uso de dados.
            Aprenda sobre privacidade, consentimento e responsabilidade.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Sistemas' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Análise de Sistemas:</Text>
          <Text>
            Compreenda o papel do analista de sistemas na concepção e desenvolvimento de soluções de software.
            Saiba como interpretar requisitos e criar especificações funcionais.
          </Text>
          <Text style={styles.topic}>Fundamentos de Programação:</Text>
          <Text>
            Aprenda noções básicas de lógica de programação e algoritmos.
            Compreenda a estrutura de programas, tipos de dados e estruturas de controle.
          </Text>
          <Text style={styles.topic}>Modelagem de Dados:</Text>
          <Text>
            Introdução à modelagem de dados e criação de diagramas entidade-relacionamento (ER).
            Aprenda a representar entidades, atributos e relacionamentos.
          </Text>
          <Text style={styles.topic}>Gestão de Projetos de Software:</Text>
          <Text>
            Familiarize-se com conceitos de gestão de projetos, como planejamento, escopo e cronograma.
            Compreenda metodologias ágeis, como Scrum e Kanban.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Análise de Requisitos:</Text>
          <Text>
            Aprofunde-se na coleta, análise e documentação de requisitos de software.
            Saiba como identificar requisitos funcionais e não funcionais.
          </Text>
          <Text style={styles.topic}>Modelagem de Processos de Negócios:</Text>
          <Text>
            Aprenda a mapear processos de negócios usando notações como BPMN.
            Compreenda fluxos, atividades e decisões nos processos.
          </Text>
          <Text style={styles.topic}>Arquitetura de Software:</Text>
          <Text>
            Introdução à arquitetura de software e padrões de projeto.
            Aprenda a criar diagramas de componentes e estruturas de sistemas.
          </Text>
          <Text style={styles.topic}>Banco de Dados Relacionais:</Text>
          <Text>
            Compreenda conceitos de bancos de dados relacionais, normalização e SQL.
            Aprenda a criar consultas e manipular dados.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Design de Interfaces:</Text>
          <Text>
            Aprofunde-se no design de interfaces de usuário (UI) e experiência do usuário (UX).
            Saiba como criar wireframes, protótipos e garantir usabilidade.
          </Text>
          <Text style={styles.topic}>Arquitetura Orientada a Serviços (SOA):</Text>
          <Text>
            Explore arquitetura SOA e criação de serviços interoperáveis.
            Aprenda sobre padrões de mensagens e APIs.
          </Text>
          <Text style={styles.topic}>Qualidade de Software:</Text>
          <Text>
            Aprenda sobre testes de software, automação e garantia de qualidade.
            Compreenda a importância da depuração e melhoria contínua.
          </Text>
          <Text style={styles.topic}>Metodologias de Desenvolvimento:</Text>
          <Text>
            Explore metodologias tradicionais e ágeis, como Waterfall e XP.
            Aprenda a selecionar a abordagem certa para cada projeto.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Gestão de Mudanças e Implantação:</Text>
          <Text>
            Aprofunde-se na gestão de mudanças e implantação de sistemas.
            Saiba como minimizar impactos e garantir uma transição suave.
          </Text>
          <Text style={styles.topic}>Análise de Riscos de Software:</Text>
          <Text>
            Explore a análise de riscos em projetos de software.
            Aprenda a identificar, avaliar e mitigar riscos potenciais.
          </Text>
          <Text style={styles.topic}>Gestão de Configuração e Versionamento:</Text>
          <Text>
            Saiba como gerenciar configurações e versionamento de código.
            Compreenda ferramentas como Git e sistemas de controle de versão.
          </Text>
          <Text style={styles.topic}>Desenvolvimento de Sistemas Corporativos:</Text>
          <Text>
            Aprenda a projetar e desenvolver sistemas corporativos complexos.
            Compreenda integração de sistemas e fluxos de trabalho.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Cientista de Dados' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Ciência de Dados:</Text>
          <Text>
            Compreenda o papel do cientista de dados na análise e interpretação de conjuntos de dados.
            Aprenda sobre as etapas do ciclo de vida da ciência de dados.
          </Text>
          <Text style={styles.topic}>Programação em Python:</Text>
          <Text>
            Aprenda os fundamentos da linguagem Python.
            Compreenda variáveis, estruturas de controle e funções.
          </Text>
          <Text style={styles.topic}>Análise Exploratória de Dados (EDA):</Text>
          <Text>
            Aprenda a explorar e visualizar conjuntos de dados.
            Utilize bibliotecas como Pandas e Matplotlib.
          </Text>
          <Text style={styles.topic}>Estatísticas Básicas:</Text>
          <Text>
            Introdução às estatísticas descritivas e inferenciais.
            Aprenda a calcular médias, desvios padrão e realizar testes de hipóteses.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Aprendizado de Máquina (Machine Learning):</Text>
          <Text>
            Aprofunde-se em conceitos de aprendizado de máquina.
            Aprenda sobre algoritmos de classificação, regressão e agrupamento.
          </Text>
          <Text style={styles.topic}>Pré-processamento de Dados:</Text>
          <Text>
            Aprenda a limpar e preparar dados para análise.
            Compreenda técnicas de tratamento de valores faltantes e escalonamento.
          </Text>
          <Text style={styles.topic}>Feature Engineering:</Text>
          <Text>
            Explore técnicas de criação e seleção de features.
            Aprenda a extrair informações relevantes dos dados.
          </Text>
          <Text style={styles.topic}>Avaliação de Modelos:</Text>
          <Text>
            Saiba como avaliar a performance de modelos de aprendizado de máquina.
            Compreenda métricas como acurácia, precisão, recall e F1-score.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Deep Learning:</Text>
          <Text>
            Aprofunde-se em redes neurais artificiais e deep learning.
            Aprenda a construir e treinar modelos de redes neurais.
          </Text>
          <Text style={styles.topic}>Processamento de Linguagem Natural (NLP):</Text>
          <Text>
            Explore o processamento de texto e análise de sentimentos.
            Aprenda a usar bibliotecas como NLTK e spaCy.
          </Text>
          <Text style={styles.topic}>Visão Computacional:</Text>
          <Text>
            Aprenda sobre processamento de imagens e detecção de objetos.
            Utilize bibliotecas como OpenCV e TensorFlow.
          </Text>
          <Text style={styles.topic}>Big Data e Distribuição:</Text>
          <Text>
            Explore o processamento de dados em ambientes distribuídos.
            Aprenda sobre frameworks como Hadoop e Spark.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Aprendizado Não Supervisionado:</Text>
          <Text>
            Aprofunde-se em técnicas de aprendizado não supervisionado.
            Explore clustering, redução de dimensionalidade e análise de componentes principais (PCA).
          </Text>
          <Text style={styles.topic}>Modelos de Séries Temporais:</Text>
          <Text>
            Aprenda a trabalhar com dados temporais e previsões.
            Compreenda modelos ARIMA, SARIMA e outros.
          </Text>
          <Text style={styles.topic}>Machine Learning em Produção:</Text>
          <Text>
            Saiba como implantar modelos de machine learning em ambientes de produção.
            Aprenda sobre APIs, contêineres e monitoramento.
          </Text>
          <Text style={styles.topic}>Ética em Ciência de Dados:</Text>
          <Text>
            Explore questões éticas relacionadas à coleta e uso de dados.
            Aprenda a lidar com privacidade e viés nos modelos.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Especialista em Redes' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução às Redes de Computadores:</Text>
          <Text>
            Compreenda os fundamentos das redes de computadores.
            Aprenda sobre topologias, protocolos e tipos de redes.
          </Text>
          <Text style={styles.topic}>TCP/IP e Modelos de Referência:</Text>
          <Text>
            Aprofunde-se no modelo TCP/IP e nos modelos de referência OSI.
            Compreenda camadas, protocolos e endereçamento IP.
          </Text>
          <Text style={styles.topic}>Infraestrutura de Redes:</Text>
          <Text>
            Aprenda sobre componentes de redes, como roteadores, switches e firewalls.
            Compreenda cabos, padrões de cabeamento e tecnologias de conexão.
          </Text>
          <Text style={styles.topic}>Segurança de Rede Básica:</Text>
          <Text>
            Introdução à segurança de redes.
            Aprenda sobre ameaças, vulnerabilidades e medidas de proteção.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Protocolos de Roteamento:</Text>
          <Text>
            Aprofunde-se em protocolos de roteamento, como RIP, OSPF e BGP.
            Compreenda tabelas de roteamento e conceitos de roteamento dinâmico.
          </Text>
          <Text style={styles.topic}>VLANs e Redes Virtuais:</Text>
          <Text>
            Aprenda sobre redes virtuais e VLANs.
            Compreenda segmentação de redes e configuração de switch.
          </Text>
          <Text style={styles.topic}>Redes sem Fio (Wi-Fi):</Text>
          <Text>
            Explore redes Wi-Fi e tecnologias relacionadas.
            Aprenda sobre padrões, segurança e configuração de pontos de acesso.
          </Text>
          <Text style={styles.topic}>Firewalls e Segurança Avançada:</Text>
          <Text>
            Aprofunde-se em firewalls, IDS e IPS.
            Compreenda filtragem de pacotes, inspeção profunda de pacotes e prevenção de intrusões.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Redes Definidas por Software (SDN):</Text>
          <Text>
            Aprenda sobre SDN e virtualização de redes.
            Compreenda controladores, separação de plano de controle e plano de dados.
          </Text>
          <Text style={styles.topic}>Administração e Monitoramento de Redes:</Text>
          <Text>
            Aprofunde-se em administração de redes em larga escala.
            Saiba como monitorar tráfego, analisar logs e solucionar problemas.
          </Text>
          <Text style={styles.topic}>Redes em Nuvem:</Text>
          <Text>
            Explore a integração de redes com ambientes em nuvem.
            Aprenda sobre VPNs, VPCs e conectividade híbrida.
          </Text>
          <Text style={styles.topic}>Resiliência e Alta Disponibilidade:</Text>
          <Text>
            Aprenda a projetar redes resilientes e de alta disponibilidade.
            Compreenda redundância, balanceamento de carga e failover.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Desempenho e Otimização:</Text>
          <Text>
            Aprofunde-se em otimização de desempenho de redes.
            Saiba como reduzir latência, melhorar largura de banda e otimizar QoS.
          </Text>
          <Text style={styles.topic}>Segurança Avançada em Redes:</Text>
          <Text>
            Explore técnicas avançadas de segurança de redes.
            Aprenda sobre detecção de ameaças avançadas, autenticação forte e segurança em IoT.
          </Text>
          <Text style={styles.topic}>Projeto e Implementação de Redes:</Text>
          <Text>
            Saiba como planejar, projetar e implementar redes complexas.
            Aprenda sobre arquitetura de rede, dimensionamento e migração.
          </Text>
          <Text style={styles.topic}>Tendências em Redes:</Text>
          <Text>
            Mantenha-se atualizado sobre as tendências atuais em redes.
            Explore SD-WAN, 5G, IoT e automação de redes.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Especialista em E-commerce' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução ao E-commerce:</Text>
          <Text>
            Compreenda os conceitos fundamentais do comércio eletrônico.
            Aprenda sobre modelos de negócios, plataformas e tendências.
          </Text>
          <Text style={styles.topic}>Fundamentos de Marketing Digital:</Text>
          <Text>
            Aprofunde-se em estratégias de marketing online para e-commerce.
            Compreenda SEO, SEM, e-mail marketing e redes sociais.
          </Text>
          <Text style={styles.topic}>Design de Experiência do Usuário (UX) para E-commerce:</Text>
          <Text>
            Aprenda sobre a importância do UX no comércio eletrônico.
            Compreenda o fluxo de compra, layout, navegação e mobile-first design.
          </Text>
          <Text style={styles.topic}>Processo de Compra e Pagamentos:</Text>
          <Text>
            Aprofunde-se no processo de compra online.
            Saiba sobre carrinho de compras, métodos de pagamento e segurança.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Gestão de Catálogo e Conteúdo:</Text>
          <Text>
            Aprenda a organizar e apresentar produtos no e-commerce.
            Compreenda categorização, descrições de produtos e imagens.
          </Text>
          <Text style={styles.topic}>Personalização e Recomendações:</Text>
          <Text>
            Explore estratégias de personalização para aprimorar a experiência do usuário.
            Saiba como oferecer recomendações de produtos relevantes.
          </Text>
          <Text style={styles.topic}>Logística e Entrega:</Text>
          <Text>
            Aprofunde-se na logística do e-commerce, desde o armazenamento até a entrega.
            Saiba sobre cálculo de frete, opções de entrega e rastreamento.
          </Text>
          <Text style={styles.topic}>Gestão de Estoque:</Text>
          <Text>
            Aprenda a gerenciar o estoque de produtos de forma eficiente.
            Compreenda estoque mínimo, máximo, controle de validade e produtos sazonais.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Análise de Dados e Métricas:</Text>
          <Text>
            Explore a análise de dados para otimizar o desempenho do e-commerce.
            Aprenda a interpretar métricas como taxa de conversão, abandono de carrinho e ROI.
          </Text>
          <Text style={styles.topic}>Estratégias de Retenção e Fidelização:</Text>
          <Text>
            Aprofunde-se em estratégias para manter e fidelizar clientes.
            Saiba como criar programas de fidelidade, ofertas exclusivas e follow-up pós-venda.
          </Text>
          <Text style={styles.topic}>SEO Avançado para E-commerce:</Text>
          <Text>
            Aprenda técnicas avançadas de SEO para posicionar melhor sua loja.
            Compreenda otimização de página, link building e pesquisa de palavras-chave.
          </Text>
          <Text style={styles.topic}>Integração com Marketplaces:</Text>
          <Text>
            Explore a expansão do e-commerce por meio de integração com marketplaces.
            Saiba como listar produtos em plataformas como Amazon, eBay e Mercado Livre.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Estratégias de Expansão Internacional:</Text>
          <Text>
            Aprofunde-se em estratégias para levar seu e-commerce a mercados internacionais.
            Compreenda localização, tradução, regulamentações e pagamentos globais.
          </Text>
          <Text style={styles.topic}>Omnichannel e Experiência do Cliente:</Text>
          <Text>
            Explore a criação de uma experiência integrada em diversos canais.
            Aprenda sobre vendas físicas, atendimento ao cliente e click and collect.
          </Text>
          <Text style={styles.topic}>Tecnologias Emergentes no E-commerce:</Text>
          <Text>
            Mantenha-se atualizado sobre as últimas tecnologias aplicadas ao e-commerce.
            Aprenda sobre realidade aumentada, chatbots e assistentes de voz.
          </Text>
          <Text style={styles.topic}>Gestão de Crises e Segurança:</Text>
          <Text>
            Saiba como lidar com crises e problemas no e-commerce.
            Explore estratégias de segurança de dados e proteção contra fraudes.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Especialista em Segurança Cibernética' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução à Segurança Cibernética:</Text>
          <Text>
            Compreenda os conceitos fundamentais da segurança cibernética.
            Aprenda sobre ameaças cibernéticas, tipos de ataques e terminologia.
          </Text>
          <Text style={styles.topic}>Fundamentos de Redes e Protocolos:</Text>
          <Text>
            Aprofunde-se nas bases de redes de computadores e protocolos.
            Compreenda endereçamento IP, DNS, TCP/IP e modelos OSI e TCP/IP.
          </Text>
          <Text style={styles.topic}>Ciber-higiene e Boas Práticas:</Text>
          <Text>
            Aprenda sobre medidas de higiene cibernética e melhores práticas.
            Saiba como criar senhas seguras, manter software atualizado e evitar phishing.
          </Text>
          <Text style={styles.topic}>Princípios de Criptografia:</Text>
          <Text>
            Explore os conceitos de criptografia e sua importância na segurança.
            Compreenda algoritmos, chaves, assinaturas digitais e criptografia de dados.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Segurança em Sistemas Operacionais:</Text>
          <Text>
            Aprofunde-se nas técnicas de segurança em sistemas operacionais.
            Saiba como configurar permissões, firewalls e monitoramento de eventos.
          </Text>
          <Text style={styles.topic}>Gestão de Identidade e Acesso:</Text>
          <Text>
            Explore a gestão de identidade e controle de acesso.
            Aprenda sobre autenticação, autorização, single sign-on e autenticação multifatorial.
          </Text>
          <Text style={styles.topic}>Segurança em Redes:</Text>
          <Text>
            Aprenda sobre medidas de segurança para redes corporativas.
            Compreenda VPNs, detecção de intrusões, firewall de próxima geração e segmentação.
          </Text>
          <Text style={styles.topic}>Análise de Vulnerabilidades:</Text>
          <Text>
            Aprofunde-se em técnicas de identificação e avaliação de vulnerabilidades.
            Saiba como usar scanners de vulnerabilidades e conduzir testes de penetração.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Resposta a Incidentes e Gestão de Crises:</Text>
          <Text>
            Explore estratégias para lidar com incidentes de segurança cibernética.
            Aprenda sobre plano de resposta a incidentes, coleta de evidências e comunicação.
          </Text>
          <Text style={styles.topic}>Forense Digital:</Text>
          <Text>
            Aprofunde-se na investigação forense digital.
            Saiba como coletar, preservar e analisar evidências digitais em casos de crimes cibernéticos.
          </Text>
          <Text style={styles.topic}>Segurança em Aplicações Web:</Text>
          <Text>
            Explore técnicas de segurança aplicadas a aplicações web.
            Aprenda sobre OWASP Top 10, injeção SQL, XSS e autenticação inadequada.
          </Text>
          <Text style={styles.topic}>Gestão de Riscos e Conformidade:</Text>
          <Text>
            Aprenda a gerenciar riscos de segurança e garantir a conformidade regulatória.
            Compreenda avaliação de riscos, padrões de segurança e leis de privacidade.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Segurança em Dispositivos IoT:</Text>
          <Text>
            Aprofunde-se na segurança de dispositivos IoT (Internet das Coisas).
            Saiba como proteger dispositivos conectados e mitigar riscos.
          </Text>
          <Text style={styles.topic}>Estratégias de Defesa Avançada:</Text>
          <Text>
            Explore técnicas avançadas de defesa cibernética.
            Aprenda sobre detecção de ameaças avançadas, análise comportamental e hunting de ameaças.
          </Text>
          <Text style={styles.topic}>Segurança em Ambientes em Nuvem:</Text>
          <Text>
            Aprenda sobre medidas de segurança em ambientes de nuvem.
            Compreenda controle de acesso, criptografia de dados e monitoramento em nuvem.
          </Text>
          <Text style={styles.topic}>Ética e Legislação em Segurança Cibernética:</Text>
          <Text>
            Reflita sobre questões éticas na segurança cibernética e leis relacionadas.
            Aprenda sobre privacidade de dados, responsabilidade legal e direitos do usuário.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Desenvolvedor de Jogos' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Introdução ao Desenvolvimento de Jogos:</Text>
          <Text>
            Compreenda os fundamentos do desenvolvimento de jogos.
            Aprenda sobre tipos de jogos, mecânicas e elementos essenciais.
          </Text>
          <Text style={styles.topic}>Game Design e Narrativa:</Text>
          <Text>
            Explore princípios de game design e criação de narrativas.
            Saiba como criar personagens, enredos e mecânicas envolventes.
          </Text>
          <Text style={styles.topic}>Programação de Jogos:</Text>
          <Text>
            Introdução à programação específica para jogos.
            Aprenda a criar lógica de jogo, controles e interações básicas.
          </Text>
          <Text style={styles.topic}>Gráficos e Animações:</Text>
          <Text>
            Aprenda sobre a criação de gráficos e animações para jogos.
            Compreenda pixel art, modelagem 3D simples e animações de personagens.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Engines de Desenvolvimento de Jogos:</Text>
          <Text>
            Aprofunde-se em engines populares de desenvolvimento de jogos.
            Aprenda a usar Unity, Unreal Engine ou outras opções.
          </Text>
          <Text style={styles.topic}>Programação Avançada de Jogos:</Text>
          <Text>
            Explore técnicas avançadas de programação para jogos.
            Aprenda sobre inteligência artificial, física de jogos e otimização.
          </Text>
          <Text style={styles.topic}>Design de Níveis:</Text>
          <Text>
            Aprenda a projetar níveis envolventes e desafiadores.
            Compreenda fluxo de jogo, pacing e balanceamento.
          </Text>
          <Text style={styles.topic}>Áudio e Trilha Sonora:</Text>
          <Text>
            Explore a criação de áudio e trilha sonora para jogos.
            Aprenda a usar efeitos sonoros, música e design sonoro.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Realidade Virtual e Aumentada:</Text>
          <Text>
            Aprofunde-se em desenvolvimento para realidade virtual e aumentada.
            Aprenda a criar experiências imersivas para diferentes dispositivos.
          </Text>
          <Text style={styles.topic}>Multiplayer e Redes:</Text>
          <Text>
            Explore o desenvolvimento de jogos multiplayer online.
            Aprenda sobre arquitetura de rede, sincronização e segurança.
          </Text>
          <Text style={styles.topic}>Monetização e Publicação:</Text>
          <Text>
            Aprenda a monetizar seus jogos e levá-los ao mercado.
            Compreenda modelos de negócios, lojas de aplicativos e marketing.
          </Text>
          <Text style={styles.topic}>Realidade Virtual e Aumentada:</Text>
          <Text>
            Aprofunde-se em desenvolvimento para realidade virtual e aumentada.
            Aprenda a criar experiências imersivas para diferentes dispositivos.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Inteligência Artificial em Jogos:</Text>
          <Text>
            Aprofunde-se em técnicas de inteligência artificial aplicadas a jogos.
            Aprenda sobre NPCs (personagens não jogáveis) inteligentes e comportamentos complexos.
          </Text>
          <Text style={styles.topic}>Narrativas Não-Lineares:</Text>
          <Text>
            Explore a criação de narrativas não-lineares e ramificadas.
            Aprenda sobre escolhas do jogador e diferentes finais.
          </Text>
          <Text style={styles.topic}>Desenvolvimento Mobile e Indie:</Text>
          <Text>
            Aprenda a criar jogos para dispositivos móveis e o mercado indie.
            Compreenda limitações técnicas e estratégias de lançamento.
          </Text>
          <Text style={styles.topic}>Realidade Virtual e Aumentada:</Text>
          <Text>
            Aprofunde-se em desenvolvimento para realidade virtual e aumentada.
            Aprenda a criar experiências imersivas para diferentes dispositivos.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Qualidade de Software' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Fundamentos de Qualidade de Software:</Text>
          <Text>
            Compreenda os conceitos básicos de qualidade de software.
            Aprenda sobre processos de teste, tipos de testes e suas importâncias.
          </Text>
          <Text style={styles.topic}>Planejamento de Testes:</Text>
          <Text>
            Aprenda a criar planos de teste eficazes.
            Compreenda objetivos, escopo, estratégias e critérios de saída.
          </Text>
          <Text style={styles.topic}>Testes Manuais:</Text>
          <Text>
            Introdução aos testes manuais de software.
            Aprenda a executar casos de teste, relatar bugs e validar requisitos.
          </Text>
          <Text style={styles.topic}>Documentação de Testes:</Text>
          <Text>
            Explore a importância da documentação de testes.
            Aprenda a criar relatórios de teste e registros de defeitos.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Testes de Regressão e Integração:</Text>
          <Text>
            Aprofunde-se em testes de regressão e integração.
            Aprenda a identificar impactos, criar cenários e automatizar testes.
          </Text>
          <Text style={styles.topic}>Testes Funcionais e Não-Funcionais:</Text>
          <Text>
            Explore diferentes tipos de testes, como funcionais e de desempenho.
            Aprenda a avaliar requisitos, criar métricas e relatar resultados.
          </Text>
          <Text style={styles.topic}>Automação de Testes:</Text>
          <Text>
            Introdução à automação de testes de software.
            Aprenda a usar ferramentas como Selenium, JUnit ou TestNG.
          </Text>
          <Text style={styles.topic}>Ambientes de Teste:</Text>
          <Text>
            Compreenda a criação de ambientes de teste realistas.
            Aprenda sobre simulação, isolamento e virtualização.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Testes de Segurança e Penetração:</Text>
          <Text>
            Aprofunde-se em testes de segurança de software.
            Aprenda a identificar vulnerabilidades, realizar testes de penetração e análise de código.
          </Text>
          <Text style={styles.topic}>Testes em Ambientes Ágeis:</Text>
          <Text>
            Explore práticas de teste em metodologias ágeis.
            Aprenda a integrar testes em sprints, user stories e ciclos de entrega.
          </Text>
          <Text style={styles.topic}>Gerenciamento de Defeitos:</Text>
          <Text>
            Compreenda o ciclo de vida de defeitos.
            Aprenda a priorizar, rastrear e fechar problemas identificados.
          </Text>
          <Text style={styles.topic}>Testes de Usabilidade:</Text>
          <Text>
            Introdução a testes de usabilidade de software.
            Aprenda a avaliar a experiência do usuário e fornecer feedback.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Testes em DevOps e CI/CD:</Text>
          <Text>
            Aprofunde-se em testes contínuos em ambientes DevOps.
            Aprenda a automatizar testes em pipelines de integração e entrega contínua.
          </Text>
          <Text style={styles.topic}>Testes de Integração Contínua:</Text>
          <Text>
            Explore práticas de testes de integração contínua.
            Aprenda a validar mudanças em sistemas complexos e distribuídos.
          </Text>
          <Text style={styles.topic}>Automação e Orquestração de Testes:</Text>
          <Text>
            Aprofunde-se em automação e orquestração de testes.
            Aprenda a criar testes modulares, escaláveis e reutilizáveis.
          </Text>
          <Text style={styles.topic}>Inovação em Testes:</Text>
          <Text>
            Compreenda tendências de inovação em testes de software.
            Aprenda sobre IA, testes baseados em dados e abordagens avançadas.
          </Text>
        </View>
      )}

      {vagaInfo.name === 'Analista de Marketing Digital' && (
        <View>
          <Text style={styles.subtitle}>Nível Básico:</Text>
          <Text style={styles.topic}>Fundamentos de Marketing Digital:</Text>
          <Text>
            Compreenda os conceitos básicos do marketing digital.
            Aprenda sobre canais, público-alvo, funil de conversão e métricas.
          </Text>
          <Text style={styles.topic}>SEO (Search Engine Optimization):</Text>
          <Text>
            Introdução ao SEO para melhorar o posicionamento nos mecanismos de busca.
            Aprenda a escolher palavras-chave, otimizar conteúdo e criar backlinks.
          </Text>
          <Text style={styles.topic}>Marketing de Conteúdo:</Text>
          <Text>
            Explore estratégias de criação e distribuição de conteúdo.
            Aprenda a escrever blogs, e-books, infográficos e a construir uma audiência.
          </Text>
          <Text style={styles.topic}>Redes Sociais:</Text>
          <Text>
            Aprenda a gerenciar perfis em redes sociais como Facebook, Instagram e LinkedIn.
            Explore estratégias de postagem, engajamento e análise de métricas.
          </Text>

          <Text style={styles.subtitle}>Nível Intermediário:</Text>
          <Text style={styles.topic}>Publicidade Online (PPC):</Text>
          <Text>
            Aprofunde-se em publicidade online, como Google Ads e Facebook Ads.
            Aprenda a criar campanhas, configurar segmentação e otimizar anúncios.
          </Text>
          <Text style={styles.topic}>E-mail Marketing:</Text>
          <Text>
            Explore estratégias de e-mail marketing para engajar audiências.
            Aprenda a criar campanhas, segmentar listas e analisar resultados.
          </Text>
          <Text style={styles.topic}>Analytics e Métricas:</Text>
          <Text>
            Aprenda a usar ferramentas como Google Analytics para medir o desempenho.
            Compreenda métricas como tráfego, conversões, taxa de rejeição e ROI.
          </Text>
          <Text style={styles.topic}>Marketing de Afiliados:</Text>
          <Text>
            Introdução ao marketing de afiliados e parcerias estratégicas.
            Aprenda a promover produtos e serviços e acompanhar comissões.
          </Text>

          <Text style={styles.subtitle}>Nível Avançado:</Text>
          <Text style={styles.topic}>Automação de Marketing:</Text>
          <Text>
            Aprofunde-se em ferramentas de automação de marketing.
            Aprenda a criar fluxos de trabalho, nutrir leads e personalizar comunicações.
          </Text>
          <Text style={styles.topic}>Análise de Concorrentes:</Text>
          <Text>
            Explore estratégias de análise de concorrentes no ambiente digital.
            Aprenda a identificar oportunidades, tendências e lacunas.
          </Text>
          <Text style={styles.topic}>Marketing em Mídias Avançadas:</Text>
          <Text>
            Aprenda sobre estratégias de marketing em mídias avançadas como podcast e vídeo.
            Compreenda produção, distribuição e promoção de conteúdo.
          </Text>
          <Text style={styles.topic}>Estratégias Multicanais:</Text>
          <Text>
            Aprofunde-se em estratégias multicanais para maximizar o alcance.
            Aprenda a coordenar esforços em diferentes canais de marketing.
          </Text>

          <Text style={styles.subtitle}>Nível Especializado:</Text>
          <Text style={styles.topic}>Personalização e Experiência do Cliente:</Text>
          <Text>
            Explore estratégias de personalização para melhorar a experiência do cliente.
            Aprenda a usar dados para segmentação e customização de campanhas.
          </Text>
          <Text style={styles.topic}>Marketing de Influência:</Text>
          <Text>
            Aprofunde-se em marketing de influência e parcerias com influenciadores.
            Aprenda a identificar e colaborar com influenciadores relevantes.
          </Text>
          <Text style={styles.topic}>Marketing em Plataformas Emergentes:</Text>
          <Text>
            Mantenha-se atualizado em plataformas emergentes de marketing digital.
            Aprenda sobre realidade virtual, realidade aumentada e novas tendências.
          </Text>
          <Text style={styles.topic}>Análise Preditiva e Big Data:</Text>
          <Text>
            Compreenda análise preditiva e uso de big data no marketing.
            Aprenda a prever tendências, comportamentos e otimizar estratégias.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  topic: {
    fontWeight: 'bold',
    marginTop: 8,
  },
});
