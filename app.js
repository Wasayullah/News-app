const API_KEY = "8623961ef42042b3a6773c81a381262d";

const container = document.getElementById("newsContainer");
const status = document.getElementById("status");

async function searchNews() {

    const search = document.getElementById("search").value.trim();

    if(search===""){
        alert("Please enter something.");
        return;
    }

    status.innerHTML="Loading...";
    container.innerHTML="";

    try{

        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&language=en&sortBy=publishedAt&pageSize=20&apiKey=${API_KEY}`
        );

        const data = await response.json();

        console.log(data);

        if(data.status!=="ok"){
            status.innerHTML=data.message;
            return;
        }

        if(data.articles.length===0){
            status.innerHTML="No news found.";
            return;
        }

        status.innerHTML=`Found ${data.articles.length} articles`;

        data.articles.forEach(article=>{

            container.innerHTML+=`

            <div class="card">

                <img src="${article.urlToImage || 'https://via.placeholder.com/400x220?text=No+Image'}">

                <div class="content">

                    <h3>${article.title}</h3>

                    <p>${article.description || "No description available."}</p>

                    <a href="${article.url}" target="_blank">
                        Read More
                    </a>

                </div>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

        status.innerHTML="Something went wrong.";

    }

}

document.getElementById("search").addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){
        searchNews();
    }

});