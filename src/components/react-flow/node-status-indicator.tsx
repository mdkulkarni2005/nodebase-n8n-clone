import { type ReactNode } from "react";
import { LoaderCircle, CheckCircle2, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export type NodeStatus = "loading" | "success" | "error" | "initial";

export type NodeStatusVariant = "overlay" | "border";

export type NodeStatusIndicatorProps = {
  status?: NodeStatus;
  variant?: NodeStatusVariant;
  children: ReactNode;
  className?: string
};

export const SpinnerLoadingIndicator = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="relative">
      <StatusBorder className="border-blue-700/40">{children}</StatusBorder>

      <div className="absolute inset-0 z-50 rounded-[7px] bg-background/50 backdrop-blur-sm" />
      <div className="absolute inset-0 z-50 flex items-center justify-center">
        <span className="absolute inline-block h-10 w-10 animate-ping rounded-full bg-blue-700/20" />

        <LoaderCircle className="size-6 animate-spin text-blue-700" />
      </div>
    </div>
  );
};

export const BorderLoadingIndicator = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string
}) => {
  return (
    <div className="relative">
      <div className="absolute -left-[2px] -top-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)]">
        <style>
          {`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .spinner {
          animation: spin 2s linear infinite;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 140%;
          aspect-ratio: 1;
          transform-origin: center;
        }
      `}
        </style>
        <div className={cn("absolute inset-0 overflow-hidden rounded-sm",
          className
        )}>
          <div className="spinner rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,_rgb(42,67,233,0.5)_0deg,_rgba(42,138,246,0)_360deg)]" />
        </div>
      </div>
      {children}
      <LoaderCircle className="absolute -right-1 -bottom-1 size-3 text-blue-700 stroke-[3] animate-spin" />
    </div>
  );
};

const StatusBorder = ({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute -left-[2px] -top-[2px] h-[calc(100%+4px)] w-[calc(100%+4px)] rounded-md border-3",
          className,
        )}
      />
      {children}
      {icon}
    </div>
  );
};

export const NodeStatusIndicator = ({
  status,
  variant = "border",
  children,
  className
}: NodeStatusIndicatorProps) => {
  switch (status) {
    case "loading":
      switch (variant) {
        case "overlay":
          return <SpinnerLoadingIndicator>{children}</SpinnerLoadingIndicator>;
        case "border":
          return <BorderLoadingIndicator className={className}>{children}</BorderLoadingIndicator>;
        default:
          return <>{children}</>;
      }
    case "success":
      return (
        <StatusBorder 
          className={cn("border-green-700/50",className)}
          icon={<CheckCircle2 className="absolute right-1 bottom-1 size-3 text-green-700 stroke-[3]" />}
        >
          {children}
        </StatusBorder>
      );
    case "error":
      return (
        <StatusBorder 
          className={cn("border-red-700/50", className)}
          icon={<XCircle className="absolute right-1 bottom-1 size-3 text-red-700 stroke-[3]" />}
        >
          {children}
        </StatusBorder>
      );
    default:
      return <>{children}</>;
  }
};
