// ============================================================
// 1. ДАННЫЕ ОБЪЕКТОВ (18)
// ============================================================
const objectsData = [
    {
        id: 1,
        name: "Кубачи — ювелирное искусство",
        shortName: "Кубачи",
        lat: 42.0925,
        lng: 47.6000,
        category: "Народный промысел",
        address: "с. Кубачи, Дахадаевский район",
        image: [
            "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/97c60bcb-dbb0-4086-8215-6e8ebd273ab0/-/format/webp/-/quality/smart_retina/-/stretch/off/-/resize/900x/",
            "https://kulturologia.ru/blogs/211118/41378/"
        ],
        symbol: "✦",
        color: "#4a9e7a",
        description: "Всемирно известное село мастеров серебряного дела. Уникальная техника гравировки и чернения по металлу."
    },
    {
        id: 2,
        name: "Унцукуль — насечка по дереву",
        shortName: "Унцукуль",
        lat: 42.7122,
        lng: 46.7897,
        category: "Народный промысел",
        address: "с. Унцукуль, Унцукульский район",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qLUsssOey_9ntRwExVkcmBVuLeO3xGEzx5T8WBGVn1yXhdkXkKc8E-g&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcLkT2PFiyuKVUrvUz1B4nB6Q9wE3dmzSpdBM9tmduQ6shv130X4fMsA&s=10"
        ],
        symbol: "✦",
        color: "#5aaa90",
        description: "Уникальная техника инкрустации металлом и перламутром по дереву. Традиционный промысел Дагестана."
    },
    {
        id: 3,
        name: "Балхарская керамика",
        shortName: "Балхар",
        lat: 42.3100,
        lng: 47.1689,
        category: "Народный промысел",
        address: "с. Балхар, Акушинский район",
        image: [
            "https://ic.pics.livejournal.com/islam_dag_mir/60544360/218158/218158_1000.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOn3eD3cEGRKSowJ0fUZmVAtRyuGPT-Ucai5tpbvG8fTER0KDwBiNCXOI&s=10"
        ],
        symbol: "✦",
        color: "#7dc6b0",
        description: "Архаичная керамика ручной лепки без использования гончарного круга. Уникальная технология, передаваемая из поколения в поколение."
    },
    {
        id: 4,
        name: "Гоцатль — художественный металл",
        shortName: "Гоцатль",
        lat: 42.5333,
        lng: 46.8667,
        category: "Народный промысел",
        address: "с. Гоцатль, Хунзахский район",
        image: [
            "https://chernovik.net/sites/default/files/photo/2014/07/25/img_5349.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVKty50sbnZYkuuiOVwyByJte4SzdGP-9DKOPVCcKjA&s=10"
        ],
        symbol: "✦",
        color: "#6a9a80",
        description: "Центр обработки металла, чеканка, художественная ковка. Древние традиции металлообработки."
    },
    {
        id: 5,
        name: "Табасаранские ковры",
        shortName: "Табасаранские ковры",
        lat: 41.9833,
        lng: 48.0000,
        category: "Ковроткачество",
        address: "Табасаранский район",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGdU3GDY96UHyaRvZO7c8iwe6tlD1XQo4K6w0iia_ayq1JaTpXqHG2JBs&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6xgAvsWLy43T7T4xcx055fXpSjyLVPNVyGm-kv9Gig&s=10"
        ],
        symbol: "◈",
        color: "#8ab8a0",
        description: "Знаменитые табасаранские ковры с уникальными орнаментами и яркими красками. Ручное ковроткачество."
    },
    {
        id: 6,
        name: "Дербент — крепость и ремесла",
        shortName: "Дербент",
        lat: 42.0575,
        lng: 48.2873,
        category: "Культурное наследие",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkBVT0JbvjihxVMfTFzteratj6TZ0URmjTTlMHDPNQ8Io766YU2Pg0b0&s=10"
        ],
        symbol: "◈",
        color: "#9ab87a",
        description: "Объект Всемирного наследия ЮНЕСКО. Древнейший город России, центр ремесел и культурного наследия."
    },
    {
        id: 7,
        name: "Дагестанский музей изобразительных искусств",
        shortName: "Музей ИЗО",
        lat: 42.9849,
        lng: 47.5049,
        category: "Музей / Галерея",
        address: "г. Махачкала, ул. М. Гамзатова, 21",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4ZYrk1BeMLtq52DQSmi2BmHGLwsM6qV3i_Vpnd6Dzw&s=10"
        ],
        symbol: "◈",
        color: "#d4a08a",
        description: "Крупнейший художественный музей Дагестана. Площадка для современного искусства и выставок."
    },
    {
        id: 8,
        name: "Галерея «Ковчег»",
        shortName: "Галерея «Ковчег»",
        lat: 42.9792,
        lng: 47.4987,
        category: "Современное искусство",
        address: "г. Махачкала, пр. Гамидова, 12",
        image: [
            "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=400&fit=crop"
        ],
        symbol: "◈",
        color: "#c0806a",
        description: "Частная галерея современного дагестанского искусства. Площадка для молодых художников."
    },
    {
        id: 9,
        name: "Арт-пространство «Артдвор»",
        shortName: "Артдвор",
        lat: 42.9765,
        lng: 47.5023,
        category: "Креативный кластер",
        address: "г. Махачкала, ул. Ярагского, 45",
        image: [
            "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop"
        ],
        symbol: "◈",
        color: "#5bb8b0",
        description: "Галерея, мастерские и коворкинг для креативных индустрий. Пространство для творчества и коллабораций."
    },
    {
        id: 10,
        name: "Государственный ансамбль танца «Лезгинка»",
        shortName: "Лезгинка",
        lat: 42.9812,
        lng: 47.5040,
        category: "Музыка / Танец",
        address: "г. Махачкала, пр. Ленина, 1",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wFGjP9VspoO6d0GuTJlLMOyAx8yko68ATCC_6Mb9--Q_kTV2f62kKZe4&s=10"
        ],
        symbol: "♪",
        color: "#b8a8d4",
        description: "Всемирно известный танцевальный коллектив, культурный символ Дагестана. Лауреат международных конкурсов."
    },
    {
        id: 11,
        name: "Дагестанская государственная филармония",
        shortName: "Филармония",
        lat: 42.9830,
        lng: 47.5075,
        category: "Концертный зал",
        address: "г. Махачкала, ул. Дахадаева, 3",
        image: [
            "https://avatars.mds.yandex.net/get-altay/1363376/2a00000162d25352462636470a8dc4f4f591/L_height"
        ],
        symbol: "♪",
        color: "#9a8ab8",
        description: "Главная концертная площадка республики. Концерты академической, народной и современной музыки."
    },
    {
        id: 12,
        name: "Фестиваль «Дербентская крепость»",
        shortName: "Фестиваль",
        lat: 42.0590,
        lng: 48.2885,
        category: "Фестиваль",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKme-ug68JzwXvC20Z2lf8Ta9_yOU9JOidf0i3GnhKw&s=10"
        ],
        symbol: "✦",
        color: "#d4a08a",
        description: "Ежегодный фестиваль музыки, театра и ремесел в древнейшей крепости России. Собирает тысячи зрителей."
    },
    {
        id: 13,
        name: "Дизайн-студии Махачкалы",
        shortName: "Дизайн-студии",
        lat: 42.9835,
        lng: 47.4960,
        category: "Дизайн / Медиа",
        address: "г. Махачкала, пр. Расула Гамзатова",
        image: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
        ],
        symbol: "◇",
        color: "#5bb8b0",
        description: "Студии графического дизайна, брендинга и веб-разработки. Современное креативное предпринимательство."
    },
    {
        id: 14,
        name: "Каспийск — арт-проекты",
        shortName: "Каспийск",
        lat: 42.8817,
        lng: 47.6392,
        category: "Современное искусство",
        address: "г. Каспийск, набережная",
        image: [
            "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=400&fit=crop"
        ],
        symbol: "◈",
        color: "#7dc6b0",
        description: "Молодёжные арт-инициативы, граффити-фестивали и современные уличные проекты на побережье Каспия."
    },
    {
        id: 15,
        name: "Хасавюрт — культурный центр",
        shortName: "Хасавюрт",
        lat: 43.2500,
        lng: 46.5833,
        category: "Городской досуг",
        address: "г. Хасавюрт, ул. Грозненская",
        image: [
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
        ],
        symbol: "◇",
        color: "#8ab8a0",
        description: "Концертные площадки, дома культуры и фестивальные события второго по величине города Дагестана."
    },
    {
        id: 16,
        name: "Буйнакск — творческие объединения",
        shortName: "Буйнакск",
        lat: 42.8167,
        lng: 47.1167,
        category: "Культура",
        address: "г. Буйнакск, центр",
        image: [
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"
        ],
        symbol: "◇",
        color: "#6a9a80",
        description: "Дома культуры, изостудии, литературные и театральные объединения города с богатыми культурными традициями."
    },
    {
        id: 17,
        name: "Кизляр — народные промыслы",
        shortName: "Кизляр",
        lat: 43.8467,
        lng: 46.7125,
        category: "Культурное наследие",
        address: "г. Кизляр, центр",
        image: [
            "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop"
        ],
        symbol: "◈",
        color: "#5aaa90",
        description: "Этнокультурный центр с богатыми традициями народных промыслов и ремесел на севере Дагестана."
    },
    {
        id: 18,
        name: "Дагестанское книжное издательство",
        shortName: "Издательство",
        lat: 42.9801,
        lng: 47.5002,
        category: "Издательство / Литература",
        address: "г. Махачкала, ул. Гамзатова",
        image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2TXCnxledbC5UneeSESH5cguZlRMheX1gQ4454USUw&s"
        ],
        symbol: "◇",
        color: "#4a9e7a",
        description: "Выпуск литературы на языках народов Дагестана. Сохранение и развитие национальной книжной культуры."
    }
];

