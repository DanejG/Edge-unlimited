# Edge Unlimited - Dining & Reservations

A modern frontend web application for a dining establishment that displays current occupancy, allows customers to reserve seats, and order ahead.

## Features

- **Current Occupancy Display**: Real-time view of how many people are currently dining
- **Seat Reservations**: Easy-to-use form for booking tables with date, time, and party size
- **Order Ahead**: Browse menu items by category and place orders for pickup

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Modern, responsive UI design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.jsx          # Navigation component
  │   ├── OccupancyDisplay.jsx # Current occupancy display
  │   ├── ReservationForm.jsx  # Table reservation form
  │   └── OrderAhead.jsx       # Order ahead functionality
  ├── App.jsx                  # Main application component
  ├── main.jsx                 # Application entry point
  └── index.css                # Global styles with Tailwind
```
