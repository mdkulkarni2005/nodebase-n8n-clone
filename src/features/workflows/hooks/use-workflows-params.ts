import { useQueryStates } from "nuqs"
import { workflowsParams } from "../params"

export const userWorkflowsParams = () => {
    return useQueryStates(workflowsParams)
}