// ============================================================
// 2. НАСТРОЙКА КАРТЫ
// ============================================================
const map = L.map('map', {
    center: [42.5, 47.3],
    zoom: 8,
    minZoom: 7,
    maxZoom: 13,
    zoomControl: true,
    fadeAnimation: true,
    zoomAnimation: true
});

// ============================================================
// 3. ЖЁСТКИЕ ГРАНИЦЫ — ТОЛЬКО ДАГЕСТАН
// ============================================================
const dagestanBounds = [
    [40.8, 45.0],
    [44.8, 50.0]
];
map.setMaxBounds(dagestanBounds);

map.on('drag', function() {
    map.panInsideBounds(dagestanBounds, { animate: true });
});

map.on('zoomend', function() {
    if (map.getZoom() < 7) {
        map.setZoom(7);
    }
    if (map.getZoom() > 13) {
        map.setZoom(13);
    }
});

// ============================================================
// 4. ПОДЛОЖКА КАРТЫ (СВЕТЛАЯ, НЕ СЕРАЯ)
// ============================================================
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 18,
    minZoom: 7
}).addTo(map);

// ============================================================
// 5. ШКАЛА МАСШТАБА
// ============================================================
L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(map);

// ============================================================
// 6. СОЗДАНИЕ КАПЛИ С ОСТРЫМ КОНЧИКОМ (SVG)
// ============================================================
function createDropIcon(color, symbol) {
    return L.divIcon({
        html: `
            <svg width="36" height="50" viewBox="0 0 36 50" style="display:block;filter:drop-shadow(0 3px 8px rgba(0,0,0,0.15));">
                <path d="M18 2 C18 2, 34 24, 34 32 C34 40.8, 26.8 46, 18 46 C9.2 46, 2 40.8, 2 32 C2 24, 18 2, 18 2 Z" 
                      fill="${color}" 
                      stroke="white" 
                      stroke-width="2"/>
                <ellipse cx="18" cy="32" rx="12" ry="10" fill="rgba(255,255,255,0.12)"/>
                <circle cx="12" cy="26" r="2.5" fill="white" opacity="0.35"/>
                <circle cx="9" cy="22" r="1.2" fill="white" opacity="0.2"/>
                <text x="18" y="34" text-anchor="middle" fill="white" font-size="15" font-weight="600" font-family="Georgia, serif">${symbol}</text>
            </svg>
        `,
        iconSize: [36, 50],
        popupAnchor: [0, -25],
        className: 'drop-marker'
    });
}

