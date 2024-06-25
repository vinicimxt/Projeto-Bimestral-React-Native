import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone de pesquisa
import styles from './style';

const movies = [
  {
    id: 1,
    name: "Avatar 2",
    uri: "https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    sinopse: "Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos.\nNo entanto, eles devem sair de casa e explorar as regiões de Pandora quando\numa antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.",
  },
  {
    id: 2,
    name: "Vingadores Ultimato",
    uri: "https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg",
    sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a\nperda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço\nsem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
  },
  {
    id: 3,
    name: "Titanic ",
    uri: "https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg",
    sinopse: "Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica viagem inaugural\ndo Titanic em 1912. Embora esteja noiva do arrogante herdeiro de uma\nsiderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.",
  },
  {
    id: 4,
    name: "Stars Wars o despestar da força",
    uri: "https://images.justwatch.com/poster/249956665/s718/star-wars-o-despertar-da-forca.jpg",
    sinopse: "A queda de Darth Vader e do Império levou ao surgimento de uma nova força sombria:\na Primeira Ordem. Eles procuram o jedi Luke Skywalker, desaparecido.\nA resistência tenta desesperadamente encontrá-lo antes para salvar a galáxia.",
  },
  {
    id: 5,
    name: "Vingadores Guerra Infinita",
    uri: "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg",
    sinopse: "Homem de Ferro, Capitão América, Thor, Hulk e os Vingadores se unem para combater o maligno Thanos.\nEm uma missão para coletar todas as seis pedras infinitas,\nThanos planeja usá-las para infligir sua vontade maléfica sobre a humanidade.",
  },
  {
    id: 6,
    name: "Jurassic World",
    uri: "https://m.media-amazon.com/images/I/81zLDvpNlLL.AC_UF894,1000_QL80.jpg",
    sinopse: "O Parque dos Dinossauros está aberto para visitação, e o público tem a chance de ver de perto\nas mais diversas espécies. No entanto, um desses animais,\nresultado de experiência genética, desenvolve alta inteligência e se torna uma ameaça para todos.",
  },
  {
    id: 7,
    name: "Rei Leão",
    uri: "https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg",
    sinopse: "Este desenho animado da Disney mostra as aventuras de um leão jovem de nome Simba,\no herdeiro de seu pai, Mufasa. O tio malvado de Simba, Oscar, planeja\nroubar o trono de Mufasa atraindo pai e filho para uma emboscada.\nSimba consegue escapar e somente Mufasa morre. Com a ajuda de seus amigos,Timon e Pumba,\nele reaparece como adulto para recuperar sua terra, que foi roubada por seu tio Oscar.",
  },
  {
    id: 8,
    name: "Vingadores",
    uri: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg",
    sinopse: "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de\ndentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência\ninternacional que mantém a paz, logo reúne os únicos super-heróis\nque serão capazes de defender a Terra de ameaças sem precedentes.\nHomem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam\no time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado\ne agir como um grupo em prol da humanidade.",
  },
  {
    id: 9,
    name: "Velozes e Furiosos 7",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2uqpeoOTpA-Ub63OD5hznXIO-NyVluAO0A&s",
    sinopse: "Um agente do governo oferece ajuda para cuidar de Shaw em troca de Dom e o grupo resgatar\num hacker sequestrado. Dessa vez, não se trata apenas de velocidade: a corrida é pela sobrevivência.",
  },
  {
    id: 10,
    name: "Fronzen II",
    uri: "https://br.web.img3.acsta.net/pictures/19/10/14/15/18/1691494.jpg",
    sinopse: "De volta à infância de Elsa e Anna, as duas garotas descobrem uma história do pai,\nquando ainda era príncipe de Arendelle. Ele conta às meninas a\nhistória de uma visita à floresta dos elementos,\nonde um acontecimento inesperado teria provocado a separação dos habitantes da cidade com os\nquatro elementos fundamentais: ar, fogo, terra e água.\nEsta revelação ajuda Elsa a compreender a origem de seus poderes.",
  },
];


