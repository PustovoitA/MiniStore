
import { useDelayLoadng } from "@/hooks/useDelayLoaidng"

import type { RadioGroupProps } from "../types/InputTypes"

const RadioGroup = ({ options, value, setLoading, Loading, onChange }: RadioGroupProps) => {
  const delay = useDelayLoadng(setLoading, 3000);

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => {
        const isSelected = value === option

        return (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 font-[Jost]"
          >
            <input
              type="radio"
              name="radio-group"
              value={option}
              checked={isSelected}
              onChange={() => {onChange(option); delay()}}
              disabled={Loading === true}
              className="sr-only"
            />

            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                isSelected
                  ? "border-(--blue-color)"
                  : "border-(--border)"
              }`}
            >
              {isSelected && (
                <span className="h-2.5 w-2.5 rounded-full bg-(--blue-color)" />
              )}
            </span>

            <span>{option}</span>
          </label>
        )
      })}
    </div>
  )
}
export default RadioGroup