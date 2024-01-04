
import { NextRequest } from "next/server"
import { audits, clients } from "../_data"
import { ClientType } from "@/types"

export async function GET (
  request: NextRequest,
  context: { params: {clientId: string} }
): Promise<Response> {
  const clientData: ClientType | undefined = clients.find(client => (
    client.id === context.params.clientId
  ))

  if (clientData === undefined) {
    return Response.json({ error: 'Client does not exist' }, { status: 404 })
  }

  const { searchParams } = new URL(request.url)
  const withAudits: string | null= searchParams.get('withAudits')

  if (withAudits === "true") {
    return Response.json({
      ...clientData,
      audits: audits.filter(audit => (
        audit.clientId === context.params.clientId
      ))
    })
  }

  return Response.json(clientData)
}