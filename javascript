const objectsData = [
    {
        id: 1,
        name: "Кубачи — ювелирное искусство",
        lat: 42.0925,
        lng: 47.6000,
        category: "Народный промысел",
        address: "с. Кубачи, Дахадаевский район",
        image: "images/kubachi.jpg",
        icon: "💎",
        iconColor: "#4a9e7a"
    },
    {
        id: 2,
        name: "Унцукуль — насечка по дереву",
        lat: 42.7122,
        lng: 46.7897,
        category: "Народный промысел",
        address: "с. Унцукуль, Унцукульский район",
        image: "images/untsukul.jpg",
        icon: "🪵",
        iconColor: "#5aaa90"
    },
    {
        id: 3,
        name: "Балхарская керамика",
        lat: 42.3100,
        lng: 47.1689,
        category: "Народный промысел",
        address: "с. Балхар, Акушинский район",
        image: "images/balhar.jpg",
        icon: "🏺",
        iconColor: "#7dc6b0"
    },
    {
        id: 4,
        name: "Гоцатль — художественный металл",
        lat: 42.5333,
        lng: 46.8667,
        category: "Народный промысел",
        address: "с. Гоцатль, Хунзахский район",
        image: "images/gotsatl.jpg",
        icon: "⚒️",
        iconColor: "#6a9a80"
    },
    {
        id: 5,
        name: "Табасаранские ковры",
        lat: 41.9833,
        lng: 48.0000,
        category: "Ковроткачество",
        address: "Табасаранский район",
        image: "images/tabasarancarpet.jpg",
        icon: "🧶",
        iconColor: "#8ab8a0"
    },
    {
        id: 6,
        name: "Дербент — крепость и ремесла",
        lat: 42.0575,
        lng: 48.2873,
        category: "Культурное наследие",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: "images/derbent.jpg",
        icon: "🏛️",
        iconColor: "#9ab87a"
    },
    {
        id: 7,
        name: "Дагестанский музей изобразительных искусств",
        lat: 42.9849,
        lng: 47.5049,
        category: "Музей / Галерея",
        address: "г. Махачкала, ул. М. Гамзатова, 21",
        image: "images/mahachkala-museum.jpg",
        icon: "🖼️",
        iconColor: "#d4a08a"
    },
    {
        id: 8,
        name: "Галерея «Ковчег»",
        lat: 42.9792,
        lng: 47.4987,
        category: "Современное искусство",
        address: "г. Махачкала, пр. Гамидова, 12",
        image: "images/kovcheg.jpg",
        icon: "🎨",
        iconColor: "#c0806a"
    },
    {
        id: 9,
        name: "Арт-пространство «Артдвор»",
        lat: 42.9765,
        lng: 47.5023,
        category: "Креативный кластер",
        address: "г. Махачкала, ул. Ярагского, 45",
        image: "images/artdvor.jpg",
        icon: "✨",
        iconColor: "#5bb8b0"
    },
    {
        id: 10,
        name: "Государственный ансамбль танца «Лезгинка»",
        lat: 42.9812,
        lng: 47.5040,
        category: "Музыка / Танец",
        address: "г. Махачкала, пр. Ленина, 1",
        image: "images/lezginka.jpg",
        icon: "💃",
        iconColor: "#b8a8d4"
    },
    {
        id: 11,
        name: "Дагестанская государственная филармония",
        lat: 42.9830,
        lng: 47.5075,
        category: "Концертный зал",
        address: "г. Махачкала, ул. Дахадаева, 3",
        image: "images/philharmonia.jpg",
        icon: "🎵",
        iconColor: "#9a8ab8"
    },
    {
        id: 12,
        name: "Фестиваль «Дербентская крепость»",
        lat: 42.0590,
        lng: 48.2885,
        category: "Фестиваль",
        address: "г. Дербент, цитадель Нарын-Кала",
        image: "images/derbent-fest.jpg",
        icon: "🎪",
        iconColor: "#d4a08a"
    },
    {
        id: 13,
        name: "Дизайн-студии Махачкалы",
        lat: 42.9835,
        lng: 47.4960,
        category: "Дизайн / Медиа",
        address: "г. Махачкала, пр. Расула Гамзатова",
        image: "images/design-studio.jpg",
        icon: "✏️",
        iconColor: "#5bb8b0"
    },
    {
        id: 14,
        name: "Каспийск — арт-проекты",
        lat: 42.8817,
        lng: 47.6392,
        category: "Современное искусство",
        address: "г. Каспийск, набережная",
        image: "images/kaspiysk.jpg",
        icon: "🎭",
        iconColor: "#7dc6b0"
    },
    {
        id: 15,
        name: "Хасавюрт — культурный центр",
        lat: 43.2500,
        lng: 46.5833,
        category: "Городской досуг",
        address: "г. Хасавюрт, ул. Грозненская",
        image: "images/khasavyurt.jpg",
        icon: "🏙️",
        iconColor: "#8ab8a0"
    },
    {
        id: 16,
        name: "Буйнакск — творческие объединения",
        lat: 42.8167,
        lng: 47.1167,
        category: "Культура",
        address: "г. Буйнакск",
        image: "images/buinaksk.jpg",
        icon: "📚",
        iconColor: "#6a9a80"
    },
    {
        id: 17,
        name: "Кизляр — народные промыслы",
        lat: 43.8467,
        lng: 46.7125,
        category: "Культурное наследие",
        address: "г. Кизляр",
        image: "images/kizlyar.jpg",
        icon: "🏺",
        iconColor: "#5aaa90"
    },
    {
        id: 18,
        name: "Дагестанское книжное издательство",
        lat: 42.9801,
        lng: 47.5002,
        category: "Издательство / Литература",
        address: "г. Махачкала",
        image: "images/book-publishing.jpg",
        icon: "📖",
        iconColor: "#4a9e7a"
    }
];

