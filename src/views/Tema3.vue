<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Corrientes de materiales recuperados 
    p.mb-5(data-aos='fade-right') Las corrientes de materiales recuperados tienen en cuenta aspectos como la clasificación y naturaleza, el manejo y la restauración. A continuación, podrá identificar las características de cada uno de ellos y, en algunos casos, cómo se ha hecho en Colombia.
      br
      br
      | Estos son los elementos más representativos de las corrientes de materiales recuperados:
    TabsC.color-secundario.mb-5
      .py-4.py-md-5.p-3(titulo="Naturaleza y clasificación").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema4/1.svg', alt='')
          .col-md-9.mb-4.mb-md-0
            p Se toman en cuenta los aparatos eléctricos y electrónicos de tipo doméstico, dado que se convierten en un renglón importante, por contarse con estos en la mayoría de los hogares.
              br
              br
              |La proyección se realiza basada en los equipos que se encuentran en las casas; se debe tener en cuenta que, en la actualidad, existen demasiados, especialmente de tipo industrial y, fundamentalmente, del sector de las comunicaciones, por lo que este gremio es uno de los más vigilados para evitar que se dispare el indicador y se desborde desproporcionadamente la proyección.
            img(src='@/assets/curso/temas/tema4/2.svg', alt='').mb-3
            figcaption.border-3.fst-italic.mb-4(style="background-color: #ddd8f4") Nota: adaptado de Estudios desarrollados en Colombia sobre generación de RAEE. Ministerio de Ambiente y Desarrollo Sostenible (2017).           
            .d-flex.justify-content-center
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Ampliar imagen 
                i.fas.fa-search-plus
      .py-4.py-md-5.p-3(titulo="Manejo").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema4/3.png', alt='')
          .col-md-9.mb-4.mb-md-0
            p Este tema ha resultado ser de complejidad para la mayoría de las personas, dado que existe demasiado desconocimiento para el manejo de los RAEE y por ello, gran parte de estos elementos se disponen en la basura doméstica común; otro factor es la indiferencia ante la importancia de realizar adecuadamente el proceso de recolección, así como la ausencia de los puntos de recolección autorizados para dar disposición final.
              br
              br
              |Otro factor a tener en cuenta, es la falta de atención a este tipo de residuos en las zonas no capitales del territorio nacional, es una deficiencia y la mayoría de estos desechos han resultado en malas prácticas que perjudican el entorno.

      .py-4.py-md-5.p-3(titulo="Recuperación").bg-cta
        .row
          .col-md-3.col-6: img(src='@/assets/curso/temas/tema4/4.png', alt='')
          .col-md-9.mb-4.mb-md-0
            p El tratamiento de los RAEE es costoso, y por este motivo muchos no lo realizan, a pesar de que existe un mercado formal que asume todas las cargas monetarias grandes, incluyendo las normas y estamentos, y otro sector informal que no asume tantas precauciones, y que cada vez está creciendo más, dado que sólo trata los materiales valiosos y el resto de partes de los aparatos no están siendo tratados correctamente, desperdiciando una gran cantidad de partes que pueden resultar aprovechables.
              br
              br
              |En Colombia, ha resultado importante el hecho de recuperar la mayor cantidad de material posible, los centros de acopio más comunes son las chatarrerías, prestando un servicio de recolección y aprovechamiento de muchos residuos.
    ModalA(:abrir-modal.sync="modal1")
      img(src='@/assets/curso/temas/tema4/2.svg', alt='')


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    modal1: false,
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

<style lang="sass"></style>
