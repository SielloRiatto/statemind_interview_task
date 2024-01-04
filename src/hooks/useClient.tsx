"use client"

import { useState, useEffect } from "react"
import { ClientType, StatusType } from "@/types"

type UseClientParams = {
	clientId: string,
	withAudits?: boolean
}

export default function useClient (params: UseClientParams) {
	const [status, setStatus] = useState<StatusType>('LOAD')
	const [client, setClient] = useState<ClientType | null>(null)

	useEffect(() => {
		const requestParams = `${params.clientId}?withAudits=${params.withAudits ? true : false}`

		fetch(`/api/clients/${requestParams}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return response.json()
		})
		.then((json: ClientType) => {
			setClient(json)
			setStatus('SUCCESS')
		})
		.catch(err => {
			console.error(err)
			setStatus('LOAD')
		})
	}, [setClient, params?.clientId, params?.withAudits])

	return { client, status }
}