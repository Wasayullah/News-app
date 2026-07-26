let search = document.getElementById("search")
let getNews = document.getElementById("main")
let findNews = () => {
    getNews.innerHTML = ''
    fetch(`https://newsapi.org/v2/everything?q=${search.value}&language=en&sortBy=publishedAt&pageSize=20&apiKey=8623961ef42042b3a6773c81a381262d`)
        .then((data) => data.json())
        .then((data) => {
            data.articles.map((value) => {
            
            getNews.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${value.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${value.title}</h5>
                    <p class="card-text">${value.description}</p>
                    <a href="${value.url}" class="btn btn-primary" target="_blank">Read more</a>
                </div>
            </div>
        `
            })
        })

}