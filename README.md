WanderList
> Your dream destinations, all in one place.
WanderList is a single-page React application for exploring, saving, and managing the places you've always wanted to visit.
---

THE PROBLEM
Most people keep travel wishlists scattered across notes apps, screenshots, and spreadsheets — or just in their heads. When travel plans finally start taking shape, the details are hard to recall. WanderList solves this by giving you one place to add destinations, record why you want to go, update plans as they evolve, and never lose them again.
---

TECH STACK
Technology	Role
React 18	UI & component logic
React Router DOM	Client-side page navigation
JSON Server	Mock REST backend
Tailwind CSS	Utility-first styling
---

GETTING STARTED
Prerequisites
Node.js
npm
Installation
```bash
git clone <repo-url>
cd wanderlist
npm install
```
Running the App
Start the JSON Server backend:
```bash
npx json-server --watch db.json --port 3001
```
Start the React app:
```bash
npm start
```
---


PAGES & ROUTES
Route	Page	Description
`/`	Home	Welcome screen with links to browse or add destinations
`/destinations`	Destinations	Lists all saved destinations with edit and delete options
`/add-destination`	Add Destination	Form to save a new dream destination
`/edit/:id`	Edit Destination	Pre-filled form to update an existing destination
---


COMPONENTS
`DestinationCard` — Renders a single destination (name, location, description) along with Edit and Delete buttons.
`DestinationList` — Fetches all destinations from the JSON Server API and renders a `DestinationCard` for each one.
`DestinationForm` — A controlled form used for both adding (POST) and editing (PATCH) destinations.
---


ROUTING
React Router DOM enables client-side navigation — switching between pages is instant with no full browser reload. Key hooks used:
`BrowserRouter` — wraps the entire app
`Routes` / `Route` — maps URLs to components
`Link` / `useNavigate` — handles navigation without page reloads
`useParams` — extracts the `:id` from the URL for the edit page
---


STYLING
WanderList uses Tailwind CSS with utility classes applied directly in JSX. Responsive layouts are handled via Tailwind's breakpoint prefixes (e.g. `md:flex-row`, `sm:hidden`) with no custom media queries needed.
Colour Palette
Swatch	Hex	Usage
Navy	`#042C53`	Backgrounds & headings
Forest Green	`#3B6D11`	Accents & CTAs
Light Green	`#7FB851`	Links & active states
Cream	`#F5F0E8`	Page background surface