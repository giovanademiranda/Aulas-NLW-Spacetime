import axios from 'axios'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      code: z.string(),
    })
    const { code } = bodySchema.parse(request.body)
    let acessTokenResponse = null

    acessTokenResponse = await axios.post(
      'https://github.com/login/oauth/acess_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      }
    )
    console.log(acessTokenResponse)

    const { acess_token } = acessTokenResponse.data

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${acess_token}`,
      },
    })
    const user = userResponse.data

    return {
      user,
    }
  })
}
