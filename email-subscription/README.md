# Email Subscription Landing Page 🚀

A simple **“Coming Soon” landing page** with an **email subscription feature** that stores subscriber emails directly in **Google Sheets** using **Google Apps Script** as a backend.

This project demonstrates how to build a **serverless full-stack application** using only frontend technologies and Google services.

---

# 📌 Features

* Clean **Coming Soon landing page**
* Email **subscription form**
* Stores emails directly in **Google Sheets**
* Uses **JavaScript Fetch API** to send form data
* **Google Apps Script backend API**
* Displays a **success message after subscription**
* **No traditional backend server required**

---

# 🧱 Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (Fetch API)

### Backend

* Google Apps Script (Web App)

### Database

* Google Sheets

---

# ⚙️ How It Works

1. The user enters their email in the subscription form.
2. JavaScript captures the form submission event.
3. The `fetch()` API sends the form data to the **Google Apps Script Web App URL**.
4. The `doPost(e)` function in Apps Script receives the request.
5. The script extracts the email from the request parameters.
6. The email is inserted into the **Google Sheet as a new row**.
7. The user sees a **success message** on the webpage.

### Data Flow

User → Website Form → JavaScript Fetch → Google Apps Script → Google Sheets

---

# 📂 Project Structure

```
email-subscription-project
│
├── index.html
├── style.css
├── script.js
|---img.png
└── README.md
```

---

# 🖥️ Frontend Form Example

HTML form used to collect email addresses:

```html
<form name="YOUR_FORM_NAME">
    <input type="email" name="Email" placeholder="Your email id" required>
    <button type="submit">Subscribe</button>
</form>

<span id="msg"></span>
```

### JavaScript for Form Submission

```javascript
const form = document.forms['YOUR_FORM_NAME']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL,{
        method:'POST',
        body:new FormData(form),
        mode:'no-cors'
    })

    msg.innerHTML = "Thank You For Subscribing!"

    setTimeout(()=>{
        msg.innerHTML = ""
    },5000)

    form.reset()

})
```

---

# ☁️ Google Apps Script Backend

The Apps Script receives the POST request and writes the email to the Google Sheet.

```javascript
function doPost(e) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1")

  sheet.appendRow([
    e.parameter.Email
  ])

  return ContentService.createTextOutput("Success")

}
```

---

# 📊 Google Sheet Structure

The sheet only contains **one column**:

| Email                                     |
| ----------------------------------------- |
| [user1@gmail.com](mailto:user1@gmail.com) |
| [user2@gmail.com](mailto:user2@gmail.com) |

Each new form submission automatically adds a new row.

---

# 🚀 Deployment Steps

1. Create a **Google Sheet**
2. Open **Extensions → Apps Script**
3. Add the `doPost()` script
4. Click **Deploy → New Deployment**
5. Choose **Web App**
6. Set access to **Anyone**
7. Copy the **Web App URL**
8. Paste the URL inside your JavaScript `scriptURL`

---

# 🎯 Learning Outcome

This project helps in understanding:

* How frontend forms communicate with APIs
* Using **Fetch API for HTTP requests**
* Creating a **serverless backend using Google Apps Script**
* Using **Google Sheets as a lightweight database**

---

# 🔮 Future Improvements

Possible upgrades for this project:

* Prevent duplicate email submissions
* Add automatic welcome email
* Store timestamp of subscriptions
* Add launch countdown timer
* Improve UI with animations

---

# 👨‍💻 Author

**Tharun**

A learning project built to understand **frontend–backend integration using serverless tools**.
