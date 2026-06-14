// ==================== ДАННЫЕ ОБЪЕКТОВ КРЕАТИВНЫХ ИНДУСТРИЙ ДАГЕСТАНА ====================
// Добавь свои фото в папку images/ и укажи правильные имена файлов

const objectsData = [
    {
        id: 1,
        name: "Кубачи — ювелирное искусство",
        lat: 42.0925,
        lng: 47.6000,
        category: "Народный промысел",
        address: "с. Кубачи, Дахадаевский район",
        image: "images/kubachi.jpg",
        description: "Всемирно известное село мастеров серебряного дела, гравировка, чернение по металлу"
    },
    {
        id: 2,
        name: "Унцукуль — насечка по дереву",
        lat: 42.7122,
        lng: 46.7897,
        category: "Народный промысел",
        address: "с. Унцукуль, Унцукульский район",
        image: "images/untsukul.jpg",
        description: "Уникальная техника инкрустации металлом и перламутром по дереву"
    },
    {
        id: 3,
        name: "Балхарская керамика",
        lat: 42.3100,
        lng: 47.1689,
        category: "Народный промысел",
        address: "с. Балхар, Акушинский район",
        image: "images/balhar.jpg",
        description: "Архаичная керамика ручной лепки без гончарного круга"
    },
    {
        id: 4,
        name: "Гоцатль — художественный металл",
        lat: 42.5333,
        lng: 46.8667,
        category: "Народный промысел",
        address: "с. Гоцатль, Хунзахский район",
        image: "images/gotsatl.jpg",
        description: "Центр обработки металла, чеканка, древние традиции"
    },
    {
        id: 5,
        name: "Табасаранские ковры",
        lat: 41.9833,
        lng: 48.0000,
        category: "Ковроткачество",
        address: "Табасаранский район",
        image: "images/tabasarancarpet.jpg",
        description: "Сложные орнаменты, яркие краски, ручное ковроткачество"
    },
    {
        id: 6,
        name: "Дербент — крепость и ремесла",
        lat: 42.0575,
        lng: 48.2873,
        category: "Культурное наследие",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: "images/derbent.jpg",
        description: "Объект Всемирного наследия ЮНЕСКО, концентрация ремесленных мастерских"
    },
    {
        id: 7,
        name: "Дагестанский музей изобразительных искусств",
        lat: 42.9849,
        lng: 47.5049,
        category: "Музей / Галерея",
        address: "г. Махачкала, ул. М. Гамзатова, 21",
        image: "images/mahachkala-museum.jpg",
        description: "Крупнейший художественный музей, площадка для современного искусства"
    },
    {
        id: 8,
        name: "Галерея «Ковчег»",
        lat: 42.9792,
        lng: 47.4987,
        category: "Современное искусство",
        address: "г. Махачкала, пр. Гамидова, 12",
        image: "images/kovcheg.jpg",
        description: "Частная галерея, работы молодых дагестанских художников"
    },
    {
        id: 9,
        name: "Арт-пространство «Артдвор»",
        lat: 42.9765,
        lng: 47.5023,
        category: "Креативный кластер",
        address: "г. Махачкала, ул. Ярагского, 45",
        image: "images/artdvor.jpg",
        description: "Галерея, мастерские и коворкинг для креативных индустрий"
    },
    {
        id: 10,
        name: "Ансамбль «Лезгинка»",
        lat: 42.9812,
        lng: 47.5040,
        category: "Музыка / Танец",
        address: "г. Махачкала, пр. Ленина, 1",
        image: "images/lezginka.jpg",
        description: "Всемирно известный танцевальный коллектив, культурный символ Дагестана"
    },
    {
        id: 11,
        name: "Дагестанская государственная филармония",
        lat: 42.9830,
        lng: 47.5075,
        category: "Концертный зал",
        address: "г. Махачкала, ул. Дахадаева, 3",
        image: "images/philharmonia.jpg",
        description: "Концерты академической, народной и современной музыки"
    },
    {
        id: 12,
        name: "Фестиваль «Дербентская крепость»",
        lat: 42.0590,
        lng: 48.2885,
        category: "Фестиваль",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: "images/derbent-fest.jpg",
        description: "Ежегодный фестиваль музыки, театра, ремесел"
    },
    {
        id: 13,
        name: "Дизайн-студии Махачкалы",
        lat: 42.9835,
        lng: 47.4960,
        category: "Дизайн / Медиа",
        address: "г. Махачкала, пр. Расула Гамзатова",
        image: "images/design-studio.jpg",
        description: "Графический дизайн, брендинг, веб-разработка"
    },
    {
        id: 14,
        name: "Каспийск — арт-проекты",
        lat: 42.8817,
        lng: 47.6392,
        category: "Современное искусство",
        address: "г. Каспийск, набережная",
        image: "images/kaspiysk.jpg",
        description: "Молодёжные инициативы, граффити-фестивали"
    },
    {
        id: 15,
        name: "Хасавюрт — культурный центр",
        lat: 43.2500,
        lng: 46.5833,
        category: "Городской досуг",
        address: "г. Хасавюрт, ул. Грозненская",
        image: "images/khasavyurt.jpg",
        description: "Концертные площадки, дома культуры, фестивали"
    },
    {
        id: 16,
        name: "Буйнакск — творческие объединения",
        lat: 42.8167,
        lng: 47.1167,
        category: "Культура",
        address: "г. Буйнакск, центр",
        image: "images/buinaksk.jpg",
        description: "Дома культуры, изостудии, литературные объединения"
    },
    {
        id: 17,
        name: "Кизляр — народные промыслы",
        lat: 43.8467,
        lng: 46.7125,
        category: "Культурное наследие",
        address: "г. Кизляр",
        image: "images/kizlyar.jpg",
        description: "Этнокультурный центр, народные умельцы"
    },
    {
        id: 18,
        name: "Дагестанское книжное издательство",
        lat: 42.9801,
        lng: 47.5002,
        category: "Издательство / Литература",
        address: "г. Махачкала",
        image: "images/book-publishing.jpg",
        description: "Выпуск литературы на языках народов Дагестана"
    }
];

