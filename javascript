// ============================================================
// КРЕАТИВНЫЙ ДАГЕСТАН — ПОЛНАЯ СПЕЦИФИКАЦИЯ v3.0
// Основной JavaScript-модуль карты
// ============================================================

(function() {
    'use strict';

    // ------------------------------------------------------------
    // 1. ДАННЫЕ ОБЪЕКТОВ (18 объектов из диплома)
    // ------------------------------------------------------------
    const DATA = [
        {
            id: 1,
            name: "Кубачи — ювелирное искусство",
            shortName: "Кубачи",
            lat: 42.0925,
            lng: 47.6000,
            category: "Народные художественные промыслы и ремесла",
            address: "с. Кубачи, Дахадаевский район",
            photos: ["https://i.ytimg.com/vi/RFH0NTVQm7c/maxresdefault.jpg"],
            description: "Знаменитый центр ювелирного мастерства, известный с древних времён."
        },
        {
            id: 2,
            name: "Унцукуль — насечка по дереву",
            shortName: "Унцукуль",
            lat: 42.7122,
            lng: 46.7897,
            category: "Народные художественные промыслы и ремесла",
            address: "с. Унцукуль, Унцукульский район",
            photos: [
  "https://avatars.mds.yandex.net/i?id=0cea8cbdf23bc6ea4dc1ab3a699c5d81_l-9843011-images-thumbs&n=13",
  "https://пример.com/uncukul-master-2.jpg"
],
            description: "Традиционная насечка металлом по дереву, уникальный дагестанский промысел."
        },
        {
            id: 3,
            name: "Балхарская керамика",
            shortName: "Балхар",
            lat: 42.3100,
            lng: 47.1689,
            category: "Народные художественные промыслы и ремесла",
            address: "с. Балхар, Акушинский район",
            photos: ["https://cdn.culture.ru/images/f28d8f6e-ddf0-5885-9576-a89480349b21"],
            description: "Древний центр керамического производства с многовековой историей."
        },
        {
            id: 4,
            name: "Гоцатль — художественный металл",
            shortName: "Гоцатль",
            lat: 42.5333,
            lng: 46.8667,
            category: "Народные художественные промыслы и ремесла",
            address: "с. Гоцатль, Хунзахский район",
            photos: [],
            description: "Изделия из металла с филигранью и чеканкой."
        },
        {
            id: 5,
            name: "Табасаранские ковры",
            shortName: "Табасаранские ковры",
            lat: 41.9833,
            lng: 48.0000,
            category: "Мода и текстильный дизайн",
            address: "Табасаранский район",
            photos: ["https://i.ytimg.com/vi/Im5IrdaRvAM/hqdefault.jpg"],
            description: "Ручные ворсовые ковры, известные далеко за пределами Дагестана."
        },
        {
            id: 6,
            name: "Дербент — крепость и ремесла",
            shortName: "Дербент",
            lat: 42.0575,
            lng: 48.2873,
            category: "Народные художественные промыслы и ремесла",
            address: "г. Дербент, цитадель Нарын-Кала",
            photos: [],
            description: "Древняя крепость и центр ремесленных традиций."
        },
        {
            id: 7,
            name: "Дагестанский музей изобразительных искусств",
            shortName: "Музей ИЗО",
            lat: 42.9849,
            lng: 47.5049,
            category: "Изобразительное искусство и галерейная деятельность",
            address: "г. Махачкала, ул. М. Гамзатова, 21",
            photos: ["https://2gis.ru/makhachkala/gallery/geo/70000001021633171/photoId/30258560051696102"],
            description: "Крупнейшее собрание изобразительного искусства в регионе."
        },
        {
            id: 8,
            name: "Галерея «Ковчег»",
            shortName: "Галерея «Ковчег»",
            lat: 42.9792,
            lng: 47.4987,
            category: "Изобразительное искусство и галерейная деятельность",
            address: "г. Махачкала, пр. Гамидова, 12",
            photos: [],
            description: "Современная галерея с акцентом на дагестанских художников."
        },
        {
            id: 9,
            name: "Арт-пространство «Артдвор»",
            shortName: "Артдвор",
            lat: 42.9765,
            lng: 47.5023,
            category: "Изобразительное искусство и галерейная деятельность",
            address: "г. Махачкала, ул. Ярагского, 45",
            photos: [],
            description: "Креативный кластер и площадка для современных художников."
        },
        {
            id: 10,
            name: "Гос. ансамбль танца «Лезгинка»",
            shortName: "Лезгинка",
            lat: 42.9812,
            lng: 47.5040,
            category: "Музыка и исполнительские искусства",
            address: "г. Махачкала, пр. Ленина, 1",
            photos: [
                "https://sun9-2.userapi.com/impg/.../wall-99465089_5383.jpg?size=1280x720...",
                "https://i.ytimg.com/vi/Im5IrdaRvAM/hqdefault.jpg"
            ],
            description: "Легендарный танцевальный ансамбль, визитная карточка Дагестана."
        },
        {
            id: 11,
            name: "Дагестанская филармония",
            shortName: "Филармония",
            lat: 42.9830,
            lng: 47.5075,
            category: "Музыка и исполнительские искусства",
            address: "г. Махачкала, ул. Дахадаева, 3",
            photos: [],
            description: "Главная концертная площадка республики."
        },
        {
            id: 12,
            name: "Фестиваль «Дербентская крепость»",
            shortName: "Фестиваль",
            lat: 42.0590,
            lng: 48.2885,
            category: "Музыка и исполнительские искусства",
            address: "г. Дербент, цитадель Нарын-Кала",
            photos: [],
            description: "Ежегодный музыкальный фестиваль на территории древней крепости."
        },
        {
            id: 13,
            name: "Дизайн-студии Махачкалы",
            shortName: "Дизайн-студии",
            lat: 42.9835,
            lng: 47.4960,
            category: "Дизайн и архитектура",
            address: "г. Махачкала, пр. Расула Гамзатова",
            photos: [],
            description: "Современные дизайн-бюро и архитектурные мастерские."
        },
        {
            id: 14,
            name: "Каспийск — арт-проекты",
            shortName: "Каспийск",
            lat: 42.8817,
            lng: 47.6392,
            category: "Изобразительное искусство и галерейная деятельность",
            address: "г. Каспийск, набережная",
            photos: [],
            description: "Арт-объекты и галереи на набережной Каспийска."
        },
        {
            id: 15,
            name: "Хасавюрт — культурный центр",
            shortName: "Хасавюрт",
            lat: 43.2500,
            lng: 46.5833,
            category: "Цифровой контент и медиа",
            address: "г. Хасавюрт, ул. Грозненская",
            photos: [],
            description: "Центр медиа и цифрового контента в северном Дагестане."
        },
        {
            id: 16,
            name: "Буйнакск — творческие объединения",
            shortName: "Буйнакск",
            lat: 42.8167,
            lng: 47.1167,
            category: "Цифровой контент и медиа",
            address: "г. Буйнакск, центр",
            photos: [],
            description: "Творческие объединения и медиа-пространства."
        },
        {
            id: 17,
            name: "Кизляр — народные промыслы",
            shortName: "Кизляр",
            lat: 43.8467,
            lng: 46.7125,
            category: "Народные художественные промыслы и ремесла",
            address: "г. Кизляр, центр",
            photos: [],
            description: "Традиционные ремесла и промыслы Кизляра."
        },
        {
            id: 18,
            name: "Дагестанское книжное издательство",
            shortName: "Издательство",
            lat: 42.9801,
            lng: 47.5002,
            category: "Издательская деятельность и литература",
            address: "г. Махачкала, ул. Гамзатова",
            photos: [],
            description: "Крупнейшее книжное издательство республики."
        }
    ];

    // ------------------------------------------------------------
    // 2. КОНФИГУРАЦИЯ КАТЕГОРИЙ
    // ------------------------------------------------------------
    const CATEGORY_CONFIG = {
        "Народные художественные промыслы и ремесла": {
            color: "#4a9e7a",
            symbol: "✦"
        },
        "Изобразительное искусство и галерейная деятельность": {
            color: "#d4a08a",
            symbol: "◈"
        },
        "Дизайн и архитектура": {
            color: "#5bb8b0",
            symbol: "◇"
        },
        "Музыка и исполнительские искусства": {
            color: "#b8a8d4",
            symbol: "♪"
        },
        "Кино и видеопроизводство": {
            color: "#c0806a",
            symbol: "◈"
        },
        "Издательская деятельность и литература": {
            color: "#4a9e7a",
            symbol: "◇"
        },
        "Мода и текстильный дизайн": {
            color: "#8ab8a0",
            symbol: "◈"
        },
        "Цифровой контент и медиа": {
            color: "#5bb8b0",
            symbol: "◇"
        }
    };

    // ------------------------------------------------------------
    // 3. ИНИЦИАЛИЗАЦИЯ КАРТЫ
    // ------------------------------------------------------------
    function initMap() {
        // Создание карты
        const map = L.map('map', {
            center: [42.5, 47.3],
            zoom: 8,
            minZoom: 7,
            maxZoom: 13,
            zoomControl: true,
            fadeAnimation: true
        });

        // Географические ограничения (только Дагестан)
        const dagestanBounds = [[40.8, 45.0], [44.8, 50.0]];
        map.setMaxBounds(dagestanBounds);

        // Обработчики для ограничения перемещения
        map.on('drag', function() {
            map.panInsideBounds(dagestanBounds, { animate: true });
        });

        map.on('zoomend', function() {
            if (map.getZoom() < 7) map.setZoom(7);
            if (map.getZoom() > 13) map.setZoom(13);
        });

        // Подложка (CartoDB Light — светлая, тёплая)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap © CartoDB',
            subdomains: 'abcd',
            maxZoom: 18,
            minZoom: 7
        }).addTo(map);

        return map;
    }

    // ------------------------------------------------------------
    // 4. СОЗДАНИЕ МАРКЕРОВ-КАПЕЛЬ
    // ------------------------------------------------------------
    function createDropIcon(color, symbol) {
        const svg = `
            <svg width="36" height="50" viewBox="0 0 36 50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow-${symbol.replace(/\s/g, '')}" x="-10%" y="-10%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.15"/>
                    </filter>
                </defs>
                <path d="M18 2 C18 2, 34 24, 34 32 C34 40.8, 26.8 46, 18 46 C9.2 46, 2 40.8, 2 32 C2 24, 18 2, 18 2 Z" 
                      fill="${color}" 
                      stroke="white" 
                      stroke-width="2" 
                      filter="url(#shadow-${symbol.replace(/\s/g, '')})"/>
                <ellipse cx="18" cy="32" rx="12" ry="10" fill="rgba(255,255,255,0.12)"/>
                <circle cx="12" cy="26" r="2.5" fill="white" opacity="0.35"/>
                <circle cx="9" cy="22" r="1.2" fill="white" opacity="0.2"/>
                <text x="18" y="34" text-anchor="middle" fill="white" font-size="15" font-weight="600" font-family="Georgia, serif">${symbol}</text>
            </svg>
        `;

        return L.divIcon({
            html: svg,
            className: 'custom-drop-icon',
            iconSize: [36, 50],
            iconAnchor: [18, 46],
            popupAnchor: [0, -46]
        });
    }

    // ------------------------------------------------------------
    // 5. СОЗДАНИЕ ПОПАПА
    // ------------------------------------------------------------
    function createPopupContent(item) {
        const color = CATEGORY_CONFIG[item.category]?.color || '#7dc6b0';
        const photos = item.photos && item.photos.length > 0 ? item.photos : [];
        const gridClass = photos.length === 2 ? 'two-col' : 'one-col';

        let photoHtml = '';
        if (photos.length > 0) {
            photoHtml = `<div class="popup-photo-grid ${gridClass}">`;
            photos.forEach(url => {
                photoHtml += `<img class="popup-photo" src="${url}" alt="фото" onerror="this.style.display='none'" />`;
            });
            photoHtml += `</div>`;
        }

        return `
            <div class="popup-content">
                ${photoHtml}
                <div class="popup-title">${item.name}</div>
                <div class="popup-address">
                    <span>📍</span> ${item.address}
                </div>
                <span class="popup-cat" style="background:${color}20; color:${color};">${item.category}</span>
                <div class="popup-desc">${item.description || ''}</div>
            </div>
        `;
    }

    // ------------------------------------------------------------
    // 6. ДОБАВЛЕНИЕ МАРКЕРОВ НА КАРТУ
    // ------------------------------------------------------------
    function addMarkers(map, data) {
        const markers = [];

        data.forEach(item => {
            const config = CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG["Народные художественные промыслы и ремесла"];
            const icon = createDropIcon(config.color, config.symbol);

            const marker = L.marker([item.lat, item.lng], {
                icon: icon,
                riseOnHover: true
            });

            // Привязка попапа
            marker.bindPopup(createPopupContent(item), {
                className: 'custom-popup',
                maxWidth: 300
            });

            // Анимация при наведении
            marker.on('mouseover', function(e) {
                const el = this._icon;
                if (el) {
                    el.style.transform = 'scale(1.12)';
                    el.style.filter = 'drop-shadow(0 8px 12px rgba(0,0,0,0.15))';
                }
            });

            marker.on('mouseout', function(e) {
                const el = this._icon;
                if (el) {
                    el.style.transform = 'scale(1)';
                    el.style.filter = '';
                }
            });

            marker.addTo(map);
            markers.push({
                marker: marker,
                data: item
            });
        });

        return markers;
    }

    // ------------------------------------------------------------
    // 7. УПРАВЛЕНИЕ ПАНЕЛЬЮ
    // ------------------------------------------------------------
    function createPanel(map, data, markers) {
        const filterWrap = document.getElementById('filterWrap');
        const cardList = document.getElementById('cardList');
        const objectCount = document.getElementById('objectCount');

        let activeFilter = 'Все';

        // Получение уникальных категорий
        function getCategories() {
            const cats = data.map(item => item.category);
            return ['Все', ...new Set(cats)];
        }

        // Фильтрация объектов
        function filterData(category) {
            if (category === 'Все') return data;
            return data.filter(item => item.category === category);
        }

        // Рендеринг фильтров
        function renderFilters() {
            const categories = getCategories();
            filterWrap.innerHTML = '';

            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'filter-btn' + (cat === activeFilter ? ' active' : '');
                btn.textContent = cat;
                btn.dataset.category = cat;

                btn.addEventListener('click', function(e) {
                    activeFilter = cat;
                    renderFilters();
                    renderCards();
                });

                filterWrap.appendChild(btn);
            });
        }

        // Рендеринг карточек
        function renderCards() {
            const filtered = filterData(activeFilter);
            cardList.innerHTML = '';

            filtered.forEach((item, index) => {
                const config = CATEGORY_CONFIG[item.category] || CATEGORY_CONFIG["Народные художественные промыслы и ремесла"];
                const color = config.color;
                const symbol = config.symbol;

                const card = document.createElement('div');
                card.className = 'card-item';
                card.style.animationDelay = (0.02 + index * 0.02) + 's';

                card.innerHTML = `
                    <div class="card-icon" style="background:${color};">${symbol}</div>
                    <div class="card-info">
                        <div class="card-name">${item.shortName}</div>
                        <div class="card-badge">${item.category}</div>
                    </div>
                `;

                // Клик по карточке — перелёт к объекту
                card.addEventListener('click', function() {
                    const markerData = markers.find(m => m.data.id === item.id);
                    if (markerData) {
                        map.flyTo([item.lat, item.lng], 12, {
                            duration: 1.2,
                            easeLinearity: 0.35
                        });
                        setTimeout(() => {
                            markerData.marker.openPopup();
                        }, 200);
                    }
                });

                cardList.appendChild(card);
            });

            // Обновление счётчика
            if (objectCount) {
                objectCount.textContent = filtered.length;
            }
        }

        // Инициализация
        renderFilters();
        renderCards();

        // Возвращаем API для обновления
        return {
            setFilter: function(category) {
                activeFilter = category;
                renderFilters();
                renderCards();
            },
            refresh: function() {
                renderCards();
            }
        };
    }

    // ------------------------------------------------------------
    // 8. ЗАГРУЗОЧНЫЙ ЭКРАН
    // ------------------------------------------------------------
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1200);
        }
    }

    // ------------------------------------------------------------
    // 9. ГЛАВНАЯ ФУНКЦИЯ ИНИЦИАЛИЗАЦИИ
    // ------------------------------------------------------------
    function initApp() {
        // Инициализация карты
        const map = initMap();

        // Добавление маркеров
        const markers = addMarkers(map, DATA);

        // Создание панели
        const panel = createPanel(map, DATA, markers);

        // Скрытие загрузочного экрана
        hideLoader();

        // Обработка изменения размера окна
        window.addEventListener('resize', function() {
            // Карта автоматически адаптируется
            // Панель адаптируется через CSS медиа-запросы
        });

        // Экспорт в глобальную область для отладки
        window.__app = {
            map: map,
            data: DATA,
            markers: markers,
            panel: panel
        };

        console.log('✅ Креативный Дагестан v3.0 загружен');
        console.log(`📊 Загружено объектов: ${DATA.length}`);
        console.log(`📍 Маркеров на карте: ${markers.length}`);
    }

    // ------------------------------------------------------------
    // 10. ЗАПУСК ПРИЛОЖЕНИЯ ПОСЛЕ ЗАГРУЗКИ DOM
    // ------------------------------------------------------------
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }

})();
