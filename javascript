/**
 * Creative Map of Dagestan — Main Application
 * Карта креативных индустрий Республики Дагестан
 * 
 * @version 1.0.0
 * @author Generated for Creative Dagestan Project
 */

(function(global) {
    'use strict';

    // ═══════════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════════

    const CONFIG = {
        // Map bounds — strictly Dagestan only
        bounds: {
            southWest: [40.8, 45.0],
            northEast: [44.8, 50.0],
            center: [42.5, 47.3]
        },

        // Zoom levels
        zoom: {
            initial: 8,
            min: 7,
            max: 13,
            focus: 12
        },

        // Animation timings (seconds)
        animation: {
            flyToDuration: 1.2,
            flyToDelay: 1.3,
            cardStagger: 0.03,
            hoverScale: 1.12,
            transitionSpeed: 0.25
        },

        // Tile layer
        tiles: {
            url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd'
        },

        // Marker dimensions
        marker: {
            width: 36,
            height: 50,
            hoverWidth: 42,
            hoverHeight: 58,
            anchorX: 18,
            anchorY: 46,
            hoverAnchorX: 21,
            hoverAnchorY: 52
        },

        // Popup dimensions
        popup: {
            width: 300,
            imageHeight: 170
        },

        // Color palette
        colors: {
            bg: '#f5f9f7',
            white: '#ffffff',
            mintLight: '#e8f5f0',
            mintMedium: '#d4ede4',
            mintDark: '#b8e0d2',
            mintAccent: '#7dc6b0',
            greenDark: '#1a3a2e',
            greenMedium: '#3a6b5a',
            greenLight: '#5a8a78',
            greenBadge: '#2a6e3a',
            border: 'rgba(184, 224, 210, 0.3)'
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // DATA — 18 Creative Objects
    // ═══════════════════════════════════════════════════════════════

    const OBJECTS_DATA = [
        {
            id: 1,
            name: "Кубачи — ювелирное искусство",
            lat: 42.0925,
            lng: 47.6000,
            category: "Народный промысел",
            address: "с. Кубачи, Дахадаевский район",
            image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop",
            color: "#4a9e7a",
            symbol: "✦",
            description: "Древний центр ювелирного искусства с уникальными техниками чеканки и гравировки."
        },
        {
            id: 2,
            name: "Унцукуль — насечка по дереву",
            lat: 42.7122,
            lng: 46.7897,
            category: "Народный промысел",
            address: "с. Унцукуль, Унцукульский район",
            image: "https://images.unsplash.com/photo-1543512601-f0c9b5e1c4e2?w=600&h=400&fit=crop",
            color: "#5aaa90",
            symbol: "✦",
            description: "Уникальная техника художественной насечки по дереву, передающаяся из поколения в поколение."
        },
        {
            id: 3,
            name: "Балхарская керамика",
            lat: 42.3100,
            lng: 47.1689,
            category: "Народный промысел",
            address: "с. Балхар, Акушинский район",
            image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=400&fit=crop",
            color: "#7dc6b0",
            symbol: "✦",
            description: "Традиционная керамика с характерными орнаментами и глазурью."
        },
        {
            id: 4,
            name: "Гоцатль — художественный металл",
            lat: 42.5333,
            lng: 46.8667,
            category: "Народный промысел",
            address: "с. Гоцатль, Хунзахский район",
            image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=400&fit=crop",
            color: "#6a9a80",
            symbol: "✦",
            description: "Центр художественной обработки металла и ковки."
        },
        {
            id: 5,
            name: "Табасаранские ковры",
            lat: 41.9833,
            lng: 48.0000,
            category: "Ковроткачество",
            address: "Табасаранский район",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
            color: "#8ab8a0",
            symbol: "◈",
            description: "Уникальные ковры с характерными геометрическими узорами табасаранского народа."
        },
        {
            id: 6,
            name: "Дербент — крепость и ремесла",
            lat: 42.0575,
            lng: 48.2873,
            category: "Культурное наследие",
            address: "г. Дербент, цитадель Нарын-Кала",
            image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&h=400&fit=crop",
            color: "#9ab87a",
            symbol: "◈",
            description: "Древнейшая крепость России и центр традиционных ремёсел."
        },
        {
            id: 7,
            name: "Дагестанский музей изобразительных искусств",
            lat: 42.9849,
            lng: 47.5049,
            category: "Музей / Галерея",
            address: "г. Махачкала, ул. М. Гамзатова, 21",
            image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=600&h=400&fit=crop",
            color: "#d4a08a",
            symbol: "◈",
            description: "Крупнейшее собрание произведений дагестанских художников."
        },
        {
            id: 8,
            name: "Галерея «Ковчег»",
            lat: 42.9792,
            lng: 47.4987,
            category: "Современное искусство",
            address: "г. Махачкала, пр. Гамидова, 12",
            image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&h=400&fit=crop",
            color: "#c0806a",
            symbol: "◈",
            description: "Современная галерея, представляющая работы молодых дагестанских художников."
        },
        {
            id: 9,
            name: "Арт-пространство «Артдвор»",
            lat: 42.9765,
            lng: 47.5023,
            category: "Креативный кластер",
            address: "г. Махачкала, ул. Ярагского, 45",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
            color: "#5bb8b0",
            symbol: "◈",
            description: "Креативное пространство для мастерских, выставок и культурных событий."
        },
        {
            id: 10,
            name: "Государственный ансамбль танца «Лезгинка»",
            lat: 42.9812,
            lng: 47.5040,
            category: "Музыка / Танец",
            address: "г. Махачкала, пр. Ленина, 1",
            image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&h=400&fit=crop",
            color: "#b8a8d4",
            symbol: "♪",
            description: "Легендарный ансамбль, прославляющий дагестанские танцы на мировой сцене."
        },
        {
            id: 11,
            name: "Дагестанская государственная филармония",
            lat: 42.9830,
            lng: 47.5075,
            category: "Концертный зал",
            address: "г. Махачкала, ул. Дахадаева, 3",
            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&h=400&fit=crop",
            color: "#9a8ab8",
            symbol: "♪",
            description: "Главная концертная площадка республики."
        },
        {
            id: 12,
            name: "Фестиваль «Дербентская крепость»",
            lat: 42.0590,
            lng: 48.2885,
            category: "Фестиваль",
            address: "г. Дербент, цитадель Нарын-Кала",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
            color: "#d4a08a",
            symbol: "✦",
            description: "Ежегодный фестиваль культуры и искусств на территории древней крепости."
        },
        {
            id: 13,
            name: "Дизайн-студии Махачкалы",
            lat: 42.9835,
            lng: 47.4960,
            category: "Дизайн / Медиа",
            address: "г. Махачкала, пр. Расула Гамзатова",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
            color: "#5bb8b0",
            symbol: "◇",
            description: "Кластер современных дизайн-студий и медиа-агентств."
        },
        {
            id: 14,
            name: "Каспийск — арт-проекты",
            lat: 42.8817,
            lng: 47.6392,
            category: "Современное искусство",
            address: "г. Каспийск, набережная",
            image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600&h=400&fit=crop",
            color: "#7dc6b0",
            symbol: "◈",
            description: "Уличные арт-инсталляции и современные арт-проекты на набережной."
        },
        {
            id: 15,
            name: "Хасавюрт — культурный центр",
            lat: 43.2500,
            lng: 46.5833,
            category: "Городской досуг",
            address: "г. Хасавюрт, ул. Грозненская",
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
            color: "#8ab8a0",
            symbol: "◇",
            description: "Культурный центр с театром, выставочными залами и творческими мастерскими."
        },
        {
            id: 16,
            name: "Буйнакск — творческие объединения",
            lat: 42.8167,
            lng: 47.1167,
            category: "Культура",
            address: "г. Буйнакск, центр",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
            color: "#6a9a80",
            symbol: "◇",
            description: "Объединения мастеров народных промыслов и современных художников."
        },
        {
            id: 17,
            name: "Кизляр — народные промыслы",
            lat: 43.8467,
            lng: 46.7125,
            category: "Культурное наследие",
            address: "г. Кизляр, центр",
            image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
            color: "#5aaa90",
            symbol: "◈",
            description: "Исторический центр традиционных ремёсел и культурного наследия."
        },
        {
            id: 18,
            name: "Дагестанское книжное издательство",
            lat: 42.9801,
            lng: 47.5002,
            category: "Издательство / Литература",
            address: "г. Махачкала, ул. Гамзатова",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
            color: "#4a9e7a",
            symbol: "◇",
            description: "Главное издательство республики, издающее книги на языках народов Дагестана."
        }
    ];

    // ═══════════════════════════════════════════════════════════════
    // SVG MARKER GENERATOR
    // ═══════════════════════════════════════════════════════════════

    const MarkerFactory = {
        /**
         * Creates a teardrop-shaped SVG marker icon
         * @param {string} color - Fill color (hex)
         * @param {string} symbol - Inner symbol character
         * @param {boolean} isHover - Whether to create hover (larger) version
         * @returns {string} Base64-encoded SVG data URL
         */
        create(color, symbol, isHover = false) {
            const w = isHover ? CONFIG.marker.hoverWidth : CONFIG.marker.width;
            const h = isHover ? CONFIG.marker.hoverHeight : CONFIG.marker.height;
            const shadowBlur = isHover ? 5 : 3;
            const shadowOpacity = isHover ? 0.3 : 0.2;
            const strokeWidth = isHover ? 2.5 : 2;
            const symbolSize = isHover ? 16 : 14;

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
                <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="3" stdDeviation="${shadowBlur}" flood-color="rgba(0,0,0,${shadowOpacity})"/>
                    </filter>
                </defs>
                <path d="M${w/2} 2 C${w/2} 2, ${w-2} ${h*0.48}, ${w-2} ${h*0.64} C${w-2} ${h*0.816}, ${w*0.775} ${h-4}, ${w/2} ${h-4} C${w*0.225} ${h-4}, 2 ${h*0.816}, 2 ${h*0.64} C2 ${h*0.48}, ${w/2} 2, ${w/2} 2 Z" 
                      fill="${color}" 
                      stroke="white" 
                      stroke-width="${strokeWidth}"
                      filter="url(#shadow)"/>
                <ellipse cx="${w/2}" cy="${h*0.64}" rx="${w*0.33}" ry="${h*0.2}" fill="rgba(255,255,255,0.15)"/>
                <circle cx="${w*0.33}" cy="${h*0.52}" r="${isHover ? 3 : 2.5}" fill="white" opacity="0.35"/>
                <circle cx="${w*0.25}" cy="${h*0.44}" r="${isHover ? 1.5 : 1.2}" fill="white" opacity="0.2"/>
                <text x="${w/2}" y="${h*0.68}" text-anchor="middle" fill="white" font-size="${symbolSize}" font-weight="600" font-family="serif">${symbol}</text>
            </svg>`;

            return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
        },

        /**
         * Creates both normal and hover icons for an object
         * @param {Object} obj - Object data
         * @returns {Object} { normal: L.Icon, hover: L.Icon }
         */
        createPair(obj) {
            const normalUrl = this.create(obj.color, obj.symbol, false);
            const hoverUrl = this.create(obj.color, obj.symbol, true);

            return {
                normal: L.icon({
                    iconUrl: normalUrl,
                    iconSize: [CONFIG.marker.width, CONFIG.marker.height],
                    iconAnchor: [CONFIG.marker.anchorX, CONFIG.marker.anchorY],
                    popupAnchor: [0, -CONFIG.marker.anchorY]
                }),
                hover: L.icon({
                    iconUrl: hoverUrl,
                    iconSize: [CONFIG.marker.hoverWidth, CONFIG.marker.hoverHeight],
                    iconAnchor: [CONFIG.marker.hoverAnchorX, CONFIG.marker.hoverAnchorY],
                    popupAnchor: [0, -CONFIG.marker.hoverAnchorY]
                })
            };
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // POPUP BUILDER
    // ═══════════════════════════════════════════════════════════════

    const PopupBuilder = {
        /**
         * Generates popup HTML content
         * @param {Object} obj - Object data
         * @returns {string} HTML string
         */
        build(obj) {
            return `
                <img class="popup-img" 
                     src="${obj.image}" 
                     alt="${obj.name}" 
                     loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.marginTop='0';">
                <div class="popup-text">
                    <h3>${obj.name}</h3>
                    <div class="popup-address">
                        <span class="pin-icon">&#128205;</span>
                        <span>${obj.address}</span>
                    </div>
                    <span class="popup-badge" style="background: ${obj.color}18; color: ${obj.color};">
                        ${obj.category}
                    </span>
                    ${obj.description ? `<p class="popup-desc">${obj.description}</p>` : ''}
                </div>
            `;
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // SIDEBAR MANAGER
    // ═══════════════════════════════════════════════════════════════

    const SidebarManager = {
        elements: {},
        activeCardId: null,

        /**
         * Initialize sidebar elements
         */
        init() {
            this.elements.list = document.getElementById('objectsList');
            this.elements.filter = document.getElementById('categoryFilter');
            this.elements.headerCount = document.querySelector('.count-badge');
        },

        /**
         * Render object cards with optional filter
         * @param {string} filter - Category filter or 'all'
         */
        render(filter = 'all') {
            const filtered = filter === 'all' 
                ? OBJECTS_DATA 
                : OBJECTS_DATA.filter(o => o.category === filter);

            this.elements.list.innerHTML = '';

            filtered.forEach((obj, index) => {
                const card = this.createCard(obj, index);
                this.elements.list.appendChild(card);
            });

            // Update count
            if (this.elements.headerCount) {
                this.elements.headerCount.textContent = `✦ ${filtered.length} объектов`;
            }
        },

        /**
         * Create a single card element
         * @param {Object} obj - Object data
         * @param {number} index - Card index for animation delay
         * @returns {HTMLElement} Card element
         */
        createCard(obj, index) {
            const card = document.createElement('div');
            card.className = 'object-card';
            card.dataset.id = obj.id;
            card.style.animationDelay = `${index * CONFIG.animation.cardStagger}s`;

            card.innerHTML = `
                <div class="object-icon" style="background: ${obj.color}18; color: ${obj.color};">
                    ${obj.symbol}
                </div>
                <div class="object-info">
                    <div class="object-title">${obj.name}</div>
                    <span class="object-category">${obj.category}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                App.flyToObject(obj.id);
            });

            return card;
        },

        /**
         * Highlight a card and scroll it into view
         * @param {number} id - Object ID
         */
        highlight(id) {
            // Remove active from all
            document.querySelectorAll('.object-card').forEach(c => c.classList.remove('active'));

            // Add active to target
            const card = document.querySelector(`.object-card[data-id="${id}"]`);
            if (card) {
                card.classList.add('active');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                this.activeCardId = id;
            }
        },

        /**
         * Initialize category filter chips
         */
        initFilters() {
            const categories = [...new Set(OBJECTS_DATA.map(o => o.category))];

            categories.forEach(cat => {
                const chip = document.createElement('div');
                chip.className = 'filter-chip';
                chip.dataset.category = cat;
                chip.textContent = cat;
                chip.addEventListener('click', () => this.handleFilterClick(chip, cat));
                this.elements.filter.appendChild(chip);
            });

            // "All" handler
            this.elements.filter.querySelector('[data-category="all"]')
                .addEventListener('click', () => this.handleFilterClick(
                    this.elements.filter.querySelector('[data-category="all"]'), 
                    'all'
                ));
        },

        /**
         * Handle filter chip click
         * @param {HTMLElement} chip - Clicked chip
         * @param {string} category - Category value
         */
        handleFilterClick(chip, category) {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            this.render(category);
            App.filterMarkers(category);
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // MAP MANAGER
    // ═══════════════════════════════════════════════════════════════

    const MapManager = {
        map: null,
        markers: new Map(),

        /**
         * Initialize Leaflet map
         */
        init() {
            const { bounds, zoom } = CONFIG;

            this.map = L.map('map', {
                center: bounds.center,
                zoom: zoom.initial,
                minZoom: zoom.min,
                maxZoom: zoom.max,
                maxBounds: [bounds.southWest, bounds.northEast],
                maxBoundsViscosity: 1.0,
                zoomControl: false,
                attributionControl: false
            });

            // Add controls
            L.control.zoom({ position: 'topright' }).addTo(this.map);
            L.control.scale({ 
                position: 'bottomright', 
                metric: true, 
                imperial: false 
            }).addTo(this.map);

            // Add tile layer
            L.tileLayer(CONFIG.tiles.url, {
                attribution: CONFIG.tiles.attribution,
                subdomains: CONFIG.tiles.subdomains,
                maxZoom: 18,
                minZoom: zoom.min
            }).addTo(this.map);

            // Enforce boundaries
            this.enforceBoundaries();
        },

        /**
         * Add hard boundary enforcement
         */
        enforceBoundaries() {
            const { bounds } = CONFIG;

            this.map.on('drag', () => {
                this.map.panInsideBounds([bounds.southWest, bounds.northEast], { animate: true });
            });

            this.map.on('zoomend', () => {
                if (this.map.getZoom() < CONFIG.zoom.min) {
                    this.map.setZoom(CONFIG.zoom.min);
                }
            });
        },

        /**
         * Create and add all markers
         */
        createMarkers() {
            OBJECTS_DATA.forEach(obj => {
                const icons = MarkerFactory.createPair(obj);

                const marker = L.marker([obj.lat, obj.lng], { icon: icons.normal });

                // Bind popup
                const popup = L.popup({
                    className: 'custom-popup',
                    closeButton: true,
                    autoPan: true,
                    autoPanPadding: [20, 20]
                }).setContent(PopupBuilder.build(obj));

                marker.bindPopup(popup);

                // Hover effects
                marker.on('mouseover', () => marker.setIcon(icons.hover));
                marker.on('mouseout', () => marker.setIcon(icons.normal));

                // Click handler
                marker.on('click', () => {
                    SidebarManager.highlight(obj.id);
                });

                marker.addTo(this.map);
                this.markers.set(obj.id, { marker, data: obj, icons });
            });
        },

        /**
         * Fly to object location and open popup
         * @param {number} id - Object ID
         */
        flyTo(id) {
            const entry = this.markers.get(id);
            if (!entry) return;

            const { marker, data } = entry;

            this.map.flyTo([data.lat, data.lng], CONFIG.zoom.focus, {
                duration: CONFIG.animation.flyToDuration,
                easeLinearity: 0.4
            });

            setTimeout(() => {
                marker.openPopup();
            }, CONFIG.animation.flyToDelay * 1000);
        },

        /**
         * Filter visible markers
         * @param {string} category - Category filter or 'all'
         */
        filter(category) {
            this.markers.forEach(({ marker, data }) => {
                const visible = category === 'all' || data.category === category;
                if (visible) {
                    marker.addTo(this.map);
                } else {
                    marker.remove();
                }
            });
        },

        /**
         * Get map instance
         * @returns {L.Map}
         */
        getMap() {
            return this.map;
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // MOBILE MANAGER
    // ═══════════════════════════════════════════════════════════════

    const MobileManager = {
        isOpen: true,

        /**
         * Initialize mobile toggle button
         */
        init() {
            const toggle = document.getElementById('mobileToggle');
            const sidebar = document.getElementById('sidebar');

            if (!toggle || !sidebar) return;

            toggle.addEventListener('click', () => {
                this.isOpen = !this.isOpen;
                sidebar.style.transform = this.isOpen ? 'translateY(0)' : 'translateY(100%)';
                toggle.textContent = this.isOpen ? '📋' : '🗺️';
            });
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // LOADING SCREEN
    // ═══════════════════════════════════════════════════════════════

    const LoadingScreen = {
        /**
         * Hide loading screen with fade animation
         */
        hide() {
            const screen = document.getElementById('loadingScreen');
            if (screen) {
                setTimeout(() => {
                    screen.classList.add('hidden');
                }, 800);
            }
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // MAIN APPLICATION
    // ═══════════════════════════════════════════════════════════════

    const App = {
        /**
         * Initialize the entire application
         */
        init() {
            SidebarManager.init();
            MapManager.init();
            MapManager.createMarkers();
            SidebarManager.render();
            SidebarManager.initFilters();
            MobileManager.init();
            LoadingScreen.hide();

            console.log('🌿 Креативный Дагестан — карта загружена');
        },

        /**
         * Fly to object (public API)
         * @param {number} id - Object ID
         */
        flyToObject(id) {
            SidebarManager.highlight(id);
            MapManager.flyTo(id);
        },

        /**
         * Filter markers (public API)
         * @param {string} category - Category filter
         */
        filterMarkers(category) {
            MapManager.filter(category);
        },

        /**
         * Get all objects data (public API)
         * @returns {Array}
         */
        getObjects() {
            return OBJECTS_DATA;
        },

        /**
         * Get map instance (public API)
         * @returns {L.Map}
         */
        getMap() {
            return MapManager.getMap();
        }
    };

    // ═══════════════════════════════════════════════════════════════
    // EXPORT
    // ═══════════════════════════════════════════════════════════════

    // Auto-init on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => App.init());
    } else {
        App.init();
    }

    // Expose to global scope
    global.CreativeDagestan = App;

})(window);
