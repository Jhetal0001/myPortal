import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {
  Gallery,
  GalleryItem,
  ImageItem,
} from '@ngx-gallery/core';

@Component({
  selector: 'app-blogspace',
  templateUrl: './blogspace.component.html',
  styleUrls: ['./blogspace.component.scss'],
})
export class BlogspaceComponent implements OnInit {

  // Variable para visualizar articulo
  art:number | undefined;

  articles: any[] = [
    {
      name: '¿Qué es HTML?',
      img: '../../../assets/small/Que-es-el-HTML-small.png',
      description:
        'Llegó el momento de hablar sobre HTML, el lenguaje con el que crean las páginas web.',
      link: 'https://desarrolloweb.com/articulos/que-es-html.html',
      tag: 'Desarrollo Web',
      content: {
        date: '01 de enero de 2001',
        text1: `HTML es el lenguaje con el que se define el contenido de las páginas web. Básicamente
        se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que
        compondrán una página web, como imágenes, listas, vídeos, etc.`,
        text2: `El HTML se creó en un principio con objetivos divulgativos de información con texto y
        algunas imágenes. No se pensó que llegara a ser utilizado para crear área de ocio y consulta con
        carácter multimedia (lo que es actualmente la web), de modo que, el HTML se creó sin dar respuesta
        a todos los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían
        en un futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando
        modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han presentado ya.
        El HTML 4.01 es el último estándar a febrero de 2001. Actualización a mayo de 2005, en estos momentos está
        apunto de presentarse la versión 5 de HTML, de la que ya se tiene un borrador casi definitivo.`,
        text3: `El HTML es un lenguaje de marcación de elementos para la creación de documentos hipertexto,
        muy fácil de aprender, lo que permite que cualquier persona, aunque no haya programado en la vida,
        pueda enfrentarse a la tarea de crear una web. HTML es fácil y pronto podremos dominar el lenguaje.
        Más adelante se conseguirán los resultados profesionales gracias a nuestras capacidades para el diseño
        y nuestra vena artista, así como a la incorporación de otros lenguajes para definir el formato con el que
        se tienen que presentar las webs, como CSS.`,
        text4: `Una vez conocemos el concepto de HTML os vamos a adelantar algunas cosas más.
        Este lenguaje se escribe en un documento de texto, por eso necesitamos un editor de textos para escribir una página web.
        Así pues, el archivo donde está contenido el código HTML es un archivo de texto, con una peculiaridad,
        que tiene extensión .html o .htm (es indiferente cuál utilizar).
        De modo que cuando programemos en HTML lo haremos con un editor de textos,
        lo más sencillo posible y guardaremos nuestros trabajos con extensión .html, por ejemplo mipagina.html`,
        text5: `Por adelantar un poco cómo se utiliza el HTML os diremos que el lenguaje consta de etiquetas que
        tienen esta forma <B> o <P>. Cada etiqueta significa una cosa, por ejemplo <B> significa que se escriba en
        negrita (bold) o <P> significa un párrafo, <A> es un enlace, etc. Casi todas las etiquetas tienen su
        correspondiente etiqueta de cierre, que indica que a partir de ese punto no debe de afectar la etiqueta.
        Por ejemplo </B> se utiliza para indicar que se deje de escribir en negrita. Así que el HTML no es más que una
        serie de etiquetas que se utilizan para definir el contenido del documento y algún estilo básico. <B>Esto está en negrita</B>.`,
        nota: `Nota: El HTML no distingue entre mayúsculas y minúsculas, por lo que <B> sería equivalente a <b>.
        Lo común es que los desarrolladores escriban las etiquetas en minúscula.`,
        text6: `Para aprender HTML en profundidad tenemos un manual en DesarrolloWeb.com. Además se pueden consultar los enlaces a
        distintos manuales que tenemos en nuestra Sección HTML a Fondo.`,
        titleVideo: `Vídeo qué es HTML`,
        textVideo: `Este vídeo que verás a continuación te aclarará muy bien en lo que consiste el lenguaje HTML y
        verás rápidamente una serie de ejemplos interesantes, junto con una síntesis de los asuntos más importantes que
        debes conocer cuando te acercas por primera vez al lenguaje de marcación.`,
        iframe: `https://www.youtube.com/embed/M4wmJVvlzeY`,
        text7: `Si lo que deseamos es tener una idea global de lo que es la publicación en Internet y los pasos a seguir para colocar
        nuestras páginas en la web lo más adecuado será consultar el manual de Publicar en Internet.`,
        fuente: {
          name: 'Desarrolloweb.com',
          url: 'https://desarrolloweb.com/articulos/que-es-html.html',
        },
        images: {
          1: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU`,
          2: `https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg`,
          3: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HTML_logo.png/250px-HTML_logo.png`,
          4: `https://guru-soft.com/wp-content/uploads/2022/01/%C2%BFQue-es-el-HTML-1536x1030.jpg`,
        },
      },
    },
    {
      name: '¿Qué es CSS?',
      img: '../../../assets/small/que-es-css.png',
      description: 'Lenguaje de estilos para dotar de aspecto visual',
      link: 'https://lenguajecss.com/css/introduccion/que-es-css/',
      tag: 'Desarrollo Web',
      content: {
        date: 'No hay fecha de publicacion',
        text1: `Si te gusta el mundo del diseño web o tienes curiosidad por empezar en este sector,
        probablemente ya habrás escuchado el término CSS. Se trata de una tecnología utilizada para dotar de
        cualidades visuales y estéticas a una página web. Si nunca has tocado esta materia, comprobarás que se
        trata de una forma analítica, lógica y prácticamente matemática de crear páginas web, pero gracias a ella
        podemos simplificar la creación de páginas y conseguir exactamente lo que buscamos.`,
        text2: `La curva de aprendizaje de CSS suele ser sencilla (es fácil aprender cosas básicas, pero complicado dominar),
        aunque también es cierto que puede resultar complejo adaptarse si nunca has programado (o eres totalmente ajeno al
        código), pero a medida que cometes errores y vas practicando, tu capacidad para escribir código CSS mejorará
        progresivamente, permitiéndonos avanzar a un ritmo cada vez más veloz.`,
        tittle2: `¿Qué es CSS? `,
        text3: `Antes de comenzar, debes tener claro un concepto clave: una página web es realmente un documento de texto.
        En dicho documento se escribe código HTML, con el que se que crea el contenido de una web. Por otro lado, existe el
        código CSS, que unido al código HTML permite darle forma, color, posición (y otras características visuales) a un
        documento web.`,
        text4: `En resumen, se trata de un «idioma» o lenguaje, como podría ser el inglés o el alemán, que los navegadores
        web como Chrome o Firefox conocen y pueden entender. Nuestro objetivo como diseñadores y programadores web es
        precisamente ese: aprender el idioma e indicarle al navegador lo que debe hacer.`,
        tittle3: `¿Qué significa CSS?`,
        text5: `Las siglas CSS (Cascading Style Sheets) significan «Hojas de estilo en cascada» y parten de un concepto
        simple pero muy potente: aplicar estilos (colores, formas, márgenes, etc...) a uno o varios documentos (generalmente
        documentos HTML, páginas webs) de forma automática y masiva.`,
        text6: `Se le denomina estilos en cascada porque se lee, procesa y aplica el código desde arriba hacia abajo
        (siguiendo un patrón denominado herencia que trataremos más adelante) y en el caso de existir ambigüedad
        (código que se contradice), se siguen una serie de normas para resolver dicha ambigüedad.`,
        nota: `Ten en cuenta que generalmente tenemos varios documentos HTML en un sitio web, pero solemos tener un sólo
        documento CSS. En cada documento HTML enlazamos ese único documento CSS, de modo que si hacemos cambios en él,
        afecta a todos los documentos HTML relacionados.`,
        tittle4: `¿Por qué se usa CSS?`,
        text7: `La idea de CSS es la de utilizar el concepto de separación de presentación y contenido. Este concepto se
        basa en que, como programadores, lo ideal es separar claramente el código que escribimos. ¿Por qué? Porque con el
        tiempo, esto hará que el código sea más fácil de modificar y mantener.`,
        text8: `La idea es la siguiente:`,
        textlist1: `Los documentos HTML (contenido) incluirán sólo información y datos, todo lo relativo a la información
        a transmitir.`,
        textlist2: `Los documentos CSS (presentación) inclurán sólo los aspectos relacionados con el estilo (diseño, colores,
        formas, etc...).`,
        text9: `De esta forma, se puede unificar todo lo relativo al diseño, a lo visual en un solo documento CSS, y con ello,
        varias ventajas:`,
        textlist3: `Si necesitamos hacer modificaciones visuales, lo haremos en un sólo lugar y se aplica a todo el sitio.`,
        textlist4: `Se reduce la duplicación de estilos en diferentes lugares. Es más fácil de organizar y hacer cambios.`,
        textlist5: `La información a transmitir es considerablemente menor (las páginas se descargan más rápido).`,
        textlist6: `Es más fácil crear versiones diferentes para otros dispositivos: tablets, smartphones, etc...`,
        fuente: {
          name: 'Lenguajecss.com',
          url: 'https://lenguajecss.com/css/introduccion/que-es-css/',
        },
        images: {
          1: `https://lenguajecss.com/css/introduccion/que-es-css/html-css-navegador.png`,
          2: `https://lenguajecss.com/css/introduccion/que-es-css/que-es-css.png`,
          3: `https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png`,
          4: `https://files.realpython.com/media/HTML-And-CSS-For-Python-Developers_Watermarked.e2604f40ef5b.jpg`,
        },
      },
    },
    {
      name: '¿Qué es JavaScript?',
      img: '../../../assets/small/que-es-javascript.png',
      description: 'Qué es JavaScript, para qué sirve y cómo funciona',
      link: 'https://animaciones-css-jf.web.app/',
      tag: 'Desarrollo Web',
      content: {
        date: 'Publicado originalmente el Aug 22, 2022 7:15:00 AM, actualizado el 23 de agosto de 2022',
        autor: `Escrito por Maria Coppola`,
        text1: `JavaScript es un poderoso lenguaje de programación construido para el navegador Netscape en 1995. Todos los navegadores modernos lo adoptaron desde entonces para añadir funciones a los sitios web y, más recientemente, a aplicaciones web.`,
        text2: `A lo largo de los años, desde su concepción, JavaScript se ha convertido en un gigante: no se utiliza únicamente por la web, sino que puede encontrarse en casi cualquier lugar, incluso en el espacio.`,
        text3: `Este artículo hablaremos de sus orígenes, evolución, dónde se encuentra actualmente y el futuro del lenguaje de programación JavaScript. Sin más demora, empecemos con la diversión.`,
        tittle2: `¿Qué es JavaScript?`,
        text4: `JavaScript es un lenguaje de programación creado para cumplir con las necesidades del paisaje envolvente del internet. Desde su concepción, ha crecido en popularidad y utilidad, y ahora está presente no solo en el desarrollo web. JavaScript es la insignia del desarrollo web interactivo y, como resultado, es universal en esta industria.`,
        textVideo1: `Antes de que exploremos a profundidad en la madriguera, mira este video sobre JavaScript.`,
        iframe: `https://www.youtube.com/embed/riZbwRFMFuw`,
        text5: `Programar con JavaScript se ha expandido a todo, desde la programación computacional hasta la programación del equipo de la NASA. Además, desde que existe, Node.js ha facilitado que JavaScript se aplique en otros propósitos. Demos un vistazo más de cerca a algunos casos enseguida.`,
        tittle3: `¿Para qué sirve JavaScript?`,
        text6: `En el contexto actual, JavaScript se utiliza para todo, gracias a la introducción de Node.js. Esta tecnología crea software robusto para empresas en todo el mundo. Por si fuera poco, organizaciones como LinkedIn y Medium lo implementan al construir plataformas para que los usuarios tengan acceso a sus servicios.`,
        text7: `Lo que se puede hacer con JavaScript abarca diferentes tipos de software, como juegos, programas de computadora, aplicaciones web y hasta tecnologías de blockchain. JavaScript es posiblemente el lenguaje de programación más popular de la web. Por ejemplo, más de 125.000 empleos en LinkedIn buscan profesionales con habilidades en JavaScript.`,
        text8: `Ya que hemos discutido el alcance de JavaScript en la industria laboral, hablemos más de su uso más común: el desarrollo web.`,
        subTittle1: `JavaScript para desarrollo web`,
        text9: `El uso más popular de JavaScript es para el desarrollo web, y es una de las herramientas más poderosas que un desarrollador puede tener en sus manos. Los desarrolladores usan JavaScript en esta área para añadir interactividad y funciones que mejoren la experiencia del usuario y hagan a internet mucho más disfrutable.`,
        text10: `JavaScript se ha expandido más allá del desarrollo de interfaz, que es donde comenzó. Recientemente, JavaScript ha llegado al back-end, o dorsal de desarrollo web. Esto quiere decir que los desarrolladores tienen acceso de interfaz a métodos CRUD (Create, Read, Update, Destroy; en español: Crear, Leer, Actualizar, Destruir) y hasta puede utilizarse en el motor de un sitio web.`,
        text11: `Además, de acuerdo con W3techs, más del 90 % de todos los sitios web funcionan con JavaScript. Esto lo convierte en el líder primordial en tecnología de desarrollo web. Hablemos de algunos usos específicos de JavaScript en desarrollo web.`,
        textlist1: `Interactividad de interfaz o front-end: el desarrollo web mejora solamente por el aumento de la interactividad y funciones que JavaScript ofrece.`,
        textlist2: `Aplicaciones Web: las aplicaciones web son similares a los sitios, pero en su lugar pueden empacarse en una caja más compacta, que mejora el control de la seguridad y otros aspectos.`,
        textlist3: `Juegos de navegador: los navegadores web actuales han cambiado mucho; los desarrolladores pueden crear juegos robustos que funcionan en ellos.`,
        textlist4: `Desarrollo web dorsal o back-end: el desarrollo web se ha transformado tanto, que JavaScript puede utilizarse para gestionar el back-end de sitios y aplicaciones.`,
        text12: `Esta es una ilustración de los usos posibles de Javascript al día de hoy:`,
        img1: `https://blog.hubspot.es/hubfs/media/usosjavascript.png`,
        text13: `Ya que hablamos de los diferentes modos en que JavaScript puede usarse, hablemos de cómo funciona.`,
        tittle4: `¿Cómo funciona JavaScript?`,
        text14: `JavaScript está considerado como un lenguaje de programación del lado del cliente. Esto quiere decir que opera en el navegador del usuario y no funciona en un dispositivo externo. Un ejemplo de un lenguaje que no está del lado del cliente sería MySQL, un lenguaje del lado del servidor que gestiona peticiones de cualquier base de datos.`,
        text15: `Por otro lado, JavaScript no requiere que nada se descargue a los dispositivos del usuario, ya que los navegadores modernos tienen el software requerido integrado a ellos. Esto hace que JavaScript sea más amigable con el usuario que otros lenguajes.`,
        text16: `Esta imagen es un ejemplo de cómo JavaScript trabaja.`,
        img2: `https://blog.hubspot.es/hubfs/media/javascriptcodigo.png`,
        text17: `Esperamos que esto te dé una mejor idea de cómo opera este lenguaje. A continuación hablaremos sobre cómo utilizarlo en un sitio web.`,
        subTittle2: `¿Cómo añadir JavaScript a tu sitio web?`,
        text18: `Añadir JavaScript a tu sitio web es sencillo. Solo necesitas vincular tus archivos JavaScript desde tus archivos HTML. Si tienes alguna experiencia trabajando con HTML y CSS para el desarrollo web, entonces ya has experimentado algo similar.`,
        text19: `Muy parecido al añadir CSS a tu HTML, existe una etiqueta HTML llamada «script» que te permite vincular a JavaScript los archivos que tu código puede usar para manipular el HTML y CSS en tu sitio.`,
        text20: `Echemos un vistazo a cómo luce una etiqueta de HTML script. La siguiente línea de código es un ejemplo del script y su sintaxis.`,
        nota1: `<script src="tuArchivo.js"></script>`,
        text21: `La línea de arriba conecta un archivo llamado «tuArchivo.js» (terrible nombre, pero sirve como un ejemplo) a tu archivo HTML, conectando ambos. Esto te permite escribir tu código en un archivo separado, lo que mantiene tu HTML limpio y más fácil de manejar. Utilizar el script con el atributo scr también se considera ampliamente como una buena práctica, porque conserva tus códigos separados uno de otro, lo que facilita actualizar y cambiar lo que sea con mínimos problemas.`,
        text22: `La etiqueta script con src no es la única manera de añadir JavaScript a tu sitio, así que hablemos de otra. La etiqueta script también puede inyectar código JavaScript directamente en tu HTML, como lo verás a continuación.`,
        nota2: `<script type="texto/JavaScript">JavaScript código va aquí</script>`,
        text23: `Es muy sencillo de completar y no luce tan diferente a añadir JavaScript de forma externa.`,
        nota3: `Aviso importante: como el navegador maneja JavaScript, es importante considerar que no todos los navegadores soportarán funciones de este lenguaje. De hecho, no todos los navegadores tendrán JavaScript disponible, así que considera esa posibilidad.`,
        text24: `Ya que entiendes cómo añadir JavaScript a un sitio web, mira un ejemplo de cómo se ve un código JavaScript.`,
        tittle5: `Ejemplo de JavaScript`,
        text25: `JavaScript es robusto y puede usarse para llevar a cabo cosas asombrosas. Sin importar cuáles son tus planes de diseño o lo que esperas construir, aquí te mencionaremos algunas reglas que JavaScript requiere que sigas. A continuación, veremos un video que habla de la sintaxis y las reglas de este lenguaje.`,
        iframe2: `https://www.youtube.com/embed/JxhXQsoiQSk`,
        text26: `Ahora veamos un gran ejemplo de lo que puedes crear con un simple cambiador de color usando un generador de número pseudo aleatorio.`,
        nota4:
          "/*Función para generar una cantidad hex para nuevos colores aleatorios BG*/function randomBgHex(){ permitir randomHex = Math.floor(Math.random()*900000) + 100000; documento.Selectordeconsulta('body').estilo.Colordefondo = `#${randomHex}`;}/*end randomBgHex*/",
        text27: `El código de arriba es un buen ejemplo de cómo puedes crear una función poderosa con solo unas líneas de código. Esto podrá parecer mucho, así que comencemos diseccionando esto en trozos de código más fáciles de manejar.`,
        text28: `Comenzamos declarando una función llamada randomBgHex.`,
        nota5: `función randomBgHex(){}`,
        text29: `Luego creas una variable llamada randomHex. Y la asignas al valor de una ecuación matemática.`,
        nota6: `permitir randomHex = Math.floor(Math.random()*900000) + 100000;`,
        text30: `El código de arriba usa el objeto Math y el método .floor() para regresar el entero más grande menor o igual a un número dado. Enseguida, el número se genera utilizando .random() que, sin un parámetro, regresa un número entre cero y menos de uno. Así que multiplicas el resultado por 900.000 más 100.000. Esta ecuación garantiza que el número que obtengas coincida con las necesidades de un número hexadecimal.`,
        text31: `El valor de esta ecuación se almacena en la variable y se utiliza para crear colores. La siguiente línea de código apuntará al elemento y atributo HTML que deseas cambiar y luego insertará el número hex con un literal de cuerda.`,
        nota7:
          "documento.Selectordeconsulta('body').estilo.Colordefondo = `#${randomHex}`;",
        text32:
          'La primera parte del código de arriba selecciona el cuerpo de HTML y apunta al color de fondo. La segunda parte `#${randomHex}`utiliza un literal de cuerda (identificada como la comilla simple) que te permite concatenar (o unir) el # que identifica un número hexadecimal con el valor dentro de nuestra variable randomHex.',
        text33: `El resultado de esto equivaldría a algo similar a lo siguiente.`,
        nota8: `#236789`,
        text34: `El hexadecimal de arriba te da un adorable color azul sombrío.`,
        text35: `Puedes ver este código en acción visitando el repo GitHum que creamos asociado con la siguiente imagen.`,
        img3: `https://blog.hubspot.es/hubfs/media/queesjavascriptejemplo.jpeg`,
        fontImg: `https://athenaozanich.github.io/random-quote-generator/`,
        text36: `Este código, como un todo, generaría un color aleatorio para el fondo del cuerpo HTML en cada carga de página. En algún punto, este código podría considerarse un «JavaScript Vainilla». Sin embargo, como ya existe una biblioteca llamada JS Vainilla, es mejor referirse a él como «JS Estándar» para evitar confusiones.`,
        text37: `Dicho esto, debe recalcarse por qué la distinción es tan importante. La programación de bibliotecas de lenguajes utiliza una sintaxis ligeramente diferente al lenguaje en donde se crean. Así que veamos algunos ejemplos de bibliotecas JavaScript y las diferencias entre ellas y el código estándar.`,
        tittle6: `Bibliotecas JavaScript`,
        text38: `Existen varias bibliotecas JavaScript que pueden ayudar a mejorar la rapidez y claridad de tus esfuerzos de código. Las bibliotecas contribuyen a mantener tu código limpio y maximizan la velocidad y la eficiencia de escribir tu código de programación. Sin embargo, como resultado, la sintaxis cambia constantemente, así que hay una curva de aprendizaje para cada biblioteca.`,
        text39: `Revisemos un par de ejemplos de bibliotecas que puedes usar en tu flujo de trabajo.`,
        subTittle3: `Biblioteca JavaScript Jquery`,
        text40: `Jquery es la biblioteca más popular para la programación JavaScript gracias a su longevidad y su flexibilidad de uso. Mejora la eficiencia y añade más funciones al lenguaje de programación al crear utilizando sus nuevas características. Pero, primero, veamos cómo difiere de la sintaxis de un JavaScript tradicional.`,
        nota9: `$('#superponer').on( "click", '#prev', funcion(){ currIdx--; si (currIdx < 0) { currIdx = 11; }}`,
        text41: `Este ejemplo parece complejo, pero enfoquémonos en un solo punto, la función más exterior de este código.`,
        nota10: `$('#superponer').on( "click", '#prev',funcion(){}`,
        text42: `Este código es Jquery válido, pero sin incluir la biblioteca Jquery podría arrojar un error si la usaras con JavaScript tradicional. Este código también incluye dos cosas que vale la pena resaltar: el selector $, un método de atajo para apuntar a objetos HTML; y el método .on() es un escucha de evento que espera oír un «clic» en la ventana del navegador.`,
        text43: `Otra biblioteca popular es la que se conoce como React. Hablemos de ella y en cómo se diferencia del JS estándar.`,
        subTittle4: `Biblioteca JavaScript React`,
        text44: `La biblioteca React ya es muy popular y se creó para facilitar el desarrollo de aplicaciones web. Es robusta y hoy en día tiene una gran cantidad de contribuyentes de código abierto que añaden, prueban y mantienen la biblioteca. Opera de forma distinta a la mayoría de bibliotecas, y es más compleja, pero revisemos la sintaxis para mayor claridad.`,
        nota11: `clase ListadeCompras extends React.Component { render() { return ( <div classname="lista-de-compras"> <h1>Lista de compras para {this.props.name}</h1> <ul> <li>Pan</li> <li>Leche</li> <li>Huevos</li> </ul> </div> ); }}`,
        text45: `Como puedes ver, es mucho más diferente a tu código JavaScript estándar, o incluso de Jquery, si a esas vamos. En React, declaras tu HTML en tu JavaScript, y se traduce después de que el código corre, lo que es distinto a la aproximación del desarrollo web estandarizado.`,
        text46: `Muchas otras bibliotecas y marcos de trabajo están disponibles para tu flujo de trabajo, y todos tienen diferencias en la sintaxis, características y flexibilidad. Elegir la correcta para ti requerirá de un poco de investigación y consideración de los diversos factores.`,
        tittle7: `Comienza a aprender JavaScript hoy mismo`,
        text47: `Este artículo te inicia en tu viaje hacia el aprendizaje de JavaScript, sin embargo puedes aprender más sobre los tipos de datos en javascript, las expresiones regulares, los arrays, strings, splits, las variables globales, cómo validar formularios y qué es un settimeout; entre otras muchas funciones de javascript.`,
        text48: `Aun así, aprender JavaScript es fácil y existen muchos recursos en internet para ayudarte a programar con este lenguaje. No es necesario dominar el desarrollo web, pero esa es quizá la forma más simple de practicar tus habilidades de programación JavaScript.`,
        text49: `Otras maneras en que puedes practicar incluyen sitios como CodePen, que proveen todo el software que necesitas para practicar tu trabajo como desarrollador JavaScript.`,
        fuente: {
          name: 'HubSpot',
          url: 'https://blog.hubspot.es/website/que-es-javascript',
        },
        images: {
          1: `https://desarrolloweb.com/storage/article_featured_images/tY9DQvIKK1LJ9R8h70Iu5StsWEuQ6ck5yzxOGPNH.jpeg`,
          2: `https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png`,
          3: `https://dc722jrlp2zu8.cloudfront.net/media/uploads/2020/08/20/pildora-03-captura1.jpg`,
          4: `https://raw.githubusercontent.com/exegeses/Javascript-dsd-0-45935/main/imagenes/javascript.jpg`,
        },
      },
    },
    {
      name: '¿Qué son los estándares Web W3C?',
      img: '../../../assets/small/estandares-web.png',
      description: '¿Por qué es importante cumplir con estos estándares?',
      link: 'https://www.itcha.edu.sv/blog/950',
      tag: 'Desarrollo Web',
      content: {
        date: 'Publicado el 01/07/2019 09:00',
        autor: `Instituto Tecnológico de Chalatenango`,
        text1: `Los estándares Web W3C son protocolos, pautas y tecnologías inter-operativas e internacionales creadas con la finalidad de guiar la Web a un mejor rendimiento y mejorar la funcionalidad operativa para los navegadores y usuarios.`,
        subTittle1: `¿Por qué es importante cumplir con estos estándares?`,
        nota1: `La finalidad de los estándares es la creación de una Web universal, accesible, fácil de usar y en la que todo el mundo pueda confiar.`,
        text2: `Los sitios web son construidos a través de un lenguaje llamado por sus siglas HTML (Hypertext Markup Languaje) y CSS (Cascade Style Sheet) estas instrucciones o etiquetas sin el cumplimiento de los estándares o la validación correcta pueden presentar diferencias o errores si se visualizan desde diferentes navegadores web (Chrome, Mozilla, IE, Edge, Opera, entre otros) por lo tanto es importante seguir los estándares, se puede cometer el error de usar etiquetas que están desfasadas o etiquetas que para algunos navegadores no son reconocidas.`,
        text3: `Cuando surgió HTML5 y CSS3 en el año 2012 muchos navegadores aún no estaban preparados para interpretar las nuevas etiquetas, el caso más conocido es Internet Explorer el navegador que siempre fue muy problemático por su poca compatibilidad con las etiquetas de HTML5 y las propiedades de CCS3. Tras varias actualizaciones hoy en día los navegadores ya son compatibles con la "mayoría" de etiquetas y propiedades de HTML5 y CSS3, que un sitio web se vea igual en todos los navegadores no es algo que pasa automáticamente, para lograrlo es necesario cumplir con reglas y estándares que establece la W3C.`,
        img1: `https://www.itcha.edu.sv/publicaciones/ITCHA/IMG/html5forminput.png`,
        descripImg: `Nivel de compatibilidad de algunas etiquetas HTML5 en su aparición en el año 2012, nuestro buen Internet Explorer estaba a cero.`,
        subTittle2: `¿Qué es el W3C?`,
        text4: `El Consorcio World Wide Web (W3C) es una comunidad internacional donde las organizaciones Miembro, personal a tiempo completo y el público en general trabajan conjuntamente para desarrollar estándares Web.`,
        text5: `Liderado por el inventor de la Web Tim Berners-Lee y el Director Ejecutivo (CEO) Jeffrey Jaffe, la misión del W3C es guiar la Web hacia su máximo potencial.`,
        subTittle3: `Estos son algunos de los aspectos que verifica W3C`,
        text6_1: `Calidad en el código: `,
        text6_2: `Usar correctamente las etiquetas, no usar id repetidos, evitar errores de JavaScript, entre otros.`,
        text7_1: `Accesibilidad para usuarios: `,
        text7_2: `Utilizar los atributos "alt" para todas las imágenes, usar enlaces descriptivos, contraste en los colores, entre otros.`,
        text8_1: `Accesibilidad para dispositivos: `,
        text8_2: `Funciona en la mayoría de navegadores y sus versiones más antiguas, valida si funciona en dispositivos móviles y en diferentes tamaños de pantalla, entre otros.`,
        text9_1: `Gestión del sitio: `,
        text9_2: `No tiene enlaces rotos, usa una página 404 personalizada, usa urls amigables, entre otros.`,
        nota2_1: `Para saber si un sitio web está cumpliendo los estándares y verificar cuáles errores tiene, W3C posee páginas de prueba para validar el HTML5 y el CSS3 de un sitio web.`,
        nota2_2: `Nuestro sitio web www.itcha.edu.sv aprueba sin errores el test de HTML5 y el de CSS3!`,
        nota2_3: `Puedes comprobarlo en W3C HTML5 Validator itcha.edu.sv y en W3C CSS3 Validator itcha.edu.sv`,
        nota2_img1: `https://www.itcha.edu.sv/publicaciones/ITCHA/IMG/vcss.gif`,
        nota2_img_link1: `https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwww.itcha.edu.sv&profile=css3svg`,
        nota2_img2: `https://www.itcha.edu.sv/publicaciones/ITCHA/IMG/vhtml.gif`,
        nota2_img_link2: `https://validator.w3.org/nu/?doc=https%3A%2F%2Fwww.itcha.edu.sv`,
        subTittle4: `SEO para sitios web`,
        text10: `La validación de W3C es solo uno de los aspectos dentro de la práctica del SEO (Search Engine Optimization) para sitios web. Consiste en dar cumplimiento a diferentes reglas y configuraciones con el objetivo de lograr el mayor rendimiento posible en cuanto a la velocidad y mejorar el posicionamiento en los Motores de Búsqueda (Google, Bing...). Google para desarrolladores provee una herramienta muy útil para identificar errores y las posibles configuraciones o acciones a realizar para solventarlos. Se trata de PageSpeed Insights - Google Developers`,
        text11: `Esta métrica es más exhaustiva y comprueba las buenas prácticas realizadas para lograr que el sitio web sea más rápido, entre los consejos más importantes están:`,
        textlist1: `Minimizar el código JavaScript, HTML y CSS`,
        textlist2: `Usa un tamaño adecuado para las imágenes`,
        textlist3: `Usa una política de caché eficaz en recursos estáticos`,
        textlist4: `Evita que haya varias redirecciones de página`,
        textlist5: `Evita cargas de archivos demasiado grandes.`,
        textlist6: `Entre otras.`,
        text12_bold1: `Prueba en el sitio web del Instituto Tecnológico de Chalatenango >> `,
        text12_bold2: `Realizar Prueba`,
        text12_bold2_link: `https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.itcha.edu.sv%2F&tab=desktop`,
        fuente: {
          name: 'Instituto Tecnológico de Chalatenango',
          url: 'https://www.itcha.edu.sv/blog/950',
        },
        images: {
          1: `https://ipmark.com/wp-content/uploads/2020/03/W3C-web.jpg`,
          2: `https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-w3c/sta-je-w3c.jpg`,
          3: `https://www.inesem.es/revistadigital/informatica-y-tics/files/2019/09/portada-1-1020x680.jpg`,
          4: `https://www.mavksoft.es/wp-content/uploads/2016/06/W3C-Markup-Validator.png`,
        },
      },
    },
    {
      name: '¿Qué es Angular?',
      img: '../../../assets/small/que-es-angular.png',
      description: '¿Qué es Angular y para qué sirve?',
      link: 'https://www.hiberus.com/crecemos-contigo/que-es-angular-y-para-que-sirve/',
      tag: 'Desarrollo Web',
      content: {
        date: 'Publicado el 13/10/2021',
        autor: `Por Manuel José Gonçalves`,
        text1: `Este artículo puede ayudarte a comprender Angular: qué es Angular, qué ventajas ofrece y qué puede esperar al comenzar a construir sus aplicaciones.`,
        text2: `Angular es una plataforma de desarrollo, construida sobre TypeScript. Es un framework basado en componentes para crear aplicaciones web escalables. Una colección de bibliotecas bien integradas que cubren una amplia variedad de características, que incluyen enrutamiento, administración de formularios, comunicación cliente-servidor y más. Un conjunto de herramientas para desarrolladores que permiten desarrollar, compilar, probar y actualizar el código fuente de la aplicación.`,
        text3: `Con Angular, estás aprovechando una plataforma que puede escalar desde proyectos de un solo desarrollador hasta aplicaciones de nivel empresarial. Angular está diseñado para que la actualización sea lo más sencilla posible, y así aprovechar los últimos desarrollos con un mínimo de esfuerzo. Lo mejor de todo es que el ecosistema Angular consta de un grupo diverso de más de 1,7 millones de desarrolladores, autores de bibliotecas y creadores de contenido.`,
        tittle1: `¿Qué es Angular?`,
        text4: `Angular es un Framework de JavaScript de código abierto escrito en TypeScript. Su objetivo principal es desarrollar aplicaciones de una sola página. Google se encarga del mantenimiento y constantes actualizaciones de mejoras para este framework.`,
        tittle2: `¿Por qué se necesita un Framework?`,
        text5: `En concreto, en el desarrollo de software, un framework es una estructura de soporte conceptual y tecnológica definida, generalmente, con artefactos o módulos de software específicos, que pueden servir como base para la organización y desarrollo de software.`,
        text6: `Es decir, un framework es una especie de plantilla, esquema o estructura conceptual basada en tecnología que permite trabajar de una forma mucho más sencilla. De esta forma, se evitan posibles errores de programación.`,
        text7: `Por tanto, un marco es un conjunto de herramientas y módulos que se pueden reutilizar para diferentes proyectos. Facilitando en varios aspectos el desarrollo, mejorando el tiempo, esfuerzo, organización.`,
        tittle3: `Versiones de Angular`,
        text8: `«Angular» es el término general para las distintas versiones que existen. Angular se desarrolló en 2009 y, como resultado, ha ido evolucionando cada vez más.`,
        text9: `Primero, estaba el Angular original, llamado Angular 1 y eventualmente conocido como AngularJS. Luego vinieron Angular 2, 3, 4, 5, 6, 7 hasta que finalmente, la versión actual, Angular 12, lanzada el 12/05/2021. Cada versión posterior de Angular mejora su predecesora, corrige errores, aborda problemas y se adapta a la creciente complejidad de las plataformas actuales.`,
        tittle4: `Características de Angular`,
        subTittle1: `Document Object Model (DOM)`,
        text10: `DOM (Document Object Model) trata un documento XML o HTML como una estructura de árbol en la que cada nodo representa una parte del documento.`,
        img1: `https://miro.medium.com/max/486/1*aXkyRKW3S5t1n6x1TgmcxA.png`,
        text11: `Angular usa DOM regular. Hay que tener en cuenta que se realizan diez actualizaciones en la misma página HTML. En lugar de actualizar las que ya se actualizaron, Angular actualizará toda la estructura de árbol de las etiquetas HTML. A diferencia de otros frameworks como React.`,
        subTittle2: `TypeScript`,
        text12: `TypeScript define un conjunto de tipos de JavaScript, lo que ayuda a los usuarios a escribir código JavaScript que es más fácil de entender. Todo el código TypeScript se compila con JavaScript y se puede ejecutar sin problemas en cualquier plataforma. TypeScript no es obligatorio para desarrollar una aplicación Angular. Sin embargo, es muy recomendable ya que ofrece una mejor estructura sintáctica, al tiempo que hace que la base de código sea más fácil de entender y mantener.`,
        subTittle3: `Data Binding (Enlace de datos)`,
        text13: `El enlace de datos (data binding) es un proceso que permite a los usuarios manipular elementos de la página web a través de un navegador web. Emplea HTML dinámico y no requiere secuencias de comandos ni programación complejas. El enlace de datos se utiliza en páginas web que incluyen componentes interactivos, como calculadoras, tutoriales, foros y juegos. También permite una mejor visualización incremental de una página web cuando las páginas contienen una gran cantidad de datos.`,
        text14: `Angular usa el enlace bidireccional. El estado del modelo refleja los cambios realizados en los elementos de la interfaz de usuario correspondientes. Por el contrario, el estado de la interfaz de usuario refleja cualquier cambio en el estado del modelo. Esta característica permite que el marco conecte el DOM a los datos del modelo a través del controlador.`,
        subTittle4: `Testing (Pruebas)`,
        text15: `Angular usa el Framework de prueba Jasmine. Jasmine proporciona múltiples funcionalidades para escribir diferentes tipos de casos de prueba. Karma es el ejecutor de tareas para las pruebas que usa un archivo de configuración para configurar la puesta en marcha, los reportes y el framework de prueba.`,
        subTittle5: `Arquitectura de Angular`,
        img2: `https://www.simplilearn.com/ice9/free_resources_article_thumb/Angular_Architecture-What_is_Angular.PNG`,
        text16: `Angular es un marco modelo-vista-controlador (MVC) completo. Proporciona una guía clara sobre cómo se debe estructurar la aplicación y ofrece un flujo de datos bidireccional al tiempo que proporciona un DOM real.`,
        subTittle6: `Módulos`,
        text17: `Una aplicación Angular tiene un módulo raíz, llamado AppModule, que proporciona el mecanismo de arranque para iniciar la aplicación.`,
        subTittle7: `Componentes`,
        text18: `Estos son piezas o fragmentos de código que define una clase que contiene la lógica y los datos de la aplicación. Un componente por lo general define una parte de la interfaz de usuario (UI).`,
        text19: `Ejemplo mínimo:`,
        img3: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.20.11-1024x446.png`,
        text20: `Esto genera el siguiente template para así ser usado:`,
        img4: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.20.41-1024x111.png`,
        text21: `Cuando Angular haga el render del componente, el DOM resultante será así:`,
        img5: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.20.48-1024x182.png`,
        subTittle8: `Plantillas`,
        text22: `Es una combinación entre el marcado Angular con HTML para modificar los elementos HTML antes de que se muestren. Hay dos tipos de enlace de datos:`,
        text23: `Enlace de eventos: permite que su aplicación responda a la entrada del usuario en el entorno de destino actualizando los datos de su aplicación.`,
        text24: `Enlace de propiedad: permite a los usuarios interpolar valores que se calculan a partir de los datos de su aplicación en el HTML.`,
        text25: `Ejemplo:`,
        img6: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.26.29-1024x107.png`,
        text26: `Nótese que el valor de message viene del componente:`,
        img7: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.26.38-1024x357.png`,
        text27: `Cuando la aplicación cargue el componente y su template, el usuario verá lo siguiente:`,
        img8: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.26.51-1024x103.png`,
        subTittle9: `Metadatos`,
        text28: `Los metadatos le dicen a Angular cómo procesar una clase. Se utiliza para decorar la clase para que pueda configurar el comportamiento esperado de una clase.`,
        subTittle10: `Servicios`,
        text29: `Los servicios sirven para compartir información entre componentes o incluso hacer peticiones http a apis para obtener la información. Los servicios funcionan solo en ámbito de lógica o datos, no están asociados a la vista.`,
        subTittle11: `Inyección de dependencia`,
        text30: `Esta característica le permite mantener sus clases de componentes nítidas y eficientes. No obtiene datos de un servidor, no valida la entrada del usuario ni se registra directamente en la consola. En cambio, delega tales tareas a los servicios.`,
        subTittle12: `Directivas Angular`,
        text31: `Las directivas amplían el HTML proporcionándole una nueva sintaxis. Puede detectar fácilmente las directivas porque tienen el prefijo «ng-«. Considérelos marcadores en el elemento DOM, indicando a Angular que adjunte un determinado comportamiento al elemento, o incluso que lo cambie por completo.`,
        text32: `Aquí hay dos directivas de muestra:`,
        textlist1: `La Directiva modelo ng`,
        text33: `El modelo ng vincula el valor del control HTML con el valor de expresión`,
        img9: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.37.48-1024x180.png`,
        textlist2: `La Directiva ng-bind`,
        text34: `Esta directiva reemplaza el valor de control HTML con un valor de expresión`,
        img10: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/Screenshot-2021-10-11-at-11.38.09-1024x183.png`,
        tittle5: `Ventajas de Angular`,
        img11: `https://www.hiberus.com/crecemos-contigo/wp-content/uploads/2021/10/angular-todo-lo-que-necesitas-saber.png`,
        subTittle13: `Componentes personalizados`,
        text35: `Los usuarios tienen total libertad de construir sus propios componentes que pueden empaquetar la funcionalidad junto con la lógica de renderizado en piezas reutilizables en el código`,
        subTittle14: `Enlace de datos`,
        text36: `Una de las grandes ventajas es que permite a los usuarios mover datos sin esfuerzo desde el código JavaScript a la vista y reaccionar a los eventos del usuario sin tener que escribir ningún código manualmente.`,
        subTittle15: `Inyección de dependencia`,
        text37: `Angular permite a los usuarios escribir servicios modulares e inyectarlos donde sea que se necesiten. Esto mejora la capacidad de prueba y la reutilización de los mismos servicios.`,
        subTittle16: `Pruebas`,
        text38: `Las pruebas son herramientas de primera clase y Angular no es la excepción en esto, se ha creado desde cero teniendo en cuenta la capacidad de prueba. Este permite realizar pruebas a cada parte de su aplicación, lo cual es muy recomendable.`,
        subTittle17: `Integral`,
        text39: `Angular es un framework completo y proporciona soluciones listas para usar para la comunicación del servidor, el enrutamiento dentro de su aplicación y más.`,
        subTittle18: `Compatibilidad del navegador`,
        text40: `Angular es multiplataforma y compatible con muchos navegadores. Una aplicación angular normalmente se puede ejecutar en todos los navegadores (por ejemplo; Chrome, Firefox) y sistemas operativos, como Windows, macOS y Linux.`,
        tittle6: `Limitaciones de Angular`,
        subTittle19: `Curva de aprendizaje empinada`,
        text41: `Los componentes básicos de Angular que todos los usuarios deben conocer incluyen directivas, módulos, decoradores, componentes, servicios, inyección de dependencias, pipes y plantillas. Los temas más avanzados incluyen detección de cambios, zonas, compilación de AoT y Rx.js. Por ende, para los nuevos desarrolladores toma tiempo en aprender este nuevo Framework.`,
        subTittle20: `Opciones de SEO limitadas`,
        text42: `Angular ofrece opciones limitadas que cumplan con las métricas SEO necesarias y poca accesibilidad para los rastreadores de motores de búsqueda.`,
        subTittle21: `Migración`,
        text43: `Una de las razones por las que las empresas no utilizan Angular con frecuencia es la dificultad de trasladar el código heredado basado en js / jquery a una arquitectura de estilo angular. Además, cada nueva versión puede ser problemática de actualizar y varias de ellas no son compatibles con versiones anteriores. Por ende, al desarrollar una webapp con Angular casi siempre se prefiere dejarla en la versión que se desarrollo en vez de realizar una migración a una nueva versión.`,
        subTittle22: `Complejo`,
        text44: `Un problema común en la comunidad Angular es la forma en como debe escribirse el Framework. También es bastante complejo en comparación con otras herramientas de front-end.`,
        fuente: {
          name: 'Blog de Hiberus Tecnología',
          url: 'https://www.hiberus.com/crecemos-contigo/que-es-angular-y-para-que-sirve/',
        },
        images: {
          1: `https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/09/angular-homepage.jpg`,
          2: `https://d33wubrfki0l68.cloudfront.net/ff72a984446f3a3cc4aa689c2c409b57344c88e1/cc4c7/assets/images/notes/angular-intro/ventajas-angular.jpg`,
          3: `https://1063914396-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LbFy569GFu09bPpzMDJ%2F-LnKtJmabg9aTmiUQ_Nt%2F-LnKuLqAcPXbYIFaPxgC%2Finfografia-large.png?alt=media&token=642cc19f-119b-4f80-bd3f-9c0eea45e1e3`,
          4: `https://kinsta.com/es/wp-content/uploads/sites/8/2021/06/php-vs-angular.png`,
        },
      },
    },
  ];

