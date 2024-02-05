# ToDo App

## Description
This ToDo application allows users to manage tasks, add new ones, edit them, view details, and delete them.

## Instructions to Run the API Locally

### Prerequisites
- [.NET Core 7](https://dotnet.microsoft.com/download)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

### Steps to Run:
1. Clone this repository:

    ```bash
    git clone https://github.com/OliveraIgnacio/ToDoListApp
    cd todo-app-api
    ```

2. Configure the Database:
   - Open `appsettings.json` and update the connection string under the "ConnectionStrings" section with your SQL Server credentials.

3. Run Migrations:

    ```bash
    dotnet ef database update
    ```

4. Start the API:

    ```bash
    dotnet run
    ```

5. The API will be available at [http://localhost:5004](http://localhost:5004).

## Instructions to Run the UI Locally

### Prerequisites
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Steps to Run:
1. Clone this repository:

    ```bash
    git clone https://github.com/OliveraIgnacio/ToDoListApp
    cd todo-app-ui
    ```

2. Install Dependencies:

    ```bash
    npm install
    ```

3. Start the Application:

    ```bash
    ng serve
    ```

4. The application will be available at [http://localhost:4200](http://localhost:4200).
