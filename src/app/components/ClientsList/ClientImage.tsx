import { useMemo } from "react"

interface ClientImageProps {
	imageName?: string
}

export default function ClientImage({
	imageName,
}: ClientImageProps) {
	const imageWrapClassName = useMemo(() => (`
		w-6 h-6 p-[0.1rem]
		rounded-full ring-1 ring-slate-900/10
		shadow overflow-hidden flex-none
		dark:bg-slate-600 dark:highlight-white/20
	`), [])
	
	const imageUrl = useMemo(() => (`
		url(/images/${imageName || 'component-driven.82a66c3c.png'})
	`), [imageName])
	
	return (
		<div className={imageWrapClassName}>
			<div
				className="aspect-w-1 aspect-h-1 bg-[length:100%] dark:hidden"
				style={{
						backgroundImage: imageUrl,
						width: `100%`,
						height: `100%`
				}}
			></div>
		</div>
	)
}