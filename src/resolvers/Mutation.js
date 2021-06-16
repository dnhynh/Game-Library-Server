const addGame = async (parent, args, context, info) => {
  console.log(args, context)
  const game = await context.prisma.game.findUnique({
    where: {
      publisher_name: {
        publisher: args.publisher,
        name: args.name
      }
    }
  })

  if(game) {
    throw new Error(`${args.name} by ${args.publisher} is already in the library`)
  }

  const newGame = await context.prisma.game.create({
    data: {
      publisher: args.publisher,
      name: args.name,
      nickname: args.nickname,
      rating: args.rating
    }
  })

  return newGame
}

const removeGame = async (parent, args, context, info) => {
  const deletedGame = await context.prisma.game.delete({
    where: {
      publisher_name: {
        publisher: args.publisher,
        name: args.name
      }
    }
  })

  if(!deletedGame) {
    throw new Error('Game not in Library')
  }
  
  return deletedGame
}

module.exports = { addGame, removeGame }