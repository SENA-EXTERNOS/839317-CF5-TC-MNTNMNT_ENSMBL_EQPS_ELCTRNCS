<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normatividad ambiental
    .bg-cta.mn
      .tarjeta.p-4.p-md-5.mb-5(style="background-color: #e6f2fc")
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/temas/tema2/1.svg")
          .col-md.col-lg-6
            .titulo-segundo.color-acento-contenido(data-aos='fade-right')
              h3 Normatividad ambiental
            p.mb-4 Al igual que la anterior, la legislación existe de tipo nacional e internacional y regulan la disposición de residuos electrónicos desde el cuidado del ambiente. Para profundizar en el estudio de esta temática, es importante a realizar una lectura comprensiva del documento #[b “Normatividad Ambiental”] al cual podrá acceder haciendo clic en el botón que aparece a continuación y así mismo revisar los términos del glosario.
            a.boton.color-acento-botones(:href="obtenerLink('downloads/normatividad.pdf')" target="_blank" type="application/pdf")
              span Descargar 
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
