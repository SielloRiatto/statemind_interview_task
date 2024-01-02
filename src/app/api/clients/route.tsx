import { clients } from "./_data"

type GETParamsType = {
  client?: string
}

export async function GET () {
  return Response.json(clients)
}