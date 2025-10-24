import { ArrowUpRight, ArrowDownRight, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface MutualFund {
  id: number;
  fundName: string;
  category: string;
  manager: string;
  nav: number;
  aum: string;
  performance: {
    "1Y": string;
    "3Y": string;
    "5Y": string;
  };
  riskProfile: string;
  shariah: string;
  fundType: string;
}

interface FundCardProps {
  fund: MutualFund;
  onViewDetails?: (fund: MutualFund) => void;
}

export default function FundCard({ fund, onViewDetails }: FundCardProps) {
  const getPerformanceColor = (performance: string) => {
    const value = parseFloat(performance);
    return value >= 0 ? "text-green-600" : "text-red-600";
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "High":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getShariahColor = (shariah: string) => {
    return shariah === "Islamic"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-700";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-bold text-gray-900 truncate">
              {fund.fundName}
            </h3>
            <p className="text-xs text-gray-600 mt-1">{fund.manager}</p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <span
              className={cn(
                "inline-block px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                getShariahColor(fund.shariah),
              )}
            >
              {fund.shariah}
            </span>
            <span
              className={cn(
                "inline-block px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap",
                getRiskColor(fund.riskProfile),
              )}
            >
              {fund.riskProfile}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-b border-gray-200">
          <div>
            <p className="text-xs text-gray-600 font-medium">Category</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">
              {fund.category}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">NAV</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">
              PKR {fund.nav.toFixed(2)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">AUM</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">
              {fund.aum}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 font-medium">Fund Type</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">
              {fund.fundType}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-600 font-medium mb-3">Performance</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded p-3 text-center">
              <p className="text-xs text-gray-600 font-medium">1-Year</p>
              <p
                className={cn(
                  "text-sm font-bold mt-1",
                  getPerformanceColor(fund.performance["1Y"]),
                )}
              >
                <span className="flex items-center justify-center gap-1">
                  {parseFloat(fund.performance["1Y"]) >= 0 ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {fund.performance["1Y"]}
                </span>
              </p>
            </div>
            <div className="bg-gray-50 rounded p-3 text-center">
              <p className="text-xs text-gray-600 font-medium">3-Year</p>
              <p
                className={cn(
                  "text-sm font-bold mt-1",
                  getPerformanceColor(fund.performance["3Y"]),
                )}
              >
                <span className="flex items-center justify-center gap-1">
                  {parseFloat(fund.performance["3Y"]) >= 0 ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {fund.performance["3Y"]}
                </span>
              </p>
            </div>
            <div className="bg-gray-50 rounded p-3 text-center">
              <p className="text-xs text-gray-600 font-medium">5-Year</p>
              <p
                className={cn(
                  "text-sm font-bold mt-1",
                  getPerformanceColor(fund.performance["5Y"]),
                )}
              >
                <span className="flex items-center justify-center gap-1">
                  {parseFloat(fund.performance["5Y"]) >= 0 ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {fund.performance["5Y"]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onViewDetails?.(fund)}
        className="w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Eye className="h-4 w-4" />
        View Details
      </button>
    </div>
  );
}