const movies2 = [
  {
    id: 1,
    name: "Divertida mente 2",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBTwS-8sK92dqAmj5VWXgL7c-7W1ZXazRfw&s",
    sinopse: "Com um salto temporal, Riley se encontra mais velha, passando pela tão temida adolescência.\nJunto com o amadurecimento, a sala de controle também está passando\npor uma adaptação para dar lugar a algo\ntotalmente inesperado: novas emoções. As já conhecidas, Alegria, Raiva, Medo, Nojinho e Tristeza\nnão têm certeza de como se sentir quando novos inquilinos chegam ao local.",
  },
  {
    id: 2,
    name: "Um lugar silencioso dia um",
    uri: "https://www.cinesercla.com.br/Uploads/upload/75225b69-93a1-4ee3-9e62-c6c44e1279e3.jpeg",
    sinopse: "Uma mulher luta pela sobrevivência durante uma invasão alienígena na cidade de Nova York.",
  },
  {
    id: 3,
    name: "Bad Boys até o fim",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodYJcunb6imHMl_sjP1MGfxZkag3l04QIdg&s",
    sinopse: "Os brincalhões polícias de Miami, Mike Lowrey e Marcus Burnett,\nembarcam em uma perigosa missão para limpar o nome do falecido capitão da polícia.",
  },
  {
    id: 4,
    name: "Bandida - A número um",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyTTmMxGnrWT88D1fCZwrkyfutuuj0jKJnA&s",
    sinopse: "Disputada por comandantes do Jogo do Bicho e traficantes, a favela\npassou por diversas mudanças de poder entre os criminosos.\nJá crescida, Rebeca se apaixona pelo traficante Pará (Jean Amorim), que liderava\no tráfico na região, mas acabou assassinado por integrante de outra facção criminosa.",
  },
  {
    id: 5,
    name: "Clube dos vândalos",
    uri: "https://ingresso-a.akamaihd.net/prd/img/movie/clube-dos-vandalos/ddec5cf4-f1f2-42e8-addc-cb895fb4f528.webp",
    sinopse: "No espaço de apenas uma década, um motoclube do Meio-Oeste dos Estados Unidos\ndeixa de ser um ponto de encontro para desajustados\nlocais e se transforma em um lugar sinistro, ameaçando o modo de vida do grupo original.",
  },
  {
    id: 6,
    name: "Harry Potter e o prizioneiro de Azkaban",
    uri: "https://www.vitoriaparkshopping.com/wp-content/uploads/2024/05/harry-potther.jpg",
    sinopse: "É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione\ntêm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black.\nApós doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para\nvingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente\nenviados para proteger Hogwarts e seguir os passos de Black, parecem ser ameaças ainda mais perigosas.",
  },
  {
    id: 7,
    name: "Planeta dos macacos o reinado",
    uri: "https://br.web.img2.acsta.net/pictures/23/11/08/13/46/4065511.png",
    sinopse: "Muitas sociedades de macacos cresceram desde quando César levou seu povo a um oásis,\nenquanto os humanos foram reduzidos a sobreviver e se esconder nas sombras.\nUm líder macaco começa a escravizar outros grupos para encontrar\ntecnologia humana, enquanto um jovem macaco, que viu seu clã ser capturado,\nembarca em uma viagem para encontrar a liberdade,\nsendo uma jovem humana a chave para todos.",
  },
  {
    id: 8,
    name: "Imaculada",
    uri: "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11640/filme_11640.jpg",
    sinopse: "Cecilia, uma jovem religiosa, se torna freira em um convento isolado na região rural italiana.\nApós uma gravidez misteriosa, Cecilia é atormentada por forças perversas,\nenquanto confronta segredos sombrios e horrores do convento.",
  },
  {
    id: 9,
    name: "Garfield fora de casa",
    uri: "https://ingresso-a.akamaihd.net/prd/img/movie/garfield-fora-de-casa/ae8c28e2-84af-44b6-a0d8-a4615684efab.webp",
    sinopse: "Garfield tem um reencontro inesperado com seu pai, que estava há muito tempo desaparecido - um gato de rua todo\ndesengonçado que atrai o filho para um assalto de alto risco.",
  },
  {
    id: 10,
    name: "Observadores",
    uri: "https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11848/filme_11848.jpg",
    sinopse: "Um jovem casal começa a se interessar pela vida sexual de seus vizinhos e, aos poucos,\nessa curiosidade inocente se torna uma obsessão doentia.\nA tentação faz com que suas vidas se misturem, levando a consequências mortais.",
  },
];


