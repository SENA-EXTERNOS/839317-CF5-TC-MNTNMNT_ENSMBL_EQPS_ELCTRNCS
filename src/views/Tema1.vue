<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Residuos 
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Son considerados como los elementos eléctricos y electrónicos descartados por su obsolescencia, poco uso, cumplimiento de su vida útil, entre otros. Comprende una amplia gama de aparatos, que necesitan campos electromagnéticos o corrientes eléctricas para su funcionamiento. En otras palabras, hacen referencia a todos aquellos componentes, subconjuntos y consumibles que forman parte del producto en el momento en que se desecha.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Categorización
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .tarjeta.tarjeta-icono-lado.derecha.p-3(style='background-color: #e5e7f2').mb-5
          img(src='@/assets/curso/temas/tema1/2.svg', alt='' ).d-lg-block.d-none
          p Antes de hacer una aproximación a la categorización de los AEE, es importante recordar que la sigla se refiere a todos aquellos aparatos eléctricos y electrónicos que, para funcionar de forma óptima, requieren estar conectados a una corriente eléctrica. En Colombia se categorizan los aparatos eléctricos y electrónicos (AEE), según la comercialización, el uso y en las labores de tipo doméstico que pueden facilitar.
    p.mb-5(data-aos='fade-right')
    .bg-cta.mn.mb-2
      .tarjeta.p-4.p-md-5.mb-5.bg-cta2
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0.p-5
            img(src="@/assets/curso/temas/tema1/3.svg")
          .col-md.col-lg-6
            .titulo-segundo.color-acento-contenido(data-aos='fade-right')
              h2 Infografía Categorización
            p.mb-3 Categorización de los aparatos eléctricos y electrónicos en Colombia
            a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo.pdf')" target="_blank" type="application/pdf")
              span Descargar 
              i.fas.fa-file-download
    p.mb-5(data-aos='fade-right') Las imágenes que se presentan en el siguiente enunciado, detallan aún más la categorización de los aparatos eléctricos y electrónicos en Colombia. 
    .tarjeta.bg-slyde.p-4
      SlyderA(tipo='b')
        div
          p.mb-5(data-aos='fade-right') En Colombia, los aparatos eléctricos y electrónicos (AEE) se pueden categorizar según su consumo: masivo, doméstico y el uso que puede ser profesional o industrial.
          .row.justify-content-center.mb-5
            .col-lg-6
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 2.
                br 
                span.fst-italic Categorización de Aparatos Eléctricos y Electrónicos.
              img(src='@/assets/curso/temas/tema1/4.svg', alt='').mb-2
              figcaption.border-3.fst-italic(style="background-color: #ddd8f4") Nota: Adaptado de Categorización de los Aparatos Eléctricos y Electrónicos en Colombia. Ministerio de Ambiente y Desarrollo Sostenible (2017)  
        div
          p.mb-5(data-aos='fade-right') Existen otro tipo de categorías para los aparatos eléctricos y electrónicos (AEE), utilizados en diferentes campos, hogar, instituciones, comercio y en empresas. Se presentan seis categorías equivalentes ilustradas en la siguiente tabla:
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 1.
                br 
                span.fst-italic Categorización de los apararos eléctricos y electrónicos (AEE) en la UE según directiva RAEE de 2002
              img(src='@/assets/curso/temas/tema1/5.svg', alt='').mb-3
              figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4")  Nota: Adaptado de Categorización de los apararos eléctricos y electrónicos (AEE) en la UE según directiva RAEE de 2002, Ministerio de Ambiente y Desarrollo Sostenible (2017).
              a.boton.color-acento-botones.indicador__container.d-block.text-center(@click="modal1 = true")
                span Ampliar imagen
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
        div
          p.mb-5(data-aos='fade-right') En la directiva RAEE de 2012 se clasifica desde el punto de vista del aparato y en la norma del 2002 se cataloga basada en la gestión del residuo. Para Colombia se podría adoptar cualquiera de las categorías. (Ministerio de Ambiente y Desarrollo Sostenible, 2017)  
          .row.justify-content-center.mb-5
            .col-lg-10
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 2.
                br 
                span.fst-italic Categorización de los apararos eléctricos y electrónicos (AEE) en la UE según directiva RAEE de 2012
              img(src='@/assets/curso/temas/tema1/6.svg', alt='').mb-3
              figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4")  Nota: Adaptado de Categorización de los apararos eléctricos y electrónicos (AEE) en la UE según directiva RAEE de 2012, Ministerio de Ambiente y Desarrollo Sostenible (2017, Pág. 27)
              a.boton.color-acento-botones.indicador__container.d-block.text-center(@click="modal2 = true")
                span Ampliar imagen
                i.fas.fa-search
                .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")  
      div
        img(src='@/assets/curso/temas/tema1/5.svg', alt='')
    ModalA(:abrir-modal.sync="modal2")  
      div
        img(src='@/assets/curso/temas/tema1/6.svg', alt='')
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Mezclas, sustancias y fluidos
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/7.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Existe una gran variedad de sustancias que pueden clasificar la composición de los residuos de los aparatos eléctricos y electrónicos en peligrosas y no peligrosas, aproximadamente unas 1000, siendo las de mayor riesgo aproximadamente un 3 % del total. (Greenpeace, 2011).  
            br
            br
            |Las emisiones de las mezclas y sustancias producidas por estos artilugios, tienen que ver con su manejo; por lo general los elementos críticos que contienen no representan un alto riesgo inminente para los seres vivos o el ambiente, dado a que vienen de forma sólida y no se vierten. 
    p.mb-5(data-aos='fade-right') Las sustancias se clasifican en sustancias peligrosas no peligrosas, a cada una de ellas se le debe dar un tratamiento y disposición especial. A continuación, se presenta la descripción de cada una de ellas, se sugiere observar atentamente las imágenes, pues ellas contienen información importante:
    TabsC.color-secundario.mb-5
      .bg-cta.py-4.py-md-5(titulo="Sustancias peligrosas")
        .row
          .col-lg-3.col-6: img(src='@/assets/curso/temas/tema1/8.svg', alt='')
          .col-lg-9
            p El mal tratamiento y disposición de este tipo de residuos, al someterlos a procesos físico-químicos no controlados puede ocasionar deterioro al ecosistema y a la integridad de las personas. El tratamiento de los desechos electro-electrónicos debe ser diferente al de desperdicios normales que terminan en los rellenos sanitarios, contaminando el suelo, el aire, los cuerpos de agua, etc. En la siguiente Tabla 3, se muestran los diferentes tipos de sustancias que pueden resultar peligrosas.
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 3.
                br 
                span.fst-italic Posibles sustancias peligrosas presentes en los RAEE.
            img(src='@/assets/curso/temas/tema1/9.svg', alt='').mb-3
            figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4") Nota: Adaptado de Listado de posibles sustancias peligrosas presentes en los RAEE. Ministerio de Ambiente y Desarrollo Sostenible (2010, pág. 12)
            a.boton.color-acento-botones.indicador__container.d-block.text-center(@click="modal3 = true")
              span Ampliar imagen
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
      .bg-cta.py-4.py-md-5(titulo="Sustancias no peligrosas")
        .row
          .col-lg-3.col-6: img(src='@/assets/curso/temas/tema1/11.svg', alt='')
          .col-lg-9
            p Los metales en su gran mayoría forman más de 50 % de la composición de los AEE, el acero y el hierro casi la mitad, los plásticos, los metales no ferrosos, vidrio, madera, materiales cerámicos, caucho y tarjetas de circuitos impresos completan la composición. También se encuentra oro, plata, paladio y platino en menor cantidad (Ministerio de Medio Ambiente y Desarrollo Sostenible, 2010). 
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Tabla 4.
                br 
                span.fst-italic Composición porcentual de materiales presentes en los RAEE.
            img(src='@/assets/curso/temas/tema1/10.svg', alt='').mb-3
            figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4") Nota: Adaptado de Composición porcentual de materiales presentes en los RAEE. Ministerio de Medio Ambiente y Desarrollo Sostenible (2017, Pág. 28) 
            a.boton.color-acento-botones.indicador__container.d-block.text-center(@click="modal4 = true")
              span Ampliar imagen
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal3")  
      div
        img(src='@/assets/curso/temas/tema1/9.svg', alt='')
    ModalA(:abrir-modal.sync="modal4")  
      div
        img(src='@/assets/curso/temas/tema1/10.svg', alt='')
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3. Material crítico 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .tarjeta.tarjeta-icono-lado.izquierda.p-3(style='background-color: #e5e7f2').mb-5
          img(src='@/assets/curso/temas/tema1/12.svg', alt='' style="width: 300px; top: 30px").d-lg-block.d-none
          p Hace referencia a algunos metales preciosos y mezcla de los mismos que se emplean para la fabricación de estos aparatos; es de acotar que la consecución de los mismos se efectúa mediante explotación minera y se le debe aplicar muchos químicos que afectan directamente el medio ambiente. 
            br
            br
            |Comparativamente con el resto de los materiales, su presencia es muy baja, pero son muy importantes por su valor económico.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4. Potencial de reciclaje
    p.mb-5(data-aos='fade-right') El mundo está produciendo cada vez más residuos de aparatos eléctricos y electrónicos, los reportes entregados indican que van en auge, el aumento presentado desde el 2014 ha prendido las alarmas y pese a los esfuerzos este es un fenómeno que sigue creciendo.
      br
      br
      | Los datos que se muestra a continuación, detallan las cifras del crecimiento de residuos de aparatos eléctricos y electrónicos
    .tarjeta.bg-slyde2.p-4
      SlyderA(tipo='b')
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Según el reporte sobre el monitoreo global de los desechos electrónicos, realizado por el Instituto para el Estudio Avanzado de la Sostenibilidad de la Universidad de las Naciones Unidas, la generación mundial de los RAEE en el 2014 fue de 41,8 millones de toneladas y se estimaba que creciera a 49,8 millones de toneladas al 2018, con una tasa de progresión anual del 4,98%. De esta cantidad solo 6,5 millones de toneladas de residuos de aparatos eléctricos y electrónicos (16 % del total generado) se reportaron como gestionadas formalmente por un sistema de recolección y adecuada disposición final. (Balde et al., 2015) (Baldé, 2015)
          .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/13.png', alt='')
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Los datos presentados a pesar de ser de hace varios años atrás, denotan lo preocupante del tema y lo exorbitante que hace suponer el incremento para el periodo actual, dado el aumento de los dispositivos y la gran gama de aparatos, al igual que la diversidad de aplicaciones expuestas que existen en el mercado. Es por ello que se desconocen los volúmenes de los residuos generados en todo el mundo, dado que se ignoran las cantidades manipuladas por sectores informales. De ahí la importancia de lograr conciencia acerca del buen manejo de estos elementos y del adecuado manejo al terminar la vida útil de los mismos.
            a.boton.color-acento-botones.indicador__container.d-inline-block.text-center(@click="modal5 = true")
              span Ampliar imagen
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
          .col-lg-6.col-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              br 
              span.fst-italic Cifras mundiales de la disposición final de los RAEE  hasta el 2018.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6 
                img(src='@/assets/curso/temas/tema1/14.svg', alt='').mb-3
              figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4").fw-normal Nota: Adaptado de The Global E-waste Monitor 2014: Quantities, Flows and Resources. United Nations Univ., Inst. for the advanced study on sustainability. (Balde et al., 2015).  Cifras mundiales de la disposición final de los RAEE. Baldé (2015).
        .row.justify-content-between.align-items-center
          .col-md-6.mb-4.mb-md-0
            p El reporte conocido para Colombia frente a esta problemática en el 2014, expone una generación de residuos de 252.000 toneladas, equivalentes a un 5.3 % kilogramos por cada habitante, teniendo como base de población 47.71 millones de habitantes, entre los que se resaltan los teléfonos celulares, electrodomésticos, computadores, bombillas y baterías, (Ministerio de Ambiente y Desarrollo Sostenible, 2017)   
            a.boton.color-acento-botones.indicador__container.d-inline-block.text-center(@click="modal6 = true")
              span Ampliar imagen
              i.fas.fa-search
              .indicador--click(v-if="mostrarIndicador")
          .col-lg-6.col-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              br 
              span.fst-italic Estudios desarrollados en Colombia sobre generación de RAEE.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6 
                img(src='@/assets/curso/temas/tema1/am1.svg', alt='').mb-3
              figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4").fw-normal Nota: Estudios desarrollados en Colombia sobre generación de RAEE. Ministerio de Ambiente y Desarrollo Sostenible (2017). 
    ModalA(:abrir-modal.sync="modal5")  
      div
        img(src='@/assets/curso/temas/tema1/14.svg', alt='')
    ModalA(:abrir-modal.sync="modal6")  
      div
        img(src='@/assets/curso/temas/tema1/am2.svg', alt='')
    Separador 
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5  Salud y medio ambiente
    .bg-cta3.p-5
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="fade-right")
          p Existen tres factores que preocupan a la comunidad mundial por las sustancias que pueden llegar a liberar y ellas son:  el cadmio, el mercurio y el plomo que pueden llegar a producir emisiones tales como: los lixiviados de disposiciones finales, materiales particulados por los desarmes de los aparatos (tanto finos como grandes), cenizas de quemas de componentes y del aire, liberación de humo de las soldaduras y por quema de los aparatos, aguas de desecho por montaje y desmontaje de los equipos y otras actividades propias con lixiviación. (Ministerio de Ambiente y Desarrollo Sostenible, 2017). 
        .col-lg-5.col-6(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            br
            span.fst-italic Residuos eléctricos y electrónicos.
          img(src='@/assets/curso/temas/tema1/16.png', alt='').mb-3
          figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4").fw-normal  Nota: Adaptado del Día Mundial del Medio Ambiente. Encyclopædia Britannica ImageQuest (2022). 
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6  Reutilización 
    p.mb-5(data-aos='fade-right') El video que se presenta a continuación, ilustra el proceso de aprovechar los aparatos eléctricos y electrónicos e indica cómo se puede disminuir la huella ecológica producto de los residuos que pueden generar este tipo de dispositivos. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador 
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.7  Reciclaje 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.derecha.p-3(style='background-color: #ffe6c1').mb-5
          img(src='@/assets/curso/temas/tema1/17.svg', alt='' style="width: 280px; right: 70px").d-lg-block.d-none
          p Es una técnica enfocada en la transformación y aprovechamiento de los residuos o del calor emitido por los componentes de los aparatos eléctricos y electrónicos. Este método se puede hacer de manera mecánica, manual o combinada. Debe separarse los residuos contaminantes y se obtienen tres grupos principales de materiales: metales, vidrios y plásticos, los cuales se restauran por medio de tres procesos básicos.
    p.mb-5(data-aos='fade-right') La fundición, refinación térmica y química e incineración son los tres procesos básicos a través de los cuales se realiza el proceso de reciclaje de los equipos eléctricos y electrónicos: Aquí los tres grupos: 
    .row.justify-content-center.mb-5
      .col-lg-11(data-aos="fade-right")
        TabsA.color-secundario.mb-5
          .tarjeta.p-4(titulo="Fundición " style='background-color: #e5e7f2')
            p Se refiere al proceso de derretir y licuar metales o cuerpos sólidos y el reciclaje común de metales ferrosos, es decir que contienen hierro.
          .tarjeta.p-4(titulo="Refinación térmica y química" style='background-color: #e5e7f2')
            p Indica el método de la recuperación de metales nobles, no ferrosos, contenidos en las tarjetas de circuito impreso y en otros residuos eléctricos y electrónicos, a través de técnicas térmicas o químicas.
          .tarjeta.p-4(titulo="Incineración" style='background-color: #e5e7f2')
            p Los residuos sin valor, no aprovechables o con contenidos peligrosos son calcinados bajo altos estándares de calidad que permiten la recuperación del valor del aparato, esta puede ser en forma de energía eléctrica y así evitar la contaminación al ambiente por las emisiones atmosféricas, a través de sistemas de control y descontaminación de material particulado. (Ministerio de Ambiente y Desarrollo Sostenible, 2010).
      .col-lg-1.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/18.png', alt='')
    Separador
    #t_1_8.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.8  Disposición final 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.izquierda.p-5.bg-cards2.mb-5
          img(src='@/assets/curso/temas/tema1/19.svg', alt='' style='width: 280px ; left: 50px').d-lg-block.d-none
          p Al quedar partes de los residuos que no se aprovechan en otros procesos, es necesario disponer de ellos, basándose en las normas o disposiciones de cada sistema, para ello existen diferentes opciones:
    p.mb-5(data-aos='fade-right') A continuación, se presentan las alternativas para la disposición final de los residuos de aparatos eléctricos y electrónicos (AEE).
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5.dots-xl
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/20.svg', alt='Texto que describa la imagen')
          .tarjeta.p-3(x="50%" y="0%" numero="1" style='background-color: #cde6fa')
            h5 Reacondicionamiento, reparación y reúso
            p El proceso lo puede efectuar personas particulares o entidades públicas y/o privadas.
          .tarjeta.p-3(x="100%" y="38%" numero="2" style='background-color: #cde6fa')
            h5 Recolección
            p Encargada por los fabricantes, distribuidores y punto de retorno, por medio de rutas de recolección y empresas de reciclaje.
          .tarjeta.p-3(x="75%" y="95%" numero="3" style='background-color: #cde6fa')
            h5 Reciclaje
            p Siguiendo procesos de aprovechamiento (desensamble) y destrucción (la incineración controlada y especializada).

          .tarjeta.p-3(x="27%" y="95%" numero="4" style='background-color: #cde6fa')
            h5 Relleno sanitario
            p Los materiales tales como papel adherido, empaques, cauchos, gomas y polvo son los que se deben de depositar en los rellenos sanitarios comunes, porque estos no representan peligro, como pueden ser algunas sustancias y metales de los RAEE.
          .tarjeta.p-3(x="0%" y="38%" numero="5" style='background-color: #cde6fa')
            h5 Relleno de seguridad
            p Es el proceso que se hace cuando los métodos anteriores no son suficientes, deben de cumplir con los requerimientos técnicos para poder depositar los materiales en este tipo de relleno. Al no ser incinerados los termoplásticos granulados y molidos tienen la posibilidad de ser calcinados, sin no lo son, pueden estar en este relleno.
  
    Separador
    #t_1_9.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.9  Aprovechamiento y tratamiento 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.derecha.p-5(style='background-color: #ffe6c1').mb-5
          img(src='@/assets/curso/temas/tema1/21.svg', alt='').d-lg-block.d-none.ms-4.ps-5
          p Los residuos generados deben ser clasificados con el objetivo de recuperar y reutilizarlos en su mayoría y no perder partes, materiales o sistemas que puedan tener un segundo uso. El objetivo es no desperdiciar los elementos que puedan ser útiles y para ello se deben catalogar y dar un tratamiento adecuado que ayude con el propósito final y no perjudique ni la salud, ni el medio ambiente. Este ítem se amplía en el estudio del componente, en otros apartados con mayor profundidad, siguiendo la normatividad del país en este aspecto. (Ministerio de Ambiente y Desarrollo Sostenible, 2018)
    Separador
    #t_1_10.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.10  Etiquetado
    .bg-cta3.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-6(data-aos="fade-right")
          p El logo que se representa en la figura 6, debe de aparecer en todos los residuos de aparatos eléctricos y electrónicos, esta indica que debe ser clasificado antes de darse una disposición final, no se debe desechar directamente. 
            br
            br
            |Esta imagen debe ser expuesta en un lugar visible y legible del aparato, sólo es aceptable fuera de este si su tamaño no lo permite o si la marcación afecta el correcto funcionamiento, y debe de colocarse en los manuales y fichas de instrucciones y garantía, así como en el empaque.
        .col-lg-5.col-6(data-aos="fade-left")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6. 
            br
            span.fst-italic Etiqueta RAEE
          img(src='@/assets/curso/temas/tema1/22.png', alt='').mb-3
          figcaption.rounded-3.mb-3.fst-italic(style="background-color: #ddd8f4").fw-normal  Nota: Adaptado de Etiqueta de clasificación para RAEE, Your Europe (2022
      p Todos los aparatos comercializados en la Unión Europea deben de ser identificados con esta etiqueta y son obligatorias en los productos de las siguientes categorías. 
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/23.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Equipos de intercambio de temperatura como frigoríficos y aparatos de aire acondicionado.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Monitores, pantallas y dispositivos con pantallas de superficie superior a los 100 cm²
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Lámparas
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Aparatos grandes (dimensión exterior superior a 50 cm) tales como lavadoras, fotocopiadoras o paneles solares instalados en tejados.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Aparatos pequeños (tamaño exterior inferior a 50 cm) aplica para aspiradores, detectores de humo o relojes, entre otros.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #ddf7ec")
          .text-center.p-4
            p Aparatos pequeños de informática y telecomunicaciones (sin ninguna dimensión exterior superior a los 50 cm).
    Separador
    #t_1_11.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.11  Prevención de riesgos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.derecha.p-5(style='background-color: #e5e7f2').mb-5
          img(src='@/assets/curso/temas/tema1/29.svg', alt='').d-lg-block.d-none.ms-4.ps-5
          p Para esto se han establecido diferentes normas tanto a nivel nacional como internacional, para evitar los riesgos en la salud de la población y el deterioro al ambiente, de ahí la importancia en aunar esfuerzos hacía la prevención, la reducción de generación de estos residuos y la protección de los recursos naturales, orientados a la conciencia de la reutilización de aparatos y el reciclaje de los mismos. Para Colombia, el Ministerio de Ambiente y desarrollo sostenible, ha establecido normas como los #[em Lineamientos Técnicos para el Manejo de Residuos de Aparatos Eléctricos y Electrónicos (2010) y la Política Nacional de Gestión Integral de Residuos de Aparato Eléctricos y Electrónicos (2017).]
    

























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-cta2
  background-image: url('../assets/curso/temas/tema1/bg-cta2.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.bg-cta3
  background-image: url('../assets/curso/temas/tema1/bg-adornos.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