// ============================================================
// 7. ХРАНИЛИЩЕ МАРКЕРОВ
// ============================================================
const markersMap = new Map();

// ============================================================
// 8. СОЗДАНИЕ ПОПАПА
// ============================================================
function createPopupHtml(obj) {
    const hasPhoto = obj.image && obj.image.length > 0;
    const images = Array.isArray(obj.image) ? obj.image : [obj.image];
    const isSingle = images.length === 1;
    const gridClass = isSingle ? 'single' : '';
    const validImages = images.filter(img => img && img.trim() !== '');

    let galleryHtml = '';
    if (validImages.length > 0) {
        galleryHtml = `
            <div class="popup-gallery ${gridClass}">
                ${validImages.map(img => `
                    <img class="popup-img" src="${img}" alt="${obj.name}" 
                         onerror="this.style.display='none'" 
                         onload="this.classList.add('loaded')">
                `).join('')}
            </div>
        `;
    }

    return `
        <div>
            ${galleryHtml}
            <div class="popup-text">
                <h3>${obj.name}</h3>
                <div class="popup-address">📍 ${obj.address}</div>
                <span class="popup-badge">${obj.category}</span>
                ${obj.description ? `<p class="popup-description">${obj.description}</p>` : ''}
            </div>
        </div>
    `;
}

