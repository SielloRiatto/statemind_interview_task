interface HeaderProps {
    pageName: string
}

export default function Header({
    pageName
}: HeaderProps) {
    return (
        <header>{pageName}</header>
    )
}