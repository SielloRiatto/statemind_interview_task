'use client'

import { useParams } from "next/navigation"
import useClient from "../../hooks/useClient"
import Loader from "../Loader"
// import AuditItem from "./AuditItem"


export default function AuditsList() {
	const { clientId }: { clientId: string } = useParams()
	const { client, status } = useClient({ clientId })

	if (status === "LOAD") {
		return <Loader />
	}

	if (status === "FAIL") {
		return <>Error occured, try open later</>
	}

	if (status === 'SUCCESS' && !client) {
		return (
			<>The client does not exist or their data was deleted.</>
		)
	}

	return (
		<>
		<div>Client: {client?.client}</div>
		<ol className={"relative space-y-2 mb-16 p-4"}>
			{/* {clients?.length ? clients.map((client, i, arr) => (
				<AuditItem
					key={client.client}
					id={client.id}
					name={client.client}
					reportsCount={client.reports}
					isLast={ i === arr.length - 1 }
				/>
			)) : null} */}
		</ol>
		</>
	)
}