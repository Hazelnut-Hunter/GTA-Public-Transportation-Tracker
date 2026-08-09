// Multi-Language Dictionary
const translations = {
    en: {
        navTitle: "TTC Live Vehicle Tracker",
        welcome: "Toronto Transit Commission Tracker",
        timeLabel: "Current Time:",
        loading: "Loading...",
        errorTitle: "TTC Feed Warning",
        errorMessage: "We are currently experiencing delays receiving live vehicle updates from the TTC feed. Map positions may temporarily be delayed.",
        serverWaking: "Connecting to TTC Server...\n(Free server cold start may take ~20s on initial load)",
        routeLabel: "Route",
        busLabel: "Vehicle ID",
        locationPopup: "You are here",
        locationNotSupportedAlert: "Geolocation is not supported by your browser.",
        locationAlert: "Unable to retrieve your position. Please check your location permissions.",
        searchPlaceholder: "Search Route (e.g. 1, 501, 96)...",
        dirLabel: "Direction",
        inbound: "Inbound",
        outbound: "Outbound",
        speedLabel: "Speed",
        occupancyLabel: "Occupancy",
        vehicleType: "Vehicle Type",
        bus: "Bus",
        streetcar: "Streetcar",
        subway: "Subway",
        modeAll: "🌐 All",
        modeBus: "🚌 Bus",
        modeStreetcar: "🚋 Streetcar",
        modeSubway: "🚇 Subway",
        liveCountTag: "Live",
        anticipatedTag: "Anticipated Location (Schedule Interpolated)",
        themeTooltip: "Switch Map Theme (Dark / Street / Satellite)",
        locateTooltip: "Find My Location"
    },
    fr: {
        navTitle: "Info-Véhicules TTC",
        welcome: "Suivi en direct de la TTC (Toronto)",
        timeLabel: "Heure actuelle:",
        loading: "Chargement...",
        errorTitle: "Avertissement Flux TTC",
        errorMessage: "Des retards sont actuellement observés dans la réception des données TTC en temps réel. Les positions affichées peuvent être retardées.",
        serverWaking: "Connexion au serveur TTC...\n(Le premier chargement peut prendre ~20s pour démarrer le serveur gratuit)",
        routeLabel: "Ligne",
        busLabel: "ID Véhicule",
        locationPopup: "Vous êtes ici",
        locationNotSupportedAlert: "La géolocalisation n'est pas supportée par votre navigateur.",
        locationAlert: "Impossible de récupérer votre position. Vérifiez les autorisations.",
        searchPlaceholder: "Chercher un itinéraire (ex. 1, 501, 96)...",
        dirLabel: "Direction",
        inbound: "Aller",
        outbound: "Retour",
        speedLabel: "Vitesse",
        occupancyLabel: "Occupation",
        vehicleType: "Type de véhicule",
        bus: "Autobus",
        streetcar: "Tramway",
        subway: "Métro",
        modeAll: "🌐 Tous",
        modeBus: "🚌 Autobus",
        modeStreetcar: "🚋 Tramway",
        modeSubway: "🚇 Métro",
        liveCountTag: "En direct",
        anticipatedTag: "Emplacement estimé (selon l'horaire)",
        themeTooltip: "Changer le thème de la carte (Sombre / Rue / Satellite)",
        locateTooltip: "Ma position"
    },
    zh: {
        navTitle: "多伦多TTC实时公交追踪器",
        welcome: "感谢使用多伦多TTC车辆实时追踪器!",
        timeLabel: "当前时间：",
        loading: "加载中...",
        errorTitle: "TTC数据源提示",
        errorMessage: "当前接收TTC实时位置数据存在延迟，地图上的车辆位置可能会有短暂滞后。",
        serverWaking: "正在连接TTC服务器...\n(提示: 免费云服务器首次启动需约20秒唤醒，请稍候)",
        routeLabel: "线路",
        busLabel: "车辆 ID",
        locationPopup: "您在这里",
        locationNotSupportedAlert: "您的浏览器不支持地理位置功能。",
        locationAlert: "无法获取您的位置，请检查浏览器定位权限。",
        searchPlaceholder: "搜索线路 (如 1, 501, 96)...",
        dirLabel: "方向",
        inbound: "上行",
        outbound: "下行",
        speedLabel: "车速",
        occupancyLabel: "载客情况",
        vehicleType: "车辆类型",
        bus: "公交车",
        streetcar: "有轨电车",
        subway: "地铁",
        modeAll: "🌐 全部",
        modeBus: "🚌 公交车",
        modeStreetcar: "🚋 有轨电车",
        modeSubway: "🚇 地铁",
        liveCountTag: "辆在途",
        anticipatedTag: "预计实时位置 (时刻表推算)",
        themeTooltip: "切换地图主题 (暗黑 / 标准 / 卫星)",
        locateTooltip: "定位我的位置"
    }
};

