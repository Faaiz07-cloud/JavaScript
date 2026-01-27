let url = "https://catfact.ninja/fact";
let para = document.querySelector("#cat_fact");

async function catFacts() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        para.innerText = data.fact;
    } catch (error) {
        console.log("Error:", error);
    }
}

catFacts();
