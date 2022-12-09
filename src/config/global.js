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
        titulo: 'Residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Categorización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mezclas, sustancias y fluidos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Material crítico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Potencial de reciclaje',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Salud y medio ambiente',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Reutilización',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Reciclaje',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Disposición final',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Aprovechamiento y tratamiento',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Etiqueta',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Prevención de riesgos',
            hash: 't_1_11',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Almacenamiento de residuos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sistemas y elementos de almacenamiento',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Señalización',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Corrientes de materiales recuperados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Protocolos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Herramientas y medida de control',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Protocolos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Valoración y prevención',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Manejo de sustancias peligrosas',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Técnicas de manipulación de cargas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Aplicabilidad',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Riesgos, prevención y cuidado',
            hash: 't_7_2',
          },
        ],
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
      tema:
        'Hoy no se habla de basura, sino de residuos que son insumos para productos: Minambiente.      ',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2022), <em> Hoy no se habla de basura, sino de residuos que son insumos para productos: Minambiente.</em> ',
      tipo: 'Página Web.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/hoy-no-se-habla-de-basura-sino-de-residuos-que-son-insumos-para-productos-minambiente/',
    },
    {
      tema:
        'Calculadora de generación de residuos de aparatos eléctricos y electrónicos – RAEE',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2022),<em>Calculadora de generación de residuos de aparatos eléctricos y electrónicos – RAEE. Minambiente.</em> ',
      tipo: 'Página Web.',
      link: 'https://calculadoraraee.minambiente.gov.co/#/',
    },
    {
      tema: 'Mercurio, cambio responsable.',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia, (2021), <em> Mercurio, cambio responsable.</em> [Vídeo]. Youtube.',
      tipo: 'Video.',
      link: 'https://youtu.be/LfffzddWlhA',
    },
    {
      tema: 'Mesa Nacional de Aprovechamiento de Masa Residual.',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible - Colombia, (2021), <em> Mesa Nacional de Aprovechamiento de Masa Residual.</em> [Vídeo]. YouTube. ',
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
        'Baldé, C. W. (2015), <em> The Global E-waste Monitor.</em> Balde, C. P., Kuehr, F., & Huisman, J. (2015). <em> The Global E-waste Monitor 2014: Quantities, Flows and Resources.</em> United Nations Univ., Inst. for the advanced study on sustainability. ',
      link:
        'https://i.unu.edu/media/unu.edu/news/52624/UNU-1stGlobal-E-Waste-Monitor-2014-small.pdf',
    },
    {
      referencia:
        'Decreto 1076 de 2015, [Ministerio de Ambiente y Desarrollo Sostenible], Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible. 20 de diciembre de 2021.',
      link: '',
    },
    {
      referencia:
        'Decreto 284 de 2018. [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se adiciona el Decreto 1076 de 2015, Único Reglamentario del Sector Ambiente y Desarrollo Sostenible, en lo relacionado con la Gestión Integral de los Residuos de Aparatos ',
      link: '',
    },
    {
      referencia:
        'Eléctricos y Electrónicos - RAEE Y se dictan otras disposiciones. 15 de febrero de 2018. ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/08/decreto-284-de-2018.pdf ',
    },
    {
      referencia:
        'Encyclopædia Britannica ImageQuest, (2022), <em> Millones de imágenes libres de derechos de autor recopiladas en un único sitio confiable.</em>',
      link: 'https://quest-eb-com.bdigital.sena.edu.co/ ',
    },
    {
      referencia:
        'Greenpeace, (2011), <em> Basura informática: la otra cara de la tecnología.</em> Obtenido de Buenos Aires: Greenpeace Argentina.',
      link: 'http://www.greenpeace.org/argentina/Global/argentina/report/',
    },
    {
      referencia:
        'Ley 1672 de 2013. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los lineamientos para la adopción de una política pública de gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE), y se dictan otras disposiciones.10 de julio de 2013. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2010), <em> Lineamientos Técnicos para el Manejo de Residuos de Aparatos Eléctricos y Electrónicos.</em>',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Guia_RAEE_MADS_2011-reducida.pdf ',
    },
    {
      referencia:
        'Ministerio de Ambiente  y Desarrollo Sostenible, (2022), <em> Guías Ambientales de Almacenamiento y Transporte por Carretera de Sustancias Químicas Peligrosas y Residuos Peligrosas.</em>   ',
      link:
        'https://www.minambiente.gov.co/documento-entidad/guias-ambientales-de-almacenamiento-y-transporte-por-carretera-de-sustancias-quimicas-peligrosas-y-residuos-peligrosos/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2017), <em> Política Nacional. Gestión Integral de Residuos de Aparato Eléctricos y Electrónicos – RAEE</em>.  Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/10/Politica_RAEE.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, (2021), <em> Manual: buenas prácticas para el manejo de los residuos de aparatos eléctricos y electrónicos (RAEE).</em> ',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/procesos/grf-m-03-manual-de-buenas-practicas-para-el-manejo-de-los-residuos-de-aparatos-electricos-y-electronicos-raee-1.0-.pdf',
    },
    {
      referencia:
        'Resolución 1297 de 2010. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de Pilas y/o Acumuladores y se adoptan otras disposiciones. Julio 8 de 2010. ',
      link: '',
    },
    {
      referencia:
        'Resolución 1511 de 2010. [Ministerio de Ambiente y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de Bombillas y se adoptan otras disposiciones. Agosto 5 de 2010. ',
      link: '',
    },
    {
      referencia:
        'Resolución 1512 de 2015. [Ministerio de Ambiente  y Desarrollo Sostenible]. Por la cual se establecen los Sistemas de Recolección Selectiva y Gestión Ambiental de Residuos de Computadores y/o Periféricos y se adoptan otras disposiciones. Agosto 5 de 2015.',
      link: '',
    },
    {
      referencia:
        'Resolución 0076 [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental. EIA. 16 de enero del 2019. ',
      link: '',
    },
    {
      referencia:
        'Resolución 480 de 2019 [Ministerio de Ambiente y Desarrollo Sostenible]. Por medio del cual se adoptan los términos de referencia para la elaboración del Estudio de Impacto Ambiental. EIA. 16 de enero del 2019.',
      link: '',
    },
    {
      referencia:
        'Secretaría del Convenio de Basilea, (2015), <em> Directrices técnicas sobre los movimientos transfronterizos de desechos eléctricos y electrónicos y de equipo eléctrico y electrónico usado, en particular respecto de la distinción entre desechos y materiales que no son desechos.</em>',
      link:
        'http://www.basel.int/TheConvention/ConferenceoftheParties/Meetings/Meeting-Documents/tabid/4249/ctl/Download/mid/13036/Default.aspx?id=323&ObjID=11755',
    },
    {
      referencia:
        'Parlamento Europeo y el Consejo de la Unión Europea. (2008). <em> Directiva 2008/98/CE del Parlamento Europeo y del Consejo de 19 de noviembre del 2008.</em> Agencia Estatal Boletín Oficial del Estado de España',
      link: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2008-82319',
    },
    {
      referencia:
        'Parlamento Europeo y el Consejo de la Unión Europea. (2012). Residuos de aparatos eléctricos y electrónicos, Estrasburgo. ',
      link:
        'http://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2012:197:0038:0071:ES:PDF',
    },
    {
      referencia: 'Your_Europe. (2022). <em> Etiquetado RAEE.</em> ',
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
