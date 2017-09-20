let nextId     = 4
const shows = [
  {id : 1, network: 'cartoon network', title: 'rick and morty'},
  {id : 2, network: 'hbo', title: 'game of thrones'},
  {id : 3, network: 'netflix', title: 'stranger things'},
]

const resolvers = {
  Query: {
    shows: () => {
      return shows
    },

    show(root, args) {
      const {title} = args
      const show = shows.find(show => show.title === title.toLowerCase())

      return show
    },
  },

  Show: {
    characters(show) {
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2},
        { id: 2, title: 'Another post', text: 'Some other text', views: 200}
      ]
    },
  },
  Character: {
    show(character) {
      return { id: 1, firstName: 'Hello', lastName: 'World' }
    },
  },

  Mutation: {
    addShow: (root, args) => {
      const title = args.title
      const newShow = {id: nextId++, title: title.toLowerCase()}
      shows.push(newShow)
      return newShow
    }
  }
}

export default resolvers
