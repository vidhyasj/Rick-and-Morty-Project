# Rick and Morty Character App

This is a React application that fetches and displays characters from the Rick and Morty API. The application allows users to filter characters by name and status (alive or dead) and supports pagination for navigating through the character list.

## Features

- Fetches character data from the [Rick and Morty API](https://rickandmortyapi.com/)
- Displays character information in a card format, including:
  - Name
  - Image
  - Status (Alive or Dead)
- Filters characters by:
  - Name (input field)
  - Status (selector for alive or dead)
- Pagination to navigate through the list of characters

## Project Structure

```
rick-and-morty-app
├── src
│   ├── components
│   │   ├── Character.tsx       # Component for displaying individual character details
│   │   ├── CharacterList.tsx    # Component for rendering a list of characters with pagination
│   │   └── Filters.tsx          # Component for filtering characters by name and status
│   ├── hooks
│   │   └── useCharacters.ts      # Custom hook for fetching and managing character data
│   ├── types
│   │   └── index.ts              # TypeScript interfaces for character data
│   ├── App.tsx                   # Main application component
│   ├── App.css                   # Minimal styling for the application
│   └── index.tsx                 # Entry point of the application
├── package.json                   # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Project documentation
```

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd rick-and-morty-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- React
- TypeScript
- Axios (for API requests)
- CSS for styling

## License

This project is licensed under the MIT License.