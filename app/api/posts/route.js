import { Pool } from "@neondatabase/serverless"

export async function POST(req) {
  const db = new Pool({ connectionString: process.env.DATABASE_URL })

  const { title, content, userId } = await req.json()

  if (!title || !content) {
    return new Response(JSON.stringify({ message: "Title and content are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    })
  }

  try {
    const result = await db.query(
      `INSERT INTO posts (title, content, userId, createdAt) VALUES ($1, $2, $3, NOW()) RETURNING *`,
      [title, content, userId]
    )

    return new Response(JSON.stringify({ message: "Post created", post: result.rows[0] }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error("Error creating post:", error)
    return new Response(JSON.stringify({ message: "Error creating post" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