const movies3 = [
  {
    id: 1,
    name: "Up Altas aventuras",
    uri: "https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg",
    sinopse: "Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa\nem que sempre viveu com sua esposa, a falecida Ellie.\nApós um incidente, Carl é considerado uma ameaça pública e forçado a\nser internado. Para evitar que isto aconteça, ele põe balões em sua casa, fazendo com que ela levante voo.\nCarl quer viajar para uma floresta na América do Sul, onde ele e Ellie sempre\ndesejaram morar, mas descobre que um problema embarcou junto: Russell, um menino de 8 anos.",
  },
  {
    id: 2,
    name: "Wall-e",
    uri: "https://br.web.img2.acsta.net/medias/nmedia/18/91/31/05/20139182.jpg",
    sinopse: "Após entulhar a Terra de lixo e poluir a atmosfera com gases tóxicos, a humanidade deixou\no planeta e passou a viver em uma gigantesca nave. O plano era que o\nretiro durasse alguns poucos anos, com robôs sendo deixados para limpar o planeta.\nWALL-E é o último destes robôs, e sua vida consiste em compactar o lixo existente no planeta.\nAté que um dia surge repentinamente uma nave, que traz um novo e moderno robô: Eva.\nA princípio curioso, WALL-E se apaixona e resolve segui-la por toda a galáxia.",
  },
  {
    id: 3,
    name: "Como treinar seu dragão",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzngyVQ0Tlr2Q8NeCWqRMrrFEBFo-Kv-aYQ&s",
    sinopse: "Soluço é um jovem viking que não tem capacidade para lutar contra os dragões, como é a tradição local.\nSua vida muda quando ele ajuda um dragão que lhe mostra toda a verdade.\nJuntos, eles tentam provar que dragões e humanos podem ser amigos.",
  },
  {
    id: 4,
    name: "Ratatouille",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3R0nqlh86xCVj4pGGeLb_X-1h6k7CTOFCg&s",
    sinopse: "Remy reside em Paris e possui um sofisticado paladar. Seu sonho é se\ntornar um chef de cozinha e desfrutar as diversas obras da arte culinária. O único problema é que ele é\num rato.Quando se acha dentro de um dos restaurantes mais finos de Paris,\nRemy decide transformar seu sonho em realidade.",
  },
  {
    id: 5,
    name: "O castelo animado",
    uri: "https://odiariodeumcontadordehistorias.wordpress.com/wp-content/uploads/2017/05/howls-moving-castle.jpeg",
    sinopse: "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha.\nDesesperada, ela embarca em uma odisseia em busca do mago Howl,\num misterioso feiticeiro que pode ajudá-la a reverter o feitiço.",
  },
  {
    id: 6,
    name: "Coraline",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-kvUnEkh2SDxLrprCMZUUD4RrCG46tag-Q&s",
    sinopse: "Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que\ncontém um mundo parecido com o dela, porém melhor em muitas maneiras.\nTodos têm botões no lugar dos olhos, os pais são carinhosos e os\nsonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta,\nmas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto\nde sua família tentam mantê-la eternamente nesse mundo paralelo.",
  },
  {
    id: 7,
    name: "Homem aranha no aranhaverso",
    uri: "https://br.web.img3.acsta.net/pictures/18/12/05/16/28/3718855.jpg",
    sinopse: "Após ser atingido por uma teia radioativa, Miles Morales, um jovem negro do Brooklyn, se torna\no Homem-Aranha, inspirado no legado do já falecido Peter Parker.\nEntretanto, ao visitar o túmulo de seu ídolo em uma noite chuvosa,\nele é surpreendido com a presença do próprio Peter, vestindo o traje do herói por baixo de um sobretudo.\nA surpresa fica ainda maior quando Miles descobre que ele veio de uma\ndimensão paralela, assim como outras versões do Homem-Aranha.",
  },
  {
    id: 8,
    name: "Toy Story",
    uri: "https://br.web.img3.acsta.net/medias/nmedia/18/91/05/36/20127436.jpg",
    sinopse: "O aniversário do garoto Andy está chegando e seus brinquedos ficam nervosos, temendo que ele ganhe\nnovos brinquedos que possam substituí-los. Liderados pelo caubói\nWoody, o brinquedo predileto de Andy, eles recebem Buzz Lightyear, o boneco\nde um patrulheiro espacial, que logo passa a receber mais atenção do garoto.\nCom ciúmes, Woody tenta ensiná-lo uma lição, mas Buzz cai pela janela.\nÉ o início da aventura do caubói, que precisa resgatar Buzz para limpar sua barra com os outros brinquedos.",
  },
  {
    id: 9,
    name: "Os Incríveis",
    uri: "https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg",
    sinopse: "A história de Os Incríveis segue as aventuras de uma família de ex-super-heróis redescobrindo a verdadeira\norigem de seus poderes - sua união. Um dos maiores paladinos da luta\ncontra o crime de todo o mundo, Beto Pera, também conhecido como Sr. Incrível,\nvivia combatendo o mal e salvando vidas diariamente.",
  },
  {
    id: 10,
    name: "Por Água Abaixo",
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjrfZDfq-4haboAeXp0jRhu2lt1qX9sLbBg&s",
    sinopse: "Roddy é um ratinho acostumado a um bairro luxuoso de Londres. Sem querer, ele dá uma descarga\ninfeliz e acaba nos esgotos, onde terá de aprender a viver de uma forma completamente diferente.",
  },
];



