import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import FundCard from "@/components/FundCard";
import { Loader } from "lucide-react";

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

interface Filters {
  shariah: string[];
  riskProfile: string[];
  fundType: string[];
}

export default function Index() {
  const [funds, setFunds] = useState<MutualFund[]>([]);
  const [filteredFunds, setFilteredFunds] = useState<MutualFund[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Filters>({
    shariah: [],
    riskProfile: [],
    fundType: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const response = await fetch("https://mutual-fund-api-bkwg.onrender.com/api/funds");
        const data = await response.json();
        setFunds(data);
        console.log("Fetched mutual funds:", data);
        setFilteredFunds(data);
      } catch (error) {
        console.error("Error fetching mutual funds:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  useEffect(() => {
    let result = funds;

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (fund) =>
          fund.fundName.toLowerCase().includes(term) ||
          fund.manager.toLowerCase().includes(term) ||
          fund.category.toLowerCase().includes(term),
      );
    }

    // Filter by selected options
    if (filters.shariah.length > 0) {
      result = result.filter((fund) => filters.shariah.includes(fund.shariah));
    }

    if (filters.riskProfile.length > 0) {
      result = result.filter((fund) =>
        filters.riskProfile.includes(fund.riskProfile),
      );
    }

    if (filters.fundType.length > 0) {
      result = result.filter((fund) =>
        filters.fundType.includes(fund.fundType),
      );
    }

    setFilteredFunds(result);
  }, [searchTerm, filters, funds]);

  const handleViewDetails = (fund: MutualFund) => {
    console.log("View details for:", fund);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Bazaar Mutual Funds
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Explore and compare mutual funds from Pakistan's leading asset
              managers. Find the right investment option for your financial
              goals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <Loader className="h-8 w-8 text-blue-600 animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Loading mutual funds...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <FilterSidebar filters={filters} onFiltersChange={setFilters} />
            </div>

            {/* Main Content - Fund Cards */}
            <div className="lg:col-span-3">
              {filteredFunds.length > 0 ? (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                      Available Funds
                    </h2>
                    <p className="text-sm text-gray-600">
                      Showing {filteredFunds.length} of {funds.length}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredFunds.map((fund) => (
                      <FundCard
                        key={fund.id}
                        fund={fund}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center min-h-96 bg-white rounded-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 text-lg mb-2">No funds found</p>
                    <p className="text-gray-500 text-sm">
                      Try adjusting your search or filters
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
