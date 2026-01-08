# The Daily Dash ⚡️

A beautiful, modern personal dashboard application designed to help you start your day with focus and inspiration. Built with **React**, **Vite**, and **Tailwind CSS**, featuring a premium glassmorphism aesthetic.

![Daily Dash Screenshot](public/screenshot.png) 
*(Note: You can add a screenshot here later)*

## ✨ Features

- **🌤 Real-time Weather**: automatically detects your location to display current temperature and conditions using the Open-Meteo API.
- **💬 Daily Inspiration**: Fetches a fresh, random quote to get your mindset right.
- **🎯 3-Task Focus**: A disciplined to-do list that limits you to 3 primary goals per day to prevent overwhelm.
- **💾 Local Persistence**: Your tasks are saved automatically to your browser's local storage.
- **🎨 Glassmorphism Design**: A sleek, dark-mode interface with frosted glass effects and smooth micro-interactions.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **APIs**:
  - [Open-Meteo](https://open-meteo.com/) (Weather)
  - [DummyJSON](https://dummyjson.com/) (Quotes)
- **Icons**: SVG Icons (Heroicons style)

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/the-daily-dash.git
    cd the-daily-dash
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` (or the port shown in your terminal, e.g., `5174`).

## 📂 Project Structure

```
src/
├── components/
│   ├── QuoteWidget.jsx    # Fetches and displays daily quotes
│   ├── TaskList.jsx       # Manages the top 3 focused tasks
│   └── WeatherWidget.jsx  # Handles geolocation and weather data
├── App.jsx                # Main layout and greeting logic
├── index.css              # Global styles and Tailwind imports
└── main.jsx               # Application entry point
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests. Suggestions for new widgets (e.g., pomodoro timer, news feed) are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
