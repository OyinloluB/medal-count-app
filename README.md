# Medal Count Mini App

A React/Next.js application that displays Olympic medal counts with sorting functionality.

## Features

- Display top 10 countries by 
medal count
- Sort by gold, silver, bronze, or total medals
- URL parameter support for sorting (`?sort=gold|silver|bronze|total`)
- Tiebreaker logic implemented according to specifications
- Country flags displayed using sprite sheet
- Error handling for failed data fetching
- Responsive design

## Setup Instructions

1. Install dependencies:
```
npm install
```
2. Run the development server:
```
npm run dev
```
3. Open http://localhost:3000 in your browser


## Project Structure
- src/
    - app/                  
        - page.tsx         
        - layout.tsx       
    - components/          
        - MedalTable/: Table display logic
        - CountryFlag/: Sprite-based flag rendering
        - ErrorMessage/: Error state handling
    - hooks/               
        - useMedalData.ts: Data fetching and caching
        - useURLParams.ts: URL parameter management
    - services/            
        - api.ts: Medal data fetching
    - utils/              
        - types.ts: TypeScript type definitions
        - sorting.ts: Sorting and tiebreaker logic

## Technical Decisions
- Next.js App Router: For modern React features and better performance
- TypeScript: For type safety and better developer experience
- CSS Modules: For scoped styling and avoiding conflicts
- Custom Hooks: For separation of concerns and reusability

## Potential Improvements
- Testing (1 day):
    - Unit tests with Jest and React Testing Library
    - E2E tests with Playwright
- Performance (2 hours):
    - Virtual scrolling for large datasets
- UX Improvements (2-4 hours):
    - Smooth sorting animations
    - Loading skeletons
    - Search/filter functionality
    - Export to CSV feature
