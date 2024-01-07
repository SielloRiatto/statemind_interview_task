import { ResultWithStatusType } from "@/types"
import Loader from "@/components/Loader"
import { FC } from "react"

export interface StatusHOCProps {
	result: Exclude<ResultWithStatusType["result"], null>
}

export default function statusHOC<P extends object>({
	WrappedComponent,
	requestHook,
	haveNoDataText = `Can't find the data`
}: {
	WrappedComponent: FC<P & StatusHOCProps>,
	requestHook: () => ResultWithStatusType,
	haveNoDataText?: string
}): FC {
	const { result, status }: ResultWithStatusType = requestHook()

	const WithHOC: FC = (props) => {
		if (status === 'LOAD') {
			return <Loader />
		}

		if (status === 'FAIL') {
			return <>Error occured, try open later</>
		}

		if (status === 'SUCCESS' && result) {
			return <WrappedComponent result={result} {...props as P} />
		}

		return <>{haveNoDataText}</>
	}

	WithHOC.displayName =
		`StatusHOC(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

	return WithHOC
}