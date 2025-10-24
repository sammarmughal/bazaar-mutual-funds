# Bazaar Mutual Funds

A simple and responsive mutual funds dashboard built with React + TypeScript + Tailwind CSS.
This project displays mutual fund data from a local JSON file, with search and filter options for easy exploration.

## 🎯 Project Overview

Bazaar Mutual Funds is a production-ready front-end application that displays comprehensive mutual fund data with an intuitive interface. Users can search for specific funds, apply multiple filters, and view detailed performance metrics in an easy-to-understand format.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 3 with responsive design
- **Data Fetching**: Native Fetch API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📋 Features

### 1. **Search Functionality**

- Real-time search by fund name, manager name, or category
- Instant filtering as you type
- Clear visual feedback on search input

### 2. **Advanced Filtering**

- **Shariah Compliance**: Filter between Islamic and Conventional funds
- **Risk Profile**: Filter by Low, Medium, or High risk categories
- **Fund Type**: Distinguish between Mutual Funds and Pension Funds
- **Clear Filters**: One-click button to reset all filters

### 3. **Fund Cards Display**

- Comprehensive fund information in card format
- Key metrics: NAV, AUM, Category, Fund Type
- Performance indicators: 1-Year, 3-Year, 5-Year returns with color-coded indicators
- Risk badges with color differentiation
- Shariah compliance badges
- "View Details" button for each fund

### 4. **Responsive Design**

- Mobile-first approach
- Optimized layouts for all screen sizes
- Sticky filter sidebar on desktop
- Touch-friendly interface on mobile

## 📂 Project Structure

```
bazaar-mutual-funds/
├── client/
│   ├── components/
│   │   ├── SearchBar.tsx        # Search input component
│   │   ├── FilterSidebar.tsx    # Filter options sidebar
│   │   └── FundCard.tsx         # Individual fund card
│   ├── pages/
│   │   ├── Index.tsx            # Main mutual funds page
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # App entry point
│   ├── global.css               # Global styles and theme
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   └── mutualFunds.json         # Sample mutual funds data
├── server/
│   └── index.ts                 # Express server (optional)
├── tailwind.config.ts           # Tailwind configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v10.14.0 or higher)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port displayed in your terminal).

### Building

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 📊 Data Structure

The mutual funds data is stored in `public/mutualFunds.json` with the following structure:

```typescript
interface MutualFund {
  id: number;
  fundName: string; // e.g., "Meezan Paidaar Munafa Plan XXVII"
  category: string; // e.g., "Income Fund", "Equity Fund"
  manager: string; // e.g., "Meezan Asset Management"
  nav: number; // Net Asset Value
  aum: string; // Assets Under Management
  performance: {
    "1Y": string; // 1-Year return percentage
    "3Y": string; // 3-Year return percentage
    "5Y": string; // 5-Year return percentage
  };
  riskProfile: string; // "Low", "Medium", or "High"
  shariah: string; // "Islamic" or "Conventional"
  fundType: string; // "Mutual Fund" or "Pension Fund"
}
```

## 🎨 Design Features

### Color Scheme

- **Primary Blue**: Used for action buttons and highlights
- **Soft Grays**: For backgrounds, borders, and text
- **Status Colors**:
  - Green: Low risk, positive performance
  - Yellow: Medium risk
  - Red: High risk, negative performance

### Typography

- **Font Family**: Inter (imported from Google Fonts)
- **Font Weights**: 400 (Regular), 600 (Semibold), 700 (Bold), 800 (Extra Bold)
- **Responsive Sizing**: Scales appropriately for all devices

### Components

- Smooth hover transitions
- Consistent rounded corners (0.5rem radius)
- Soft box shadows for card elevation
- Focus states for accessibility

## 🔄 State Management

The application uses React hooks for state management:

- `useState` for managing funds, filters, search term, and loading state
- `useEffect` for data fetching and filtering logic
- Real-time filtering based on search and filter selections

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (single column layout)
- **Tablet**: 641px - 1024px (optimized grid)
- **Desktop**: 1025px+ (full 2-column grid with sticky sidebar)

## 🔒 Data Integration

Currently uses static JSON data from `public/mutualFunds.json`. To integrate with a live API:

1. Replace the fetch URL in `client/pages/Index.tsx`:

   ```typescript
   const response = await fetch("https://your-api.com/funds");
   ```

2. Ensure the API response matches the `MutualFund` interface

3. Handle error states appropriately

## 🚀 Future Improvements

1. **Live Data Integration**: Connect to a real mutual funds API
2. **Authentication**: Add user login and portfolio tracking
3. **Detailed Pages**: Create individual fund detail pages
4. **Comparative Analysis**: Add fund comparison tools
5. **Favorites**: Allow users to save favorite funds
6. **Alerts**: Implement price/performance alerts
7. **Charts**: Add performance visualization with Recharts
8. **Export**: Export fund data to PDF/CSV
9. **Sorting**: Add multiple sorting options
10. **Pagination**: Implement pagination for large datasets

## 🧪 Testing

```bash
# Run tests
pnpm test

# Type checking
pnpm typecheck

# Format code
pnpm format.fix
```

## 🌐 Deployment

### Netlify

```bash
# Connect your repository to Netlify
# The build command is configured in netlify.toml
```

### Vercel

```bash
# Deploy using Vercel CLI or connect your Git repository
# Automatic deployments on push to main branch
```

## 📞 Support & Contribution

For issues, feature requests, or contributions, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Lucide React Icons](https://lucide.dev)
- [Vite Documentation](https://vitejs.dev)

## ✨ Assumptions

1. **Static Data**: The application uses hardcoded sample data for demonstration
2. **No Backend Required**: All filtering and searching happens client-side
3. **Modern Browsers**: Targets modern browsers with ES6+ support
4. **Single Page Application**: Navigation doesn't require page reloads

## 🎯 Design Inspiration

This project is inspired by the Mutual Funds page of [Sarmaaya.pk](https://sarmaaya.pk/mutual-funds), adapting their clean, professional design approach while maintaining our unique branding.

---

**Built with ❤️ for Bazaar**
