# Simple Feedback Management System

This project is a simple feedback management system implemented using the ERN (Express, React, Node.js) stack with TypeScript. The system allows users to submit feedback and view all feedback entries.

## Backend

The backend of the system is implemented using Node.js with Express and TypeScript.

### Project Structure

- **backend/controllers/**: Contains controller logic for handling HTTP requests related to feedback entries.
- **backend/routes/**: Defines the API routes for retrieving all feedback entries and submitting new feedback.
- **backend/index.ts**: Main entry point of the backend application.

### API Endpoints

- **GET /addFeedback**: Retrieves all feedback entries.
- **POST /getFeedbacks**: Submits new feedback. Request body should contain `name` and `feedback` fields.

### Data Handling

An in-memory data structure (array) is used to store feedback entries. The controllers handle the logic for interacting with this data structure.

## Frontend

The frontend of the system is implemented using React with TypeScript.

### Project Structure

- **frontend/src/components/**: Contains UI components for the frontend.
  - **FeedbackForm.tsx**: Component for submitting new feedback.
  - **FeedbackCards.tsx**: Component for displaying all feedback entries.
- **frontend/src/pages/homepage/**: Contains the homepage component for the frontend.
- **frontend/src/App.tsx**: Main component rendering the homepage component.
- **frontend/src/main.tsx**: Entry point of the frontend application.

### UI Components

- **FeedbackForm**: Renders a form with input fields for name and feedback. Submits new feedback to the backend API.
- **FeedbackCards**: Displays a list of all feedback entries fetched from the backend API.

### API Communication

Axios is used to make HTTP requests from the frontend to the backend API. The `axios.post` method is used to submit new feedback, and the `axios.get` method is used to retrieve all feedback entries.

### Data Fetching

Feedback entries are fetched from the backend API when the FeedbackCards component mounts. The useEffect hook is used for this purpose. Upon mounting, the component makes a GET request to the `/feedback` endpoint to fetch all feedback entries.

### Running the Project

1. Clone the repository: `git clone https://github.com/Hakutoshiro/Feedback-management-system.git`
2. Install dependencies:
   - Backend: `cd Feedback-management-system/backend && npm install`
   - Frontend: `cd Feedback-management-system/frontend && npm install`
3. Start the servers:
   - Backend: `cd Feedback-management-system/backend && npm start`
   - Frontend: `cd Feedback-management-system/frontend && PORT=5173 npm start`

The backend server will run on port 3000, and the frontend development server will run on port 5173.

