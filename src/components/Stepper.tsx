import { IconCircleCheck } from "@tabler/icons-react";

export const ProgressStep = ({
    step,
    label,
    active,
    completed,
  }: { step: number; label: string; active: boolean; completed: boolean }) => (
    <div className="flex items-center space-x-2">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          completed ? "bg-green-500 text-white" : active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        {completed ? <IconCircleCheck className="w-4 h-4" /> : step}
      </div>
      <span
        className={`text-sm font-medium ${active ? "text-blue-600" : completed ? "text-green-600" : "text-gray-500"}`}
      >
        {label}
      </span>
    </div>
  )