const timeFormat = {
    en: { locale: 'en-US' },
    fr: { locale: 'fr-CA' },
    zh: { locale: 'zh-CN' }
};

let currentLang = 'en';

// Backend Server API URL (Render Production + Localhost Fallback)
const BACKEND_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') 
    ? 'http://localhost:3000' 
    : 'https://gta-public-transportation-tracker-backend.onrender.com';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update language buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang || (lang === 'zh' && btn.textContent === '中文'));
    });

    document.getElementById('txt-nav-title').textContent = translations[lang].navTitle;
    document.getElementById('txt-welcome').textContent = translations[lang].welcome;
    document.getElementById('txt-time').textContent = translations[lang].timeLabel;
    document.getElementById('txt-loading-msg').textContent = translations[lang].serverWaking;
    document.getElementById('route-search').placeholder = translations[lang].searchPlaceholder;

    // Update Mode Filter buttons text
    const btnAll = document.getElementById('btn-mode-all');
    const btnBus = document.getElementById('btn-mode-bus');
    const btnStreetcar = document.getElementById('btn-mode-streetcar');
    const btnSubway = document.getElementById('btn-mode-subway');
    if (btnAll) btnAll.textContent = translations[lang].modeAll;
    if (btnBus) btnBus.textContent = translations[lang].modeBus;
    if (btnStreetcar) btnStreetcar.textContent = translations[lang].modeStreetcar;
    if (btnSubway) btnSubway.textContent = translations[lang].modeSubway;

    // Update Tooltips
    const themeBtn = document.getElementById('theme-btn');
    const locateBtn = document.getElementById('locate-btn');
    if (themeBtn) themeBtn.title = translations[lang].themeTooltip;
    if (locateBtn) locateBtn.title = translations[lang].locateTooltip;

    if (userMarker) {
        userMarker.setPopupContent(translations[lang].locationPopup);
    }

    // Refresh existing bus popups with new language labels
    Object.values(busMarkers).forEach(marker => {
        if (marker.busData) {
            marker.getPopup().setContent(createPopupContent(marker.busData));
        }
    });

    if (currentBusData.length > 0) {
        availableRoutes.clear();
        updateRouteDropdown(currentBusData);
    }

    updateTime();
}

function updateTime() {
    const timeElement = document.getElementById("current-time");
    const now = new Date();
    const locale = timeFormat[currentLang].locale;
    timeElement.textContent = now.toLocaleTimeString(locale);
    timeElement.setAttribute("datetime", now.toISOString());
}

updateTime();
setInterval(updateTime, 1000);

// Initialize Map Centered on Toronto (Custom right-side button stack handles zooming)
const map = L.map('map', {
    zoomControl: false
}).setView([43.6532, -79.3832], 13);

// --- MAP THEMES (Street Light, Dark, Satellite) ---
const MAP_THEMES = {
    street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors | TTC Data'
    }),
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO | TTC Data',
        subdomains: 'abcd',
        maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS | TTC Data'
    })
};

let currentTheme = 'street'; // Default to Light Color map
MAP_THEMES[currentTheme].addTo(map);

