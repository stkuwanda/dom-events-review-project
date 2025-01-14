const button = document.getElementById('v2');

function run() {
    console.dir(button);
}

button.onclick = function () {
    console.log('I got clicked!');
}

// information on events found on an element can be found in the DOM Web API.
// https://developer.mozilla.org/en-US/docs/Web/API/Element

const btn = document.querySelector('#v3');
btn.addEventListener('click', function () {
    alert('Clicked!!!');
});