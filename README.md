# Task Tracker

Task Tracker is a simple to-do list web application that allows users to add, mark as complete, and delete tasks. The application keeps track of incomplete and completed tasks, and persists data across sessions using local storage.

## Features

- Add new tasks.
- Mark tasks as complete.
- Delete tasks.
- Tasks are stored in local storage, so they persist after page reloads or browser restarts.

## Technologies Used

- **HTML**: For creating the structure of the web page.
- **CSS**: For styling the application.
- **JavaScript**: For handling task functionality and local storage.

## File Structure

- `index.html`: The main HTML file that contains the structure of the Task Tracker interface.
- `style.css`: Styles the Task Tracker interface for a clean, modern design.
- `script.js`: Handles the logic for adding, completing, deleting, and storing tasks.
- `images/`: Folder containing icons used in the interface.

## Local Storage

This project uses the browser’s local storage to save tasks. Incomplete tasks are stored separately from completed tasks, ensuring that the state of the task list is preserved even if the browser is closed or the page is refreshed.

## How It Works

1. **Adding Tasks**: Users can add tasks by typing into the input field and pressing the "Enter" button or clicking the add button.
2. **Marking Tasks Complete**: Clicking the checkbox icon next to a task marks it as complete and moves it to the "Completed Tasks" section.
3. **Deleting Tasks**: Users can delete tasks by clicking the trash bin icon.
4. **Persistence**: Tasks are saved to local storage, allowing them to persist across browser sessions.

## Future Enhancements

- Add the ability to edit existing tasks.
- Add filters for viewing tasks based on their completion status.
- Add due dates and reminders.

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/). You are free to use, share, and adapt the software, provided that you give appropriate credit, do not use it for commercial purposes, and distribute any derivative works under the same license.

