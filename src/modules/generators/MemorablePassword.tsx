import { Divider } from "@/components/Divider";
import { Slider } from "@/components/Slider";
import { Switch } from "@/components/Switch";

interface MemorablePasswordProps {
  length: number;
  setLength: (val: number[]) => void;
  capitalizeFirstLetter: boolean;
  setCapitalizeFirstLetter: (checked: boolean) => void;
  useFullWords: boolean;
  setUseFullWords: (checked: boolean) => void;
}

export default function MemorablePassword({
  length,
  setLength,
  capitalizeFirstLetter,
  setCapitalizeFirstLetter,
  useFullWords,
  setUseFullWords,
}: MemorablePasswordProps) {
  return (
    <div>
      <div className="flex items-center gap-8">
        <span className="dark:text-gray-400 text-sm select-none">
          Characters
        </span>

        <Slider
          id="length"
          value={[length]}
          onValueChange={setLength}
          min={3}
          max={15}
        />

        <span className="ml-1 select-none font-semibold text-gray-900 dark:text-gray-50 text-xs font-mono dark:bg-gray-800/80 bg-gray-200/50 py-2 px-4 rounded">
          {length}
        </span>
      </div>

      <Divider />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 gap-x-8">
        <div className="flex items-center space-x-3">
          <label
            htmlFor="capitalize-first-letter"
            className="dark:text-gray-400 text-sm select-none"
          >
            Capitalize the first letter
          </label>
          <Switch
            id="capitalize-first-letter"
            checked={capitalizeFirstLetter}
            onCheckedChange={setCapitalizeFirstLetter}
          />
        </div>
        <div className="flex items-center space-x-3">
          <label
            htmlFor="full-words"
            className="dark:text-gray-400 text-sm select-none"
          >
            Use full words
          </label>
          <Switch
            id="full-words"
            checked={useFullWords}
            onCheckedChange={setUseFullWords}
          />
        </div>
      </div>

      <Divider />
    </div>
  );
}
