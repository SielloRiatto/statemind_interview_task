'use client'

import useClients from "../../hooks/useClients"
import ClientItem from "./ClientItem"
import Loader from "../../components/Loader"


export default function ClientsList() {
	const { clients, status } = useClients()

	if (status === 'LOAD') {
		return <Loader />
	}

	if (status === 'FAIL') {
		return <>Error occured, try open later</>
	}

	if (status === 'SUCCESS' && clients.length === 0) {
		return <>Clients don`t exist</>
	}
	
	return (
		<ol className={"relative space-y-2 mb-16 p-4"}>
			{clients.map((client, i, arr) => (
				<ClientItem
					key={client.client}
					id={client.id}
					name={client.client}
					reportsCount={client.reports}
					isLast={ i === arr.length - 1 }
				/>
			))}
		</ol>
	)
}