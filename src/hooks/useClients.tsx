"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { ClientType, ResultWithStatusType, StatusType } from "@/types"
import { fiveMinutes } from "@/constants"

export default function useClient (): ResultWithStatusType {
	const { clientId }: { clientId: string } = useParams()

	const [status, setStatus] = useState<StatusType>('LOAD')
	const [result, setResult] = useState<ResultWithStatusType["result"]>(null)

	useEffect(() => {
		const urlParams: string = `/${clientId}?withAudits=true`

		fetch(
			`/api/clients${clientId ? urlParams : ''}`,
			{ next: { revalidate: fiveMinutes } }
		)
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