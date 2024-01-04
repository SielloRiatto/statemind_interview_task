'use client'

import dynamic from "next/dynamic"
import useClients from "../hooks/useClients"
import Loader from "./Loader"
import ListDecimalItemLoader from "./ListDecimalItem/ListDecimalItemLoader"

const ListDecimalItem = dynamic(
	() => import('./ListDecimalItem'),
	{
	  ssr: false,
	  loading: ListDecimalItemLoader
	}
)

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
				<ListDecimalItem
					key={client.id}
					title={client.client}
					linkText={`See ${client.reports} projects`}
					linkHref={`/${client.id}`}
					imageName={`component-driven.82a66c3c.png`}
					isLast={ i === arr.length - 1 }
				/>
			))}
		</ol>
	)
}