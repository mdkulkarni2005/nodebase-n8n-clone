import { requireAuth } from "@/lib/auth-utils"

interface PageProps {
    params: {
        executionId: string
    }
}

const Page = async ({ params }: PageProps) => {
    await requireAuth()
    const { executionId } = params
    return <p>execution id: {executionId}</p>
}

export default Page;