export default function ListDecimalItemLoader() {
	return (
		<div className="relative max-w-xs w-full" style={{ width: '400px' }}>
			<div className="flex space-x-4 animate-pulse">
				<div>
					<div className="rounded-full bg-slate-400 h-6 w-6"></div>
				</div>
				<div className="grid grid-cols-3 gap-4 w-full content-center">
					<div className="h-3 bg-slate-400 rounded col-span-2"></div>
					<div className="h-3 bg-slate-400 rounded col-span-1"></div>
				</div>
			</div>
		</div>
	)
}