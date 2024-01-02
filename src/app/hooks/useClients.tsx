"use client"

import { useState, useEffect } from "react"
import { ClientType } from "../types"

type UseClientsParams = {
	clientId?: string,
	withAudits?: boolean
}

export default function useClients (params?: UseClientsParams) {
	const [clients, setClients] = useState<ClientType[]>([])

	useEffect(() => {
		const requestParams = params?.clientId ? (
			`${params.clientId}?withAudits=${params.withAudits ? true : false}`
		) : ''

		fetch(`/api/clients/${requestParams}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return response.json()
		})
		.then((json: ClientType[]) => {
			setClients(json)
		})
		.catch(err => {
			console.error(err)
		})
	}, [params?.clientId, params?.withAudits])

	return clients
}