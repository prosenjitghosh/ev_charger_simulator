# EV Charger Simulator UI

A frontend-only EV charger simulator UI built using React and Vite. It allows users to create, manage, and simulate the behavior of electric vehicle chargers with various state transitions.

## 🚀 Features

- Add and remove charger simulators
- State transitions: Offline → Online → Charging → Ready / Fault
- State validation with visual feedback
- LocalStorage persistence
- Functional architecture with Command Pattern (refactored to functions)
- Built with Material UI for sleek interface

## 🧱 Tech Stack

- React + Vite
- Material UI (MUI)
- NanoID (for unique charger IDs)
- LocalStorage (state persistence)


## 📦 Installation

```bash
npm install
```

## 💻 Development

```bash
npm run dev
```

## 🧪 Run Tests

Future scope

`

## ✅ Example Charger States

| State      | Description                  |
|------------|------------------------------|
| offline    | Default state after adding   |
| online     | Charger is turned on         |
| charging   | Actively charging EV         |
| ready      | Idle but ready to charge     |
| fault      | Simulated error/fault state  |

## 🧩 Extensibility

- Easily extendable with new states or actions using command pattern
- Ready for undo/redo or state logging
- Testable state logic in isolation


