import dynamic from "next/dynamic"
import Header from "@/components/Header"
import Loader from "@/components/Loader"

const AuditsList = dynamic(
  () => import('@/components/AuditsList'),
  {
    ssr: false,
    loading: Loader
  }
)

export default function Client() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header pageName={"Audits"} />
      <AuditsList />
    </main>
  )
}
