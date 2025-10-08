# Sales Dashboard

A Next.js 15 application with TypeScript and Tailwind CSS that displays sales data through interactive charts.

## Features

- Sales data visualization for years 2022, 2023, and 2024
- Interactive charts with multiple visualization options (Bar, Line, Pie)
- Custom sales threshold filtering
- Responsive design using Tailwind CSS
- Atomic design principles implementation

## Project Structure

```
sales-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── SalesChart.tsx
│   │   ├── YearSelector.tsx
│   │   └── CustomFilter.tsx
│   ├── types/
│   │   └── sales.ts
├── public/
├── styles/
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd sales-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

2. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Running in Production Mode

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

### Deploying to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository
2. Sign in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the Next.js framework
6. Click "Deploy"
7. Your application will be live within minutes!

### GitHub Deployment

To deploy to GitHub:

1. Create a new repository on GitHub
2. Push your local code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

### Environment Variables

No environment variables are required for this application. All data is currently mock data.

### Deployment Notes

- The application uses Next.js 15 with the App Router
- Tailwind CSS is used for styling
- Recharts is used for data visualization
- The application is fully responsive

## Technologies Used

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/) for data visualization
- [React](https://reactjs.org/)

## Features Implementation

### 1. Sales Data Visualization
The application displays sales data for three years (2022, 2023, 2024) with mock data that simulates real sales figures.

### 2. Multiple Chart Types
Users can switch between different chart types:
- Bar Chart
- Line Chart
- Pie Chart

### 3. Custom Filtering
Users can set a minimum sales threshold to filter the data displayed in the charts.

### 4. Year Selection
Users can toggle between different years to view sales data for specific periods.

## Component Structure

### Dashboard Component
The main component that orchestrates all other components and manages the application state.

### SalesChart Component
Responsible for rendering different chart types using the Recharts library.

### YearSelector Component
Provides UI for selecting between different years of sales data.

### CustomFilter Component
Allows users to set a minimum sales threshold for filtering data.

## Data Structure

The application uses mock data structured as follows:

```typescript
interface SalesData {
  month: string;
  sales: number;
}
```

## Dependencies

### Runtime Dependencies
- `next`: 15.0.0 - The React framework for production
- `react`: 19.0.0 - The library for web and native user interfaces
- `react-dom`: 19.0.0 - React package for working with the DOM
- `recharts`: ^2.12.7 - Redefined chart library built with React and D3

### Development Dependencies
- `@types/node`: ^20 - TypeScript definitions for Node.js
- `@types/react`: ^18 - TypeScript definitions for React
- `@types/react-dom`: ^18 - TypeScript definitions for React DOM
- `autoprefixer`: ^10.4.20 - Parse CSS and add vendor prefixes
- `eslint`: ^8 - An AST-based pattern checker for JavaScript
- `eslint-config-next`: 15.0.0 - ESLint configuration used by Next.js
- `postcss`: ^8.4.47 - Tool for transforming styles with JS plugins
- `tailwindcss`: ^3.4.13 - A utility-first CSS framework
- `typescript`: ^5 - TypeScript is a language for application scale JavaScript development

## Atomic Design Principles

This project follows atomic design principles by:
1. Breaking down the UI into small, reusable components
2. Creating a clear component hierarchy
3. Ensuring components are self-contained and reusable
4. Using consistent styling through Tailwind CSS

## Enhancements

Potential future enhancements include:
1. API Integration - Fetch real data from an external API instead of using mock data
2. Additional Chart Types - Implement more visualization options
3. Data Export - Allow users to export charts as images or data files
4. Advanced Filtering - Add more complex filtering options
5. User Authentication - Add user login and personalized dashboards

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.