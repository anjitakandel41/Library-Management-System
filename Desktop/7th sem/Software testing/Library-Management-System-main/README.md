# 📚 Library Management System

A web-based **Library Management System** developed using **Python, Flask, Jinja2, HTML, CSS, and JavaScript**. The system provides separate dashboards and permissions for **students** and **librarians**, with JSON files used as the datastore.

The project also includes automated and integration testing using **pytest and Selenium WebDriver** as part of the Software Testing deliverable.

---

## 🚀 Features

### 🔐 Authentication

* Student and librarian registration
* Secure password hashing using `scrypt` through Werkzeug
* Login authentication
* Role-based redirection
* Session-based authentication
* Logout functionality
* Duplicate email validation
* Email format validation
* Empty-field validation
* Password visibility toggle
* Sign-out confirmation dialog
* Protected routes based on user role

### 👨‍💼 Librarian Dashboard

The librarian dashboard contains four main sections:

#### Overview

Displays:

* Total book titles
* Total available copies
* Active loans
* Overdue loans
* Registered members
* Total fines
* Overdue loans requiring attention

#### Books

Librarians can:

* Add new books
* View book information
* Manage book quantities
* Track issued copies

Each book contains:

* Book ID
* Title
* Author
* Category
* Quantity
* Number of issued copies

#### Circulation

Librarians can issue books to students.

When a book is issued:

* Available copies are checked
* Issue date is recorded
* Due date is automatically set to 7 days later
* Issued copy count is increased
* A new issue record is created

#### Members

Librarians can view:

* Registered users
* First name
* Last name
* Email
* Role
* Active status

---

## 👨‍🎓 Student Dashboard

Students have access to their own dashboard.

### 📖 Catalogue

Students can:

* Browse available books
* View book titles
* View authors
* View categories
* Check available copies
* See availability status

Only books with at least one available copy are displayed.

### 📋 My Loans

Students can view their own borrowing history, including:

* Book information
* Issue date
* Due date
* Current loan status
* Overdue status
* Fine amount

Students cannot directly issue or return books. These operations are restricted to librarians.

---

## 💰 Return and Fine System

When a librarian returns a book, the system:

1. Finds the selected issue record.
2. Checks whether the book has already been returned.
3. Calculates the number of overdue days.
4. Calculates the fine.
5. Marks the issue as returned.
6. Decreases the book's issued-copy count.

The fine is calculated at:

**Rs. 5 per overdue day**

```text
Fine = Late Days × Rs. 5
```

If the book is returned on or before the due date, the fine is:

```text
Rs. 0
```

---

## 🗂️ Project Structure

```text
Library-Management-System/
│
├── app.py
│
├── users.json
├── books.json
├── issues.json
│
├── templates/
│   ├── index.html
│   ├── librarian_dashboard.html
│   └── student_dashboard.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
│
├── test_app.py
├── automation_test.py
├── viewbook_test.py
│
├── requirements.txt
└── README.md
```

---

## 🗄️ Data Storage

The project does not use an SQL database.

Instead, it uses three JSON files.

### `users.json`

Stores registered users.

```json
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "password": "hashed-password",
    "role": "student",
    "active": true
}
```

### `books.json`

Stores library books.

```json
{
    "id": 1,
    "title": "Python Programming",
    "author": "Author Name",
    "category": "Programming",
    "quantity": 5,
    "issued": 2
}
```

### `issues.json`

Stores book circulation records.

```json
{
    "id": 1,
    "user_email": "john@example.com",
    "book_id": 1,
    "issue_date": "2026-08-19",
    "return_date": "2026-08-26",
    "returned": false,
    "fine": 0
}
```

The application uses `load_json()` and `save_json()` functions to read and update these files.

---

## 🔄 System Flow

### Registration Flow

```text
User
  ↓
Open Library System
  ↓
Sign Up
  ↓
Enter User Information
  ↓
Validate Input
  ↓
Check Duplicate Email
  ↓
Hash Password
  ↓
Save User to users.json
  ↓
Redirect to Login
```

### Login Flow

