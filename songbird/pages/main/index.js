import birdsData from "../../birdsData.js";

console.log(birdsData)

if (localStorage.getItem('max-score') == null) {
    localStorage.setItem('max-score', 0)
}