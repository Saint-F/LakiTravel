
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
        lakiTitleWrapper.append(laki19Div);
    }, 1000)
});
