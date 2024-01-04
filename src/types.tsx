export type {
	ClientType,
	AuditType,
	AuditDetailsType,
	StatusType,
}

type AuditDetailsType = {
	critical_cnt: number,
	high_cnt: number,
	medium_cnt: number,
	loc: number,
}

type AuditType = {
	id: string,
	clientId: string,
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
	id: string,
	client: string,
	img: string,
	loc: number,
	reports: number,
	tvl: number,
	audits?: AuditType[]
}

type StatusType = 'LOAD' | 'SUCCESS' | 'FAIL'