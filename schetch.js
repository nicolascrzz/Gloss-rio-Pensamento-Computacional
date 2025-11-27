const termos = [
    {
  termo: "Algoritmo",
  definicao: "Sequência de passos para resolver um problema ou realizar uma tarefa."
},
{
  termo: "Algoritmo de Ordenação",
  definicao: "Método usado para organizar elementos em uma ordem específica."
},
{
  termo: "Algoritmo de Busca",
  definicao: "Método usado para encontrar informações dentro de um conjunto de dados."
},
{
  termo: "Algoritmo Guloso",
  definicao: "Algoritmo que toma a melhor decisão local em cada passo."
},
{
  termo: "Algoritmo Dividir e Conquistar",
  definicao: "Estratégia que divide o problema em subproblemas menores."
},
{
  termo: "Algoritmo Recursivo",
  definicao: "Algoritmo que chama a si mesmo para resolver subproblemas."
},
{
  termo: "Algoritmo Iterativo",
  definicao: "Algoritmo que utiliza laços ou loops para repetir passos."
},
{
  termo: "Algoritmo Exponencial",
  definicao: "Algoritmo cujo tempo de execução cresce exponencialmente com a entrada."
},
{
  termo: "Algoritmo Linear",
  definicao: "Algoritmo cujo tempo de execução cresce proporcionalmente ao tamanho da entrada."
},
{
  termo: "Algoritmo Quadrático",
  definicao: "Algoritmo cujo tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada."
},
{
  termo: "Algoritmo de Pesquisa Linear",
  definicao: "Procura um elemento verificando cada item sequencialmente."
},
{
  termo: "Algoritmo de Pesquisa Binária",
  definicao: "Procura um elemento em lista ordenada dividindo repetidamente o conjunto pela metade."
},
{
  termo: "Algoritmo de Dijkstra",
  definicao: "Algoritmo para encontrar o caminho mais curto em grafos ponderados."
},
{
  termo: "Algoritmo de Bellman-Ford",
  definicao: "Algoritmo para encontrar caminhos mais curtos, podendo lidar com pesos negativos."
},
{
  termo: "Algoritmo de Floyd-Warshall",
  definicao: "Algoritmo que encontra caminhos mais curtos entre todos os pares de vértices."
},
{
  termo: "Algoritmo de Prim",
  definicao: "Algoritmo para encontrar a árvore geradora mínima em grafos."
},
{
  termo: "Algoritmo de Kruskal",
  definicao: "Algoritmo para encontrar a árvore geradora mínima usando conjuntos disjuntos."
},
{
  termo: "Algoritmo de Busca em Largura",
  definicao: "Percorre grafos ou árvores nível por nível."
},
{
  termo: "Algoritmo de Busca em Profundidade",
  definicao: "Percorre grafos ou árvores indo o máximo possível em cada ramo antes de voltar."
},
{
  termo: "Algoritmo de Ordenação por Inserção",
  definicao: "Ordena elementos inserindo cada novo item na posição correta."
},
{
  termo: "Algoritmo de Ordenação por Seleção",
  definicao: "Ordena elementos selecionando repetidamente o menor elemento restante."
},
{
  termo: "Algoritmo de Ordenação por Bolha",
  definicao: "Ordena elementos trocando repetidamente elementos adjacentes fora de ordem."
},
{
  termo: "Algoritmo Merge Sort",
  definicao: "Algoritmo de ordenação baseado em dividir e conquistar, usando fusão de sublistas."
},
{
  termo: "Algoritmo Quick Sort",
  definicao: "Algoritmo de ordenação eficiente que usa pivôs para dividir a lista."
},
{
  termo: "Algoritmo Heap Sort",
  definicao: "Algoritmo de ordenação baseado em estruturas de heap."
},
{
  termo: "Algoritmo Counting Sort",
  definicao: "Ordena números inteiros contando a frequência de cada elemento."
},
{
  termo: "Algoritmo Radix Sort",
  definicao: "Ordena números processando dígitos individuais."
},
{
  termo: "Algoritmo Bucket Sort",
  definicao: "Ordena elementos distribuindo-os em baldes e ordenando individualmente."
},
{
  termo: "Algoritmo de Programação Dinâmica",
  definicao: "Algoritmo que resolve problemas quebrando em subproblemas e armazenando soluções."
},
{
  termo: "Algoritmo de Backtracking",
  definicao: "Algoritmo que tenta soluções e volta atrás quando falha."
},
{
  termo: "Algoritmo de Branch and Bound",
  definicao: "Algoritmo de otimização que elimina subproblemas sem solução viável."
},
{
  termo: "Algoritmo de Busca Heurística",
  definicao: "Busca guiada por heurísticas para encontrar soluções mais rapidamente."
},
{
  termo: "Algoritmo de Ordenação Estável",
  definicao: "Mantém a ordem relativa de elementos iguais."
},
{
  termo: "Algoritmo de Ordenação Instável",
  definicao: "Não garante manter a ordem relativa de elementos iguais."
},
{
  termo: "Algoritmo de Compressão",
  definicao: "Reduz o tamanho de arquivos ou dados."
},
{
  termo: "Algoritmo de Criptografia",
  definicao: "Transforma dados para protegê-los contra acessos não autorizados."
},
{
  termo: "Algoritmo de Hash",
  definicao: "Gera um valor único a partir de dados de entrada."
},
{
  termo: "Algoritmo de Shuffling",
  definicao: "Embaralha elementos de forma aleatória."
},
{
  termo: "Algoritmo de Randomização",
  definicao: "Algoritmo que utiliza aleatoriedade para melhorar performance ou segurança."
},
{
  termo: "Algoritmo Monte Carlo",
  definicao: "Algoritmo que usa amostras aleatórias para estimar resultados."
},
{
  termo: "Algoritmo Las Vegas",
  definicao: "Algoritmo que sempre retorna resultado correto, mas o tempo pode variar."
},
{
  termo: "Algoritmo de Otimização",
  definicao: "Encontra a melhor solução possível para um problema dado."
},
{
  termo: "Algoritmo Genético",
  definicao: "Algoritmo inspirado na evolução natural para encontrar soluções aproximadas."
},
{
  termo: "Algoritmo de Programação Linear",
  definicao: "Resolve problemas de otimização com restrições lineares."
},
{
  termo: "Algoritmo de Programação Inteira",
  definicao: "Resolve problemas de otimização com variáveis inteiras."
},
{
  termo: "Algoritmo de Grafos",
  definicao: "Processa e analisa grafos para encontrar caminhos, ciclos ou conexões."
},
{
  termo: "Algoritmo de Caminho Mínimo",
  definicao: "Encontra o menor caminho entre dois pontos em um grafo."
},
{
  termo: "Algoritmo de Ciclo Euleriano",
  definicao: "Encontra um ciclo que passa por todas as arestas do grafo uma vez."
},
{
  termo: "Algoritmo de Ciclo Hamiltoniano",
  definicao: "Encontra um ciclo que passa por todos os vértices do grafo uma vez."
},
{
  termo: "Algoritmo de Fluxo Máximo",
  definicao: "Calcula o fluxo máximo em uma rede de transporte."
},
{
  termo: "Algoritmo de Matching",
  definicao: "Encontra pares ou combinações em grafos bipartidos."
},
{
  termo: "Algoritmo de Caminho Crítico",
  definicao: "Determina a sequência mais longa de atividades em um projeto."
},
{
  termo: "Algoritmo de Scheduling",
  definicao: "Organiza tarefas para otimizar tempo ou recursos."
},
{
  termo: "Algoritmo de Balanceamento de Carga",
  definicao: "Distribui tarefas para otimizar uso de recursos."
},
{
  termo: "Algoritmo de Planejamento",
  definicao: "Decide a melhor sequência de ações para atingir objetivos."
},
{
  termo: "Algoritmo de Previsão",
  definicao: "Faz estimativas baseadas em dados passados."
},
{
  termo: "Algoritmo de Inteligência Artificial",
  definicao: "Algoritmo que aprende ou toma decisões baseado em dados."
},
{
  termo: "Algoritmo de Machine Learning",
  definicao: "Algoritmo que treina modelos para reconhecer padrões e prever resultados."
},
{
  termo: "Algoritmo Supervisionado",
  definicao: "Aprende a partir de dados com respostas conhecidas."
},
{
  termo: "Algoritmo Não Supervisionado",
  definicao: "Aprende padrões sem respostas conhecidas."
},
{
  termo: "Algoritmo de Reforço",
  definicao: "Aprende por tentativa e erro, recebendo recompensas."
},
{
  termo: "Algoritmo de Classificação",
  definicao: "Organiza dados em categorias."
},
{
  termo: "Algoritmo de Regressão",
  definicao: "Estimativa de valores contínuos a partir de dados."
},
{
  termo: "Algoritmo de Clusterização",
  definicao: "Agrupa dados similares sem categorias predefinidas."
},
{
  termo: "Algoritmo de Redução de Dimensionalidade",
  definicao: "Reduz o número de variáveis mantendo a informação relevante."
},
{
  termo: "Algoritmo de Normalização",
  definicao: "Transforma dados para uma escala padrão."
},
{
  termo: "Algoritmo de Padronização",
  definicao: "Ajusta dados para média 0 e desvio padrão 1."
},
{
  termo: "Algoritmo de Detecção de Anomalias",
  definicao: "Identifica padrões que diferem do comportamento esperado."
},
{
  termo: "Algoritmo de Filtragem",
  definicao: "Seleciona ou remove dados com base em critérios."
},
{
  termo: "Algoritmo de Compressão de Imagens",
  definicao: "Reduz o tamanho de arquivos de imagem mantendo qualidade aceitável."
},
{
  termo: "Algoritmo de Compressão de Vídeo",
  definicao: "Reduz o tamanho de arquivos de vídeo mantendo qualidade aceitável."
},
{
  termo: "Algoritmo de Compressão de Áudio",
  definicao: "Reduz o tamanho de arquivos de áudio mantendo qualidade aceitável."
},
{
  termo: "Algoritmo de Busca em Grafos",
  definicao: "Explora grafos para encontrar nós ou caminhos específicos."
},
{
  termo: "Algoritmo de Ordenação Topológica",
  definicao: "Ordena nós de um grafo acíclico dirigido respeitando dependências."
},
{
  termo: "Algoritmo de K-Means",
  definicao: "Clusteriza dados em k grupos baseados em proximidade."
},
{
  termo: "Algoritmo de Apriori",
  definicao: "Encontra regras de associação em bases de dados."
},
{
  termo: "Algoritmo de A*",
  definicao: "Busca caminho ótimo usando heurísticas."
},
{
  termo: "Algoritmo de Busca Best-First",
  definicao: "Explora nós com base em custo estimado."
},
{
  termo: "Algoritmo de Busca em Profundidade Limitada",
  definicao: "Busca em profundidade com limite de profundidade."
},
{
  termo: "Algoritmo de Busca Iterativa em Profundidade",
  definicao: "Combina busca em profundidade e limite crescente."
},
{
  termo: "Algoritmo de Busca Bidirecional",
  definicao: "Busca simultaneamente do início e do fim para encontrar caminho."
},
{
  termo: "Algoritmo de Ordenação Shell",
  definicao: "Versão melhorada da ordenação por inserção usando intervalos."
},
{
  termo: "Algoritmo de Ordenação Comb",
  definicao: "Combina elementos distantes e próximos para ordenar rapidamente."
},
{
  termo: "Algoritmo de Ordenação TimSort",
  definicao: "Híbrido de Merge Sort e Insertion Sort usado em Python e Java."
},
{
  termo: "Algoritmo de Ordenação Bitonic",
  definicao: "Usado em computação paralela para ordenar sequências bitônicas."
},
{
  termo: "Algoritmo de Ordenação Pigeonhole",
  definicao: "Usa contagem de frequências e distribuição em 'pigeonholes' para ordenar."
},
{
  termo: "Algoritmo de Ordenação Cocktail Shaker",
  definicao: "Versão bidirecional da ordenação por bolha."
},
{
  termo: "Algoritmo de Ordenação Gnome",
  definicao: "Ordena elementos comparando pares adjacentes e retrocedendo se necessário."
},
{
  termo: "Algoritmo de Ordenação Pancake",
  definicao: "Ordena elementos virando sublistas como panquecas."
},
{
  termo: "Algoritmo de Ordenação Cycle",
  definicao: "Usa ciclos para colocar elementos na posição correta."
},
{
  termo: "Algoritmo de Ordenação Stooge",
  definicao: "Algoritmo recursivo ineficiente de ordenação."
},
{
  termo: "Algoritmo de Ordenação Bitwise",
  definicao: "Usa operações de bits para ordenar números inteiros."
},
{
  termo: "Algoritmo de Ordenação SmoothSort",
  definicao: "Versão avançada da ordenação Heap baseada em Leonardo heaps."
},
{
  termo: "Algoritmo de Ordenação StrandSort",
  definicao: "Ordena extraindo subsequências ordenadas chamadas strands."
},
{
  termo: "Algoritmo de Ordenação TreeSort",
  definicao: "Constrói árvore binária de busca para ordenar elementos."
},
{
  termo: "Algoritmo de Ordenação Pigeonhole",
  definicao: "Ordena elementos usando um array auxiliar de contagem."
},
{
  termo: "Algoritmo de Ordenação Bead",
  definicao: "Simula contagem de contas em hastes para ordenar elementos."
},
{
  termo: "Algoritmo de Ordenação Odd-Even",
  definicao: "Ordena alternando comparações de pares ímpares e pares pares."
},
{
  termo: "Algoritmo de Ordenação CycleSort",
  definicao: "Minimiza o número de trocas necessário para ordenar."
},
{
  termo: "Algoritmo de Ordenação Patience",
  definicao: "Baseado em técnica de paciência para ordenação e subsequência crescente."
},
{
  termo: "Algoritmo de Ordenação LibrarySort",
  definicao: "Versão modificada da ordenação por inserção usando espaços vazios."
},
{
  termo: "Algoritmo de Ordenação FlashSort",
  definicao: "Muito rápido para conjuntos uniformemente distribuídos."
},
{
  termo: "Algoritmo de Ordenação IntroSort",
  definicao: "Combina QuickSort, HeapSort e InsertionSort para melhor desempenho."
},
{
  termo: "Algoritmo de Ordenação BlockSort",
  definicao: "Divide a lista em blocos e ordena internamente."
},
{
  termo: "Algoritmo de Ordenação SpreadSort",
  definicao: "Combina técnicas de RadixSort e Comparação para otimização."
},
{
  termo: "Rede de Computadores",
  definicao: "Conjunto de dispositivos interconectados para compartilhar dados e recursos."
},
{
  termo: "Protocolo de Comunicação",
  definicao: "Conjunto de regras que definem como os dispositivos se comunicam."
},
{
  termo: "IP (Internet Protocol)",
  definicao: "Protocolo responsável pelo endereçamento e roteamento de pacotes."
},
{
  termo: "IPv4",
  definicao: "Versão 4 do IP, usando endereços de 32 bits."
},
{
  termo: "IPv6",
  definicao: "Versão 6 do IP, usando endereços de 128 bits."
},
{
  termo: "TCP (Transmission Control Protocol)",
  definicao: "Protocolo orientado à conexão que garante entrega de dados."
},
{
  termo: "UDP (User Datagram Protocol)",
  definicao: "Protocolo sem conexão, rápido, mas sem garantia de entrega."
},
{
  termo: "DNS (Domain Name System)",
  definicao: "Sistema que traduz nomes de domínio em endereços IP."
},
{
  termo: "DHCP (Dynamic Host Configuration Protocol)",
  definicao: "Protocolo que atribui endereços IP automaticamente aos dispositivos."
},
{
  termo: "HTTP (Hypertext Transfer Protocol)",
  definicao: "Protocolo usado para transferência de páginas web."
},
{
  termo: "HTTPS (HTTP Secure)",
  definicao: "Versão segura do HTTP, usando criptografia SSL/TLS."
},
{
  termo: "FTP (File Transfer Protocol)",
  definicao: "Protocolo usado para transferência de arquivos entre computadores."
},
{
  termo: "SMTP (Simple Mail Transfer Protocol)",
  definicao: "Protocolo usado para envio de e-mails."
},
{
  termo: "POP3 (Post Office Protocol 3)",
  definicao: "Protocolo usado para receber e-mails armazenando localmente."
},
{
  termo: "IMAP (Internet Message Access Protocol)",
  definicao: "Protocolo usado para acessar e-mails armazenados em servidor."
},
{
  termo: "LAN (Local Area Network)",
  definicao: "Rede local, geralmente limitada a um prédio ou campus."
},
{
  termo: "WAN (Wide Area Network)",
  definicao: "Rede de longa distância que conecta redes locais."
},
{
  termo: "MAN (Metropolitan Area Network)",
  definicao: "Rede que cobre uma área metropolitana."
},
{
  termo: "WLAN (Wireless LAN)",
  definicao: "Rede local sem fio utilizando Wi-Fi."
},
{
  termo: "VLAN (Virtual LAN)",
  definicao: "Sub-rede lógica dentro de uma LAN física."
},
{
  termo: "VPN (Virtual Private Network)",
  definicao: "Rede privada virtual que cria conexão segura sobre internet pública."
},
{
  termo: "Firewall",
  definicao: "Dispositivo ou software que controla o tráfego de rede para segurança."
},
{
  termo: "Roteador",
  definicao: "Dispositivo que direciona pacotes entre diferentes redes."
},
{
  termo: "Switch",
  definicao: "Dispositivo que conecta múltiplos dispositivos em uma mesma rede e encaminha dados de forma inteligente."
},
{
  termo: "Hub",
  definicao: "Dispositivo simples que conecta vários computadores em uma rede sem direcionamento inteligente."
},
{
  termo: "Modem",
  definicao: "Dispositivo que converte sinais digitais em analógicos e vice-versa para conexão à internet."
},
{
  termo: "SSID (Service Set Identifier)",
  definicao: "Nome de identificação de uma rede Wi-Fi."
},
{
  termo: "MAC Address",
  definicao: "Endereço físico único atribuído a cada interface de rede."
},
{
  termo: "Ping",
  definicao: "Comando usado para testar a conectividade entre dois dispositivos."
},
{
  termo: "Traceroute",
  definicao: "Comando que mostra o caminho percorrido por pacotes até um destino."
},
{
  termo: "Bandwidth",
  definicao: "Capacidade máxima de transmissão de dados de uma rede."
},
{
  termo: "Throughput",
  definicao: "Quantidade real de dados transmitidos em determinado tempo."
},
{
  termo: "Latency",
  definicao: "Tempo que um pacote leva para ir de um ponto a outro na rede."
},
{
  termo: "Jitter",
  definicao: "Variação no tempo de entrega de pacotes na rede."
},
{
  termo: "Packet",
  definicao: "Unidade básica de dados transmitida em uma rede."
},
{
  termo: "Frame",
  definicao: "Estrutura de dados em camada de enlace que encapsula pacotes."
},
{
  termo: "Segment",
  definicao: "Parte de dados TCP encapsulada para transmissão."
},
{
  termo: "Socket",
  definicao: "Ponto de comunicação entre dois dispositivos na rede."
},
{
  termo: "Gateway",
  definicao: "Dispositivo que conecta redes diferentes e traduz protocolos."
},
{
  termo: "Proxy",
  definicao: "Servidor que atua como intermediário para requisições de rede."
},
{
  termo: "NAT (Network Address Translation)",
  definicao: "Tradução de endereços IP privados para públicos e vice-versa."
},
{
  termo: "Subnet",
  definicao: "Divisão lógica de uma rede maior em partes menores."
},
{
  termo: "Mask",
  definicao: "Máscara usada para definir a parte de rede e host de um IP."
},
{
  termo: "OSI Model",
  definicao: "Modelo de referência em camadas para comunicação em redes."
},
{
  termo: "TCP/IP Model",
  definicao: "Modelo de referência simplificado usado na internet."
},
{
  termo: "Camada Física",
  definicao: "Camada do OSI que trata da transmissão de bits pelo meio físico."
},
{
  termo: "Camada de Enlace",
  definicao: "Camada do OSI que garante comunicação confiável entre nós adjacentes."
},
{
  termo: "Camada de Rede",
  definicao: "Camada do OSI responsável pelo roteamento de pacotes entre redes."
},
{
  termo: "Camada de Transporte",
  definicao: "Camada do OSI que garante entrega confiável de dados entre hosts."
},
{
  termo: "Camada de Sessão",
  definicao: "Camada do OSI que gerencia sessões de comunicação."
},
{
  termo: "Camada de Apresentação",
  definicao: "Camada do OSI que faz tradução, criptografia e compressão de dados."
},
{
  termo: "Camada de Aplicação",
  definicao: "Camada do OSI que fornece serviços de rede para aplicações."
},
{
  termo: "Ping of Death",
  definicao: "Ataque que envia pacotes ICMP malformados para derrubar sistemas."
},
{
  termo: "Smurf Attack",
  definicao: "Ataque DDoS que usa pacotes ICMP de broadcast para sobrecarregar rede."
},
{
  termo: "ARP (Address Resolution Protocol)",
  definicao: "Protocolo que traduz IP em endereço MAC."
},
{
  termo: "RARP (Reverse ARP)",
  definicao: "Protocolo que traduz endereço MAC em IP."
},
{
  termo: "ICMP (Internet Control Message Protocol)",
  definicao: "Protocolo que envia mensagens de controle e erro na rede."
},
{
  termo: "IGMP (Internet Group Management Protocol)",
  definicao: "Protocolo para gerenciamento de grupos multicast."
},
{
  termo: "Multicast",
  definicao: "Envio de pacotes para múltiplos destinatários específicos."
},
{
  termo: "Broadcast",
  definicao: "Envio de pacotes para todos os dispositivos em uma rede."
},
{
  termo: "Unicast",
  definicao: "Envio de pacotes para um único destinatário."
},
{
  termo: "Anycast",
  definicao: "Envio de pacotes para o nó mais próximo em um grupo."
},
{
  termo: "ARP Spoofing",
  definicao: "Ataque que associa endereço MAC falso a um IP na rede."
},
{
  termo: "IP Spoofing",
  definicao: "Ataque que envia pacotes com IP falso para enganar destinatários."
},
{
  termo: "DoS (Denial of Service)",
  definicao: "Ataque que sobrecarrega um sistema tornando-o indisponível."
},
{
  termo: "DDoS (Distributed Denial of Service)",
  definicao: "Ataque DoS coordenado por múltiplos sistemas."
},
{
  termo: "Wi-Fi",
  definicao: "Tecnologia de rede sem fio baseada em padrões IEEE 802.11."
},
{
  termo: "Bluetooth",
  definicao: "Tecnologia de comunicação sem fio de curto alcance."
},
{
  termo: "Ethernet",
  definicao: "Padrão de redes locais com cabo para transmissão de dados."
},
{
  termo: "Fiber Optic",
  definicao: "Transmissão de dados usando luz em cabos de fibra óptica."
},
{
  termo: "Cabling",
  definicao: "Tipos de cabos usados em redes: coaxial, par trançado, fibra óptica."
},
{
  termo: "Topology",
  definicao: "Disposição física ou lógica dos dispositivos em uma rede."
},
{
  termo: "Bus Topology",
  definicao: "Todos os dispositivos conectados a um único cabo principal."
},
{
  termo: "Star Topology",
  definicao: "Todos os dispositivos conectados a um ponto central."
},
{
  termo: "Ring Topology",
  definicao: "Dispositivos conectados em forma de anel fechado."
},
{
  termo: "Mesh Topology",
  definicao: "Todos os dispositivos conectados entre si."
},
{
  termo: "Hybrid Topology",
  definicao: "Combinação de duas ou mais topologias."
},
{
  termo: "LAN Segmentation",
  definicao: "Divisão de uma rede local em partes menores para performance."
},
{
  termo: "Network Congestion",
  definicao: "Excesso de tráfego causando lentidão ou perda de pacotes."
},
{
  termo: "QoS (Quality of Service)",
  definicao: "Mecanismos para priorizar tráfego e melhorar desempenho da rede."
},
{
  termo: "SNMP (Simple Network Management Protocol)",
  definicao: "Protocolo para gerenciamento e monitoramento de dispositivos de rede."
},
{
  termo: "VLAN Tagging",
  definicao: "Método de identificar pacotes de VLAN em redes Ethernet."
},
{
  termo: "Port Forwarding",
  definicao: "Encaminhamento de portas de roteador para dispositivos internos."
},
{
  termo: "Subnetting",
  definicao: "Divisão de redes IP em sub-redes menores."
},
{
  termo: "CIDR (Classless Inter-Domain Routing)",
  definicao: "Método de alocação de endereços IP mais flexível que classes."
},
{
  termo: "Load Balancer",
  definicao: "Distribui requisições de rede entre múltiplos servidores."
},
{
  termo: "Content Delivery Network",
  definicao: "Rede de servidores distribuídos para entrega rápida de conteúdo."
},
{
  termo: "Network Interface Card",
  definicao: "Placa de rede que conecta dispositivo a uma rede."
},
{
  termo: "Packet Sniffer",
  definicao: "Ferramenta que captura e analisa pacotes de rede."
},
{
  termo: "Wireshark",
  definicao: "Software popular para análise de tráfego de rede."
},
{
  termo: "Bandwidth Throttling",
  definicao: "Limitação deliberada de largura de banda por provedor ou rede."
},
{
  termo: "Network Address",
  definicao: "Endereço que identifica um dispositivo em uma rede."
},
{
  termo: "Loopback",
  definicao: "Endereço que retorna dados para o próprio dispositivo."
},
{
  termo: "Ping Flood",
  definicao: "Ataque DoS que envia muitos pings para sobrecarregar alvo."
},
{
  termo: "Traceroute Attack",
  definicao: "Exploração de rotas de rede para identificar vulnerabilidades."
},
{
  termo: "Port Scanning",
  definicao: "Verificação de portas abertas em dispositivos de rede."
},
{
  termo: "Network Segmentation",
  definicao: "Divisão da rede em segmentos para segurança e performance."
},
{
  termo: "Edge Computing",
  definicao: "Processamento de dados próximo à fonte para reduzir latência."
},
{
  termo: "Cloud Computing",
  definicao: "Uso de recursos de computação e armazenamento via internet."
},
{
  termo: "IPv6 Addressing",
  definicao: "Endereçamento com 128 bits para suportar grande quantidade de dispositivos."
},
{
  termo: "Dynamic Routing",
  definicao: "Roteamento que ajusta automaticamente caminhos com base na topologia."
},
{
  termo: "Static Routing",
  definicao: "Roteamento com caminhos configurados manualmente."
},
{
  termo: "MPLS (Multiprotocol Label Switching)",
  definicao: "Tecnologia de roteamento baseada em rótulos para tráfego eficiente."
},
{
  termo: "SDN (Software Defined Network)",
  definicao: "Rede controlada por software centralizado, separando plano de controle do plano de dados."
},
{
  termo: "Network Function Virtualization",
  definicao: "Virtualização de funções de rede para maior flexibilidade."
},
{
  termo: "Banco de Dados",
  definicao: "Conjunto organizado de dados que pode ser acessado e gerenciado de forma eficiente."
},
{
  termo: "SGBD (Sistema de Gerenciamento de Banco de Dados)",
  definicao: "Software que gerencia bancos de dados e permite operações de armazenamento e recuperação de dados."
},
{
  termo: "SQL (Structured Query Language)",
  definicao: "Linguagem padrão para manipulação de bancos de dados relacionais."
},
{
  termo: "NoSQL",
  definicao: "Categoria de bancos de dados não relacionais, orientados a documentos, chave-valor ou grafos."
},
{
  termo: "Tabela",
  definicao: "Estrutura que armazena dados em linhas (tuplas) e colunas (atributos)."
},
{
  termo: "Linha/Tupla",
  definicao: "Conjunto de dados relacionado a um registro em uma tabela."
},
{
  termo: "Coluna/Atributo",
  definicao: "Campo que define um tipo de dado dentro de uma tabela."
},
{
  termo: "Chave Primária",
  definicao: "Atributo ou conjunto de atributos que identifica unicamente cada registro."
},
{
  termo: "Chave Estrangeira",
  definicao: "Atributo que referencia a chave primária de outra tabela para criar relacionamento."
},
{
  termo: "Índice",
  definicao: "Estrutura que melhora a velocidade de recuperação de dados."
},
{
  termo: "Consulta/Query",
  definicao: "Solicitação de informação feita ao banco de dados."
},
{
  termo: "CRUD",
  definicao: "Conjunto de operações básicas: Create, Read, Update, Delete."
},
{
  termo: "Trigger",
  definicao: "Procedimento que é executado automaticamente em resposta a eventos no banco."
},
{
  termo: "Stored Procedure",
  definicao: "Conjunto de comandos SQL armazenados no banco de dados para execução repetida."
},
{
  termo: "View",
  definicao: "Consulta armazenada que se comporta como uma tabela virtual."
},
{
  termo: "Normalization",
  definicao: "Processo de organizar dados para reduzir redundância e dependência."
},
{
  termo: "Denormalization",
  definicao: "Processo de adicionar redundância para melhorar desempenho de consultas."
},
{
  termo: "Relacionamento",
  definicao: "Associação entre tabelas de um banco de dados."
},
{
  termo: "Entidade",
  definicao: "Objeto ou conceito que possui dados armazenados no banco."
},
{
  termo: "Atributo",
  definicao: "Característica ou propriedade de uma entidade."
},
{
  termo: "Modelo Relacional",
  definicao: "Modelo que organiza dados em tabelas relacionadas."
},
{
  termo: "Modelo Hierárquico",
  definicao: "Modelo de banco de dados em forma de árvore, com relações pai-filho."
},
{
  termo: "Modelo de Rede",
  definicao: "Modelo que permite relações complexas entre dados em formato de grafo."
},
{
  termo: "OLTP (Online Transaction Processing)",
  definicao: "Processamento de transações em tempo real, usado para sistemas operacionais."
},
{
  termo: "OLAP (Online Analytical Processing)",
  definicao: "Processamento analítico para tomada de decisão e análise de dados históricos."
},
{
  termo: "Data Warehouse",
  definicao: "Armazém de dados estruturado para análise e relatórios."
},
{
  termo: "Data Mart",
  definicao: "Subconjunto de um data warehouse focado em um departamento ou função."
},
{
  termo: "Big Data",
  definicao: "Conjunto de dados muito grande ou complexo, que exige processamento especializado."
},
{
  termo: "ETL (Extract, Transform, Load)",
  definicao: "Processo de extração, transformação e carregamento de dados."
},
{
  termo: "Backup",
  definicao: "Cópia de segurança dos dados para prevenção contra perda."
},
{
  termo: "Restore",
  definicao: "Restauração de dados a partir de backup."
},
{
  termo: "Replication",
  definicao: "Cópia e manutenção de dados em múltiplos bancos de dados."
},
{
  termo: "Cluster",
  definicao: "Agrupamento de servidores para garantir alta disponibilidade e desempenho."
},
{
  termo: "Sharding",
  definicao: "Divisão horizontal de dados para distribuir carga em múltiplos servidores."
},
{
  termo: "ACID",
  definicao: "Conjunto de propriedades que garantem transações confiáveis: Atomicidade, Consistência, Isolamento e Durabilidade."
},
{
  termo: "Atomicidade",
  definicao: "Propriedade de transação que garante que todas as operações ocorram ou nenhuma ocorra."
},
{
  termo: "Consistência",
  definicao: "Propriedade que garante que a transação mantém o banco em estado válido."
},
{
  termo: "Isolamento",
  definicao: "Propriedade que garante que transações concorrentes não interfiram entre si."
},
{
  termo: "Durabilidade",
  definicao: "Propriedade que garante que os dados persistem mesmo após falhas."
},
{
  termo: "Lock",
  definicao: "Mecanismo que impede acesso simultâneo a dados em operação."
},
{
  termo: "Deadlock",
  definicao: "Situação onde duas ou mais transações ficam bloqueadas mutuamente."
},
{
  termo: "Rollback",
  definicao: "Reversão de uma transação em caso de erro."
},
{
  termo: "Commit",
  definicao: "Confirmação de uma transação, tornando alterações permanentes."
},
{
  termo: "Constraint",
  definicao: "Regra aplicada a colunas para garantir integridade de dados."
},
{
  termo: "Unique Constraint",
  definicao: "Restringe os valores de uma coluna a serem únicos."
},
{
  termo: "Check Constraint",
  definicao: "Restringe valores de uma coluna com base em uma condição lógica."
},
{
  termo: "Default",
  definicao: "Valor padrão atribuído a uma coluna quando não especificado."
},
{
  termo: "Foreign Key Constraint",
  definicao: "Garante integridade referencial entre tabelas."
},
{
  termo: "Indexing",
  definicao: "Criação de índices para acelerar consultas em tabelas."
},
{
  termo: "Clustered Index",
  definicao: "Índice que define a ordem física das linhas na tabela."
},
{
  termo: "Non-Clustered Index",
  definicao: "Índice que mantém uma estrutura separada para localizar dados."
},
{
  termo: "Composite Key",
  definicao: "Chave primária formada por múltiplos atributos."
},
{
  termo: "Surrogate Key",
  definicao: "Chave artificial criada para identificar unicamente registros."
},
{
  termo: "Natural Key",
  definicao: "Chave que já existe nos dados, representando uma característica única."
},
{
  termo: "Entity-Relationship Diagram (ERD)",
  definicao: "Diagrama que representa entidades, atributos e relacionamentos."
},
{
  termo: "Cardinality",
  definicao: "Número de instâncias de uma entidade que podem se relacionar a outra."
},
{
  termo: "One-to-One",
  definicao: "Relacionamento onde uma entidade se relaciona com exatamente uma outra."
},
{
  termo: "One-to-Many",
  definicao: "Relacionamento onde uma entidade se relaciona com várias outras."
},
{
  termo: "Many-to-Many",
  definicao: "Relacionamento onde várias entidades se relacionam com várias outras."
},
{
  termo: "Join",
  definicao: "Operação que combina dados de múltiplas tabelas."
},
{
  termo: "Inner Join",
  definicao: "Retorna apenas os registros que possuem correspondência em ambas as tabelas."
},
{
  termo: "Left Join",
  definicao: "Retorna todos os registros da tabela à esquerda e os correspondentes da direita."
},
{
  termo: "Right Join",
  definicao: "Retorna todos os registros da tabela à direita e os correspondentes da esquerda."
},
{
  termo: "Full Join",
  definicao: "Retorna todos os registros de ambas as tabelas, com correspondência quando possível."
},
{
  termo: "Self Join",
  definicao: "Junção de uma tabela consigo mesma."
},
{
  termo: "Cross Join",
  definicao: "Retorna o produto cartesiano de duas tabelas."
},
{
  termo: "Union",
  definicao: "Combina os resultados de duas consultas em um único conjunto de dados."
},
{
  termo: "Intersect",
  definicao: "Retorna apenas os registros comuns a duas consultas."
},
{
  termo: "Except/Minus",
  definicao: "Retorna registros presentes em uma consulta e ausentes na outra."
},
{
  termo: "Subquery",
  definicao: "Consulta dentro de outra consulta."
},
{
  termo: "Correlated Subquery",
  definicao: "Subconsulta que depende de valores da consulta externa."
},
{
  termo: "Derived Table",
  definicao: "Tabela temporária criada a partir de uma subconsulta."
},
{
  termo: "Temporary Table",
  definicao: "Tabela criada para uso temporário durante a sessão de banco de dados."
},
{
  termo: "Materialized View",
  definicao: "View que armazena fisicamente o resultado da consulta para otimização."
},
{
  termo: "Transaction",
  definicao: "Sequência de operações que deve ser executada de forma completa e consistente."
},
{
  termo: "Isolation Level",
  definicao: "Configuração que define o nível de visibilidade de transações concorrentes."
},
{
  termo: "Read Uncommitted",
  definicao: "Permite leitura de dados não confirmados, podendo causar 'dirty reads'."
},
{
  termo: "Read Committed",
  definicao: "Permite leitura apenas de dados confirmados."
},
{
  termo: "Repeatable Read",
  definicao: "Garante que leituras repetidas retornem os mesmos dados dentro de uma transação."
},
{
  termo: "Serializable",
  definicao: "Nível mais alto de isolamento, garantindo consistência total, mas com menor desempenho."
},
{
  termo: "Replication",
  definicao: "Cópia de dados entre servidores para disponibilidade e redundância."
},
{
  termo: "Failover",
  definicao: "Troca automática para um servidor de backup em caso de falha."
},
{
  termo: "Partitioning",
  definicao: "Divisão de tabelas em partes menores para performance e gerenciamento."
},
{
  termo: "Horizontal Partitioning",
  definicao: "Divisão de linhas em diferentes partições."
},
{
  termo: "Vertical Partitioning",
  definicao: "Divisão de colunas em diferentes partições."
},
{
  termo: "Data Integrity",
  definicao: "Garantia de que os dados estão corretos, consistentes e válidos."
},
{
  termo: "Referential Integrity",
  definicao: "Garantia de consistência entre tabelas relacionadas."
},
{
  termo: "Domain",
  definicao: "Conjunto de valores válidos que um atributo pode assumir."
},
{
  termo: "Stored Function",
  definicao: "Função definida no banco de dados que retorna um valor."
},
{
  termo: "Cursor",
  definicao: "Ponteiro que percorre linhas de um conjunto de resultados."
},
{
  termo: "Replication Lag",
  definicao: "Diferença de tempo entre atualização do banco principal e replicado."
},
{
  termo: "Checkpoint",
  definicao: "Momento em que o banco de dados grava dados em disco para recuperação."
},
{
  termo: "Rollback Segment",
  definicao: "Estrutura usada para armazenar versões antigas de dados para reversão."
},
{
  termo: "Binary Large Object (BLOB)",
  definicao: "Tipo de dado usado para armazenar arquivos binários grandes."
},
{
  termo: "Character Large Object (CLOB)",
  definicao: "Tipo de dado usado para armazenar grandes quantidades de texto."
},
{
  termo: "JSON",
  definicao: "Formato de dados leve e estruturado, amplamente usado em NoSQL."
},
{
  termo: "XML",
  definicao: "Formato de dados hierárquico para troca e armazenamento de informações."
},
{
  termo: "Graph Database",
  definicao: "Banco de dados orientado a grafos, com ênfase em relações entre entidades."
},
{
  termo: "Document Database",
  definicao: "Banco de dados que armazena dados como documentos (JSON, XML, BSON)."
},
{
  termo: "Key-Value Store",
  definicao: "Banco de dados que armazena pares chave-valor para acesso rápido."
},
{
  termo: "Columnar Database",
  definicao: "Banco de dados que armazena dados por coluna, otimizado para análises."
},
{
  termo: "Time-Series Database",
  definicao: "Banco de dados otimizado para registros temporais e métricas contínuas."
},
{
  termo: "In-Memory Database",
  definicao: "Banco de dados que mantém dados na memória para acesso rápido."
},
{
  termo: "Eventual Consistency",
  definicao: "Modelo de consistência usado em sistemas distribuídos, permitindo atrasos na atualização de réplicas."
},
{
  termo: "Autenticação",
  definicao: "Processo de verificar a identidade de um usuário ou sistema."
},
{
  termo: "Autorização",
  definicao: "Processo de conceder permissões a usuários ou sistemas autenticados."
},
{
  termo: "Confidencialidade",
  definicao: "Garantia de que informações só sejam acessadas por pessoas autorizadas."
},
{
  termo: "Integridade",
  definicao: "Garantia de que os dados não sejam alterados de forma não autorizada."
},
{
  termo: "Disponibilidade",
  definicao: "Garantia de que sistemas e dados estejam acessíveis quando necessários."
},
{
  termo: "Criptografia",
  definicao: "Processo de transformar dados em formato ilegível para quem não possui a chave."
},
{
  termo: "Hash",
  definicao: "Função que transforma dados de tamanho variável em um valor fixo, usado para verificação de integridade."
},
{
  termo: "Assinatura Digital",
  definicao: "Mecanismo que garante autenticidade e integridade de documentos digitais."
},
{
  termo: "Firewall",
  definicao: "Sistema que controla o tráfego de rede baseado em regras de segurança."
},
{
  termo: "Antivírus",
  definicao: "Software que detecta, impede e remove programas maliciosos."
},
{
  termo: "Malware",
  definicao: "Software malicioso projetado para causar danos ou acessar dados sem autorização."
},
{
  termo: "Spyware",
  definicao: "Software que coleta informações do usuário sem consentimento."
},
{
  termo: "Ransomware",
  definicao: "Malware que sequestra dados e exige pagamento para liberação."
},
{
  termo: "Trojan Horse",
  definicao: "Programa que parece legítimo mas contém código malicioso."
},
{
  termo: "Worm",
  definicao: "Malware que se replica automaticamente através de redes."
},
{
  termo: "Phishing",
  definicao: "Técnica de fraude para obter informações confidenciais enganando o usuário."
},
{
  termo: "Spear Phishing",
  definicao: "Phishing direcionado a um indivíduo ou organização específica."
},
{
  termo: "Whaling",
  definicao: "Phishing voltado a executivos de alto nível de empresas."
},
{
  termo: "Botnet",
  definicao: "Rede de computadores infectados controlados remotamente para ataques coordenados."
},
{
  termo: "DDoS (Distributed Denial of Service)",
  definicao: "Ataque que sobrecarrega sistemas, tornando-os indisponíveis."
},
{
  termo: "Vírus",
  definicao: "Programa que se anexa a arquivos e se espalha para outros sistemas."
},
{
  termo: "Keylogger",
  definicao: "Software que registra teclas digitadas para capturar informações confidenciais."
},
{
  termo: "Rootkit",
  definicao: "Conjunto de ferramentas que permite controle secreto sobre um sistema comprometido."
},
{
  termo: "Zero-Day",
  definicao: "Vulnerabilidade explorada antes de ser corrigida pelo fabricante."
},
{
  termo: "Patch",
  definicao: "Atualização de software para corrigir vulnerabilidades e falhas."
},
{
  termo: "VPN (Virtual Private Network)",
  definicao: "Rede privada que utiliza a internet para comunicação segura."
},
{
  termo: "Proxy",
  definicao: "Servidor intermediário que processa solicitações entre clientes e servidores."
},
{
  termo: "IDS (Intrusion Detection System)",
  definicao: "Sistema que monitora e detecta atividades suspeitas em redes ou sistemas."
},
{
  termo: "IPS (Intrusion Prevention System)",
  definicao: "Sistema que detecta e impede atividades suspeitas em tempo real."
},
{
  termo: "Senha Forte",
  definicao: "Senha que combina letras, números e símbolos para dificultar ataques."
},
{
  termo: "Token de Segurança",
  definicao: "Dispositivo ou código usado para autenticação de dois fatores."
},
{
  termo: "Autenticação Multifator",
  definicao: "Método que combina múltiplas formas de verificação de identidade."
},
{
  termo: "Biometria",
  definicao: "Identificação de usuários por características físicas ou comportamentais."
},
{
  termo: "Criptografia Simétrica",
  definicao: "Criptografia que utiliza a mesma chave para cifrar e decifrar dados."
},
{
  termo: "Criptografia Assimétrica",
  definicao: "Criptografia que utiliza chaves públicas e privadas distintas."
},
{
  termo: "PKI (Public Key Infrastructure)",
  definicao: "Infraestrutura que gerencia chaves públicas e certificados digitais."
},
{
  termo: "SSL/TLS",
  definicao: "Protocolos que garantem comunicação segura entre sistemas na internet."
},
{
  termo: "HTTPS",
  definicao: "Versão segura do protocolo HTTP, usando criptografia TLS."
},
{
  termo: "Backdoor",
  definicao: "Acesso secreto a um sistema, normalmente criado por atacantes ou desenvolvedores."
},
{
  termo: "Vulnerabilidade",
  definicao: "Falha em um sistema que pode ser explorada para comprometer a segurança."
},
{
  termo: "Exploit",
  definicao: "Código ou técnica que explora uma vulnerabilidade em sistemas."
},
{
  termo: "Segurança em Camadas",
  definicao: "Estratégia que utiliza múltiplos mecanismos de proteção simultâneos."
},
{
  termo: "Segurança Física",
  definicao: "Proteção de equipamentos e instalações contra acesso não autorizado ou danos."
},
{
  termo: "Segurança de Rede",
  definicao: "Proteção de dados e sistemas em comunicação de rede."
},
{
  termo: "Segurança de Aplicações",
  definicao: "Medidas que garantem que software seja resistente a ataques."
},
{
  termo: "Segurança de Endpoints",
  definicao: "Proteção de dispositivos finais, como computadores e smartphones."
},
{
  termo: "Política de Segurança",
  definicao: "Conjunto de regras que define como proteger dados e sistemas."
},
{
  termo: "Governança de TI",
  definicao: "Estratégias e processos que garantem o uso seguro e eficiente da tecnologia."
},
{
  termo: "Auditoria de Segurança",
  definicao: "Avaliação formal das medidas de segurança implementadas."
},
{
  termo: "Risco",
  definicao: "Probabilidade de ocorrência de um evento que possa comprometer a segurança."
},
{
  termo: "Gestão de Riscos",
  definicao: "Processo de identificar, avaliar e mitigar riscos de segurança."
},
{
  termo: "Impacto",
  definicao: "Consequência de um incidente de segurança nos negócios ou operações."
},
{
  termo: "Ameaça",
  definicao: "Qualquer potencial causa de dano a sistemas ou dados."
},
{
  termo: "Ataque",
  definicao: "Ação que visa explorar vulnerabilidades para comprometer sistemas ou dados."
},
{
  termo: "Mitigação",
  definicao: "Medida para reduzir o impacto de uma ameaça ou ataque."
},
{
  termo: "Incidente de Segurança",
  definicao: "Evento que compromete a confidencialidade, integridade ou disponibilidade de informações."
},
{
  termo: "Resposta a Incidentes",
  definicao: "Processo de gerenciar e conter os efeitos de incidentes de segurança."
},
{
  termo: "SOC (Security Operations Center)",
  definicao: "Central que monitora, detecta e responde a incidentes de segurança."
},
{
  termo: "SIEM (Security Information and Event Management)",
  definicao: "Ferramenta que coleta e analisa logs de segurança em tempo real."
},
{
  termo: "Forense Digital",
  definicao: "Análise de sistemas e dados para investigação de incidentes de segurança."
},
{
  termo: "Segurança na Nuvem",
  definicao: "Proteção de dados e serviços em ambientes de computação em nuvem."
},
{
  termo: "Backup Seguro",
  definicao: "Cópia de dados protegida contra perda ou acesso não autorizado."
},
{
  termo: "Criptografia de Disco",
  definicao: "Proteção de dados armazenados em dispositivos usando criptografia."
},
{
  termo: "Controle de Acesso",
  definicao: "Mecanismos que regulam quem pode acessar sistemas e dados."
},
{
  termo: "ACL (Access Control List)",
  definicao: "Lista de permissões que define o acesso a recursos específicos."
},
{
  termo: "RBAC (Role-Based Access Control)",
  definicao: "Controle de acesso baseado em funções do usuário."
},
{
  termo: "ABAC (Attribute-Based Access Control)",
  definicao: "Controle de acesso baseado em atributos do usuário, recurso e ambiente."
},
{
  termo: "Segurança de Senhas",
  definicao: "Práticas para criar e proteger senhas contra ataques."
},
{
  termo: "Senha de Uso Único",
  definicao: "Senha que é válida apenas por uma sessão ou transação."
},
{
  termo: "Política de Senhas",
  definicao: "Regras para criação, expiração e complexidade de senhas."
},
{
  termo: "Autenticação Biométrica",
  definicao: "Uso de impressões digitais, reconhecimento facial ou voz para autenticar usuários."
},
{
  termo: "Segurança em Aplicativos Móveis",
  definicao: "Práticas para proteger apps e dados em dispositivos móveis."
},
{
  termo: "Vulnerabilidade de Injeção SQL",
  definicao: "Falha que permite execução de comandos SQL maliciosos."
},
{
  termo: "Cross-Site Scripting (XSS)",
  definicao: "Falha que permite a execução de scripts maliciosos em páginas web."
},
{
  termo: "Cross-Site Request Forgery (CSRF)",
  definicao: "Ataque que engana usuários autenticados para executar ações indesejadas."
},
{
  termo: "Segurança em APIs",
  definicao: "Medidas para proteger interfaces de programação de aplicações contra ataques."
},
{
  termo: "Cibersegurança",
  definicao: "Proteção de sistemas, redes e dados contra ameaças digitais."
},
{
  termo: "Engenharia Social",
  definicao: "Manipulação psicológica de pessoas para obter informações confidenciais."
},
{
  termo: "Segurança de E-mail",
  definicao: "Proteção contra phishing, spam e ataques de malware por e-mail."
},
{
  termo: "Segurança em IoT",
  definicao: "Proteção de dispositivos conectados à Internet das Coisas contra ataques."
},
{
  termo: "Zero Trust",
  definicao: "Modelo de segurança que não confia automaticamente em nenhum dispositivo ou usuário."
},
{
  termo: "Sandboxing",
  definicao: "Execução de programas em ambiente isolado para prevenir danos ao sistema."
},
{
  termo: "Tokenização",
  definicao: "Substituição de dados sensíveis por tokens não sensíveis para proteção."
},
{
  termo: "Segregação de Funções",
  definicao: "Prática de separar responsabilidades para reduzir riscos internos."
},
{
  termo: "Ataque Man-in-the-Middle",
  definicao: "Intercepção de comunicação entre duas partes para roubo de dados."
},
{
  termo: "Vulnerabilidade de Buffer Overflow",
  definicao: "Falha que permite sobrescrever memória do sistema e executar código malicioso."
},
{
  termo: "Segurança em Transações Online",
  definicao: "Proteção de pagamentos e dados financeiros em transações digitais."
},
{
  termo: "Força Bruta",
  definicao: "Ataque que tenta todas as combinações possíveis para quebrar senhas ou chaves."
},
{
  termo: "Criptoanálise",
  definicao: "Estudo e tentativa de quebrar sistemas criptográficos."
},
{
  termo: "Segurança de Dados Pessoais",
  definicao: "Proteção de informações pessoais contra vazamento ou uso indevido."
},
{
  termo: "LGPD",
  definicao: "Lei Geral de Proteção de Dados brasileira, regulando coleta e tratamento de dados pessoais."
},
{
  termo: "GDPR",
  definicao: "Regulamento europeu de proteção de dados pessoais."
},
{
  termo: "Segurança em Redes Sem Fio",
  definicao: "Medidas para proteger Wi-Fi e redes móveis contra acessos não autorizados."
},
{
  termo: "Criptografia de Ponta a Ponta",
  definicao: "Proteção de dados durante toda a comunicação, de remetente a destinatário."
},
{
  termo: "Segurança em Cloud Computing",
  definicao: "Práticas para proteger dados, aplicativos e serviços em nuvem."
},
{
  termo: "Teste de Penetração",
  definicao: "Simulação de ataques para identificar vulnerabilidades em sistemas."
},
{
  termo: "Honeypot",
  definicao: "Sistema ou recurso deliberadamente vulnerável usado para atrair atacantes e estudar suas técnicas."
},
{
  termo: "Segurança de Backup",
  definicao: "Proteção de cópias de dados contra acesso não autorizado e corrupção."
},
{
  termo: "Controle de Dispositivos",
  definicao: "Gestão de dispositivos conectados à rede para prevenir acesso não autorizado."
},
{
  termo: "Segurança em Aplicações Web",
  definicao: "Práticas para proteger sites e aplicativos web contra ataques."
},
{
  termo: "Segurança de Sessão",
  definicao: "Proteção de sessões de usuário para evitar sequestro ou hijacking."
},
{
  termo: "Criptografia de Dados em Repouso",
  definicao: "Proteção de dados armazenados em discos ou bancos de dados."
},
{
  termo: "Criptografia de Dados em Trânsito",
  definicao: "Proteção de dados durante transferência pela rede."
},
{
  termo: "Segurança de Infraestrutura",
  definicao: "Proteção de servidores, redes e hardware contra ameaças."
},
{
  termo: "Auditoria de Logs",
  definicao: "Análise de registros de sistema para identificar atividades suspeitas."
},
{
  termo: "Segurança em Dispositivos Móveis",
  definicao: "Proteção de smartphones e tablets contra ameaças e perda de dados."
},
{
  termo: "Controle de Versão Seguro",
  definicao: "Gestão de alterações de software mantendo integridade e rastreabilidade."
},
{
  termo: "Backup Offsite",
  definicao: "Cópia de dados armazenada fora do local principal para recuperação em desastres."
},
{
  termo: "Segurança em E-commerce",
  definicao: "Proteção de transações, dados de clientes e pagamentos em lojas virtuais."
},
{
  termo: "Segurança em Redes Corporativas",
  definicao: "Medidas para proteger informações e sistemas de empresas contra ameaças."
},
{
  termo: "Segurança Preditiva",
  definicao: "Uso de análise de dados e IA para prever e prevenir incidentes de segurança."
},
{
  termo: "Variável",
  definicao: "Espaço de memória que armazena dados que podem ser alterados durante a execução do programa."
},
{
  termo: "Constante",
  definicao: "Valor fixo que não pode ser alterado durante a execução do programa."
},
{
  termo: "Tipo de Dados",
  definicao: "Categoria de valores que uma variável pode armazenar, como inteiro, string ou booleano."
},
{
  termo: "Operador Aritmético",
  definicao: "Símbolo que realiza operações matemáticas, como +, -, *, /."
},
{
  termo: "Operador Relacional",
  definicao: "Símbolo que compara valores, como ==, !=, >, <, >=, <=."
},
{
  termo: "Operador Lógico",
  definicao: "Símbolo usado para combinar expressões booleanas, como AND, OR, NOT."
},
{
  termo: "Função",
  definicao: "Bloco de código que realiza uma tarefa específica e pode ser reutilizado."
},
{
  termo: "Procedimento",
  definicao: "Bloco de código que executa ações, mas não retorna um valor."
},
{
  termo: "Parâmetro",
  definicao: "Valor fornecido a uma função ou procedimento para processamento."
},
{
  termo: "Argumento",
  definicao: "Valor real passado para um parâmetro ao chamar uma função."
},
{
  termo: "Retorno",
  definicao: "Valor que uma função devolve após sua execução."
},
{
  termo: "Escopo",
  definicao: "Região do programa onde uma variável ou função é visível e acessível."
},
{
  termo: "Loop",
  definicao: "Estrutura que repete um bloco de código várias vezes."
},
{
  termo: "For",
  definicao: "Loop com número de repetições definido."
},
{
  termo: "While",
  definicao: "Loop que continua enquanto uma condição for verdadeira."
},
{
  termo: "Do-While",
  definicao: "Loop que executa o bloco pelo menos uma vez antes de verificar a condição."
},
{
  termo: "If",
  definicao: "Estrutura condicional que executa um bloco de código se a condição for verdadeira."
},
{
  termo: "Else",
  definicao: "Complemento do if, executa código quando a condição do if é falsa."
},
{
  termo: "Else If",
  definicao: "Permite verificar múltiplas condições em sequência."
},
{
  termo: "Switch",
  definicao: "Estrutura condicional que seleciona um bloco de código baseado no valor de uma variável."
},
{
  termo: "Case",
  definicao: "Bloco de código dentro de um switch, executado quando o valor corresponde."
},
{
  termo: "Break",
  definicao: "Comando que interrompe loops ou cases de switch."
},
{
  termo: "Continue",
  definicao: "Comando que pula a iteração atual de um loop e passa para a próxima."
},
{
  termo: "Array",
  definicao: "Estrutura de dados que armazena múltiplos valores do mesmo tipo em sequência."
},
{
  termo: "Matriz",
  definicao: "Array multidimensional, como uma tabela de linhas e colunas."
},
{
  termo: "Lista",
  definicao: "Coleção ordenada de elementos que pode crescer ou diminuir dinamicamente."
},
{
  termo: "Fila",
  definicao: "Estrutura de dados onde elementos são inseridos no final e removidos do início (FIFO)."
},
{
  termo: "Pilha",
  definicao: "Estrutura de dados onde elementos são inseridos e removidos do topo (LIFO)."
},
{
  termo: "Recursão",
  definicao: "Função que chama a si mesma para resolver um problema em etapas menores."
},
{
  termo: "Classe",
  definicao: "Modelo que define atributos e métodos de um objeto em programação orientada a objetos."
},
{
  termo: "Objeto",
  definicao: "Instância de uma classe com estado (atributos) e comportamento (métodos)."
},
{
  termo: "Herança",
  definicao: "Mecanismo que permite criar uma classe baseada em outra, herdando seus atributos e métodos."
},
{
  termo: "Polimorfismo",
  definicao: "Capacidade de objetos de diferentes classes responderem de forma distinta a mesma mensagem."
},
{
  termo: "Encapsulamento",
  definicao: "Proteção de dados de um objeto, permitindo acesso apenas por métodos específicos."
},
{
  termo: "Interface",
  definicao: "Contrato que define métodos que uma classe deve implementar."
},
{
  termo: "Abstract Class",
  definicao: "Classe que não pode ser instanciada e serve de base para outras classes."
},
{
  termo: "Construtor",
  definicao: "Método especial usado para inicializar objetos."
},
{
  termo: "Destruidor",
  definicao: "Método especial usado para liberar recursos quando um objeto é destruído."
},
{
  termo: "Exceção",
  definicao: "Evento inesperado durante a execução de um programa que requer tratamento."
},
{
  termo: "Try",
  definicao: "Bloco de código onde exceções podem ocorrer e precisam ser tratadas."
},
{
  termo: "Catch",
  definicao: "Bloco de código que captura e trata exceções lançadas no bloco try."
},
{
  termo: "Finally",
  definicao: "Bloco de código que é executado sempre, independentemente de exceções."
},
{
  termo: "Throw",
  definicao: "Comando que gera uma exceção manualmente."
},
{
  termo: "Debug",
  definicao: "Processo de encontrar e corrigir erros no código."
},
{
  termo: "Compile",
  definicao: "Processo de transformar código fonte em código executável pelo computador."
},
{
  termo: "Interpretador",
  definicao: "Programa que executa código fonte linha a linha sem compilar previamente."
},
{
  termo: "IDE (Integrated Development Environment)",
  definicao: "Software que fornece ferramentas para desenvolvimento, depuração e execução de programas."
},
{
  termo: "Framework",
  definicao: "Conjunto de bibliotecas e ferramentas que facilitam o desenvolvimento de aplicações."
},
{
  termo: "Biblioteca",
  definicao: "Conjunto de funções e recursos reutilizáveis que facilitam tarefas comuns."
},
{
  termo: "API (Application Programming Interface)",
  definicao: "Interface que permite comunicação entre diferentes softwares ou módulos."
},
{
  termo: "Lambda",
  definicao: "Função anônima usada como expressão em linguagens modernas."
},
{
  termo: "Callback",
  definicao: "Função passada como parâmetro que é chamada após a execução de outra função."
},
{
  termo: "Evento",
  definicao: "Ação ou ocorrência que um programa pode responder, como clique de mouse."
},
{
  termo: "Listener",
  definicao: "Função que espera e reage a um evento."
},
{
  termo: "Thread",
  definicao: "Linha de execução independente dentro de um programa."
},
{
  termo: "Concorrência",
  definicao: "Execução de múltiplas threads ou processos simultaneamente."
},
{
  termo: "Sincronização",
  definicao: "Mecanismo para coordenar o acesso a recursos compartilhados em threads."
},
{
  termo: "Mutex",
  definicao: "Objeto usado para garantir exclusão mútua no acesso a recursos compartilhados."
},
{
  termo: "Deadlock",
  definicao: "Situação em que duas ou mais threads ficam bloqueadas esperando umas pelas outras."
},
{
  termo: "Garbage Collector",
  definicao: "Mecanismo que libera automaticamente memória não utilizada por objetos."
},
{
  termo: "Memória Heap",
  definicao: "Área de memória para alocação dinâmica de objetos durante a execução."
},
{
  termo: "Memória Stack",
  definicao: "Área de memória usada para armazenar variáveis locais e chamadas de função."
},
{
  termo: "Pointer",
  definicao: "Variável que armazena o endereço de memória de outro valor."
},
{
  termo: "Referencia",
  definicao: "Apontamento para um objeto ou valor na memória sem duplicá-lo."
},
{
  termo: "Casting",
  definicao: "Conversão explícita de um tipo de dado para outro."
},
{
  termo: "Overloading",
  definicao: "Definição de múltiplas funções com o mesmo nome, mas parâmetros diferentes."
},
{
  termo: "Overriding",
  definicao: "Substituição de um método de uma classe pai em uma classe filha."
},
{
  termo: "Recursividade",
  definicao: "Técnica de programação em que uma função chama a si mesma para resolver problemas."
},
{
  termo: "Backtracking",
  definicao: "Estratégia de resolução de problemas testando todas as opções possíveis."
},
{
  termo: "Divide and Conquer",
  definicao: "Técnica que divide um problema em subproblemas menores para resolver de forma eficiente."
},
{
  termo: "Memoization",
  definicao: "Técnica de otimização que armazena resultados intermediários para evitar recomputação."
},
{
  termo: "Dynamic Programming",
  definicao: "Abordagem de programação que resolve problemas complexos armazenando resultados de subproblemas."
},
{
  termo: "Debugging",
  definicao: "Ato de analisar e corrigir erros no código de um programa."
},
{
  termo: "Test Unitário",
  definicao: "Teste que verifica a funcionalidade de uma pequena unidade de código."
},
{
  termo: "Test de Integração",
  definicao: "Teste que verifica a interação entre múltiplos componentes ou módulos."
},
{
  termo: "Test Funcional",
  definicao: "Teste que verifica se o software atende aos requisitos funcionais."
},
{
  termo: "Test Automatizado",
  definicao: "Teste executado por scripts ou ferramentas sem intervenção manual."
},
{
  termo: "Code Review",
  definicao: "Revisão de código feita por outros desenvolvedores para melhorar qualidade e detectar erros."
},
{
  termo: "Refatoração",
  definicao: "Processo de melhorar o código sem alterar sua funcionalidade."
},
{
  termo: "Design Pattern",
  definicao: "Solução reutilizável para problemas comuns de projeto de software."
},
{
  termo: "MVC (Model-View-Controller)",
  definicao: "Padrão que separa dados, interface e lógica de controle de uma aplicação."
},
{
  termo: "MVVM (Model-View-ViewModel)",
  definicao: "Padrão de arquitetura que separa lógica de apresentação da lógica de negócios."
},
{
  termo: "Singleton",
  definicao: "Padrão que garante que uma classe tenha apenas uma instância."
},
{
  termo: "Factory",
  definicao: "Padrão que fornece uma interface para criar objetos sem expor a lógica de criação."
},
{
  termo: "Observer",
  definicao: "Padrão que notifica objetos dependentes quando o estado de um objeto muda."
},
{
  termo: "Iterator",
  definicao: "Padrão que fornece uma maneira de acessar elementos de uma coleção sequencialmente sem expor sua estrutura."
},
{
  termo: "Adapter",
  definicao: "Padrão que permite que interfaces incompatíveis trabalhem juntas."
},
{
  termo: "Decorator",
  definicao: "Padrão que adiciona funcionalidades a objetos de forma dinâmica."
},
{
  termo: "Command",
  definicao: "Padrão que encapsula uma solicitação como objeto, permitindo parametrizar clientes com operações."
},
{
  termo: "Facade",
  definicao: "Padrão que fornece interface simplificada para um conjunto de interfaces mais complexas."
},
{
  termo: "Proxy",
  definicao: "Padrão que controla o acesso a um objeto, podendo adicionar funcionalidades."
},
{
  termo: "Strategy",
  definicao: "Padrão que define uma família de algoritmos, encapsula cada um e os torna intercambiáveis."
},
{
  termo: "Template Method",
  definicao: "Padrão que define a estrutura de um algoritmo, permitindo que subclasses implementem detalhes."
},
{
  termo: "Bridge",
  definicao: "Padrão que desacopla abstração da implementação para que ambos possam variar independentemente."
},
{
  termo: "Composite",
  definicao: "Padrão que compõe objetos em estruturas de árvore para tratar elementos individuais e compostos de forma uniforme."
},
{
  termo: "State",
  definicao: "Padrão que permite que um objeto altere seu comportamento quando seu estado interno muda."
},
{
  termo: "HTML",
  definicao: "Linguagem de marcação usada para estruturar páginas web."
},
{
  termo: "Tag",
  definicao: "Elemento básico do HTML que define conteúdo e estrutura."
},
{
  termo: "Elemento",
  definicao: "Composição de uma tag de abertura, conteúdo e tag de fechamento."
},
{
  termo: "Atributo",
  definicao: "Informação extra fornecida a uma tag, como id, class ou src."
},
{
  termo: "DOCTYPE",
  definicao: "Declaração que informa ao navegador a versão do HTML utilizada."
},
{
  termo: "Head",
  definicao: "Seção do HTML que contém metadados, scripts e links para estilos."
},
{
  termo: "Body",
  definicao: "Seção do HTML que contém o conteúdo visível da página."
},
{
  termo: "Title",
  definicao: "Elemento que define o título da página, exibido na aba do navegador."
},
{
  termo: "Meta",
  definicao: "Tag usada para definir metadados como charset, viewport e descrição."
},
{
  termo: "Link",
  definicao: "Tag usada para conectar a página a recursos externos, como CSS ou ícones."
},
{
  termo: "Script",
  definicao: "Tag usada para incluir código JavaScript na página."
},
{
  termo: "Header",
  definicao: "Elemento semântico que representa o cabeçalho da página ou seção."
},
{
  termo: "Footer",
  definicao: "Elemento semântico que representa o rodapé da página ou seção."
},
{
  termo: "Nav",
  definicao: "Elemento semântico que define uma seção de navegação."
},
{
  termo: "Main",
  definicao: "Elemento semântico que define o conteúdo principal da página."
},
{
  termo: "Section",
  definicao: "Elemento semântico usado para agrupar conteúdo relacionado."
},
{
  termo: "Article",
  definicao: "Elemento semântico que representa um conteúdo independente, como um post ou notícia."
},
{
  termo: "Aside",
  definicao: "Elemento semântico usado para conteúdo complementar, como barras laterais."
},
{
  termo: "H1",
  definicao: "Tag de título de nível 1, usada para o título mais importante da página."
},
{
  termo: "H2",
  definicao: "Tag de título de nível 2, usada para subtítulos importantes."
},
{
  termo: "H3",
  definicao: "Tag de título de nível 3, usada para subtítulos intermediários."
},
{
  termo: "P",
  definicao: "Tag usada para definir parágrafos de texto."
},
{
  termo: "Br",
  definicao: "Tag usada para quebrar linhas sem criar um novo parágrafo."
},
{
  termo: "Hr",
  definicao: "Tag usada para inserir uma linha horizontal, separando conteúdos."
},
{
  termo: "A",
  definicao: "Tag usada para criar links (âncoras) para outras páginas ou seções."
},
{
  termo: "Img",
  definicao: "Tag usada para inserir imagens na página."
},
{
  termo: "Alt",
  definicao: "Atributo da tag img que descreve a imagem para acessibilidade."
},
{
  termo: "Src",
  definicao: "Atributo que define o caminho da imagem ou recurso a ser exibido."
},
{
  termo: "Form",
  definicao: "Elemento usado para criar formulários de entrada de dados."
},
{
  termo: "Input",
  definicao: "Tag usada dentro de formulários para permitir entrada de dados pelo usuário."
},
{
  termo: "Textarea",
  definicao: "Campo de formulário para entrada de texto longo."
},
{
  termo: "Button",
  definicao: "Elemento que cria um botão clicável."
},
{
  termo: "Select",
  definicao: "Elemento de formulário que cria uma lista suspensa de opções."
},
{
  termo: "Option",
  definicao: "Elemento que define cada opção dentro de um select."
},
{
  termo: "Label",
  definicao: "Elemento que define um rótulo para um campo de formulário."
},
{
  termo: "Table",
  definicao: "Elemento usado para criar tabelas de dados."
},
{
  termo: "Tr",
  definicao: "Elemento que define uma linha em uma tabela."
},
{
  termo: "Td",
  definicao: "Elemento que define uma célula de dados em uma tabela."
},
{
  termo: "Th",
  definicao: "Elemento que define uma célula de cabeçalho em uma tabela."
},
{
  termo: "Colspan",
  definicao: "Atributo que permite que uma célula ocupe várias colunas."
},
{
  termo: "Rowspan",
  definicao: "Atributo que permite que uma célula ocupe várias linhas."
},
{
  termo: "Ul",
  definicao: "Elemento que cria uma lista não ordenada."
},
{
  termo: "Ol",
  definicao: "Elemento que cria uma lista ordenada."
},
{
  termo: "Li",
  definicao: "Elemento que define cada item de uma lista."
},
{
  termo: "Div",
  definicao: "Elemento genérico usado para agrupar conteúdos e aplicar estilos."
},
{
  termo: "Span",
  definicao: "Elemento genérico usado para aplicar estilos a partes do texto."
},
{
  termo: "Iframe",
  definicao: "Elemento que incorpora outra página HTML dentro da página atual."
},
{
  termo: "Meta Charset",
  definicao: "Define a codificação de caracteres usada na página, como UTF-8."
},
{
  termo: "Viewport",
  definicao: "Meta tag usada para definir como a página será exibida em dispositivos móveis."
},
{
  termo: "Semantic HTML",
  definicao: "Uso de elementos que têm significado claro para navegadores e leitores de tela."
},
{
  termo: "HTML",
  definicao: "Linguagem de marcação usada para estruturar páginas web."
},
{
  termo: "Tag",
  definicao: "Elemento básico do HTML que define conteúdo e estrutura."
},
{
  termo: "Elemento",
  definicao: "Composição de uma tag de abertura, conteúdo e tag de fechamento."
},
{
  termo: "Atributo",
  definicao: "Informação extra fornecida a uma tag, como id, class ou src."
},
{
  termo: "DOCTYPE",
  definicao: "Declaração que informa ao navegador a versão do HTML utilizada."
},
{
  termo: "Head",
  definicao: "Seção do HTML que contém metadados, scripts e links para estilos."
},
{
  termo: "Body",
  definicao: "Seção do HTML que contém o conteúdo visível da página."
},
{
  termo: "Title",
  definicao: "Elemento que define o título da página, exibido na aba do navegador."
},
{
  termo: "Meta",
  definicao: "Tag usada para definir metadados como charset, viewport e descrição."
},
{
  termo: "Link",
  definicao: "Tag usada para conectar a página a recursos externos, como CSS ou ícones."
},
{
  termo: "Script",
  definicao: "Tag usada para incluir código JavaScript na página."
},
{
  termo: "Header",
  definicao: "Elemento semântico que representa o cabeçalho da página ou seção."
},
{
  termo: "Footer",
  definicao: "Elemento semântico que representa o rodapé da página ou seção."
},
{
  termo: "Nav",
  definicao: "Elemento semântico que define uma seção de navegação."
},
{
  termo: "Main",
  definicao: "Elemento semântico que define o conteúdo principal da página."
},
{
  termo: "Section",
  definicao: "Elemento semântico usado para agrupar conteúdo relacionado."
},
{
  termo: "Article",
  definicao: "Elemento semântico que representa um conteúdo independente, como um post ou notícia."
},
{
  termo: "Aside",
  definicao: "Elemento semântico usado para conteúdo complementar, como barras laterais."
},
{
  termo: "H1",
  definicao: "Tag de título de nível 1, usada para o título mais importante da página."
},
{
  termo: "H2",
  definicao: "Tag de título de nível 2, usada para subtítulos importantes."
},
{
  termo: "H3",
  definicao: "Tag de título de nível 3, usada para subtítulos intermediários."
},
{
  termo: "P",
  definicao: "Tag usada para definir parágrafos de texto."
},
{
  termo: "Br",
  definicao: "Tag usada para quebrar linhas sem criar um novo parágrafo."
},
{
  termo: "Hr",
  definicao: "Tag usada para inserir uma linha horizontal, separando conteúdos."
},
{
  termo: "A",
  definicao: "Tag usada para criar links (âncoras) para outras páginas ou seções."
},
{
  termo: "Img",
  definicao: "Tag usada para inserir imagens na página."
},
{
  termo: "Alt",
  definicao: "Atributo da tag img que descreve a imagem para acessibilidade."
},
{
  termo: "Src",
  definicao: "Atributo que define o caminho da imagem ou recurso a ser exibido."
},
{
  termo: "Form",
  definicao: "Elemento usado para criar formulários de entrada de dados."
},
{
  termo: "Input",
  definicao: "Tag usada dentro de formulários para permitir entrada de dados pelo usuário."
},
{
  termo: "Textarea",
  definicao: "Campo de formulário para entrada de texto longo."
},
{
  termo: "Button",
  definicao: "Elemento que cria um botão clicável."
},
{
  termo: "Select",
  definicao: "Elemento de formulário que cria uma lista suspensa de opções."
},
{
  termo: "Option",
  definicao: "Elemento que define cada opção dentro de um select."
},
{
  termo: "Label",
  definicao: "Elemento que define um rótulo para um campo de formulário."
},
{
  termo: "Table",
  definicao: "Elemento usado para criar tabelas de dados."
},
{
  termo: "Tr",
  definicao: "Elemento que define uma linha em uma tabela."
},
{
  termo: "Td",
  definicao: "Elemento que define uma célula de dados em uma tabela."
},
{
  termo: "Th",
  definicao: "Elemento que define uma célula de cabeçalho em uma tabela."
},
{
  termo: "Colspan",
  definicao: "Atributo que permite que uma célula ocupe várias colunas."
},
{
  termo: "Rowspan",
  definicao: "Atributo que permite que uma célula ocupe várias linhas."
},
{
  termo: "Ul",
  definicao: "Elemento que cria uma lista não ordenada."
},
{
  termo: "Ol",
  definicao: "Elemento que cria uma lista ordenada."
},
{
  termo: "Li",
  definicao: "Elemento que define cada item de uma lista."
},
{
  termo: "Div",
  definicao: "Elemento genérico usado para agrupar conteúdos e aplicar estilos."
},
{
  termo: "Span",
  definicao: "Elemento genérico usado para aplicar estilos a partes do texto."
},
{
  termo: "Iframe",
  definicao: "Elemento que incorpora outra página HTML dentro da página atual."
},
{
  termo: "Meta Charset",
  definicao: "Define a codificação de caracteres usada na página, como UTF-8."
},
{
  termo: "Viewport",
  definicao: "Meta tag usada para definir como a página será exibida em dispositivos móveis."
},
{
  termo: "Semantic HTML",
  definicao: "Uso de elementos que têm significado claro para navegadores e leitores de tela."
},
{
  termo: "JavaScript",
  definicao: "Linguagem de programação que adiciona interatividade às páginas web."
},
{
  termo: "Variável",
  definicao: "Espaço de memória para armazenar dados, declarado com var, let ou const."
},
{
  termo: "Constante",
  definicao: "Variável cujo valor não pode ser alterado depois de definido."
},
{
  termo: "Função",
  definicao: "Bloco de código que realiza uma tarefa específica."
},
{
  termo: "Parâmetro",
  definicao: "Valor que é passado para dentro de uma função."
},
{
  termo: "Argumento",
  definicao: "Valor real passado para uma função ao chamá-la."
},
{
  termo: "Retorno",
  definicao: "Valor que uma função devolve ao ser executada."
},
{
  termo: "Array",
  definicao: "Lista de elementos armazenados em uma única variável."
},
{
  termo: "Objeto",
  definicao: "Estrutura que guarda dados em pares chave-valor."
},
{
  termo: "String",
  definicao: "Tipo de dado que representa texto."
},
{
  termo: "Número",
  definicao: "Tipo de dado que representa valores numéricos."
},
{
  termo: "Booleano",
  definicao: "Tipo de dado que só pode ser verdadeiro (true) ou falso (false)."
},
{
  termo: "Null",
  definicao: "Valor que representa a ausência de valor."
},
{
  termo: "Undefined",
  definicao: "Valor padrão de uma variável que não foi inicializada."
},
{
  termo: "Condicional",
  definicao: "Estrutura que executa código apenas se uma condição for verdadeira (if, else)."
},
{
  termo: "Switch",
  definicao: "Estrutura que executa blocos diferentes de código dependendo de um valor."
},
{
  termo: "Loop",
  definicao: "Estrutura que repete um bloco de código várias vezes (for, while)."
},
{
  termo: "For",
  definicao: "Loop que repete código por um número definido de vezes."
},
{
  termo: "While",
  definicao: "Loop que repete código enquanto uma condição for verdadeira."
},
{
  termo: "Do...While",
  definicao: "Loop que executa o código pelo menos uma vez antes de checar a condição."
},
{
  termo: "Break",
  definicao: "Comando que interrompe a execução de um loop."
},
{
  termo: "Continue",
  definicao: "Comando que pula para a próxima iteração do loop."
},
{
  termo: "Evento",
  definicao: "Ação ou ocorrência que o código pode responder, como clique ou digitação."
},
{
  termo: "Callback",
  definicao: "Função passada como argumento para outra função para ser executada depois."
},
{
  termo: "Promise",
  definicao: "Objeto que representa o resultado de uma operação assíncrona."
},
{
  termo: "Async",
  definicao: "Palavra-chave que define uma função assíncrona."
},
{
  termo: "Await",
  definicao: "Palavra-chave que espera uma Promise resolver dentro de uma função async."
},
{
  termo: "Event Loop",
  definicao: "Mecanismo que gerencia a execução de código assíncrono."
},
{
  termo: "DOM",
  definicao: "Representação da estrutura HTML de uma página manipulável via JavaScript."
},
{
  termo: "Document",
  definicao: "Objeto que representa a página web atual."
},
{
  termo: "QuerySelector",
  definicao: "Método que seleciona elementos da página usando seletores CSS."
},
{
  termo: "AddEventListener",
  definicao: "Método que adiciona ouvintes de eventos a elementos."
},
{
  termo: "InnerHTML",
  definicao: "Propriedade que define ou retorna o conteúdo HTML de um elemento."
},
{
  termo: "TextContent",
  definicao: "Propriedade que define ou retorna o texto de um elemento."
},
{
  termo: "SetTimeout",
  definicao: "Função que executa código após um tempo definido em milissegundos."
},
{
  termo: "SetInterval",
  definicao: "Função que executa código repetidamente em intervalos definidos."
},
{
  termo: "ClearTimeout",
  definicao: "Função que cancela uma execução de SetTimeout."
},
{
  termo: "ClearInterval",
  definicao: "Função que cancela uma execução de SetInterval."
},
{
  termo: "LocalStorage",
  definicao: "Objeto que permite armazenar dados localmente no navegador."
},
{
  termo: "SessionStorage",
  definicao: "Objeto que armazena dados temporários durante a sessão do navegador."
},
{
  termo: "JSON",
  definicao: "Formato de dados usado para trocar informações entre sistemas."
},
{
  termo: "Parse",
  definicao: "Transforma texto em objeto JavaScript (JSON.parse)."
},
{
  termo: "Stringify",
  definicao: "Transforma objeto JavaScript em texto JSON (JSON.stringify)."
},
{
  termo: "Console.log",
  definicao: "Função que imprime informações no console do navegador."
},
{
  termo: "Debugging",
  definicao: "Processo de identificar e corrigir erros no código."
},
{
  termo: "Try...Catch",
  definicao: "Bloco que captura e trata erros no código."
},
{
  termo: "Throw",
  definicao: "Comando que lança manualmente um erro."
},
{
  termo: "Class",
  definicao: "Modelo para criar objetos com propriedades e métodos."
},
{
  termo: "Constructor",
  definicao: "Método especial usado para inicializar objetos dentro de uma classe."
}



];

