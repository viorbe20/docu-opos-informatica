module.exports = {
  // Sidebar: Bases de Datos
  basesDatos: [
    {
      type: 'category',
      label: 'Bases de Datos',
      items: [
        {
          type: 'category',
          label: 'Almacenamiento',
          items: [
            'bases-de-datos/almacenamiento-de-bases-de-datos/db-tipos-de-raids',
            'bases-de-datos/almacenamiento-de-bases-de-datos/principios-acid',
          ],
        },
        {
          type: 'category',
          label: 'Arquitectura',
          items: [
            'bases-de-datos/arquitectura-de-bases-de-datos/modelo-ansi-sparc',
          ],
        },
      ],
    },
  ],

  // Sidebar: Gestión de los Sistemas de Información
  gestionSistemas: [
    {
      type: 'category',
      label: 'Gestión de los SI',
      items: [
        {
          type: 'category',
          label: 'Evolución Uso Tecnologías',
          items: [
            'gestion-sistemas-de-informacion/evolucion-uso-tecnologias/modelo-gibson-nolan',
          ],
        },
        // Aquí otras subcategorías como:
        // {
        //   type: 'category',
        //   label: 'Arquitectura empresarial',
        //   items: [
        //     'gestion-sistemas-de-informacion/arquitectura-empresarial',
        //   ],
        // },
      ],
    },
  ],
    // Sidebar: Seguridad de los Sistemas de Información
    redesComunicaciones: [
      {
        type: 'category',
        label: 'Redes y Comunicaciones',
        items: [
          {
            type: 'category',
            label: 'modelos-de-referencia',
            items: [
              'redes-y-comunicaciones/modelos-de-referencia/modelo-osi',
              'redes-y-comunicaciones/modelos-de-referencia/modelo-tcp-ip',
            ],
          },
          // {
          //   type: 'category',
          //   label: 'Procesos Críticos',
          //   items: [
          //     'seguridad-sistemas-informacion/procesos-criticos/continuidad-recuperacion-negocio',
          //   ],
          // },
        ],
      },
    ],

  // Sidebar: Seguridad de los Sistemas de Información
  seguridadSI: [
    {
      type: 'category',
      label: 'Seguridad de los SI',
      items: [
        {
          type: 'category',
          label: 'ENS',
          items: [
            'seguridad-sistemas-informacion/ENS/ens-art-31',
            'seguridad-sistemas-informacion/ENS/ens-art-32',
            'seguridad-sistemas-informacion/ENS/ens-art-33',
          ],
        },
        {
          type: 'category',
          label: 'Procesos Críticos',
          items: [
            'seguridad-sistemas-informacion/procesos-criticos/continuidad-recuperacion-negocio',
          ],
        },
      ],
    },
  ],
};
