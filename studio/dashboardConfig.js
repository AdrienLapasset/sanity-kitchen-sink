export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '636640d353628755afaaf179',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-eyh3i43h',
                  apiId: 'e5ef9e19-b727-48d3-986d-532009a0c8ae'
                },
                {
                  buildHookId: '636640d48babd25aa710822f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3a9f8kaq',
                  apiId: '79e80640-cd2b-4e07-a450-256faa408645'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AdrienLapasset/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3a9f8kaq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