// === ELEMENTOS ===
const container = document.getElementById("glossario");
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const temaButtons = document.querySelectorAll("#temaButtons button");

// === MAPA DE TEMAS PARA GARANTIR CORRESPONDÊNCIA ===
const temaMap = {
    "todos": null,
    "algoritmo": "Algoritmo",
    "rede": "Rede",
    "banco de dados": "Banco de Dados",
    "segurança": "Segurança",
    "html": "HTML",
    "css": "CSS",
    "js": "JS"
};

// === FUNÇÃO PARA CRIAR CARDS ===
function criarCards(lista) {
    container.innerHTML = "";
    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhum termo encontrado.</p>";
        return;
    }
    lista.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<h3>${item.termo}</h3><p>${item.definicao}</p>`;
        container.appendChild(card);
    });
}

// === CARREGAR TODOS OS TERMOS INICIALMENTE ===
criarCards(termos);

// === FILTRO POR TEMA ===
temaButtons.forEach(botao => {
    botao.addEventListener("click", () => {
        const temaBotao = botao.textContent.toLowerCase().trim(); // pega o texto do botão
        const temaReal = temaMap[temaBotao]; // pega o tema real do mapa

        const filtrados = temaReal 
            ? termos.filter(t => t.tema === temaReal) // filtra pelo tema exato
            : termos; // se "todos", mostra todos

        criarCards(filtrados);

        searchInput.value = "";        // limpa campo de busca
        suggestionsBox.innerHTML = ""; // limpa sugestões
    });
});

// === BUSCA COM SUGESTÕES ===
searchInput.addEventListener("input", function () {
    const texto = this.value.toLowerCase().trim();
    const filtrados = termos.filter(t => t.termo.toLowerCase().includes(texto));
    criarCards(filtrados);

    suggestionsBox.innerHTML = "";
    if (!texto) return;

    filtrados.forEach(item => {
        const sug = document.createElement("div");
        sug.textContent = item.termo;
        sug.addEventListener("click", () => {
            searchInput.value = item.termo;
            suggestionsBox.innerHTML = "";
            criarCards([item]);
        });
        suggestionsBox.appendChild(sug);
    });
});