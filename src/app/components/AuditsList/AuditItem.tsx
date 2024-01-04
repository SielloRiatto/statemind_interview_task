import Link from "next/link"
import { useMemo } from "react"

interface AuditItemProps {
  id: string,
  name: string,
  userId: string,
  isLast: boolean,
}

export default function AuditItem({
  id,
  name,
  userId,
  isLast,
}: AuditItemProps) {
  const itemClassName = useMemo(() => (`
    relative flex items-start pl-10 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5
    ${!isLast && 'pb-4 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-slate-200 dark:after:bg-slate-200/5'}
  `), [isLast])

  const linkClassName = useMemo(() => (`
    font-medium text-xs text-sky-600 hover:underline hover:text-sky-500 dark:hover:text-sky-400
  `), [])

  return (
    <li className={itemClassName} style={{ counterIncrement: "step 1"}}>
      <div className="peer group flex-auto ml-4">
        <div>
          {`${name} `}
          <Link
            href={`/${userId}/${id}`}
            prefetch={false}
            className={linkClassName}
          >
            See details
          </Link>
        </div>
      </div>
    </li>
  )
}