const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState('');


  return (
    <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.containerHome}>
          <Text style={styles.header}>FBMOVIES</Text>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="purple" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar..."
              onChangeText={setSearchText}
              value={searchText}
            />
          </View>
          <Text style={styles.welcome}>SEJA BEM VINDO!</Text>
          <Text style={styles.description}>
            O objetivo do site é te ajudar a encontrar o filme ideal e ajudar outros cinéfilos com opiniões criteriosas ;
          </Text>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: './catalogos_filmes/zona.jpg' }}
              style={styles.smallImage}
            />

              <Image
                source={{ uri: './catalogos_filmes/furiosa.png' }}
                style={styles.largeImage}
              />
            

            <Image
              source={{ uri: './catalogos_filmes/images.jpg' }}
              style={styles.smallImage}
            />
          </View>

          <View style={styles.button}>

          <View style={styles.button1}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Detalhes')}>
              <Icon name="information-circle-outline" size={40} color="purple" />
            </TouchableOpacity>
            </View>


            <View style={styles.button2}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Login')}>
              <Icon name="person-circle-outline" size={40} color="purple" />
            </TouchableOpacity>
            </View>


            <View style={styles.button3}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Sobre nos')}>
              <Icon name="body-outline" size={36} color="purple" />
            </TouchableOpacity>
            </View>

          </View>


          <View style={styles.containerCatalogo}>
          <Text style={styles.sub}>Top 10 filmes mais vistos</Text>
          <View style={styles.imageRow}>
            {movies.map(movie => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('Movie', { movie })}
              >
                <Image
                  source={{ uri: movie.uri }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>
            ))}
          </View>
          </View>


          <View style={styles.containerCatalogo}>
          <Text style={styles.sub}>Filmes em cartaz</Text>
          <View style={styles.imageRow}>
            {movies2.map(movie => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('Movie', { movie })}
              >
                <Image
                  source={{ uri: movie.uri }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>
            ))}
          </View>
          </View>

          <View style={styles.containerCatalogo}>
          <Text style={styles.sub}>Animações</Text>
          <View style={styles.imageRow}>
            {movies3.map(movie => (
              <TouchableOpacity
                key={movie.id}
                onPress={() => navigation.navigate('Movie', { movie })}
              >
                <Image
                  source={{ uri: movie.uri }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>
            ))}
          </View>
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
