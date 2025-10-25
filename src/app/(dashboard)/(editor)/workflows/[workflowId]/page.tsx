import { requireAuth } from "@/lib/auth-utils"

interface PageProps {
    params: {
        workflowId: string
    }
}

const Page = async ({ params }: PageProps) => {
    await requireAuth()
    const { workflowId } = params
    return <p>workflow id: {workflowId}</p>
}

export default Page;