// ==================== НАСТРОЙКА КАРТЫ ====================

// Создаём карту с центром по Дагестану
const map = L.map('map').setView([42.95, 47.3], 8);

// Добавляем красивый базовый слой (светлая карта от CartoDB)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 18,
    minZoom: 7
}).addTo(map);

// ===== ФУНКЦИЯ СОЗДАНИЯ КАСТОМНОЙ СТРЕЛКИ (стиль 2ГИС, закруглённая) =====
function createArrowIcon(category = "default") {
    // Можно менять цвет в зависимости от категории
    let bgColor = "#2a6e3a"; // базовый зелёный
    
    if (category.includes("Народный")) bgColor = "#c97e0a";
    else if (category.includes("Музей") || category.includes("Галерея")) bgColor = "#9b59b6";
    else if (category.includes("Музыка") || category.includes("Танец")) bgColor = "#e74c3c";
    else if (category.includes("Фестиваль")) bgColor = "#e67e22";
    else if (category.includes("Дизайн")) bgColor = "#3498db";
    else if (category.includes("Издательство")) bgColor = "#1abc9c";
    
    return L.divIcon({
        html: `<div style="
            background-color: ${bgColor};
            width: 44px;
            height: 44px;
            border-radius: 14px 14px 14px 6px;
            transform: rotate(45deg);
            box-shadow: 0 4px 14px rgba(0,0,0,0.3);
            border: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            color: white;
            transition: all 0.1s ease;
            cursor: pointer;
        ">📍</div>`,
        iconSize: [44, 44],
        popupAnchor: [0, -22],
        className: 'gis-arrow-marker'
    });
}

// Хранилище маркеров для быстрого доступа
const markersMap = new Map(); // id -> { marker, data }

