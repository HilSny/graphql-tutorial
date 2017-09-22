let nextId     = 4
const shows = [
  {id : 1, title: 'rick and morty'},
  {id : 2, title: 'game of thrones'},
  {id : 3, title: 'stranger things'},
]


const resolvers = {
  Query: {
    shows: () => {
      return shows
    },

    getFortuneCookie: () => {
      return "You will learn something tonight"
    },

    show(root, args) {
      const {title} = args
      const show = shows.find(show => show.title === title.toLowerCase())

      return show
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
