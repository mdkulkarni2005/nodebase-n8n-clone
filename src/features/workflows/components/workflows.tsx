"use client";

import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { userCreateWorkflow, useSuspenseWorkflows } from "../hooks/use-workflows";

export const WorkflowsList = () => {
  const workflows = useSuspenseWorkflows();

  return (
    <div className="flex-1 flex justify-center items-center">
      <p>{JSON.stringify(workflows.data, null, 2)}</p>
    </div>
  );
};

export const WorkflowsHeader = ({ disabled }: { disabled?: boolean }) => {

  const createWorkflow = userCreateWorkflow()

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onError: (error) => {
        console.error(error)
      }
    })
  }

  return (
    <>
      <EntityHeader
        title="workflows"
        description="Create and mange you workflows"
        onNew={handleCreate}
        newButtonLabel="New workflow"
        disabled={disabled}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};

export const WorkflowsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkflowsHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
