// Получаем все баннеры
const banners = document.querySelectorAll('.banner');
// Устанавливаем индекс текущего баннера
let currentBannerIndex = 0;

// Функция для скрытия всех баннеров, кроме указанного индекса
function hideAllBanners() {
    for (let i = 0; i < banners.length; i++) {
        if (i !== currentBannerIndex) {
            banners[i].style.display = 'none';
        }
    }
}

// Функция для смены баннера
function switchBanner() {
    // Скрываем текущий баннер
    banners[currentBannerIndex].style.display = 'none';
    // Увеличиваем индекс текущего баннера
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    // Показываем следующий баннер
    banners[currentBannerIndex].style.display = 'flex';
}

// Скрываем все баннеры, кроме первого
hideAllBanners();
// Показываем первый баннер
banners[currentBannerIndex].style.display = 'flex';

// Устанавливаем интервал для смены баннеров (через 5 секунд)
setInterval(switchBanner, 5000);
