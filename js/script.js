let scroller = document.querySelector('.scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


console.log(scroller);
console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);
console.log(height);


window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
    let width = (scrollTop / height) * 100;
    scroller.style.width = `${width}%`
});