  images0 = Object.entries(this.articles[0].content.images).map((i) => i[1]);
  images1 = Object.entries(this.articles[1].content.images).map((i) => i[1]);
  images2 = Object.entries(this.articles[2].content.images).map((i) => i[1]);
  images3 = Object.entries(this.articles[3].content.images).map((i) => i[1]);
  images4 = Object.entries(this.articles[4].content.images).map((i) => i[1]);

  items0: GalleryItem[] = [];
  items1: GalleryItem[] = [];
  items2: GalleryItem[] = [];
  items3: GalleryItem[] = [];
  items4: GalleryItem[] = [];
  constructor(public gallery: Gallery) {
    for (let image of this.images0) {
      let item = new ImageItem({ src: image, thumb: image });
      this.items0.push(item);
    }
    for (let image of this.images1) {
      let item = new ImageItem({ src: image, thumb: image });
      this.items1.push(item);
    }
    for (let image of this.images2) {
      let item = new ImageItem({ src: image, thumb: image });
      this.items2.push(item);
    }
    for (let image of this.images3) {
      let item = new ImageItem({ src: image, thumb: image });
      this.items3.push(item);
    }
    for (let image of this.images4) {
      let item = new ImageItem({ src: image, thumb: image });
      this.items4.push(item);
    }
  }

  open() {
    this.gallery.ref('0').load(this.items0);
    this.gallery.ref('1').load(this.items1);
    this.gallery.ref('2').load(this.items2);
    this.gallery.ref('3').load(this.items3);
    this.gallery.ref('4').load(this.items4);
  }

  zoomin = false;
  zoom() {
      this.zoomin = !this.zoomin;
  }
  ngOnInit(): void {
    this.open();
  }
}
