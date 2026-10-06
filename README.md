# UsersApp

A React application that fetches and displays a list of users from an external REST API.

## About the project

This project was created as part of a school assignment in frontend development.
The goal was to build a React application that fetches and displays user data from a REST API, with a focus on routing, data fetching, caching and component structure.

## Tech stack

- React + TypeScript (Vite)
- react-router-dom (routing)
- TanStack Query (`useQuery`) for data fetching and caching
- Tailwind CSS

## Getting started

1. Clone the repository and install dependencies:
```bash
   npm install
```
2. Create a `.env` file in the project root by copying `.env.example`:
```bash
   cp .env.example .env
```
   (On Windows PowerShell: `copy .env.example .env`)
3. Start the app:
```bash
   npm run dev
```

## Environment variables

| Variable | Description |
|---|---|
| `VITE_API_KEY` | API key sent in the `x-api-key` header |

## Pages

- `/` – Home page
- `/users` – List of users fetched from the API

## About the API

Data is fetched from `https://api-userapi.onrender.com/api/users/getUsers`. The API is limited to 100 requests per day, so TanStack Query is used to cache the fetched data with a `staleTime` of 10 minutes. The first request may be slow if the server needs to wake up.