```text
User
  ↓
Enter Email + Password
  ↓
Find User
  ↓
Verify Password
  ↓
Create Session
  ↓
Check User Role
  ↓
 ┌──────────────────┐
 │                  │
Librarian          Student
 │                  │
 ↓                  ↓
Librarian          Student
Dashboard          Dashboard
```

### Book Issue Flow

```text
Librarian
   ↓
Select Book
   ↓
Check Available Copies
   ↓
quantity - issued > 0
   ↓
Create Issue Record
   ↓
Issue Date = Today
   ↓
Due Date = Today + 7 Days
   ↓
Increase Issued Count
   ↓
Save to issues.json
```

### Book Return Flow

```text
Librarian
   ↓
Return Book
   ↓
Find Issue
   ↓
Calculate Late Days
   ↓
Calculate Fine
   ↓
Mark as Returned
   ↓
Decrease Issued Count
   ↓
Update JSON Files
```

---

## 🔒 Role-Based Access Control

The application separates permissions between students and librarians.

### Librarian

Can access:

```text
/librarian/dashboard
```

Librarians can:

* Add books
* Issue books
* Return books
* View members
* View library statistics
* Monitor overdue loans
* View fines

### Student

Can access:

```text
/student/dashboard
```

Students can:

* Browse available books
* View their loans
* View due dates
* View fines

Students cannot access librarian functionality by manually entering librarian URLs.

Protected routes verify:

```python
session['user']
session['role']
```

If the required role is not present, the user is redirected to the home page.

---

## 🛣️ Main Routes

| Method | Route                     | Description                 |
| ------ | ------------------------- | --------------------------- |
| GET    | `/`                       | Login and registration page |
| POST   | `/register`               | Register a new user         |
| POST   | `/login`                  | Authenticate user           |
| GET    | `/logout`                 | Clear user session          |
| GET    | `/librarian/dashboard`    | Librarian dashboard         |
| POST   | `/add_book`               | Add a new book              |
| POST   | `/issue_book`             | Issue a book                |
| GET    | `/return_book/<issue_id>` | Return a book               |
| GET    | `/student/dashboard`      | Student dashboard           |

---

## 🧪 Testing

Testing is an important part of this project.

The project uses:

* **pytest** for unit and integration testing
* **Selenium WebDriver** for end-to-end browser testing
* **Firefox + geckodriver** for browser automation

---

## ✅ Pytest Tests

The `test_app.py` file tests the application using Flask's `test_client`.

The following scenarios are covered:

1. Valid registration
2. Duplicate email registration
3. Empty registration fields
4. Invalid email format
5. Missing role defaults to student
6. Empty password validation

### Test Result

```text
6/6 tests passing
```

---

## 🌐 Selenium Automation Tests

### `automation_test.py`

This test performs an end-to-end user workflow through the real browser interface.

The test:

1. Opens the application
2. Registers a student
3. Logs in using the registered credentials
4. Verifies that the student dashboard loads

---

### `viewbook_test.py`

This Selenium test verifies the book-viewing functionality.

The workflow includes:

1. Opening the application
2. Logging in
3. Navigating to the student dashboard
4. Waiting for the book list to load
5. Verifying that books are displayed

The test uses Selenium explicit waits with:

```python
WebDriverWait
```

and:

```python
expected_conditions
```

This makes the test more reliable than using only fixed delays.

---

## ⚠️ Testing Notes

There are two known issues in the current Selenium test files that should be corrected before claiming complete automated test coverage.

### `viewbook_test.py`

The test references:

```text
loginButton
```

However, this element ID does not exist in the current templates.

The test should be updated to use the actual login button ID.

### `automation_test.py`

The login step currently uses:

```python
By.NAME, "email"
```

Because the page contains both login and registration fields, this can resolve to the hidden registration email field.

The recommended selectors are:

```python
By.ID, "loginEmail"
By.ID, "loginPassword"
By.ID, "loginBtn"
```

After making these changes, the Selenium tests can correctly target the login form.

---

## 👁️ Password Visibility Toggle

Both login and registration password fields include an eye icon.

Users can:

* Click the eye icon to show the password.
* Click again to hide the password.
* Switch between `password` and `text` input types.
* Keep the typed password value while toggling visibility.

The icon switches between:

```text
fa-eye
```

and:

