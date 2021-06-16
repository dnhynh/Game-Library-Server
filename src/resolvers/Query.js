const library = async (args, context) => {
  const where = args.filter ? {
    OR: [
      { publisher: { contains: args.filter} },
      { name: { contains: args.filter} },
      { nickname: { contains: args.filter}}
    ]
  } : {}

  const library = await context.prisma.game.findMany({
    where
  })
}

module.exports = { library }
