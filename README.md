# 📰 News App

A modern and responsive **News App** built with **HTML, CSS, and JavaScript** that uses the **NewsAPI** to fetch and display news articles based on user search queries.

Users can search for any topic, view the latest matching articles, read article descriptions, and visit the original source to read the complete news article.

---

## 🌐 Live Demo

> Add your deployed project link here when you deploy the application.

🔗 **Live Demo:** `Coming Soon`

---

## 📸 Preview

Add a screenshot of your application to the repository and update the path below:

![News App Preview](screenshot.png)

---

## ✨ Features

- 🔍 **Search News** — Search for news articles using any keyword or topic.
- 📰 **Dynamic News Cards** — Articles are displayed dynamically using JavaScript.
- 🖼️ **Article Images** — Displays the available image for each article.
- 📝 **Article Descriptions** — Shows a short description of each news article.
- 🔗 **Read More** — Open the complete article on the original news website.
- ⌨️ **Enter Key Support** — Press Enter to search for news.
- ⏳ **Loading State** — Displays a loading message while fetching data.
- ❌ **Error Handling** — Handles API and network errors gracefully.
- 📭 **No Results Message** — Informs the user when no articles are found.
- 📱 **Responsive Design** — Works across desktop, tablet, and mobile screen sizes.
- ⚡ **Asynchronous API Requests** — Uses JavaScript `async/await` and the Fetch API.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure and layout |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | Application logic and API integration |
| Fetch API | Fetching data from NewsAPI |
| NewsAPI | Providing news articles |

---

## 📂 Project Structure

```text
News-App/
│
├── index.html          # Main HTML file
├── style.css           # Application styling
├── app.js              # JavaScript logic and API integration
├── screenshot.png      # Application screenshot
└── README.md           # Project documentation
```

---

## 🔄 How the Application Works

The application follows a simple API integration workflow:

```text
User enters a search query
          ↓
JavaScript reads the search input
          ↓
Fetch API sends request to NewsAPI
          ↓
NewsAPI returns JSON response
          ↓
JavaScript processes the response
          ↓
News articles are displayed dynamically
          ↓
User clicks "Read More"
          ↓
Original news article opens
```

---

## 🔑 API Integration

This project uses **NewsAPI** to retrieve news articles.

The application uses the `/v2/everything` endpoint to search for articles based on the user's query.

Example API request:

```text
https://newsapi.org/v2/everything?q=technology&language=en&sortBy=publishedAt
```

The response contains information such as:

- Article title
- Article description
- Article image
- Author
- Source
- Publication date
- Original article URL

---

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Wasayullah/NEWS-APP.git
```

### 2. Navigate to the Project Folder

```bash
cd news-app
```

### 3. Get a NewsAPI Key

Create an account on NewsAPI and generate an API key.

### 4. Add Your API Key

Open the `app.js` file.

Find:

```javascript
const API_KEY = "YOUR_API_KEY";
```

Replace it with your API key:

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

> ⚠️ **Security Note:** Do not upload your real API key to a public GitHub repository.

---

## ▶️ Running the Project Locally

### Method 1: Python HTTP Server

If Python is installed on your computer, open a terminal inside the project directory.

Run:

```bash
python -m http.server 5500
```

On some Windows systems, you can use:

```bash
py -m http.server 5500
```

You should see something similar to:

```text
Serving HTTP on 0.0.0.0 port 5500
```

Now open your browser and visit:

```text
http://localhost:5500
```

Or:

```text
http://127.0.0.1:5500
```

---

### Method 2: VS Code Live Server

You can also use the Live Server extension in Visual Studio Code.

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Right-click the file.
5. Select **Open with Live Server**.
6. The application will open on a localhost URL.

For example:

```text
http://localhost:5500
```

> **Important:** If you are using the NewsAPI Developer plan, make sure the application is running on `localhost` for browser-based development requests.

---

## 🔍 Example Search Queries

Try searching for:

```text
Technology
```

```text
Artificial Intelligence
```

```text
Programming
```

```text
Pakistan
```

```text
Cricket
```

```text
Football
```

```text
Science
```

```text
Tesla
```

---

## 🧩 Main JavaScript Functionality

The application gets the user's search query:

```javascript
const search = document.getElementById("search").value.trim();
```

It then sends a request to NewsAPI:

```javascript
const response = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`
);
```

