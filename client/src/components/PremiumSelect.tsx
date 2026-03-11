import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function PremiumSelect({ options, value, onChange }) {
  const [selected, setSelected] = useState(value);

  return (
    <Listbox
      value={selected}
      onChange={(val) => {
        setSelected(val);
        onChange(val);
      }}
    >
      <div className="relative">
        <Listbox.Button className="w-full bg-black/20 border border-white/10 rounded-xl py-4 pl-5 pr-10 text-left text-white text-lg md:text-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 flex justify-between items-center">
          {selected || "Select a service"}
          <ChevronDown
            size={20}
            className="text-white/50 transition-transform duration-300"
          />
        </Listbox.Button>

        <Listbox.Options className="absolute mt-2 w-full bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-lg z-50 max-h-60">
          {options.map((option) => (
            <Listbox.Option
              key={option}
              value={option}
              className={({ active }) =>
                `cursor-pointer px-5 py-3 text-white ${
                  active ? "bg-accent/20" : ""
                } transition-colors duration-200`
              }
            >
              {option}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