/* ================================================================
   НАСТРОЙКА КАРТЫ С ОГРАНИЧЕНИЕМ ТОЛЬКО ДАГЕСТАНОМ
   ================================================================ */

const map = L.map('map', {
    center: [42.75, 47.3],
    zoom: 8,
    minZoom: 7,
    maxZoom: 13,
    zoomControl: true,
    fadeAnimation: true,
    zoomAnimation: true
});

/* ================================================================
   ОГРАНИЧЕНИЕ КАРТЫ ТОЛЬКО ТЕРРИТОРИЕЙ ДАГЕСТАНА
   Пользователь не сможет уйти за пределы этих границ
   ================================================================ */

const dagestanBounds = [
    [41.0, 45.5],  // Юго-западная граница (нижняя левая точка)
    [44.5, 49.5]   // Северо-восточная граница (верхняя правая точка)
];

map.setMaxBounds(dagestanBounds);
map.on('drag', function() {
    map.panInsideBounds(dagestanBounds, { animate: true });
});

/* ================================================================
   БАЗОВЫЙ СЛОЙ КАРТЫ
   ================================================================ */

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com/">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 18,
    minZoom: 7
}).addTo(map);

/* ================================================================
   ФУНКЦИЯ СОЗДАНИЯ УКАЗАТЕЛЯ-КАПЛИ
   ================================================================ */

function createDropIcon(color, emoji) {
    return L.divIcon({
        html: `
            <div class="drop-inner">
                <div class="drop-shape" style="background: ${color};">
                    ${emoji}
                </div>
            </div>
        `,
        iconSize: [40, 56],
        popupAnchor: [0, -28],
        className: 'drop-marker'
    });
}

/* ================================================================
   ДОБАВЛЕНИЕ МАРКЕРОВ НА КАРТУ
   ================================================================ */

const markersMap = new Map();

objectsData.forEach(obj => {
    const icon = createDropIcon(obj.iconColor, obj.icon);
    const marker = L.marker([obj.lat, obj.lng], { icon }).addTo(map);

    const popupHtml = `
        <div>
            <img class="popup-img" src="${obj.image}" alt="${obj.name}" 
                 onerror="this.src='https://placehold.co/600x400/ebf5f0/3a7a62?text=📸+Фото+скоро'">
            <div class="popup-text">
                <h3>${obj.name}</h3>
                <div class="popup-address">📍 ${obj.address}</div>
                <span class="popup-badge">${obj.category}</span>
            </div>
        </div>
    `;

    marker.bindPopup(popupHtml, {
        className: 'custom-popup',
        maxWidth: 300,
        minWidth: 260
    });

    markersMap.set(obj.id, { marker, data: obj });
});

/* ================================================================
   ГЕНЕРАЦИЯ БОКОВОГО СПИСКА
   ================================================================ */

const container = document.getElementById('objectsList');

objectsData.forEach(obj => {
    const card = document.createElement('div');
    card.className = 'object-card';

    card.innerHTML = `
        <div class="object-icon" style="background: ${obj.iconColor}22; border: 1px solid ${obj.iconColor}33;">
            <span style="font-size: 20px;">${obj.icon}</span>
        </div>
        <div class="object-info">
            <div class="object-title">${obj.name}</div>
            <div class="object-category">${obj.category}</div>
        </div>
    `;

    card.addEventListener('click', () => {
        const { marker, data } = markersMap.get(obj.id);
        map.flyTo([data.lat, data.lng], 13, {
            duration: 1.0,
            easeLinearity: 0.4
        });
        setTimeout(() => {
            marker.openPopup();
        }, 1100);
    });

    container.appendChild(card);
});

/* ================================================================
   ДОПОЛНИТЕЛЬНЫЕ ЭЛЕМЕНТЫ УПРАВЛЕНИЯ
   ================================================================ */

L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomright'
}).addTo(map);

/* ================================================================
   ФИКСЫ РАЗМЕРА КАРТЫ
   ================================================================ */

setTimeout(() => {
    map.invalidateSize();
}, 300);

window.addEventListener('resize', () => {
    setTimeout(() => {
        map.invalidateSize();
    }, 200);
});
