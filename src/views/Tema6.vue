<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Seguridad y salud en el trabajo
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
              |Se sugiere la utilización de estos elementos para garantizar la salud y seguridad del trabajador.
    PasosA.color-secundario.mb-5(tipo="n")
      .row(titulo="")
        .col-md-8.mb-4.mb-md-0
          h5 Guantes resistentes a cortes
          p Se deben de utilizar en todo momento para evitar cortes, astillas, quemaduras, etc.
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/2.svg', alt='')
      .row(titulo="")
        .col-md-4.col-6: img(src='@/assets/curso/temas/tema6/3.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h5 Protectores de oídos
          p Para evitar los sonidos fuertes emitidos por golpes o maquinaría.
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
  name: 'Tema6',
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
