document.addEventListener("DOMContentLoaded", function () {
    var item = document.querySelectorAll(".nav-item")
    item.forEach(function (el) {
        el.addEventListener('click', function () {
            if(document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active');
            }
            this.classList.add('active');
        })
    })
});