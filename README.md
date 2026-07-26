# 📰 M549 News

A modern and responsive **News Web Application** built using **HTML, CSS, JavaScript, Bootstrap, and NewsAPI**. The application allows users to search for the latest news and read complete articles from their original sources.

## 🚀 Live Features

* 🔎 Search news by keyword
* 📰 Display multiple news articles dynamically
* 🖼️ News images with fallback support
* 📄 News title and description
* 🔗 Read complete articles from the original source
* 📱 Fully responsive design
* 💻 Mobile, tablet, and desktop support
* ✨ Modern card-based UI
* 🎨 Bootstrap styling
* ⚡ Dynamic content rendering using JavaScript
* 🛡️ Error handling for missing images and descriptions

## 🛠️ Technologies Used

* **HTML5** – Website structure
* **CSS3** – Custom styling and responsive design
* **JavaScript (ES6+)** – API integration and dynamic content
* **Bootstrap 5** – Responsive UI components
* **Font Awesome** – Icons
* **NewsAPI** – Fetching news articles

## 📂 Project Structure

```text
M549-News/
│
├── index.html
├── app.js
├── README.md
```

## ⚙️ How It Works

1. The user enters a keyword in the search bar.
2. JavaScript sends a request to the NewsAPI.
3. The API returns relevant news articles.
4. JavaScript processes the returned data.
5. News articles are dynamically displayed as responsive cards.
6. Users can click **Read More** to visit the original news article.

## 🔑 API Configuration

This project uses **NewsAPI** to fetch news data.

Create an account on NewsAPI and obtain your API key.

Then add your API key to the API request in `app.js`:

```javascript
const API_KEY = "YOUR_API_KEY";

const url = `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`;
```

> ⚠️ **Important:** Never publish your real API key in a public GitHub repository. For production applications, use environment variables and a backend server to protect your API credentials.

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/Wasayullah/News-app.git
```

### 2. Open the Project

Navigate to the project folder:

```bash
cd M549-News
```

### 3. Add Your API Key

Open `app.js` and replace:

```text
YOUR_API_KEY
```

with your NewsAPI key.

### 4. Run the Application

You can open `index.html` directly in your browser or use **Live Server** in Visual Studio Code.

## 📸 Application Preview

The application provides a clean and responsive interface where users can search for news and browse articles through modern news cards.

## 🔮 Future Improvements

* 🌙 Dark mode
* 📚 Category-based news filtering
* 🌍 Country selection
* ⏳ Loading animations
* ⚠️ Better API error messages
* 📄 Pagination / Load More functionality
* 🔖 Save favorite articles
* 🕒 Display publication date and time
* 📰 Display news source and author
* 🔐 Secure API key using a backend
* 📱 Progressive Web App (PWA) support

## 👨‍💻 Developer

[**Mohammad Wasayullah**](https://github.com/Wasayullah)

Web & App Developer

Passionate about web development, JavaScript, APIs, and building modern applications.

## 📄 License

This project is created for educational and learning purposes.

© 2026 **M549 News**. All rights reserved.

```
```
