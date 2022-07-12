// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === 'GET') {
    const posts = await prisma.post.findMany()
    res.status(200).json(posts)
  }

  if (req.method === "POST") {
    const { title, content, userId, } = req.body

    if (!title || !content || !userId) {
      res.status(400).json({
        error: "Missing required fields"
      })
      return
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId,
        upvotes: 0,
        downvotes: 0,
        date: new Date(),
      }
    })

    res.status(201).json(post)
  }
}
