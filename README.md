___HOW TO RUN___

- npm install
- npm run dev

___HOW I WOULD HANDLE FUNCTIONALITY IF THIS WAS A REAL PROJECT____

- use ReactQuery instead of native javascript fetch. (handles caching, loading, error, retries, etc...).
- use REST or GQL for handling heavy data fetching and mutations.
- use Zustand (my preference) for state management or any other state management library (nobody likes prop drilling).
- write Unit and E2E test (UI flows, logic, etc...).

___DESICIONS & TRADE-OFFS___

Data driven projects can get complex really quick so i wanted to keep the UI components 'dumb' so when the project scales more and more we keep isolating the UI components with functionality.

- Project Service : I built a dedicated projects service to handle all data fetching and error handling in one place, keeping the API logic separate from the UI.

- Custom Hooks: I created hooks to manage the data lifecycle (loading, error, and state). This makes the logic reusable across the projet and ensures a consistent user experience everywhere we fetch data.

- Styling: I used tailwindcss for styling which is very clean and used Shadcn as a UI library

- UI: I listed the projects in a clear easily readable data table from our UI libary. The detail page contains a clean structued display of the data we received from the "backend".

- Loading and Error states: I added toggles in the Navbar to manually trigger 'Loading' and 'Error' states across the project.