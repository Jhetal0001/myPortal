import { Component, OnInit } from '@angular/core';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-blogspace',
  templateUrl: './blogspace.component.html',
  styleUrls: ['./blogspace.component.scss']
})
export class BlogspaceComponent implements OnInit {

  articles: any[] = [
    {
      name: '¿Qué es HTML?',
      img : '../../../assets/Que-es-el-HTMLjpg.jpg',
      description : 'Llegó el momento de hablar sobre HTML, el lenguaje con el que crean las páginas web.',
      link : 'https://desarrolloweb.com/articulos/que-es-html.html',
      tag : 'Desarrollo Web',
      content : {
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
          url: 'https://desarrolloweb.com/articulos/que-es-html.html'
        },
        images: {
          1 : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU`,
          2 : `https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Teaser/html-tagst.jpg`,
          3 : `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HTML_logo.png/250px-HTML_logo.png`,
          4 : `https://guru-soft.com/wp-content/uploads/2022/01/%C2%BFQue-es-el-HTML-1536x1030.jpg`
        }

      }
    },
    {
      name: '¿Qué es CSS?',
      img : '../../../assets/que-es-css.png',
      description : 'Lenguaje de estilos para dotar de aspecto visual',
      link : 'https://lenguajecss.com/css/introduccion/que-es-css/',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué es JavaScript?',
      img : '../../../assets/que-es-javascript.jpg',
      description : 'Qué es JavaScript, para qué sirve y cómo funciona',
      link : 'https://animaciones-css-jf.web.app/',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué son los W3C?',
      img : '../../../assets/estandares-web.jpg',
      description : '¿Por qué es importante cumplhir con estos estándares?',
      link : 'https://www.itcha.edu.sv/blog/950',
      tag : 'Desarrollo Web'
    },
    {
      name: '¿Qué son Angular?',
      img : '../../../assets/que-es-angular.jpg',
      description : '¿Qué es Angular y para qué sirve?',
      link : 'https://www.hiberus.com/crecemos-contigo/que-es-angular-y-para-que-sirve/',
      tag : 'Desarrollo Web'
    },
  ]

  _albums:any = [];
  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {
    for (let prop of this.images) {
      const src = prop;
      const caption = '';
      const thumb = '';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this._albums.push(album);
    }
  }
  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index, {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      positionFromTop: 70,
      alwaysShowNavOnTouchDevices: true,
      albumLabel: '%1 of %2'
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

   images = Object.entries(this.articles[0].content.images).map(i => i[1])

  ngOnInit(): void {

  }

}
