# Angular GitHub Repository Viewer

This project is an Angular application that allows users to search for GitHub repositories, view repository details, and display issue lists and pie charts based on repository data.

## Features

- Search for GitHub repositories by name.
- View detailed information about each repository.
- Display issues related to a selected repository.
- Visualize repository data using pie charts.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm (Node Package Manager) Angular CLI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fanas13/CCI-Platform-Development-Angular-5-Assessment.git
```
2. Install dependencies:

```bash
npm install
```

3. Serve the application:

```bash
ng serve
```
4. Open your browser and navigate to http://localhost:4200/ to view the application.

## Usage

- Search Repositories: Enter a repository name in the search bar to find repositories matching the query.
 - View Repository Details: Click on a repository card to view detailed information about the repository.
- Navigate Issues: Navigate to the Issues tab to see a list of issues associated with the selected repository.
 - Visualize Data: Explore the pie charts on the dashboard to visualize various repository statistics. (incomplete :()

## Components

 - GithubRepositoryListComponent: Displays a list of GitHub repositories based on search queries.
 - GithubRepositoryDetailsComponent: Shows detailed information about a selected GitHub repository.
 - GithubIssueListComponent: Lists issues related to a GitHub repository.

## Dependencies

 - Angular: ^18.0.0
 - Angular Material: ^18.0.5
 - NgApexcharts: 
 - RxJS: ~7.8.0
 - Other dependencies can be found in package.json

## Contributing
Contributions are welcome! Fork the repository and submit a pull request with your suggested improvements.