function toggleMapTheme() {
    map.removeLayer(MAP_THEMES[currentTheme]);
    if (currentTheme === 'street') currentTheme = 'dark';
    else if (currentTheme === 'dark') currentTheme = 'satellite';
    else currentTheme = 'street';
    
    MAP_THEMES[currentTheme].addTo(map);
}

// High-Performance Marker Cluster Group with Async Chunked Loading & Viewport Culling
const markerClusterGroup = L.markerClusterGroup({
    chunkedLoading: true,
    chunkInterval: 100,
    chunkDelay: 10,
    maxClusterRadius: 45,
    disableClusteringAtZoom: 15,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    removeOutsideVisibleBounds: true,
    animateAddingMarkers: false
});
map.addLayer(markerClusterGroup);

let isSpiderfied = false;
let pendingClusterUpdates = false;

markerClusterGroup.on('spiderfied', () => {
    isSpiderfied = true;
});

markerClusterGroup.on('unspiderfied', () => {
    isSpiderfied = false;
    if (pendingClusterUpdates) {
        pendingClusterUpdates = false;
        setTimeout(updateBuses, 100);
    }
});

let busMarkers = {};
let selectedRoutes = new Set();
let selectedMode = 'all'; // 'all', 'bus', 'streetcar', 'subway'
let availableRoutes = new Set();
let currentBusData = [];
let routeNames = {}; // Stores routeId -> { name, shortName, type, color, textColor }

function setModeFilter(mode) {
    selectedMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `btn-mode-${mode}`);
    });
    applyRouteFilterChange();
}

// --- FAVORITES SYSTEM ---
const FAV_STORAGE_KEY = "gta_ttc_favs";

function getFavorites() {
    return new Set(JSON.parse(localStorage.getItem(FAV_STORAGE_KEY)) || []);
}

function toggleFavorite(routeId, event) {
    if (event) event.stopPropagation();
    const favs = getFavorites();
    if (favs.has(routeId)) {
        favs.delete(routeId);
    } else {
        favs.add(routeId);
    }
    localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(Array.from(favs)));
    availableRoutes.clear();
    updateRouteDropdown(currentBusData);
}

const STREETCAR_ROUTES = new Set(['501', '503', '504', '505', '506', '507', '509', '510', '511', '512', '301', '304', '306', '310']);
const SUBWAY_ROUTES = new Set(['1', '2', '4', '5', '6']);

function getVehicleType(routeId, routeMetaType) {
    const rId = String(routeId);
    if (SUBWAY_ROUTES.has(rId) || String(routeMetaType) === '1') return 'subway';
    if (STREETCAR_ROUTES.has(rId) || String(routeMetaType) === '0') return 'streetcar';
    return 'bus';
}

function showErrorDetail() {
    const title = translations[currentLang].errorTitle;
    const msg = translations[currentLang].errorMessage;
    alert(`${title}\n\n${msg}`);
}

let isFirstLoad = true;

