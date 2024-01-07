"use client"

import { useState, useEffect } from "react"
import { ClientType, ResultWithStatusType, StatusType } from "@/types"
import { useParams } from "next/navigation"

export default function useClient (): ResultWithStatusType {
	const { clientId }: { clientId: string } = useParams()

	const [status, setStatus] = useState<StatusType>('LOAD')
	const [result, setResult] = useState<ResultWithStatusType["result"]>(null)

	useEffect(() => {
		const urlParams: string = `${clientId}?withAudits=true`

		fetch(`/api/clients/${clientId ? urlParams : ''}`)
		.then((response) => {
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}

			return response.json()
		})
		.then((json: ClientType[] | ClientType) => {
			setResult(json)
			setStatus('SUCCESS')
		})
		.catch(err => {
			console.error(err)
			setStatus('LOAD')
		})
	}, [setResult, clientId])

	return { result, status }
}