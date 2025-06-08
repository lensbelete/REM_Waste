# Waste Skips Finder (Redesigned)

This project is a redesigned version of an existing page. I cloned the original page and rebuilt it from scratch using a modern frontend stack to improve performance, responsiveness, and code maintainability.

---

## ✅ What I Did

### 🔁 Cloned & Redesigned the Page
- Took an existing webpage and rebuilt it using **Vite** for faster build and development experience.
- Reorganized the layout using component-based design with **React**.

### 🧱 Used a Modern UI Stack
- **Mantine** was used for responsive, accessible UI components like cards, containers, loaders, and titles.
- **Tailwind CSS** was used alongside Mantine to handle layout, spacing, colors, and responsive styling efficiently.

### 🔌 Integrated Dynamic Data with Axios
- Used **Axios** to fetch skip data from the following API: https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft


- Parsed the JSON response and displayed it in a responsive card grid using Mantine.

### 💡 Built with Developer Experience in Mind
- Vite enabled hot module replacement and lightning-fast dev builds.
- Code is structured for scalability: `components/` and global styles.
- Used `useEffect` and `useState` for fetching and managing API data.

---

