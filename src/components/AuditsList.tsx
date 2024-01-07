'use client'

import { ReactElement, useMemo } from "react"
import dynamic from "next/dynamic"

import { ClientType } from "@/types"
import useClients from "@/hooks/useClients"
import statusHOC from "@/components/Loader/statusHOC"

import ListDecimalItemLoader
	from "@/components/ListDecimalItem/ListDecimalItemLoader"

const ListDecimalItem = dynamic(
	() => import('@/components/ListDecimalItem'),
	{
	  ssr: false,
	  loading: ListDecimalItemLoader
	}
)

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
	const headerClassName = useMemo(() => (`
		p-3 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200
	`), [])

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