
const waitone = async (fun) => {

}
const play = async () => {
    document.getElementById("video").play();
}

let europe = document.getElementById("europe");
europe.style.opacity = "0";
let body = document.getElementsByTagName("body")[0];

let lakiTitleWrapper = document.createElement("div");
lakiTitleWrapper.id = "laki-title-wrapper";
let lakiTitle = document.createElement("div");
lakiTitle.id = "laki-title";
lakiTitle.innerHTML = "LAKI";

lakiTitleWrapper.append(lakiTitle);
body.append(lakiTitleWrapper);

lakiTitle.addEventListener("animationend", (e) => {
    window.setTimeout(() => {
        let laki19Div = document.createElement("div");
        laki19Div.innerHTML = "19";
        laki19Div.id = "laki-19";

        /*
        let animeZoom = document.createElement("img");
        animeZoom.setAttribute("src", "animezoom.png");
        animeZoom.id = "anime-zoom";
        body.append(animeZoom);
        */


        body.append(laki19Div);

    }, 1000)

    window.setTimeout(() => {
        let titleWrapper = document.getElementById("laki-title-wrapper")
        titleWrapper.className = "move-up";
        document.getElementById("laki-19").remove();
        let dimmerContainer = document.createElement("div");
        dimmerContainer.id = "dim";

        titleWrapper.addEventListener("animationend", () => {
            body.append(dimmerContainer)
            window.setTimeout(() => {
                let video = document.getElementById("video");
                document.getElementById("video").style.display = "block";
                body.click();
                video.play();
            }, 5000)
        });
    }, 3000)
});
