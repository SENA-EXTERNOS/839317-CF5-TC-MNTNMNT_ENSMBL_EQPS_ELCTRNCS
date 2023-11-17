export default {
  global: {
    componenteFormativo: 'Disposición de residuos electrónicos',
    descripcionCurso:
      'Este componente se basa en la correcta disposición que se le debe dar a los RAEE, entendiendo la importancia que tiene la normatividad y el seguimiento de la misma para prevenir daños en la salud de las personas y del medio ambiente, dando un tratamiento adecuado y una correcta utilización de todos los componentes de un aparato eléctrico o electrónico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-xl-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-xl-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-xl-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Residuos eléctricos y electrónicos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Almacenamiento de residuos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Corrientes de materiales recuperados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Técnicas de manipulación de cargas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Almacenamiento de residuos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). <i>Hoy no se habla de basura, sino de residuos que son insumos para productos</i>. Minambiente.',
      tipo: 'Página Web.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/hoy-no-se-habla-de-basura-sino-de-residuos-que-son-insumos-para-productos-minambiente/',
    },
    {
      tema: 'Residuos eléctricos y electrónicos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). <i>Calculadora de generación de residuos de aparatos eléctricos y electrónicos – RAEE.</i> Minambiente.',
      tipo: 'Página Web.',
      link: 'https://calculadoraraee.minambiente.gov.co/#/',
    },
    {
      tema: 'Residuos eléctricos y electrónicos',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia. (2021). <i>Mercurio, cambio responsable</i>.',
      tipo: 'Video.',
      link: 'https://youtu.be/LfffzddWlhA',
    },
    {
      tema: 'Corrientes de materiales recuperados',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia. (2021). <i>Mesa Nacional de Aprovechamiento de Masa Residual</i>.',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=PwJOl_14Ruw',
    },
  ],
  glosario: [
    {
      termino: 'AEE',
      significado: 'sigla que define a los aparatos eléctricos y electrónicos.',
    },
    {
      termino: 'Comercializador',
      significado:
        'es el encargado de vender y distribuidor las mercancías, puede ser al detal o al por mayor.',
    },
    {
      termino: 'Electrodomésticos',
      significado:
        'aparatos que se utilizan en los hogares para las labores domésticas, principalmente en la cocina, de clasifican de acuerdo a su tamaño.',
    },
    {
      termino: 'Obsolescencia',
      significado:
        'es el desuso de los equipos, máquinas y la tecnología que llega por el paso del tiempo y por el avance de los dispositivos, no es por el deterioro del componente, sino más bien por su poco y ningún desempeño para cumplir las tareas que antes realizaba de manera eficiente.',
    },
    {
      termino: 'Reciclaje',
      significado:
        'Son todos aquellos procesos en los cuales se transforman y se aprovechan los componentes que se desechan devolviendo una posibilidad de transformar o volver a usar las materias primas en nuevos productos.',
    },
    {
      termino: 'Reparación',
      significado: 'arreglo de las fallas específicas de un aparato.',
    },
    {
      termino: 'Retoma',
      significado:
        'se refiere a recibir equipos que no se utilizan y acondicionándolos para que vuelvan a ser utilizados.',
    },
    {
      termino: 'Riesgos',
      significado:
        'eventos o situaciones en los cuales se expone la integridad de las personas o los equipos.',
    },
    {
      termino: 'Usuario',
      significado:
        'es la persona que interactúa con el bien o servicio adquirido o contratado.',
    },
    {
      termino: 'Vida útil',
      significado:
        'es el tiempo que tiene un equipo realizando de forma óptima la función para lo cual fue diseñado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Balde, C., Kuehr, F., & Huisman, J. (2015). <i>The Global E-waste Monitor 2014: Quantities, Flows and Resources</i>.',
      link:
        'https://i.unu.edu/media/unu.edu/news/52624/UNU-1stGlobal-E-Waste-Monitor-2014-small.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. Diciembre 20 de 2021.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/Decreto-1076-de-2015.pdf',
    },
    {
      referencia:
        'Decreto 284 de 2018. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se adiciona el Decreto 1076 de 2015, Único Reglamentario del Sector Ambiente y Desarrollo Sostenible, en lo relacionado con la Gestión Integral de los Residuos de Aparatos Eléctricos y Electrónicos - RAEE Y se dictan otras disposiciones. Febrero 15 de 2018. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/decreto-284-de-2018.pdf',
    },
    {
      referencia:
        'Encyclopedia Britannica ImageQuest. (2022). <i>Millones de imágenes libres de derechos de autor recopiladas en un único sitio confiable</i>. Bdigital.sena.',
      link: 'https://quest-eb-com.bdigital.sena.edu.co/',
    },
    {
      referencia:
        'Greenpeace. (2011). <i>Basura informática: la otra cara de la tecnología</i>. Greenpeace. ',
      link: 'http://www.greenpeace.org/argentina/Global/argentina/report/',
    },
    {
      referencia:
        'Ley 1672 de 2013. Por la cual se establecen los lineamientos para la adopción de una política pública de gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE), y se dictan otras disposiciones. Julio 10 de 2013.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=53825',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2010). <i>Lineamientos Técnicos para el Manejo de Residuos de Aparatos Eléctricos y Electrónicos</i>.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Guia_RAEE_MADS_2011-reducida.pdf ',
    },
    {
      referencia:
        'Ministerio de Ambiente  y Desarrollo Sostenible .(2022). <i>Guías Ambientales de Almacenamiento y Transporte por Carretera de Sustancias Químicas Peligrosas y Residuos Peligrosos</i>.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/guias_ambientales_almacenam_transp_x_carretera_sust_quimicas_res_pelig.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2017). <i>Política Nacional. Gestión Integral de Residuos de Aparato Eléctricos y Electrónicos – RAEE.</i>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica_RAEE.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2021). <i>Manual: buenas prácticas para el manejo de los residuos de aparatos eléctricos y electrónicos (RAEE)</i>.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/procesos/grf-m-03-manual-de-buenas-practicas-para-el-manejo-de-los-residuos-de-aparatos-electricos-y-electronicos-raee-1.0-.pdf',
    },
    {
      referencia:
        'Resolución 1297 de 2010. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de Pilas y/o Acumuladores y se adoptan otras disposiciones. Julio 8 de 2010.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/resolucion-1297-de-2010.pdf',
    },
    {
      referencia:
        'Resolución 1511 de 2010. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de Bombillas y se adoptan otras disposiciones. Agosto 5 de 2010.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Resolucion-1511-de-2010.pdf',
    },
    {
      referencia:
        'Resolución 1512 de 2010. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de 48 Computadores y/o Periféricos y se adoptan otras disposiciones. Agosto 5 de 2010.',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/resoluciones/resolucion-1512-de-2010.aspx',
    },
    {
      referencia:
        'Resolución 0076 de 2019. [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental. EIA. Enero 16 de 2019.',
      link:
        'https://www.redjurista.com/Documents/resolucion_76_de_2019_ministerio_de_ambiente_y_desarrollo_sostenible.aspx#/',
    },
    {
      referencia:
        'Secretaría del Convenio de Basilea. (2015). <i>Directrices técnicas sobre los movimientos transfronterizos de desechos eléctricos y electrónicos y de equipo eléctrico y electrónico usado, en particular respecto de la distinción entre desechos y materiales que no son desechos</i>. Basel.',
      link:
        'http://www.basel.int/TheConvention/ConferenceoftheParties/Meetings/Meeting-Documents/tabid/4249/ctl/Download/mid/13036/Default.aspx?id=323&ObjID=11755',
    },
    {
      referencia:
        'Diario oficial de la Unión Europea. (2008). <i>Directiva 2008/98/CE del Parlamento Europeo y del Consejo de 19 de noviembre del 2008 sobre los residuos y por la que se derogan determinadas Directivas</i>.',
      link: 'https://www.boe.es/doue/2008/312/L00003-00030.pdf',
    },
    {
      referencia:
        'Diario oficial de la Unión Europea. (2012). <i>Directiva 2012/19/ue del parlamento europeo y del consejo de 4 de julio de 2012 sobre residuos de aparatos eléctricos y electrónicos (raee)</i>.',
      link:
        'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:197:0038:0071:ES:PDF',
    },
    {
      referencia: 'Your Europe. (2022). <i>Etiquetado RAEE</i>. Youreurope.',
      link:
        'https://europa.eu/youreurope/business/product-requirements/labels-markings/weee-label/index_es.htm#:~:text=para%20las%20empresas-,%C2%BFQu%C3%A9%20es%20la%20etiqueta%20RAEE%3F,electr%C3%B3nicos%20comercializados%20en%20la%20UE.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