// Добавляем все маркеры на карту
objectsData.forEach(obj => {
    const icon = createArrowIcon(obj.category);
    const marker = L.marker([obj.lat, obj.lng], { icon: icon }).addTo(map);
    
    // Формируем красивое всплывающее окно с фото и адресом
    const popupHtml = `
        <div style="width: 100%;">
            <img src="${obj.image}" alt="${obj.name}" 
                 style="width: 100%; height: 170px; object-fit: cover; display: block; background: #f0f0f0;"
                 onerror="this.src='https://placehold.co/600x400?text=📸+Фото+скоро'">
            <div style="padding: 14px 16px 18px;">
                <h3 style="margin: 0 0 6px 0; font-size: 1.2rem; color: #1a4d2a;">${obj.name}</h3>
                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: #3b4e5e; margin-bottom: 8px;">
                    <span>📍</span> ${obj.address}
                </div>
                <div style="margin-top: 8px;">
                    <span style="background: #eef2f5; padding: 4px 12px; border-radius: 30px; font-size: 0.7rem; font-weight: 500;">${obj.category}</span>
                </div>
                <p style="margin-top: 12px; font-size: 0.85rem; color: #555; line-height: 1.4;">${obj.description || ''}</p>
            </div>
        </div>
    `;
    
    marker.bindPopup(popupHtml, {
        className: 'custom-popup',
        maxWidth: 300,
        minWidth: 280
    });
    
    markersMap.set(obj.id, { marker, data: obj });
});

// ===== ГЕНЕРАЦИЯ БОКОВОГО СПИСКА (ПЛИТКИ) =====

// Функция для получения эмодзи по категории
function getEmojiForCategory(category) {
    if (category.includes("Народный")) return "🏺";
    if (category.includes("Ковроткачество")) return "🧶";
    if (category.includes("Музей") || category.includes("Галерея")) return "🖼️";
    if (category.includes("Музыка") || category.includes("Танец")) return "🎵";
    if (category.includes("Фестиваль")) return "🎪";
    if (category.includes("Дизайн") || category.includes("Медиа")) return "✏️";
    if (category.includes("Издательство") || category.includes("Литература")) return "📚";
    if (category.includes("Культурное наследие")) return "🏛️";
    return "📍";
}

// Заполняем список
const container = document.getElementById('objectsList');
if (container) {
    objectsData.forEach(obj => {
        const card = document.createElement('div');
        card.className = 'object-card';
        card.innerHTML = `
            <div class="object-icon">${getEmojiForCategory(obj.category)}</div>
            <div class="object-info">
                <div class="object-title">${obj.name}</div>
                <div class="object-category">${obj.category}</div>
            </div>
        `;
        
        // Обработчик клика: плавный перелёт к маркеру + открытие попапа
        card.addEventListener('click', () => {
            const { marker, data } = markersMap.get(obj.id);
            map.flyTo([data.lat, data.lng], 15, {
                duration: 1.2,        // длительность анимации 1.2 секунды
                easeLinearity: 0.5
            });
            // Открываем попап после завершения полёта
            setTimeout(() => {
                marker.openPopup();
            }, 1250);
        });
        
        container.appendChild(card);
    });
}

// ===== ДОПОЛНИТЕЛЬНЫЕ ФИШКИ =====

// Добавляем масштаб на карту (для удобства)
L.control.scale({ metric: true, imperial: false, position: 'bottomright' }).addTo(map);

// Выводим в консоль информацию для разработчика
console.log(`✅ Карта креативных индустрий Дагестана загружена`);
console.log(`📌 Всего объектов: ${objectsData.length}`);
console.log(`📍 Категории: Народные промыслы, Галереи, Музыка, Фестивали, Дизайн и другие`);

// Если карта не отображается корректно — пересчитываем размер
setTimeout(() => {
    map.invalidateSize();
}, 250);

// Обработка ресайза окна (адаптив)
window.addEventListener('resize', () => {
    setTimeout(() => {
        map.invalidateSize();
    }, 200);
});