// --- BUS DATA UPDATER ---
async function updateBuses() {
    try {
        const response = await fetch(`${BACKEND_URL}/buses`);
        
        const serverStaleCount = response.headers.get('X-Stale-Count');
        const warningBtn = document.getElementById("warning-btn");
        
        if (serverStaleCount && parseInt(serverStaleCount) >= 5) {
             warningBtn.style.display = "flex";
        } else {
             warningBtn.style.display = "none";
        }

        const buses = await response.json();
        currentBusData = buses;

        if (isFirstLoad) {
            const loadingOverlay = document.getElementById('loading-overlay');
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            isFirstLoad = false;
        }

        updateRouteDropdown(buses);

        // If a spiderfied cluster is expanded by user, defer structural cluster re-draws so view isn't interrupted
        if (isSpiderfied) {
            pendingClusterUpdates = true;
            buses.forEach(bus => {
                if (busMarkers[bus.id]) {
                    busMarkers[bus.id].busData = bus;
                    if (busMarkers[bus.id].getPopup()) {
                        busMarkers[bus.id].getPopup().setContent(createPopupContent(bus));
                    }
                }
            });
            return;
        }

        const activeBusIds = new Set();
        const markersToAdd = [];
        const markersToRemove = [];

        buses.forEach(bus => {
            try {
                // Filter by route search selection
                if (selectedRoutes.size > 0 && !selectedRoutes.has(bus.routeId)) {
                    return;
                }

                const routeMeta = routeNames[bus.routeId] || {};
                const vehicleType = getVehicleType(bus.routeId, routeMeta.type);
                
                // Filter by transit mode
                if (selectedMode === 'bus' && vehicleType !== 'bus') return;
                if (selectedMode === 'streetcar' && vehicleType !== 'streetcar') return;
                if (selectedMode === 'subway' && vehicleType !== 'subway') return;

                activeBusIds.add(bus.id);

                const badgeColor = routeMeta.color || (vehicleType === 'streetcar' ? '#DA291C' : (vehicleType === 'subway' ? '#FFC72C' : '#DA291C'));
                const badgeTextColor = routeMeta.textColor || '#FFFFFF';

                const customIcon = L.divIcon({
                    className: 'custom-bus-icon-wrapper',
                    html: `
                        <div class="bus-marker-container">
                            <div class="arrow-orbit" style="transform: rotate(${bus.bearing}deg);">
                                <div class="bus-arrow" style="border-bottom-color: ${badgeColor};"></div>
                            </div>
                            <div class="bus-box" style="background-color: ${badgeColor}; color: ${badgeTextColor};">
                                ${bus.routeId}
                            </div>
                        </div>
                    `,
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                });

                const popupContent = createPopupContent(bus);

                if (busMarkers[bus.id]) {
                    const marker = busMarkers[bus.id];
                    marker.setLatLng([bus.latitude, bus.longitude]);
                    // Recycle DOM element: only re-create icon if bearing or color changed
                    if (marker.lastBearing !== bus.bearing || marker.lastColor !== badgeColor) {
                        marker.setIcon(customIcon);
                        marker.lastBearing = bus.bearing;
                        marker.lastColor = badgeColor;
                    }
                    if (marker.isPopupOpen()) {
                        marker.getPopup().setContent(popupContent);
                    }
                    marker.busData = bus;
                } else {
                    const marker = L.marker([bus.latitude, bus.longitude], { icon: customIcon });
                    marker.lastBearing = bus.bearing;
                    marker.lastColor = badgeColor;
                    marker.bindPopup(popupContent);
                    marker.busData = bus;
                    
                    // Auto-pan to vehicle's current position when clicked
                    marker.on('click', () => {
                        map.panTo(marker.getLatLng());
                    });

                    busMarkers[bus.id] = marker;
                    markersToAdd.push(marker);
                }
            } catch (err) {
                console.warn(`Error processing bus ${bus.id}:`, err);
            }
        });

        // Update live count badge
        const countBadge = document.getElementById('live-count-badge');
        if (countBadge) {
            countBadge.textContent = `${activeBusIds.size.toLocaleString()} ${translations[currentLang].liveCountTag}`;
        }

        // Batch add new markers
        if (markersToAdd.length > 0) {
            markerClusterGroup.addLayers(markersToAdd);
        }

        // Identify and remove inactive markers
        Object.keys(busMarkers).forEach(id => {
            if (!activeBusIds.has(id)) {
                markersToRemove.push(busMarkers[id]);
                delete busMarkers[id];
            }
        });

        if (markersToRemove.length > 0) {
            markerClusterGroup.removeLayers(markersToRemove);
        }

    } catch (error) {
        console.error("Error loading TTC bus data:", error);
        document.getElementById("warning-btn").style.display = "flex";
    }
}

