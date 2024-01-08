'use client'

import { ReactElement } from "react"
import { ClientType } from "@/types"
import useClients from "@/hooks/useClients"
import statusHOC from "@/components/Loader/statusHOC"
import ListDecimalItem from "@/components/ListDecimalItem"
import { headerClassName } from "@/constants"

export default function AuditsList(): ReactElement {
	const WrappedChild = statusHOC({
		WrappedComponent: AuditsListBlock,
		requestHook: useClients,
		haveNoDataText: `The client does not exist or their data was deleted.`
	})

	return <WrappedChild />
}

function AuditsListBlock(
	{ result: client }:
	{ result: NonNullable<ClientType> }
): ReactElement {
	return (
		<>
		<h3 className={headerClassName}>
			Client: {client.client}
		</h3>
		{client.audits?.length ? (
			<ol className={"relative space-y-2 mb-16 p-4"}>
				{client.audits.map((audit, i, arr) => (
					<ListDecimalItem 
						key={audit.id}
						title={audit.audit_name}
						linkText={`See details`}
						linkHref={`/${client.id}/${audit.id}`}
						isLast={i === arr.length - 1}
					/>
				))}
			</ol>
		) : (
			<p>The client does not have any audit yet.</p>
		)}
		</>
	)
}