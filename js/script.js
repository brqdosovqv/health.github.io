document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('show');
    });
}

const mainFilter = document.getElementById('mainFilter');
const filterList = document.querySelector('.filter-list');

mainFilter.addEventListener('click', () => {
    filterList.classList.toggle('collapsed');
    mainFilter.classList.toggle('collapsed');
});