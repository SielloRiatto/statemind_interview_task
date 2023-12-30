interface HeaderProps {
	pageName: string
}

export default function Header({
	pageName
}: HeaderProps) {
	return (
		<header className={"p-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"}>
			{pageName}
		</header>
	)
}