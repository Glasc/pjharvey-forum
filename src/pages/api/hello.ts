// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    try {
      const data = await prisma.user.findFirst({
        where: {
          id: 1
        },
      })

      if (!data) {
        throw new Error('No data found')
      }

      res.status(200).json(data)
      return
    } catch (error) {
      res.status(404)
    }
  }

}
