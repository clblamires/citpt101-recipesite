// This is an example of using JavaScript in your website
// Right now, all it does is get the current year so we can update the (c) copyright date on the page footer
window.onload = () => {
    let year = (new Date()).getFullYear();
    document.querySelector("#copyright-year").innerHTML = year;
}