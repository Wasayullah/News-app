let search = document.getElementById("search").value
let getNews = document.getElementById("main")
let findNews = () => {
    fetch(`https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=publishedAt&pageSize=20&apiKey=8623961ef42042b3a6773c81a381262d`)
        .then((data) => data.json())
        .then((data) => {
            data.articles.map((value) => {
            getNews.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${value.urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `
            })
        })
}