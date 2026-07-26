let search = document.getElementById("search")
let getNews = document.getElementById("main")
let findNews = () => {
    getNews.innerHTML = ''
    fetch(`https://newsapi.org/v2/everything?q=${search.value}&language=en&sortBy=publishedAt&pageSize=20&apiKey={API-KEY}`)
        .then((data) => data.json())
        .then((data) => {
            data.articles.map((value) => {
            
            getNews.innerHTML += `
<div class="card news-card h-100">

    <!-- News Image -->
    <img 
        src="${value.urlToImage || 'https://via.placeholder.com/600x350?text=No+Image'}"
        class="card-img-top"
        alt="${value.title || 'News Image'}"
    >

    <!-- Card Content -->
    <div class="card-body d-flex flex-column">

        <!-- News Title -->
        <h5 class="card-title">
            ${value.title || 'No title available'}
        </h5>

        <!-- News Description -->
        <p class="card-text">
            ${value.description || 'No description available for this news.'}
        </p>

        <!-- Read More Button -->
        <a 
            href="${value.url}"
            class="btn btn-primary mt-auto"
            target="_blank"
            rel="noopener noreferrer"
        >
            Read More
            <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
        </a>

    </div>

</div>

        `
            })
        })

}