const occupancyTranslations = {
    en: {
        "EMPTY": "Empty",
        "MANY SEATS AVAILABLE": "Many Seats Available",
        "FEW SEATS AVAILABLE": "Few Seats Available",
        "STANDING ROOM ONLY": "Standing Room Only",
        "CRUSHED STANDING ROOM ONLY": "Crowded Standing",
        "FULL": "Full",
        "NOT ACCEPTING PASSENGERS": "Not Accepting Passengers"
    },
    fr: {
        "EMPTY": "Vide",
        "MANY SEATS AVAILABLE": "Plusieurs places assises",
        "FEW SEATS AVAILABLE": "Peu de places assises",
        "STANDING ROOM ONLY": "Places debout seulement",
        "CRUSHED STANDING ROOM ONLY": "Debout très rempli",
        "FULL": "Complet",
        "NOT ACCEPTING PASSENGERS": "Ne prend pas de passagers"
    },
    zh: {
        "EMPTY": "空车",
        "MANY SEATS AVAILABLE": "较多空座",
        "FEW SEATS AVAILABLE": "少量空座",
        "STANDING ROOM ONLY": "仅剩站位",
        "CRUSHED STANDING ROOM ONLY": "拥挤站位",
        "FULL": "爆满",
        "NOT ACCEPTING PASSENGERS": "暂不载客"
    }
};

function formatOccupancyText(status) {
    if (!status || status === 'N/A') return 'N/A';
    const key = String(status).toUpperCase().replace(/_/g, ' ').trim();
    const langDict = occupancyTranslations[currentLang] || occupancyTranslations['en'];
    return langDict[key] || String(status).replace(/_/g, ' ');
}

function createPopupContent(bus) {
    try {
        const routeLabel = translations[currentLang].routeLabel;
        const busLabel = translations[currentLang].busLabel;
        const dirLabel = translations[currentLang].dirLabel;
        const speedLabel = translations[currentLang].speedLabel;
        const occupancyLabel = translations[currentLang].occupancyLabel;

        const routeMeta = routeNames[bus.routeId] || {};
        const routeNameStr = routeMeta.longName ? ` (${routeMeta.longName})` : '';
        const vehicleType = getVehicleType(bus.routeId, routeMeta.type);
        const typeTag = vehicleType === 'streetcar' ? '🚋' : (vehicleType === 'subway' ? '🚇' : '🚌');
        
        let dirText = 'N/A';
        if (bus.directionId === 0) dirText = translations[currentLang].outbound;
        else if (bus.directionId === 1) dirText = translations[currentLang].inbound;

        // Convert speed m/s to km/h safely
        const speedKmH = bus.speed ? Math.round(bus.speed * 3.6) : 0;
        const occupancyText = formatOccupancyText(bus.occupancyStatus);
        const anticipatedNote = bus.isAnticipated 
            ? `<div style="margin-top: 5px; font-size: 0.72rem; color: #FFC72C; font-weight: 600;">⚠️ ${translations[currentLang].anticipatedTag}</div>` 
            : '';

        return `
            <div class="popup-card">
                <div class="popup-title">
                    <span>${routeLabel} ${bus.routeId}</span>
                    <span class="popup-tag">${typeTag}</span>
                </div>
                <div>${routeNameStr}</div>
                <div><b>${busLabel}:</b> ${bus.id}</div>
                <div><b>${dirLabel}:</b> ${dirText}</div>
                <div><b>${speedLabel}:</b> ${speedKmH} km/h</div>
                <div><b>${occupancyLabel}:</b> ${occupancyText}</div>
                ${anticipatedNote}
            </div>
        `;
    } catch (e) {
        return `<b>Vehicle ${bus.id}</b> (Route ${bus.routeId})`;
    }
}

// Fetch bus data every 5 seconds
updateBuses();
setInterval(updateBuses, 5000);

// --- FETCH STATIC ROUTE NAMES ---
async function fetchRouteNames() {
    try {
        const response = await fetch(`${BACKEND_URL}/routes`);
        routeNames = await response.json();
        console.log(`Loaded ${Object.keys(routeNames).length} static TTC route details.`);
        if (currentBusData.length > 0) {
            updateRouteDropdown(currentBusData);
        }
    } catch (error) {
        console.error("Failed to load static route names:", error);
    }
}
fetchRouteNames();

// --- GEOLOCATION ---
let userMarker = null;

