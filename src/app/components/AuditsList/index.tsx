'use client'

import { useParams } from "next/navigation"
import { useMemo } from "react"
import useClient from "../../hooks/useClient"
import Loader from "../Loader"
import AuditItem from "./AuditItem"

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
						<AuditItem
							key={audit.id}
							id={audit.id}
							name={audit.audit_name}
							userId={client.id}
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