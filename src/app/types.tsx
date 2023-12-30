export type {
	ClientType,
	AuditType,
	AuditDetailsType,
}

type AuditDetailsType = {
	critical_cnt: number,
	high_cnt: number,
	medium_cnt: number,
	loc: number,
}

type AuditType = {
	details: AuditDetailsType,
	audit_name: string,
	start_date: string,
	end_date: string,
	private: boolean,
	desc?: string,
	initial_commit?: string,
	conclusion?: string,
	report_link?: string
}

type ClientType = {
	audits: AuditType[],
	client: string,
	img: string,
	log: number,
	reports: number,
	tvl: number,
}