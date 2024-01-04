'use client'

import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useMemo } from "react"
import useClient from "../hooks/useClient"
import Loader from "./Loader"
import ListDecimalItemLoader from "./ListDecimalItem/ListDecimalItemLoader"

const ListDecimalItem = dynamic(
	() => import('./ListDecimalItem'),
	{
	  ssr: false,
	  loading: ListDecimalItemLoader
	}
)

export default function AuditsList() {
	const { clientId }: { clientId: string } = useParams()
	const { client, status } = useClient({ clientId, withAudits: true })
	const headerClassName = useMemo(() => (`
		p-3 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200
	`), [])

	if (status === "LOAD") {
		return <Loader />
	}

	if (status === "FAIL") {
		return <>Error occured, try open later</>
	}

	if (status === 'SUCCESS' && !client) {
		return <>The client does not exist or their data was deleted.</>
	}

	return (
		<>
		<h3 className={headerClassName}>
			Client: {client?.client}
		</h3>
		{
			client?.audits?.length ? (
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
			)
		}
		</>
	)
}