const { prisma } = require('./generated/prisma-client')

async function main() {
    const newLink = await prisma.createLink({
        url:'edo.io',
        description: 'Ciaone'
    })
    console.log(`ho creato un nuovo link: ${newLink.url} (ID: ${newLink.id})`)

    const allLinks= await prisma.links()
    console.log(allLinks)
}

main().catch(e => console.error(e))
