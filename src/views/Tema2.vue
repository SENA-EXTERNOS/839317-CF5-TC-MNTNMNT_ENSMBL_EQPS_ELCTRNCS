<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Almacenamiento de residuos 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.izquierda.p-5(style='background-color: #e5e7f2').mb-5.bg-cards2
          img(src='@/assets/curso/temas/tema3/1.svg', alt='' style="width: 300px; top: 30px").d-lg-block.d-none.ms-4.ps-5
          p De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible, el almacenamiento de residuos es un proceso fundamental e indispensable, dado que garantiza la forma correcta de disponer los residuos y su utilización, se requieren condiciones básicas de almacenamiento.
    p.mb-5(data-aos='fade-right') A continuación, se presentan algunos de los métodos que se llevan a cabo durante el almacenamiento de residuos:
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        TabsA.color-secundario.mb-5
          .tarjeta.p-4(titulo="Apilamiento" style="background-color: #e5e7f2")
            p Se pueden presentar diferentes tipos en el proceso de recolección de residuos como:
            ul.lista-ul--color
              li
                i.fas.fa-square
                | Estibas en madera, plásticas o metálicas; estas se caracterizan por tener la forma de recogerse por medios mecánicos, ya sea con montacargas manuales o tripulados y permiten transportar grandes cargas.
              li
                i.fas.fa-square
                | Cajas de madera sobre estibas; se apilan varias de forma horizontal y vertical, aprovechando que este tipo de elementos tienen la característica de tener forma geométrica.
              li
                i.fas.fa-square
                | Caja con paredes enrejadas; pueden ser de material plástico o metálico, facilitan la visualización de los elementos desde la parte exterior. 
          .tarjeta.p-4(titulo="Procedimiento" style="background-color: #e5e7f2")
            p Se debe seguir la normatividad vigente y todas las recomendaciones suministradas para la manipulación de los RAEE; adicional a esto, se pueden implementar otro tipo de métodos internos si son requeridos para el cumplimiento de la labor.
          .tarjeta.p-4(titulo="Clasificación y<br> cuidado" style="background-color: #e5e7f2")
            p En el punto de recolección, se debe cumplir con algunos requerimientos básicos para la correcta manipulación:
            ul.lista-ul--color
              li
                i.fas.fa-square
                | Disponer de un lugar cerrado y techado que proteja de las condiciones ambientales externas.
              li
                i.fas.fa-square
                | Controlar las medidas para el ingreso de las personas, evitando extracciones o adiciones indeseadas.
              li
                i.fas.fa-square
                | Los residuos que sean depositados en puntos de recolección no deben ser manipulados por personas no autorizadas.
              li
                i.fas.fa-square
                | Clasificar los desechos por categorías para facilitar la manipulación y entrega a diferentes procesos, cada contenedor debe estar en un sitio específico acondicionado para la labor y debidamente señalizado.
      .col-lg-3.col-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/2.png', alt='').img-fluid
    h4(data-aos="zoom-in-left").mb-5 Sistemas y elementos de almacenamiento
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Para realizar un correcto almacenamiento, se requiere de uno o varios sistemas que permitan la conservación de los mismos, algunos de los más elementales son: conservación contra la intemperie, pisos, capacidad, protección contra el acceso no autorizado, registro, procedimientos, personal capacitado, almacenamiento y empaque, entre otros.
          br
          br
          | A continuación, se detallan algunos de los más destacados sistemas y elementos de almacenamiento:
      .col-lg-4.col-6(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/3.svg', alt='').img-fluid
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
        h4.text-center Protección contra la intemperie
        p.text-center Deben estar protegidos de las condiciones ambientales que afecten, como la temperatura y la humedad, para evitar agentes externos que puedan contaminar o perjudicar los aparatos.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
        h4.text-center Pisos
        p.text-center Deben ser impermeables, que eviten filtraciones y contaminación de suelos.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
        h4.text-center Capacidad
        p.text-center Que tenga las condiciones mínimas para el inventario.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
        h4.text-center Protección contra acceso no autorizado 
        p.text-center No se recomienda el ingreso de personas no autorizadas al sitio de almacenamiento, dado que pueden sustraer componentes o agregarlos sin el procedimiento adecuado.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/8.svg' alt='AvatarTop')
        h4.text-center Registro
        p.text-center Realizar inventario de todos los componentes, ya sean piezas recuperadas o equipos completos que puedan ser reutilizados.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/9.svg' alt='AvatarTop')
        h4.text-center Procedimientos
        p.text-center Cada fase debe contener los pasos que se implementan para el almacenamiento.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/10.svg' alt='AvatarTop')
        h4.text-center Personal
        p.text-center Quienes ingresen al área a realizar las labores deben de tener la capacitación, aunque para algunas tareas no se requiere de un conocimiento muy avanzado ni técnico.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/11.svg' alt='AvatarTop')
        h4.text-center Almacenamiento y empaque
        p.text-center En general, deben guardarse sobre estibas, cajas de madera, plásticas o metálicas enrejadas. Se facilita el transporte, carga y depósito para los procesos en general.
      .tarjeta.p-4(style="background-color: #ffe9c9").h-100
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema3/12.svg' alt='AvatarTop')
        h4.text-center Casos especiales
        p.text-center Se recomienda realizar un proceso de manejo de sustancias peligrosas.
    h4(data-aos="zoom-in-left").mb-5 Señalización
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .tarjeta.tarjeta-icono-lado.derecha.p-4(style='background-color: #bef0d9').mb-5
          img(src='@/assets/curso/temas/tema3/13.svg', alt='' style="width: 350px; right: 20px").d-lg-block.d-none.ms-4.ps-5
          p Tiene como objetivo establecer indicaciones normativas de diferentes colores que adviertan a las personas ante la existencia o la presencia de algún tipo de peligro, evitando afectaciones al medio ambiente o la salud. Se ubican en lugares estratégicos de fácil recordación. Deben ser instaladas en lugares iluminados, de lo contrario se deben realizar en materiales reflectivos.
    p.mb-5(data-aos='fade-right') Estos son los elementos que dictamina la máxima autoridad ambiental en Colombia, en cabeza del Ministerio de Ambiente y Desarrollo Sostenible, los cuales deben ser tenidos en cuenta para su uso y ubicación:
    PasosA.color-secundario.mb-5(tipo="l").derechalinea
      .row(titulo="").align-items-center.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4 Idioma
          p Las señales deben estar en español para que no tenga cabida a otras interpretaciones, deben ser pictogramas sencillos, ubicados estratégicamente para conocimiento general.

        .col-md-4
          img(src='@/assets/curso/temas/tema3/14.svg', alt='')
      .row(titulo="").align-items-center.justify-content-center
        .col-md-4
          img(src='@/assets/curso/temas/tema3/15.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          h4 Ubicación
          p El lugar de la señalética debe ser iluminado, ordenado, sin obstáculos; si es necesario debe estar hecho en material reflectivo o fluorescente, resistente a golpes y al deterioro de la intemperie.
      .row(titulo="").align-items-center.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4 Clase de riesgo y material
          p Señalizar todas las estanterías y las áreas de almacenamiento mostrando la clase de riesgo y material que contenga, además de indicar los respectivos elementos de protección personal que se requiere para la zona o manipulación de los materiales, adicional de señales de comportamientos o restricciones específicas por parte de las personas que ingresen.
        .col-md-4
          img(src='@/assets/curso/temas/tema3/16.svg', alt='')
      .row(titulo="").align-items-center.justify-content-center
        .col-md-4
          img(src='@/assets/curso/temas/tema3/17.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          h4 Vías de circulación
          p Es importante conocer las rutas de circulación de los peatones y de los vehículos, delimitadas según el código y color de cada área.
      .row(titulo="").align-items-center.justify-content-center
        .col-md-6.mb-4.mb-md-0
          h4 Identificación de zonas
          p Instalación de señales para reconocer en todo lugar zonas de peligro, evacuación, puntos de encuentro y emergencias.
        .col-md-4
          img(src='@/assets/curso/temas/tema3/18.svg', alt='')
      .row(titulo="").align-items-center.justify-content-center
        .col-md-4
          img(src='@/assets/curso/temas/tema3/19.svg', alt='')
        .col-md-6.mb-4.mb-md-0
          h4 Tipos de señal
          p No se limita a un solo tipo de símbolo, pueden ser de diferentes tipos: luminosas, acústicas, visuales, táctiles, etc., para dar inclusión a todas las personas que puedan asistir y presenten alguna dificultad, sin dejar de lado las de identificación de evacuación, salidas de emergencia, primeros auxilios, extintores, entre otras.
    .titulo-cuadro.d-flex.aling-items-center
      i.fas.fa-square(style="color: #fda929").me-3
      h4.mb-0 Colores de seguridad
    p.mb-5(data-aos='fade-right') Estos son los colores de seguridad, su significado y otras indicaciones para su uso:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          br
          span.fst-italic Colores de seguridad
        table
          caption(style="background-color: #f3ecff ") Nota: Adaptado de Colores de seguridad, significado y otras indicaciones sobre su uso. Ministerio de Ambiente y Desarrollo Sostenible, (2022). 
            a(href="https://www.minambiente.gov.co/documento-entidad/guias-ambientales-de-almacenamiento-y-transporte-por-carretera-de-sustancias-quimicas-peligrosas-y-residuos-peligrosos/" target="_blank") https://www.minambiente.gov.co/documento-entidad/guias-ambientales-de-almacenamiento-y-transporte-por-carretera-de-sustancias-quimicas-peligrosas-y-residuos-peligrosos/
          thead.text-center
            tr(style="background-color:   #cde6fa")
              th Color
              th Significado
              th Indicaciones y precisiones
          tbody
            tr
              td.text-center(rowspan="3" style="background-color: #ff0000") Rojo
              td Señal de prohibición. 
              td Comportamiento peligroso.
            tr
              td Peligro - Alarma.
              td Alto, parada, dispositivos de desconexión de emergencia, evacuación.  
            tr
              td Material y equipos de lucha contra incendios. 
              td Identificación y localización.
            tr
              td.text-center(style="background-color: #fda929") Amarillo o amarillo anaranjado
              td Señal de advertencia. 
              td Atención, precaución, verificación.
            tr
              td.text-center(style="background-color: #cde6fa") Azul
              td Señal de obligación.
              td Comportamiento o acción específica. 
            tr
              td.text-center(rowspan="2" style="background-color: #20cb7d") Verde
              td Señal de salvamento o de auxilio.
              td Puertas, salidas, pasajes, material, puestos de salvamento o  de socorro, locales.
            tr
              td Situación de seguridad.  
              td Vuelta a la normalidad.
    .titulo-cuadro.d-flex.aling-items-center
      i.fas.fa-square(style="color: #fda929").me-3
      h4.mb-0 Estándares de las señales de seguridad
    p.mb-5(data-aos='fade-right') El estándar de las señales de seguridad se explica en colores, formas y pictogramas. A continuación, se presentan algunos de ellos: 
    .tarjeta.bg-pasos.p-4.mb-5
      PasosB.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales de advertencia

            p Forma triangular, bordes negros. Pictograma negro sobre fondo amarillo. El color amarillo deberá cubrir como mínimo el 50 % de la superficie de la señal. 

              br
              br
              |#[b Ejemplos de información]
              br
              |Sustancias inflamables, sustancias corrosivas, sustancias tóxicas, sustancias corrosivas, sustancias comburentes, material suspendido, etc.

          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/20.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales de prohibición
            p Forma redonda, pictograma negro sobre fondo blanco, bordes y banda rojas (transversal descendente de izquierda a derecha, atravesando el pictograma a 45 grados, respecto a la horizontal). El color rojo deberá cubrir como mínimo el 35 % del área de la señal. 
              br
              br
              |#[b Ejemplos de información:]
              br
              |Prohibido fumar, no apagar con agua, no tocar, paso restringido, etc.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/21.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales de obligación o acción de mando
            p Forma redonda, pictograma blanco sobre fondo azul. El color azul deberá cubrir como mínimo el 50 % de la superficie de la señal. 
              br
              br
              |Ejemplos de información:
              br
              |Protección obligatoria de: la vista, la cabeza, las vías respiratorias, los pies, etc.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/22.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales relativas a los equipos de lucha contra incendios
            p Forma rectangular o cuadrada. Pictograma blanco sobre fondo rojo. El color rojo deberá cubrir como mínimo el 50 % de la superficie de la señal. 
              br
              br
              |#[b Ejemplos de información:]
              br
              |Manguera para incendios, escalera de mano, extintor, teléfono para lucha contra incendios, etc.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/23.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales de información
            p Forma rectangular o cuadrada. Pictograma blanco sobre fondo verde. El color verde deberá cubrir como mínimo el 50 % de la superficie de la señal. 
              br
              br
              |#[b Ejemplos de información]
              br
              |Primeros auxilios, camilla, ducha de seguridad, primeros auxilios, lavador de ojos.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/24.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Señales complementarias
            p Color de base blanco y texto negro o de base el mismo de la señal y el tinte de texto  de contraste correspondiente. La forma de la señal será rectangular y no contendrá ningún símbolo gráfico. Se ubicará debajo del símbolo de seguridad o incluida dentro de sus límites.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/25.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Símbolo
            p En todas las señales el símbolo o texto será puesto centralmente.  
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/26.svg', alt='')
        .row.justify-content-center.align-items-center(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Barra cruzada
            p En las de prohibición no oscurecerá la barra cruzada.
          .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/27.svg', alt='')
    .titulo-cuadro.d-flex.aling-items-center.mb-4
      i.fas.fa-square(style="color: #fda929").me-3
      h4.mb-0 Contraste de color para la señalización
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-9(data-aos="fade-right")
        p Cuando no se disponga de un símbolo para indicar un significado en particular, el concepto se obtendrá preferiblemente usando la señal general correspondiente, junto con un texto en la imagen complementaria o, alternativamente, usando un texto en lugar de un símbolo en la señal. 

        p Cuando el color de fondo sobre el que tenga que aplicarse el tono de seguridad pueda dificultar la percepción de este último, es conveniente utilizar un tono de contraste que enmarque o se alterne, con el de seguridad.

      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/28.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 2
            br
            span.fst-italic Contraste de color para la señalización
        table
          caption.bg-white.fw-normal *El color de contraste blando será negro y para negro será blanco.
          caption(style="background-color: #f3ecff ") Nota: Adaptado de Contraste de color de seguridad para la señalización, (Ministerio de Ambiente y Desarrollo Sostenible, 2022).
          thead.text-center
            tr(style="background-color:   #cde6fa")
              th Color de seguridad
              th Color de contraste
          tbody
            tr
              td.text-center(style="background-color: #ff0000") Rojo
              td Blanco*
            tr
              td.text-center(style="background-color: #fda929") Amarillo o amarillo anaranjado
              td Negro
            tr
              td.text-center(style="background-color: #cde6fa") Azul
              td Blanco
            tr
              td.text-center(style="background-color: #20cb7d") Verde
              td Blanco
</template>

<script>
export default {
  name: 'Tema3',
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
.bg-pasos
  background-image: url('../assets/curso/temas/tema3/bg-pasos.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
