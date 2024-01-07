'use client'

import { ReactElement } from "react"
import { ClientType } from "@/types"
import useClients from "@/hooks/useClients"
import statusHOC from "@/components/Loader/statusHOC"
import ListDecimalItem from "@/components/ListDecimalItem"

export default function ClientsList(): ReactElement {
	const WrappedChild = statusHOC({
		WrappedComponent: ClientsListBlock,
		requestHook: useClients,
		haveNoDataText: `Can't find any client`
	})

	return <WrappedChild />
}

function ClientsListBlock(
	{ result: clients }:
	{ result: NonNullable<ClientType[]> }
): ReactElement {
	return (
		clients.length ? (
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
		) : <>`You do not have any client in the system yet.`</>
	)
}