import { InitialNode } from "@/components/initial-node";
import { HttpRequestNode } from "@/features/executions/components/http-request/node";
import { NodeType } from "@/generated/prisma";
import type { NodeTypes } from "@xyflow/react";

export const nodeComponents = {
    [NodeType.INITIAL]: InitialNode,
    [NodeType.HTTP_REQUEST]: HttpRequestNode,
    // [NodeType. MANUAL_TRIGGER]: ManualTriggerNode,
} as const satisfies NodeTypes

export type RegisterNodeType = keyof typeof nodeComponents  