import { requireAuth } from "@/lib/auth-utils"

interface PageProps {
    params: {
        credentialId: string
    }
}

const Page = async ({ params }: PageProps) => {
    await requireAuth()
    const { credentialId } = params
    return <p>Credential id: {credentialId}</p>
}

export default Page;