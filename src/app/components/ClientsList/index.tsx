'use client'

import useClients from "../../hooks/useClients"
import ClientItem from "./ClientItem"


export default function ClientsList() {
	const clients = useClients()
	
	return (
		<ol className={"relative space-y-2 mb-16 p-4"}>
			{clients?.length ? clients.map((client, i, arr) => (
				<ClientItem
					key={client.client}
					name={client.client}
					reportsCount={client.reports}
					isLast={ i === arr.length - 1 }
				/>
			)) : null}
		</ol>
	)
}