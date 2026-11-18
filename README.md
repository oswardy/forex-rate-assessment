# Forex Rates Assessment

A Forex Rates application developed as part of a technical assessment.

**Live Demo:** https://forex-rate-assessment.vercel.app/

## Technologies Used

- React
- Vite
- JavaScript
- Node.js
- Express.js
- Fixer API

## Features (Based on Requirements)

- Fetches the latest Forex exchange rates from the Fixer API.
- Calculates adjusted rates by adding `10.0002` to each original rate.
- Displays both original and adjusted exchange rates in a table.
- Highlights table rows with red borders when:
  - The original or adjusted rate is an even number.
  - The currency is HKD.
- Includes loading and error handling.

## Remarks

- The adjusted rate is calculated by adding 10.0002 to the original rate retrieved from the API.
- Both original and adjusted rates are displayed to six decimal places for readability.
- Decimal values are not treated as even or odd numbers. The even-number check only applies to integer values. HKD is highlighted separately regardless of its rate value.
- The requirement asks for a function to check whether a value is even. Therefore, I used Number.isInteger() and did not use Math.floor(), which would remove decimal places before checking and potentially allow more rows to be highlighted. I also tried the Math.floor() approach but left it commented out.

## Getting Started (Local Development)

### 1. Install dependencies

Install frontend dependencies from the project root:

```bash
npm install
```

Install backend dependencies:

```bash
cd server
npm install
```

### 2. Configure API Key

Create a `.env` file inside the `server` folder and add your Fixer API key:

```env
FOREX_API_KEY=your_api_key_here.
```

### 3. Run the application

Start the backend from the `server` folder:

```bash
npm start
```

Start the frontend from the project root in another terminal:

```bash
npm run dev
```

### 4. Access the application

Open the local URL provided by Vite, usually:

`http://localhost:5173`