```text
fa-eye-slash
```

The eye button does not submit the form.

---

## 🚪 Sign-Out Confirmation

The Sign Out button includes a confirmation dialog:

```text
Are you sure you want to sign out?
```

### Cancel

Selecting **Cancel**:

* Closes the confirmation dialog
* Keeps the user logged in
* Keeps the user on the dashboard

### OK

Selecting **OK**:

* Clears the session
* Redirects the user to `/`
* Prevents access to protected dashboard pages

Directly visiting:

```text
/student/dashboard
```

after signing out redirects the user back to the home page.

### Browser Verification

The sign-out flow was verified end-to-end:

```text
Login
  ↓
Click Sign Out
  ↓
Confirmation Dialog
  ↓
Cancel → Dashboard remains open
  ↓
Click Sign Out again
  ↓
OK → Redirect to /
  ↓
Session cleared
  ↓
Dashboard URL → Redirect to /
```

---

## 🔑 Password Security

Passwords are not stored as plain text.

The application uses Werkzeug password hashing:

```python
generate_password_hash()
```

Passwords are verified using:

```python
check_password_hash()
```

This provides safer password storage compared with saving raw passwords in `users.json`.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Library-Management-System
```

### 2. Create a virtual environment

Windows:

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

Linux/macOS:

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

If `requirements.txt` is not available, install the main dependencies:

```bash
pip install Flask pytest selenium Werkzeug
```

### 4. Run the application

```bash
python app.py
```

The application will normally be available at:

```text
http://127.0.0.1:5000/
```

---

## 🧪 Running Tests

### Run pytest

```bash
pytest
```

For verbose output:

```bash
pytest -v
```

### Run Selenium automation

Make sure:

* Firefox is installed
* geckodriver is installed
* The Flask application is running

Then run:

```bash
python automation_test.py
```

Run the book-viewing test:

```bash
python viewbook_test.py
```

---

## 🛠️ Technologies Used

| Technology  | Purpose                      |
| ----------- | ---------------------------- |
| Python 3    | Programming language         |
| Flask       | Backend web framework        |
| Jinja2      | Server-side HTML templating  |
| HTML5       | Page structure               |
| CSS3        | Styling and responsive UI    |
| JavaScript  | Client-side interactions     |
| JSON        | Data storage                 |
| Werkzeug    | Password hashing             |
| pytest      | Unit and integration testing |
| Selenium    | Browser automation           |
| Firefox     | Automated browser            |
| geckodriver | Selenium browser driver      |

---

## 🎯 Project Objectives

The main objectives of the Library Management System are:

* To digitize basic library operations.
* To manage books and available copies.
* To manage student and librarian accounts.
* To provide role-based access control.
* To track issued and returned books.
* To calculate overdue fines automatically.
* To provide students with access to their loan history.
* To provide librarians with an overview of library activities.
* To demonstrate software testing using pytest and Selenium.
* To validate important user workflows through automated browser testing.

---

## 🔮 Future Enhancements

The system can be further improved by adding:

* PostgreSQL or MySQL database support
* Advanced book search and filtering
* Book cover image uploads
* Pagination
* Email notifications for overdue books
* Automatic due-date reminders
* Password reset functionality
* Librarian profile management
* Student profile management
* Advanced reporting
* Export reports to PDF/Excel
* Fine payment tracking
* Book reservation functionality
* REST API integration
* More comprehensive automated test coverage

---

## 👥 User Roles

### Librarian

The librarian manages the library's operations, including books, circulation, members, returns, fines, and library statistics.

### Student

The student can browse available books and monitor their own borrowing history, due dates, and fines.

---

## 📌 Important Notes

This project uses JSON files instead of a relational database. It is therefore suitable for a small educational/demo library system but would require a proper database and additional security measures for production-scale deployment.

The testing suite currently includes pytest and Selenium tests, with the known selector issues described above requiring correction before considering the Selenium suite fully complete.

---

## 📄 License

This project is developed for educational and academic purposes as part of a Software Testing / Library Management System project.

---

## 👩‍💻 Author

**Library Management System**

Developed using Python, Flask, Jinja2, HTML, CSS, JavaScript, JSON, pytest, and Selenium.
