<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Técnicas de manipulación de cargas
    p.mb-5(data-aos='fade-right') Para la manipulación de las cargas, se deben seguir las técnicas y las consideraciones necesarias para salvaguardar los residuos generados.
      br
      br
      | A continuación, se presentan algunas de las consideraciones para la manipulación de cargas: (Ministerio de Ambiente y Desarrollo Sostenible 2010) 
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema7/1.svg', alt='Texto que describa la imagen')
          .tarjeta.p-3(x="5.8%" y="47%" numero="1" style="background-color: #92f2c6")
            p #[b Protección contra la intemperie] #[br] Se debe garantizar siempre la protección contra la intemperie.

          .tarjeta.p-3(x="17.3%" y="47%" numero="2" style="background-color: #92f2c6")
            p #[b Acceso a la carga] 
              br
              |Durante el transporte se debe evitar que las personas no autorizadas tengan acceso a la carga, con el fin de impedir la adición o pérdida de partes o piezas de equipos sin supervisión.

          .tarjeta.p-3(x="28.4%" y="47%" numero="3" style="background-color: #92f2c6")
            p #[b Transporte de carga]
              br
              |La carga en el vehículo debe estar debidamente empacada, acomodada, estibada, apilada, sujeta y cubierta de tal forma que no presente peligro para la vida de las personas y el medio ambiente.

          .tarjeta.p-3(x="39.4%" y="47%" numero="4" style="background-color: #92f2c6")
            p #[b Empaques ]
              br
              | Para este fin se recomienda que todo transporte de residuos de aparatos eléctricos y electrónicos de tamaño mediano o pequeño se realice en cajas de madera, de cartón grueso o de rejas metálicas.
          .tarjeta.p-3(x="50.4%" y="47%" numero="5" style="background-color: #92f2c6")
            p #[b Estiba  ]
              br
              | En caso de transportar los residuos de aparatos eléctricos y electrónicos en estibas, estas se deben envolver con una película plástica cuando esté cargada.
          .tarjeta.p-3(x="61.5%" y="47%" numero="6" style="background-color: #92f2c6")
            p #[b Tamaño de la carga  ]
              br
              | Es recomendable no poner más de tres capas de residuos de aparatos eléctricos y electrónicos en las estibas y asegurar que la carga no sobresalga de las cajas.
          .tarjeta.p-3(x="72.6%" y="47%" numero="7" style="background-color: #92f2c6")
            p #[b Transporte de materiales en desuso ]
              br
              | Por lo general, no se requieren cartones o espumas entre las capas. Sin embargo, para algunas excepciones se recomienda colocarlos, por ejemplo, para el transporte de monitores en desuso.
          .tarjeta.p-3(x="84%" y="47%" numero="8" style="background-color: #92f2c6")
            p #[b Recolección y transporte de equipos de impresión ]
              br
              | En caso de ofrecer los servicios de recolección y transporte de equipos de impresión y fotocopia en desuso, tener un sistema de recolección de derrames de tinta para evitar contaminación del medio ambiente y de los demás componentes conjuntamente transportados.

          .tarjeta.p-3(x="94.3%" y="47%" numero="9" style="background-color: #92f2c6")
            p #[b Extintores multipropósito ]
              br
              | Portar como mínimo dos (2) extintores tipo multipropósito, uno en la cabina y los demás cerca de la carga, en sitio de fácil acceso para que se pueda disponer rápidamente en caso de emergencia, y contar con personal preparado para su utilización.
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.1  Aplicabilidad
    p.mb-5(data-aos='fade-right') Los componentes resultantes del proceso de desensamble de residuos de aparatos eléctricos y electrónicos, tales como baterías, discos duros, tarjetas de circuito impreso, pantallas etc., pueden ser transportados hacia plantas específicas para aprovechamiento, tratamiento o disposición final.
      br
      br
      | Para esto, se deben tener en cuenta las siguientes consideraciones (Ministerio de Ambiente y Desarrollo Sostenible 2010):
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema7/2.svg' alt='AvatarTop')
        .tarjeta.w-100.card-hover
          .p-4
            h4.text-center Empaque
            p Por lo general, los componentes de equipos electrónicos deben ser empacados de manera segura, evitando el desprendimiento de componentes con contenidos peligrosos al ambiente.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema7/3.svg' alt='AvatarTop')
        .tarjeta.w-100.card-hover
          .p-4
            h4.text-center Cajas Gaylord
            p Todos los componentes deben ser colocados preferiblemente en cajas de cartón (sueltas o caja Gaylord) o de madera.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema7/4.svg' alt='AvatarTop')
        .tarjeta.w-100.card-hover
          .p-4
            h4.text-center Estibas
            p Todas las cajas sueltas de cartón que se coloquen sobre las estibas deben ser envueltas con un plástico para colocarlas en palés.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema7/5.svg' alt='AvatarTop')
        .tarjeta.w-100.card-hover
          .p-4
            h4.text-center Verificar
            p Asegurar que la carga no sobresalga de la caja.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/tema7/6.svg' alt='AvatarTop')
        .tarjeta.w-100.card-hover
          .p-4
            h4.text-center Almacenamiento de baterías
            p Las características de empaque requeridas para el transporte de baterías deben cumplir los mismos requisitos considerados para el acopio.
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 7.2  Riesgos, prevención y cuidados
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.izquierda.p-5(style='background-color: #e5e7f2').mb-5
          img(src='@/assets/curso/temas/tema1/8.svg', alt='').d-lg-block.d-none
          p Siempre se debe evitar el deterioro de los residuos de aparatos eléctricos y electrónicos, dado que algunos de ellos pueden ser recuperados o pueden desgastarse a tal punto que presenten emisiones de sustancias peligrosas. Los riesgos están relacionados a la actividad que se esté efectuando en el momento y se han considerado ampliamente durante el componente. 
    p.mb-5(data-aos='fade-right') Se deben acatar y seguir todas las medidas de prevención y cuidado recomendado en la manipulación de las cargas (Ministerio de Ambiente y Desarrollo Sostenible 2010).
    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Monitores y televisores con tubos de rayos catódicos").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema7/9.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color
              li
                i.fas.fa-square.fa-xs
                | Los TRC necesitan ser mantenidos intactos durante el transporte debido a que la mayor parte son de vidrio sin plomo y requieren la separación de la fracción plomada y la mayoría de técnicas de disolución se realizan a partir de los tubos intactos. Incluso si los TRC se piensan triturar, es preferible por razones de salud y de seguridad, transportarlos intactos.
              li
                i.fas.fa-square.fa-xs
                | Para cerciorarse de que un TRC llegue intacto al sitio de tratamiento se debe mantener su cubierta original y apilar correctamente en un recipiente propicio tal como: cajas de madera, rejas metálicas o de cartón grueso.
                br
                |También se pueden utilizar empaques de película plástica sobre palés, pero se recomienda el uso de cajas para su transporte.

              li
                i.fas.fa-square.fa-xs
                | Si los monitores y televisores TRC son transportados sobre una estiba de tal manera que los pedazos quebrados no pueden ser contenidos, la carga debe ser envuelta en una película plástica o de burbuja.
              li
                i.fas.fa-square.fa-xs
                | En caso que se tengan monitores y televisores con el tubo quebrado o en pedazos, las partes de vidrio se deben empacar en recipientes o cajas aparte que eviten que las partículas o fragmentos puedan ser liberados.
              li
                i.fas.fa-square.fa-xs
                | Colocar los monitores con la pantalla hacia un lado (en particular los monitores de la primera capa). Se recomienda introducir una capa de espuma o de plástico burbuja entre los diferentes arrumes.
              li
                i.fas.fa-square.fa-xs
                | De ser posible todos los cables de los monitores deberán ser removidos para evitar daños y complicaciones al descargar las cajas o las estibas. Se recomienda que los mismos se transporten en envases o cajas separados.
              li
                i.fas.fa-square.fa-xs
                | Tubos sueltos (TRC) se deben transportar con las mismas precauciones para mantenerlos intactos y evitar la fractura de los mismos.
      .py-4.py-md-5(titulo="Impresoras, faxes, fotocopiadoras ").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema7/10.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color
              li
                i.fas.fa-square.fa-xs
                | De ser posible, las impresoras y otros equipos deberán ser empacados individualmente.
              li
                i.fas.fa-square.fa-xs
                | Colocar los equipos más pesados en la base de la estiba.
              li
                i.fas.fa-square.fa-xs
                | Si no se dispone de cajas, se debe colocar una capa de cartón o material de empaque entre las impresoras y demás equipos de esta categoría.
              li
                i.fas.fa-square.fa-xs
                | Para evitar el derrame de tintas y de tóner, se deben colocar los equipos en contenedores y envases impermeables. También existe la posibilidad de transportarlos en un vehículo que cuente con un sistema de acumulación de líquidos.
      .py-4.py-md-5(titulo="Periféricos de las TIC").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema7/11.svg', alt='')
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul--color
              li
                i.fas.fa-square.fa-xs
                | Colocar los teclados, ratones, audífonos, micrófonos y otros accesorios y periféricos en cajas de cartón.
              li
                i.fas.fa-square.fa-xs
                | Apilar las cajas en estibas y envolverlas con un plástico para colocarlas sobre un palé o almacenarlas en cajas de madera o cajas Gaylord.
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-8(data-aos="fade-right")
        p.mb-0 
          span.r--1.fw-bold ¡Felicitaciones! 
          | Ha finalizado el estudio de este componente formativo, a través del cual ha aprendido sobre la disposición de residuos electrónicos. Ahora lo invitamos a estudiar la síntesis en la que podrá recordar de forma general los saberes que se han desarrollado y realizar la actividad de aprendizaje donde podrá poner a prueba lo aprendido. Recuerde consultar el material complementario que le servirá como refuerzo y profundización. 
      .col-lg-2.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema7/12.svg', alt='') 





</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
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
.card-hover
  background-color: #ddf7ec
  transition: background-color 0.5s ease
  &:hover
    background-color: #6bd4a4
</style>
