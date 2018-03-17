
document.addEventListener("DOMContentLoaded", function () {
    var item = document.querySelectorAll(".nav-item");
    item.forEach(function (el) {
        el.addEventListener('click', function () {
            if(document.querySelector('.active')) {
                document.querySelector('.active').classList.remove('active');
            }
            this.classList.add('active');
        })
    });

    var toggleBtn = document.querySelector(".nav-toggle");
    var navigation = document.querySelector(".nav-wrapper");

        toggleBtn.addEventListener('click', function () {
            if (navigation.style.display !== 'flex') {
                navigation.style.display = 'flex';
            } else {
                navigation.style.display = 'none';
            }
        });





});

