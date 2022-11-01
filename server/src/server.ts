import Fastify from 'fastify'

async function start() {
    const fastify = Fastify(
        {
            logger: true,
        }
    )

    await fastify.listen(
        {
            port: 3333
        }
    )

}

start()