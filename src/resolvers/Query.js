const library = async (parent, args, context, info) => {
  const where = args.filter ? {
    OR: [
      { publisher: { contains: args.filter} },
      { name: { contains: args.filter} },
      { nickname: { contains: args.filter}}
    ]
  } : {}

  const games = await context.prisma.game.findMany({
    where
  })

  return { games }
}

module.exports = { library }
