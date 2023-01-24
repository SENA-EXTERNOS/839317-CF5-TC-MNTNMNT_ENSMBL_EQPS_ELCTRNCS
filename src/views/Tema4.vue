<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Protocolos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.tarjeta-icono-lado.izquierda.p-5(style='background-color: #e5e7f2').mb-5
          img(src='@/assets/curso/temas/tema5/1.svg', alt='' style="width: 280px; top: 30px; left: 30px ").d-lg-block.d-none
          p Los riesgos asociados a la manipulación de los residuos de aparatos eléctricos y electrónicos (RAEE), se presentan dependiendo del procedimiento que se esté aplicando. Los más comunes son de tipo físico directo, tales como cortes, golpes, punzadas, ruidos, material particulado, explosiones y derrames de sustancias. Para esto se deben utilizar siempre los Equipos de Protección Personal (EPP), asignados para cada tarea.
    h4(data-aos="zoom-in-left").mb-5 Herramientas y medidas de control
    p.mb-5(data-aos='fade-right') Existen algunas herramientas y medidas de control que permiten minimizar los riesgos que conlleva el hecho de manipular los residuos de aparatos eléctricos y electrónicos (RAEE).
      br
      br
      | Algunas formas de controlar este tipo de riesgos se remiten a:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        TabsA.color-secundario.mb-5
          .tarjeta.p-4(titulo="Registro" style='background-color: #e5e7f2')
            p Se necesitan siempre el control de todos los procesos, evidenciados en los registros de entrada y salida, manipulación, ayudando al orden.
          .tarjeta.p-4(titulo="Planes de<br> seguridad" style='background-color: #e5e7f2')
            p Cada etapa debe tener un plan de seguridad y debe hacer parte del proyecto general. deben ser difundidos, socializados y practicados por todo el personal, para saber cómo actuar en el momento de una emergencia.
          .tarjeta.p-4(titulo="Destrucción de<br> información" style='background-color: #e5e7f2')
            p Los dispositivos de almacenamiento de información suelen ser destruidos con el fin de evitar el robo de información y el fraude de los componentes.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/2.svg', alt='')
    h4(data-aos="zoom-in-left").mb-5 Aplicación de los protocolos  
    .bg-cta-2.mn.mb-0
      .row.justify-content-center.mb-5
        .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/3.svg', alt='')
        .col-lg-10
          p Se pueden presentar muchos tipos de accidentes y por eso es necesario tener siempre un plan de emergencias y elementos de primeros auxilios, los cuales deben permanecer en buen estado y situados en un lugar visible. No se recomienda hacer préstamos del botiquín, dado que nunca se sabe cuándo se presentará una urgencia. Los elementos de protección personal son esenciales para minimizar los riesgos y así mismo, utilizar los utensilios destinados para la emergencia y, de este modo, poder cuantificar la gravedad del hecho.
            br
            br
            | Conozca algunos de los casos más frecuentes de emergencia y probables acciones que se pueden ejecutar:

      .row.justify-content-center.mb-5
        .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/4.svg', alt='')
        .col-lg-8(data-aos="fade-left")
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta fondo-acordion")
            div(titulo="Cuando se detecta la emergencia ")
              ul.lista-ul--color
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Rompimiento de tubos fluorescentes.

                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Activar el plan de emergencias, avisando a los responsables del proceso.
            div(titulo="Conato de incendio")
              ul.lista-ul--color
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Activar el plan de emergencias, informar a las personas que están a cargo. 
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Visualizar el extintor.
            div(titulo="Cuando se presenta la emergencia")
              ul.lista-ul--color
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Si hay un rompimiento de tubos fluorescentes: ventilar el área afectada para prevenir inhalar vapores tóxicos.
            div(titulo="En caso que se presente un conato de incendio")
              p Se deben seguir los siguientes pasos:
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | No entrar en pánico y mantener la calma.
                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Usar el extintor, siguiendo el protocolo establecido.

                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Tomar el extintor por la palanca correcta, desasegurar el pasador de seguridad halándolo o dándole vuelta, sostenerlo de forma vertical y acercarse a la base del fuego hasta donde le permita, sin quemarse, realizar la descarga dirigida hacia la fuente en forma de abanico, presionando la válvula.

                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | De ser posible, retirar envases con elementos inflamables.
                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Activar el plan de emergencias, dando aviso oportuno.
                li.mb-0
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Verificar la desaparición del fuego, si no fue controlada la situación llamar a Bomberos y desalojar el lugar, cubriendo nariz y boca con un pañuelo húmedo, evitando la inhalación de los gases, si hay presencia de humo se debe salir agachado.
            div(titulo="Cuando se pasa la emergencia")
              ul.lista-ul--color
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Si hay un rompimiento de tubos fluorescentes: después de los pasos anteriores, se deben recoger los residuos generados con los utensilios correctos, puede ser en una bolsa o cartón, ubicada en la zona donde están los tubos fluorescentes y entregarlos a los encargados de la gestión. 
              h5.my-4 En caso de presentarse un conato de incendio:
              ul.lista-ul--color
                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | Se debe terminar la descarga de los extintores y disponerlos para inmediatamente cargarlos y que queden disponibles para emergencias futuras.

                li
                  i.fas.fa-square.fa-xs(style='color: #3bc192')
                  | En caso de presentarse una fuga o un derrame, se activan medidas similares a las anteriores.
    h4(data-aos="zoom-in-left").mb-5 Valoración y prevención
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-derecha
          .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/5.jpg')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Es indispensable la pedagogía en este aspecto, la cual debe estar enfocada en la prevención de generación de residuos, tomando conciencia de la utilización de los aparatos y de la disposición que se les da a estos, cuando ya no se utilizan, dado que se convierten en posibles factores de contaminación y pueden resultar peligrosos.
    p.mb-5(data-aos='fade-right') Se recomienda seguir algunas estas medidas del Ministerio de Ambiente y Desarrollo Sostenible: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta(style="background-color: #e0f0fc ").p-4.h-100
          img(src='@/assets/curso/temas/tema5/6.svg', alt='' style='width: 255px').mb-4.m-auto
          h4.text-center Difusión
          p.text-center Realizar la divulgación de las normas acerca del manejo de los RAEE generando conciencia y empatía hacia la necesidad de aplicarlas en el entorno.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta(style="background-color: #e0f0fc ").p-4.h-100
          img(src='@/assets/curso/temas/tema5/7.svg', alt='' style='width: 362px').mb-4.m-auto
          h4.text-center Sensibilización
          p.text-center Dar a conocer la importancia de efectuar una correcta disposición de estos aparatos, logrando que las personas sean conscientes del uso adecuado de los mismos, sus periféricos y consumibles, que se deben utilizar en las tareas cotidianas.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta(style="background-color: #e0f0fc ").p-4.h-100
          img(src='@/assets/curso/temas/tema5/8.svg', alt='' style='width: 254px').mb-4.m-auto
          h4.text-center Garantía
          p.text-center Brindar confianza y respaldo del almacenamiento y efectuar una correcta disposición de los RAEE generados en el entorno, siguiendo las normas establecidas según las actividades realizadas.
    h4(data-aos="zoom-in-left").mb-5 Manejo de sustancias peligrosas
    p.mb-5(data-aos='fade-right') Este es un tema importante en los RAEE y cabe aclarar que son un porcentaje pequeño de los componentes que pueden ocasionar el peligro, pero deben tratarse con mucha cautela y responsabilidad.
      br
      br
      |A continuación, se presentan algunas recomendaciones a tener en cuenta en el manejo de sustancias peligrosas:
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #f6e5c9").h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/9.svg' alt='AvatarTop')
        p.text-center Después del proceso de desensamble, los componentes que puedan contener sustancias peligrosas, deben ser almacenados, envasados, embalados, rotulados, etiquetados y transportados, según la normatividad vigente.
      .tarjeta.p-4(style="background-color: #f6e5c9").h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/10.svg' alt='AvatarTop')
        p.text-center Las baterías, tienen un tratamiento distinto, por contener Ni-Cd y Litio Ion, no deben tener contacto entre ellas y se separan en bolsas independientes para prevenir el riesgo de inflamación.
      .tarjeta.p-4(style="background-color: #f6e5c9").h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/11.svg' alt='AvatarTop')
        p.text-center Aunque no son tan comunes, existen monitores TRC (tubos de rayos catódicos), se deben empacar enteros para reducir al mínimo el riesgo de fractura, en caso de  fisuras se debe garantizar las emisiones de materiales al ambiente, siendo embalados en cajas de Gaylord o de madera.
      .tarjeta.p-4(style="background-color: #f6e5c9").h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema5/12.png' alt='AvatarTop')
        p.text-center Los pedazos de vidrio y de cristales se embalan en empaques impermeables para evitar pérdidas y cortes. 

    h4(data-aos="zoom-in-left").mb-5 Seguridad y salud en el trabajo
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Como en todas las labores, sin importar cual sea, deben de proporcionarse y ser utilizados los elementos de protección personal EPP, por los involucrados, y esta no es la excepción.
              br
              br
              |Se sugiere la utilización de estos elementos para garantizar la salud y seguridad del trabajador:
    PasosA.color-secundario.mb-5(tipo="n").derechalinea
      .row(titulo="")
        .col-md-8.mb-4.mb-md-0
          h5 Guantes resistentes a cortes
          p Se deben de utilizar en todo momento para evitar cortes, astillas, quemaduras, etc.
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/2.svg', alt='')
      .row(titulo="")
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/3.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h5 Protectores de oídos
          p Para evitar los sonidos fuertes emitidos por golpes o maquinaria.
      .row(titulo="")
        .col-md-8.mb-4.mb-md-0
          h5 Casco de seguridad
          p Para evitar golpes con partes afiladas en la cabeza y para la protección por posibles caídas de materiales de diferentes alturas.
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/4.svg', alt='')
      .row(titulo="")
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/5.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h5 Ropa adecuada
          p Debe ser de un material resistente, con identificación de la zona de trabajo.

      .row(titulo="")
        .col-md-8.mb-4.mb-md-0
          h5 Polainas
          p Por encima del calzado de seguridad, amarradas adecuadamente.
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/6.svg', alt='')
      .row(titulo="")
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/7.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h5 Calzado de seguridad
          p De cuero, punta de acero y con plantilla para evitar punzadas en la planta del pie.
      .row(titulo="")
        .col-md-8.mb-4.mb-md-0
          h5 Máscara o respiradores
          p Necesarias para las emisiones de material particulado durante algunos procesos.

        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/8.svg', alt='')
      .row(titulo="")
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/9.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h5 Lentes de seguridad
          p Para la protección de los ojos y evitar el ingreso de partículas a estos.
            
</template>

<script>
export default {
  name: 'Tema5',
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
.fondo-acordion
  background-image: url('../assets/curso/temas/tema5/bg-ac.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  .acordion__header
    h3
      color:  $white
</style>