// ============================================================
// 9. ДОБАВЛЕНИЕ МАРКЕРОВ НА КАРТУ
// ============================================================
objectsData.forEach(obj => {
    const icon = createDropIcon(obj.color, obj.symbol);
    const marker = L.marker([obj.lat, obj.lng], { icon }).addTo(map);

    const popupHtml = createPopupHtml(obj);

    marker.bindPopup(popupHtml, {
        className: 'custom-popup',
        maxWidth: 320,
        minWidth: 260
    });

    markersMap.set(obj.id, { marker, data: obj });
});

// ============================================================
// 10. ОБРАБОТЧИКИ ДЛЯ КАПЕЛЬ (анимация)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем CSS-класс для анимации при наведении через стили
    // Уже реализовано в CSS через .drop-marker:hover svg
});

// ============================================================
// 11. ГЕНЕРАЦИЯ КАРТОЧЕК В СПИСКЕ
// ============================================================
const container = document.getElementById('objectsList');

// Карта символов по категориям
const categorySymbols = {
    "Народный промысел": "✦",
    "Ковроткачество": "◈",
    "Культурное наследие": "◈",
    "Музей / Галерея": "◈",
    "Современное искусство": "◈",
    "Креативный кластер": "◈",
    "Музыка / Танец": "♪",
    "Концертный зал": "♪",
    "Фестиваль": "✦",
    "Дизайн / Медиа": "◇",
    "Городской досуг": "◇",
    "Культура": "◇",
    "Издательство / Литература": "◇"
};

objectsData.forEach((obj, index) => {
    const card = document.createElement('div');
    card.className = 'object-card';
    card.dataset.category = obj.category;
    card.dataset.id = obj.id;

    const symbol = categorySymbols[obj.category] || "•";

    card.innerHTML = `
        <div class="object-icon" style="background: ${obj.color}22; border: 1px solid ${obj.color}44; color: ${obj.color}; font-family: Georgia, serif;">
            ${symbol}
        </div>
        <div class="object-info">
            <div class="object-title">${obj.shortName}</div>
            <div class="object-category">${obj.category}</div>
        </div>
    `;

    card.addEventListener('click', function() {
        const { marker, data } = markersMap.get(obj.id);
        map.flyTo([data.lat, data.lng], 12, {
            duration: 1.2,
            easeLinearity: 0.35
        });
        setTimeout(() => {
            marker.openPopup();
        }, 1300);
    });

    container.appendChild(card);
});

// ============================================================
// 12. ФИЛЬТРАЦИЯ
// ============================================================
let currentFilter = 'Все';

function filterObjects(category) {
    currentFilter = category;
    const cards = document.querySelectorAll('.object-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    cards.forEach(card => {
        if (category === 'Все' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Навешиваем обработчики на кнопки фильтра
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        filterObjects(this.dataset.category);
    });
});

// ============================================================
// 13. ПРОВЕРКА ФОТО ПРИ ЗАГРУЗКЕ (скрытие битых ссылок)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    // Фото скрываются автоматически через onerror
});

// ============================================================
// 14. АДАПТИВ: ПЕРЕСЧЁТ РАЗМЕРА КАРТЫ
// ============================================================
setTimeout(() => {
    map.invalidateSize();
}, 400);

window.addEventListener('resize', function() {
    setTimeout(() => {
        map.invalidateSize();
    }, 300);
});

// ============================================================
// 15. СКРЫТИЕ ЭКРАНА ЗАГРУЗКИ
// ============================================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hide');
            // Полное удаление через 1 секунду после анимации
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000);
        }, 500);
    }
});

// ============================================================
// 16. ЛОГ В КОНСОЛЬ
// ============================================================
console.log('🏔️ Креативная карта Дагестана загружена!');
console.log(`📌 Всего объектов: ${objectsData.length}`);
console.log('📍 Категории: Народные промыслы, Ковроткачество, Музеи, Музыка, Фестивали, Дизайн и другие');

// ============================================================
// 17. ДОПОЛНИТЕЛЬНО: КЛИК НА КАРТУ ДЛЯ ЗАКРЫТИЯ ПОПАПА
// ============================================================
map.on('click', function() {
    map.closePopup();
});
