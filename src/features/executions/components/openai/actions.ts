"use server"

import { getSubscriptionToken, type Realtime } from "@inngest/realtime"
import { inngest } from "@/inngest/client"
import { openAiChannel } from "@/inngest/channels/openai"

export type OpenAi = Realtime.Token<
    typeof openAiChannel,
    ["status"]
>

export async function fetchOpenAiRealtimeToken(): Promise<OpenAi> {
    const token = await getSubscriptionToken(inngest, {
        channel: openAiChannel(),
        topics: ['status']
    })

    return token
}