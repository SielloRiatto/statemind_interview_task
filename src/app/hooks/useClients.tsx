"use client"

import { useState, useEffect } from "react"
import { ClientType, StatusType } from "../types"

export default function useClients () {
	const [status, setStatus] = useState<StatusType>('LOAD')
	const [clients, setClients] = useState<ClientType[]>([])

	useEffect(() => {
		fetch(`/api/clients`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return response.json()
		})
		.then((json: ClientType[]) => {
			setClients(json)
			setStatus('SUCCESS')
		})
		.catch(err => {
			console.error(err)
			setStatus('FAIL')
		})
	}, [setClients])

	return { clients, status }
}