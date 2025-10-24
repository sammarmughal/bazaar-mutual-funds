import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Filters {
  shariah: string[];
  riskProfile: string[];
  fundType: string[];
}

interface FilterSidebarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export default function FilterSidebar({
  filters,
  onFiltersChange,
}: FilterSidebarProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "shariah",
  );

  const shariahOptions = ["Islamic", "Conventional"];
  const riskOptions = ["Low", "Medium", "High"];
  const fundTypeOptions = ["Mutual Fund", "Pension Fund"];

  const toggleOption = (section: keyof Filters, option: string) => {
    const currentValues = filters[section];
    const newValues = currentValues.includes(option)
      ? currentValues.filter((v) => v !== option)
      : [...currentValues, option];

    onFiltersChange({
      ...filters,
      [section]: newValues,
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const FilterSection = ({
    title,
    section,
    options,
  }: {
    title: string;
    section: keyof Filters;
    options: string[];
  }) => (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between py-4 px-0 hover:opacity-70 transition"
      >
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-600 transition-transform",
            expandedSection === section && "transform rotate-180",
          )}
        />
      </button>

      {expandedSection === section && (
        <div className="pb-4 space-y-3">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters[section].includes(option)}
                onChange={() => toggleOption(section, option)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              />
              <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900 transition">
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  const hasActiveFilters =
    filters.shariah.length > 0 ||
    filters.riskProfile.length > 0 ||
    filters.fundType.length > 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 h-fit sticky top-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={() =>
              onFiltersChange({
                shariah: [],
                riskProfile: [],
                fundType: [],
              })
            }
            className="text-xs font-medium text-blue-600 hover:text-blue-700 underline"
          >
            Clear all
          </button>
        )}
      </div>

      <FilterSection
        title="Shariah Compliance"
        section="shariah"
        options={shariahOptions}
      />
      <FilterSection
        title="Risk Profile"
        section="riskProfile"
        options={riskOptions}
      />
      <FilterSection
        title="Fund Type"
        section="fundType"
        options={fundTypeOptions}
      />
    </div>
  );
}
