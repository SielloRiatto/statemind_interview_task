"use client"

import { useState, useEffect } from "react"
import { ClientType } from "../types"

export default function useClients () {
	const [clients, setClients] = useState<ClientType[]>([])

	useEffect(() => {   
		fetch(`/api/projects`)
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
	}, [])

	return clients
}