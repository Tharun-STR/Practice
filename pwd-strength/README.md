# Advanced Password Strength Checker 🔐

A responsive **Password Strength Checker Web App** built using **HTML, CSS, and JavaScript**.
This application analyzes a password **in real time** and visually indicates its strength based on several security rules.

It includes modern features commonly used in **real-world signup forms**, such as password visibility toggle, rule validation, and a dynamic strength progress bar.

---

# 📌 Features

* 🔐 Real-time password strength detection
* 👁 Show / Hide password toggle
* 📊 Strength progress bar
* ✔ Password validation rules
* 🎨 Dynamic UI color changes
* 📱 Fully responsive design
* ⚡ Instant feedback as the user types

---

# 🧱 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (DOM Manipulation & Regex)

### Tools

* Browser Developer Tools
* Modern CSS Layout

No backend or database is required.

---

# ⚙️ How It Works

When the user types a password:

1. JavaScript listens for the **input event**.
2. The password is evaluated against several security rules.
3. Each rule that passes increases the password **strength score**.
4. The UI updates dynamically:

   * Strength text changes
   * Progress bar updates
   * Validation rules turn green when satisfied.

---

# 🔎 Password Strength Rules

The password is evaluated using the following criteria:

| Rule              | Description                             |
| ----------------- | --------------------------------------- |
| Length            | At least **8 characters**               |
| Lowercase         | Contains **a–z**                        |
| Uppercase         | Contains **A–Z**                        |
| Number            | Contains **0–9**                        |
| Special Character | Contains symbols like **@, #, $, %, !** |

---

# 📊 Strength Levels

| Score     | Strength |
| --------- | -------- |
| 0–2 rules | Weak     |
| 3–4 rules | Medium   |
| 5 rules   | Strong   |

---

# 📂 Project Structure

```text
password-strength-checker
│
├── index.html
├── style.css
├── script.js
├── next.png
└── README.md
```

---

# 🖥️ User Interface Components

### 1️⃣ Password Input Field

Users enter their password in a secure input field.

### 2️⃣ Password Visibility Toggle

Allows users to **show or hide the password** using an eye icon.

### 3️⃣ Strength Progress Bar

Displays a visual indicator of password strength.

### 4️⃣ Validation Rules List

Each rule becomes **green when satisfied**.

---

# 🚀 How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Open **index.html** in any browser

No installation or dependencies required.

---

# 🎯 Learning Outcomes

This project demonstrates:

* JavaScript **DOM manipulation**
* Using **Regular Expressions (Regex)** for validation
* Real-time **event handling**
* Dynamic **UI updates**
* Building responsive UI components

---

# 🔮 Future Improvements

Possible enhancements for the project:

* Add **password entropy calculation**
* Implement **password breach checking API**
* Add **animated strength meter**
* Add **dark/light theme switch**
* Integrate with a **signup form system**

---

# 👨‍💻 Author

**Tharun**

A learning project focused on improving **frontend development skills and UI interaction using JavaScript**.
