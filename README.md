
# Job Management System

This project is a simple job management system designed for recruiters. It allows:
- Viewing job listings
- Adding new job listings
- Editing existing job listings
- Deleting job listings

The project uses **React** to manage state and user interaction with the interface. Job listing data is saved in **LocalStorage**, ensuring data persistence across page reloads.

## Main Features

1. **View job listings**  
   The `Job Listings` page displays all current job listings. Data is loaded from LocalStorage and displayed in a paginated format.

2. **Add a job listing**  
   Recruiters can add new job listings via the `Post Job` page, specifying fields such as:
   - Job title
   - Location
   - Salary

3. **Manage job listings**  
   On the `Manage Jobs` page, recruiters can:
   - **Edit** existing job listings (change title, location, and salary)
   - **Delete** job listings

4. **Submit a job application**  
   Candidates can submit a job application via the `Apply for a Job` page by filling in the following details:
   - Name
   - Email
   - Cover letter
   - Upload resume

5. **LocalStorage**  
   All job listing data is saved in **LocalStorage**, ensuring that the state is maintained even after page reloads.

## Key Components

- **JobApplication**  
  A component that handles job application submission. It provides form inputs and displays a success alert upon submission.

- **JobListings**  
  A component that displays job listings with filtering and pagination functionality.

- **JobPosting**  
  A form component for adding new job listings.

- **JobManagement**  
  A component for managing job listings that allows recruiters to edit or delete job postings.

## Usage Example

1. A recruiter can add a job listing through the `Post Job` page.
2. The job listing will automatically be displayed on the `Job Listings` page.
3. The recruiter can go to the `Manage Jobs` page to edit or delete the job listing.
4. A candidate can submit an application for the job listing through the `Apply for a Job` page.

## Styling

The project uses basic CSS for styling, which is located in the `styles.css` file. You can customize the styles to your needs or integrate any other CSS framework.

## Dependencies

- **React** — the main framework used to build the UI.
- **react-router-dom** — for handling routing within the application.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
