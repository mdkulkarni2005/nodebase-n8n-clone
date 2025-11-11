import { NodeType } from "@/generated/prisma";
import type { NodeExecutor } from "../types";
import { manualTriggerExecutor } from "@/features/triggers/components/manual-trigger/executor";
import { httpRequestExecutor } from "../components/http-request/executor";
import { googleFormTriggerExecutor } from "@/features/triggers/components/google form trigger/executor";

// biome-ignore lint/suspicious/noExplicitAny: Registry needs to accept executors with different data types
export const executorRegistry: Record<NodeType, NodeExecutor> = {
    [NodeType.INITIAL]: manualTriggerExecutor,
    [NodeType.MANUAL_TRIGGER]: manualTriggerExecutor,
    [NodeType.HTTP_REQUEST]: httpRequestExecutor,
    [NodeType.GOOGLE_FORM_TRIGGER]: googleFormTriggerExecutor
}

export const getExecutor = (type: NodeType): NodeExecutor => {
    const executor = executorRegistry[type]
    if(!executor) {
        throw new Error(`No executor found for node: ${type}`)
    }

    return executor
}