function locateUser() {
    if (!navigator.geolocation) {
        alert(translations[currentLang].locationNotSupportedAlert);
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            map.setView([lat, lng], 15);

            if (userMarker) {
                userMarker.setLatLng([lat, lng]);
                userMarker.openPopup();
            } else {
                userMarker = L.circleMarker([lat, lng], {
                    radius: 9,
                    fillColor: "#DA291C",
                    color: "#FFFFFF",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.9
                }).addTo(map);

                userMarker.bindPopup(translations[currentLang].locationPopup).openPopup();
            }
        },
        () => {
            alert(translations[currentLang].locationAlert);
        }
    );
}

// --- SEARCH & ROUTE DROPDOWN FILTER ---
const searchInput = document.getElementById('route-search');
const routeList = document.getElementById('route-list');
const clearBtn = document.getElementById('clear-search');

searchInput.addEventListener('focus', () => {
    routeList.classList.remove('route-list-hidden');
});

document.addEventListener('click', (e) => {
    const container = document.getElementById('search-container');
    if (!container.contains(e.target)) {
        routeList.classList.add('route-list-hidden');
    }
});

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    clearBtn.style.display = term ? 'block' : 'none';
    const items = document.querySelectorAll('.route-item');
    
    items.forEach(item => {
        if (item.innerText.toLowerCase().includes(term)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

function clearSelection() {
    selectedRoutes.clear();
    searchInput.value = '';
    clearBtn.style.display = 'none';
    const items = document.querySelectorAll('.route-item');
    items.forEach(item => item.style.display = 'flex');
    const checkboxes = document.querySelectorAll('.route-checkbox');
    checkboxes.forEach(cb => cb.checked = false);
    applyRouteFilterChange();
}

function applyRouteFilterChange() {
    markerClusterGroup.clearLayers();
    busMarkers = {};
    updateBuses();
}

function updateRouteDropdown(buses) {
    const activeRouteIds = new Set(buses.map(b => b.routeId));
    
    // Determine if rebuild is needed
    let isDifferent = false;
    if (activeRouteIds.size !== availableRoutes.size) {
        isDifferent = true;
    } else {
        for (let r of activeRouteIds) {
            if (!availableRoutes.has(r)) { isDifferent = true; break; }
        }
    }

    if (!isDifferent) return;
    availableRoutes = activeRouteIds;

    const favs = getFavorites();
    const sortedRoutes = Array.from(activeRouteIds).sort((a, b) => {
        const aFav = favs.has(a);
        const bFav = favs.has(b);
        if (aFav && !bFav) return -1;
        if (!aFav && bFav) return 1;
        return a.localeCompare(b, undefined, { numeric: true });
    });

    routeList.innerHTML = '';

    sortedRoutes.forEach(routeId => {
        const item = document.createElement('div');
        item.className = 'route-item';
        
        const routeMeta = routeNames[routeId] || {};
        const routeLongName = routeMeta.longName || '';
        const badgeColor = routeMeta.color || '#DA291C';
        const badgeTextColor = routeMeta.textColor || '#FFFFFF';
        const isFav = favs.has(routeId);

        item.innerHTML = `
            <div class="route-left">
                <input type="checkbox" class="route-checkbox" id="cb-${routeId}" ${selectedRoutes.has(routeId) ? 'checked' : ''}>
                <span class="route-badge" style="background-color: ${badgeColor}; color: ${badgeTextColor};">${routeId}</span>
                <span class="route-name">${routeLongName}</span>
            </div>
            <span class="fav-star ${isFav ? 'active' : ''}">★</span>
        `;

        const checkbox = item.querySelector('.route-checkbox');
        const star = item.querySelector('.fav-star');

        item.addEventListener('click', (e) => {
            if (e.target === star) {
                toggleFavorite(routeId, e);
                return;
            }
            checkbox.checked = !checkbox.checked;
            if (checkbox.checked) {
                selectedRoutes.add(routeId);
            } else {
                selectedRoutes.delete(routeId);
            }
            applyRouteFilterChange();
        });

        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            if (checkbox.checked) {
                selectedRoutes.add(routeId);
            } else {
                selectedRoutes.delete(routeId);
            }
            applyRouteFilterChange();
        });

        routeList.appendChild(item);
    });
}