The response is converted into JSON:

```javascript
const data = await response.json();
```

Finally, the articles are displayed dynamically on the page.

---

## 🛡️ Error Handling

The application handles several possible situations:

### Empty Search

If the user doesn't enter a search query:

```text
Please enter something.
```

### No Articles Found

If NewsAPI returns no matching articles:

```text
No news found.
```

### API Error

If the API returns an error, the application displays the error message.

### Network Error

If the request fails because of a network problem, the application displays:

```text
Something went wrong.
```

---

## ⚠️ API Restrictions

This project uses the **NewsAPI Developer plan** for development and testing.

The Developer plan has restrictions on browser-based API requests.

For local development, run the application using:

```text
http://localhost:5500
```

or:

```text
http://127.0.0.1:5500
```

If you deploy the frontend to a public hosting platform, direct browser requests may not be allowed under the Developer plan.

For production applications, consider:

- Using a paid NewsAPI plan.
- Creating a backend server.
- Keeping the API key on the server.
- Using environment variables for sensitive credentials.

---

## 🔐 API Key Security

Never commit your real API key to GitHub.

Instead of writing:

```javascript
const API_KEY = "8623961ef42042b3a6773c81a381262d";
```

use:

```javascript
const API_KEY = "YOUR_API_KEY";
```

For a production application, the recommended architecture is:

```text
Frontend
   ↓
Your Backend
   ↓
NewsAPI
```

This allows your API key to remain on the backend instead of exposing it in frontend JavaScript.

---

## 🚀 Future Improvements

The following features can be added in future versions:

- 🌙 Dark Mode
- 🌍 Country selection
- 🗂️ News categories
- 🏆 Sports news
- 💻 Technology news
- 📈 Trending news
- 📄 Pagination
- 🔄 Refresh button
- ❤️ Save favorite articles
- 🔖 Bookmark functionality
- 🔍 Search suggestions
- 📅 Display publication date
- 👤 Display article author
- 🏢 Display news source
- 🌐 Multi-language support
- 📱 Improved mobile navigation
- ⚡ Backend integration
- 🔐 Secure API key management
- 🗄️ Database for saved articles

---

## 🎯 Learning Objectives

This project helped me practice and understand:

- HTML5 page structure
- CSS3 styling
- CSS Grid
- Responsive web design
- JavaScript DOM manipulation
- JavaScript event handling
- Fetch API
- REST API integration
- JSON data handling
- `async/await`
- Promises
- Error handling with `try/catch`
- Dynamic HTML rendering
- User input handling
- API response processing
- Running a local development server

---

## 📚 What I Learned

Through this project, I learned how to connect a frontend application with a real-world external API.

I also learned how to:

- Send HTTP requests using JavaScript.
- Process API responses.
- Display dynamic data on a webpage.
- Handle loading and error states.
- Work with asynchronous JavaScript.
- Build a practical API-based frontend project.
- Run a frontend application using a local Python HTTP server.

---

## 🔮 Future Architecture

A future production version of this project could use the following architecture:

```text
             ┌───────────────┐
             │   User / UI   │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │   Frontend    │
             │ HTML/CSS/JS   │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │    Backend    │
             │ Node / Flask  │
             └───────┬───────┘
                     │
                     ▼
             ┌───────────────┐
             │    NewsAPI    │
             └───────────────┘
```

This architecture would improve security by keeping the API key on the backend.

---

## 👨‍💻 Author

### Mohammad Wasayullah

Software Developer | Web Developer

Interested in:

- Web Development
- JavaScript
- APIs
- Backend Development
- Python
- Software Development

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

To contribute:

1. Fork this repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push your branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

## 📄 License

This project is created for **educational and development purposes**.

Please review the NewsAPI terms and usage restrictions before using the application in a production environment.

---

## ⭐ Support

If you found this project useful or helpful for learning API integration, consider giving the repository a ⭐ on GitHub.

Thank you for visiting this project! 🚀