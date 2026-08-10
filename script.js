// Multi-Language Dictionary
const translations = {
    en: {
        navTitle: "GTA Live Transit Tracker",
        welcome: "Greater Toronto Area Transit Tracker",
        timeLabel: "Current Time:",
        loading: "Loading...",
        errorTitle: "GTA Feed Warning",
        errorMessage: "We are experiencing minor delays receiving live transit updates from the GTA feed. Map positions may temporarily be delayed.",
        serverWaking: "Connecting to GTA Transit Servers...\n(Free server cold start may take ~20s on initial load)",
        routeLabel: "Route",
        busLabel: "Vehicle ID",
        agencyLabel: "Agency",
        locationPopup: "You are here",
        locationNotSupportedAlert: "Geolocation is not supported by your browser.",
        locationAlert: "Unable to retrieve your position. Please check your location permissions.",
        searchPlaceholder: "Search Route (e.g. 1, 501, LW, UP)...",
        dirLabel: "Direction",
        inbound: "Inbound",
        outbound: "Outbound",
        speedLabel: "Speed",
        occupancyLabel: "Occupancy",
        vehicleType: "Vehicle Type",
        agencyAll: "🌐 All Agencies",
        agencyTtc: "🔴 TTC",
        agencyGo: "🟢 GO Transit",
        agencyUp: "🚆 UP Express",
        bus: "Bus",
        streetcar: "Streetcar",
        subway: "Subway",
        train: "Train",
        modeAll: "🌐 All Modes",
        modeBus: "🚌 Bus",
        modeStreetcar: "`🚋 Streetcar",
        modeSubway: "🚇 Subway",
        modeTrain: "🚆 Train",
        liveCountTag: "Live",
        anticipatedTag: "Anticipated Location (Schedule Interpolated)",
        themeTooltip: "Switch Map Theme (Dark / Street / Satellite)",
        locateTooltip: "Find My Location",
        easterEggTitle: "🌊 Easter Egg Discovered!",
        easterEggDesc: "The author of this transit tracker is based in <b>Halifax, Nova Scotia! 🇨🇦</b>",
        easterEggBtn: "🚌 Visit Halifax Bus Tracker →"
    },
    fr: {
        navTitle: "Suivi du Transit GTA",
        welcome: "Suivi du réseau de transport de la région de Toronto (GTA)",
        timeLabel: "Heure actuelle:",
        loading: "Chargement...",
        errorTitle: "Avertissement Flux GTA",
        errorMessage: "Des retards sont actuellement observés dans la réception des données en temps réel. Les positions affichées peuvent être retardées.",
        serverWaking: "Connexion aux serveurs de transit GTA...\n(Le premier chargement peut prendre ~20s pour démarrer le serveur)",
        routeLabel: "Ligne",
        busLabel: "ID Véhicule",
        agencyLabel: "Agence",
        locationPopup: "Vous êtes ici",
        locationNotSupportedAlert: "La géolocalisation n'est pas supportée par votre navigateur.",
        locationAlert: "Impossible de récupérer votre position. Vérifiez les autorisations.",
        searchPlaceholder: "Chercher un itinéraire (ex. 1, 501, LW, UP)...",
        dirLabel: "Direction",
        inbound: "Aller",
        outbound: "Retour",
        speedLabel: "Vitesse",
        occupancyLabel: "Occupation",
        vehicleType: "Type de véhicule",
        agencyAll: "🌐 Toutes Agences",
        agencyTtc: "🔴 TTC",
        agencyGo: "🟢 GO Transit",
        agencyUp: "🚆 UP Express",
        bus: "Autobus",
        streetcar: "Tramway",
        subway: "Métro",
        train: "Train",
        modeAll: "🌐 Tous les Modes",
        modeBus: "🚌 Autobus",
        modeStreetcar: "🚋 Tramway",
        modeSubway: "🚇 Métro",
        modeTrain: "🚆 Train",
        liveCountTag: "En direct",
        anticipatedTag: "Emplacement estimé (selon l'horaire)",
        themeTooltip: "Changer le thème de la carte (Sombre / Rue / Satellite)",
        locateTooltip: "Ma position",
        easterEggTitle: "🌊 Secret Découvert !",
        easterEggDesc: "L'auteur de cette application est basé à <b>Halifax, Nouvelle-Écosse ! 🇨🇦</b>",
        easterEggBtn: "🚌 Découvrir Halifax Bus Tracker →"
    },
    zh: {
        navTitle: "大多伦多(GTA)公共交通实时追踪器",
        welcome: "大多伦多地区 (GTA) 公共交通实时追踪器",
        timeLabel: "当前时间：",
        loading: "加载中...",
        errorTitle: "GTA数据源提示",
        errorMessage: "当前接收GTA交通实时位置数据存在延迟，地图上的车辆位置可能会有短暂滞后。",
        serverWaking: "正在连接GTA交通服务器...\n(提示: 免费云服务器首次启动需约20秒唤醒，请稍候)",
        routeLabel: "线路",
        busLabel: "车辆 ID",
        agencyLabel: "公交公司",
        locationPopup: "您在这里",
        locationNotSupportedAlert: "您的浏览器不支持地理位置功能。",
        locationAlert: "无法获取您的位置，请检查浏览器定位权限。",
        searchPlaceholder: "搜索线路 (如 1, 501, LW, UP)...",
        dirLabel: "方向",
        inbound: "上行",
        outbound: "下行",
        speedLabel: "车速",
        occupancyLabel: "载客情况",
        vehicleType: "车辆类型",
        agencyAll: "🌐 所有公司",
        agencyTtc: "🔴 TTC 多伦多公局",
        agencyGo: "🟢 GO 区域城铁/巴士",
        agencyUp: "🚆 UP 机场快线",
        bus: "公交车",
        streetcar: "有轨电车",
        subway: "地铁",
        train: "火车/城铁",
        modeAll: "🌐 全部模式",
        modeBus: "🚌 公交车",
        modeStreetcar: "🚋 有轨电车",
        modeSubway: "🚇 地铁",
        modeTrain: "🚆 火车/城铁",
        liveCountTag: "辆在途",
        anticipatedTag: "预计实时位置 (时刻表推算)",
        themeTooltip: "切换地图主题 (暗黑 / 标准 / 卫星)",
        locateTooltip: "定位我的位置",
        easterEggTitle: "🌊 发现隐藏彩蛋！",
        easterEggDesc: "本公交追踪器的开发者位于 <b>加拿大新斯科舍省哈里法克斯 (Halifax)！🇨🇦</b>",
        easterEggBtn: "🚌 访问 Halifax 公交追踪器 →"
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

    const t = translations[lang];
    document.getElementById('txt-nav-title').textContent = t.navTitle;
    document.getElementById('txt-welcome').textContent = t.welcome;
    document.getElementById('txt-time').textContent = t.timeLabel;
    document.getElementById('txt-loading-msg').textContent = t.serverWaking;
    document.getElementById('route-search').placeholder = t.searchPlaceholder;

    // Update Primary Agency Filter buttons text
    const btnAgAll = document.getElementById('btn-agency-all');
    const btnAgTtc = document.getElementById('btn-agency-ttc');
    const btnAgGo = document.getElementById('btn-agency-go');
    const btnAgUp = document.getElementById('btn-agency-up');
    if (btnAgAll) btnAgAll.textContent = t.agencyAll;
    if (btnAgTtc) btnAgTtc.textContent = t.agencyTtc;
    if (btnAgGo) btnAgGo.textContent = t.agencyGo;
    if (btnAgUp) btnAgUp.textContent = t.agencyUp;

    // Re-render secondary mode filter pills
    renderModeFilters();

    // Update Tooltips
    const themeBtn = document.getElementById('theme-btn');
    const locateBtn = document.getElementById('locate-btn');
    if (themeBtn) themeBtn.title = t.themeTooltip;
    if (locateBtn) locateBtn.title = t.locateTooltip;

    if (userMarker) {
        userMarker.setPopupContent(t.locationPopup);
    }

    if (typeof halifaxMarker !== 'undefined' && halifaxMarker && halifaxMarker.getPopup()) {
        halifaxMarker.getPopup().setContent(createHalifaxPopupContent());
    }

    // Refresh existing vehicle popups with new language labels
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

// Initialize Map Centered on Toronto
const map = L.map('map', {
    zoomControl: false
}).setView([43.6532, -79.3832], 12);

// --- MAP THEMES ---
const MAP_THEMES = {
    street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors | GTA Transit Data'
    }),
    dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO | GTA Transit Data',
        subdomains: 'abcd',
        maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri | GTA Transit Data'
    })
};

let currentTheme = 'street';
MAP_THEMES[currentTheme].addTo(map);

function toggleMapTheme() {
    map.removeLayer(MAP_THEMES[currentTheme]);
    if (currentTheme === 'street') currentTheme = 'dark';
    else if (currentTheme === 'dark') currentTheme = 'satellite';
    else currentTheme = 'street';

    MAP_THEMES[currentTheme].addTo(map);
}

// Marker Cluster Group
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

markerClusterGroup.on('spiderfied', () => { isSpiderfied = true; });
markerClusterGroup.on('unspiderfied', () => {
    isSpiderfied = false;
    if (pendingClusterUpdates) {
        pendingClusterUpdates = false;
        setTimeout(updateBuses, 100);
    }
});

let busMarkers = {};
let selectedRoutes = new Set();
let selectedAgency = 'all'; // 'all', 'ttc', 'go', 'up'
let selectedMode = 'all';   // 'all', 'bus', 'streetcar', 'subway', 'train'
let availableRoutes = new Set();
let currentBusData = [];
let routeNames = {};

const AGENCY_MODES = {
    all: ['all', 'bus', 'streetcar', 'subway', 'train'],
    ttc: ['all', 'bus', 'streetcar', 'subway'],
    go: ['all', 'bus', 'train'],
    up: ['all', 'train']
};

function setAgencyFilter(agency) {
    selectedAgency = agency;
    
    document.querySelectorAll('.agency-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id === `btn-agency-${agency}`);
    });

    const allowed = AGENCY_MODES[agency] || AGENCY_MODES['all'];
    if (!allowed.includes(selectedMode)) {
        selectedMode = 'all';
    }

    renderModeFilters();
    applyRouteFilterChange();
}

function setModeFilter(mode) {
    selectedMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });
    applyRouteFilterChange();
}

function renderModeFilters() {
    const container = document.getElementById('mode-filters');
    if (!container) return;

    const allowed = AGENCY_MODES[selectedAgency] || AGENCY_MODES['all'];
    const t = translations[currentLang] || translations['en'];

    const MODE_MAP = {
        all: t.modeAll || '🌐 All Modes',
        bus: t.modeBus || '🚌 Bus',
        streetcar: t.modeStreetcar || '🚋 Streetcar',
        subway: t.modeSubway || '🚇 Subway',
        train: t.modeTrain || '🚆 Train'
    };

    container.innerHTML = allowed.map(m => `
        <button class="mode-btn ${selectedMode === m ? 'active' : ''}" 
                onclick="setModeFilter('${m}')" 
                data-mode="${m}">
            ${MODE_MAP[m]}
        </button>
    `).join('');
}

// Initial mode filter render
renderModeFilters();

// Favorites System
const FAV_STORAGE_KEY = "gta_transit_favs";

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

function getVehicleType(bus) {
    if (bus.type) return bus.type;
    const rId = String(bus.routeId);
    if (bus.agency === 'up' || ['LW','LE','MI','KI','BR','ST','RH'].includes(rId)) return 'train';
    if (SUBWAY_ROUTES.has(rId)) return 'subway';
    if (STREETCAR_ROUTES.has(rId)) return 'streetcar';
    return 'bus';
}

function showErrorDetail() {
    const title = translations[currentLang].errorTitle;
    const msg = translations[currentLang].errorMessage;
    alert(`${title}\n\n${msg}`);
}

let isFirstLoad = true;

// Bus Data Updater
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

        buses.forEach(bus => {
            try {
                // Filter by Agency
                if (selectedAgency !== 'all' && bus.agency !== selectedAgency) {
                    return;
                }

                // Filter by Mode
                const vType = getVehicleType(bus);
                if (selectedMode !== 'all' && vType !== selectedMode) {
                    return;
                }

                // Filter by Route selection
                if (selectedRoutes.size > 0 && !selectedRoutes.has(bus.routeId)) {
                    return;
                }

                activeBusIds.add(bus.id);
                const newLatLng = [bus.latitude, bus.longitude];

                if (busMarkers[bus.id]) {
                    const marker = busMarkers[bus.id];
                    marker.busData = bus;

                    const curLatLng = marker.getLatLng();
                    if (Math.abs(curLatLng.lat - bus.latitude) > 0.00005 || Math.abs(curLatLng.lng - bus.longitude) > 0.00005) {
                        marker.setLatLng(newLatLng);
                    }

                    const iconDiv = marker.getElement();
                    if (iconDiv) {
                        const vehicleIcon = iconDiv.querySelector('.custom-vehicle-marker');
                        if (vehicleIcon) {
                            vehicleIcon.style.transform = `rotate(${bus.bearing || 0}deg)`;
                        }
                    }

                    if (marker.getPopup() && marker.getPopup().isOpen()) {
                        marker.getPopup().setContent(createPopupContent(bus));
                    }

                } else {
                    const customIcon = L.divIcon({
                        className: 'bus-marker-container',
                        html: createVehicleIconHtml(bus, vType),
                        iconSize: [40, 40],
                        iconAnchor: [20, 20],
                        popupAnchor: [0, -20]
                    });

                    const marker = L.marker(newLatLng, { icon: customIcon });
                    marker.busData = bus;
                    marker.bindPopup(createPopupContent(bus));

                    marker.on('click', () => {
                        map.panTo(marker.getLatLng());
                    });

                    busMarkers[bus.id] = marker;
                    markersToAdd.push(marker);
                }
            } catch (err) {
                console.error("Error processing vehicle marker:", err);
            }
        });

        // Remove stale/filtered markers
        Object.keys(busMarkers).forEach(busId => {
            if (!activeBusIds.has(busId)) {
                markerClusterGroup.removeLayer(busMarkers[busId]);
                delete busMarkers[busId];
            }
        });

        if (markersToAdd.length > 0) {
            markerClusterGroup.addLayers(markersToAdd);
        }

        const countBadge = document.getElementById('live-count-badge');
        if (countBadge) {
            countBadge.textContent = `${activeBusIds.size} ${translations[currentLang].liveCountTag}`;
        }

    } catch (error) {
        console.error("Error updating vehicle positions:", error);
    }
}

function createVehicleIconHtml(bus, vType) {
    let emoji = '🚌';
    let badgeColor = '#DA291C';
    let textColor = '#FFFFFF';

    if (bus.agency === 'go') {
        badgeColor = '#00853D';
        emoji = (vType === 'train') ? '🚆' : '🚌';
    } else if (bus.agency === 'up') {
        badgeColor = '#004B49';
        textColor = '#D4AF37';
        emoji = '🚆';
    } else {
        if (vType === 'streetcar') {
            badgeColor = '#DA291C';
            emoji = '🚋';
        } else if (vType === 'subway') {
            const meta = routeNames[bus.routeId];
            badgeColor = meta ? meta.color : '#FFC72C';
            textColor = meta ? meta.textColor : '#000000';
            emoji = '🚇';
        }
    }

    const routeLabel = String(bus.routeId).length <= 4 ? bus.routeId : String(bus.routeId).slice(0, 4);

    return `
        <div class="custom-vehicle-marker agency-${bus.agency}" style="transform: rotate(${bus.bearing || 0}deg);">
            <div class="marker-pill" style="background-color: ${badgeColor}; color: ${textColor};">
                <span class="marker-emoji">${emoji}</span>
                <span class="marker-route">${routeLabel}</span>
            </div>
        </div>
    `;
}

function createPopupContent(bus) {
    const t = translations[currentLang];

    let agencyName = 'TTC';
    let agencyBadgeColor = '#DA291C';
    let agencyBadgeTextColor = '#FFFFFF';

    if (bus.agency === 'go') {
        agencyName = 'GO Transit';
        agencyBadgeColor = '#00853D';
    } else if (bus.agency === 'up') {
        agencyName = 'UP Express';
        agencyBadgeColor = '#004B49';
        agencyBadgeTextColor = '#D4AF37';
    }

    const routeMeta = routeNames[bus.routeId];
    const routeName = routeMeta ? (routeMeta.longName || routeMeta.shortName || bus.routeId) : bus.routeId;
    const vType = getVehicleType(bus);
    const vTypeLabel = t[vType] || vType;
    const speedKmH = Math.round((bus.speed || 0) * 3.6);
    const occupancy = bus.occupancyStatus ? (t[bus.occupancyStatus] || bus.occupancyStatus) : 'N/A';
    const tagText = bus.isAnticipated ? t.anticipatedTag : t.liveCountTag;

    return `
        <div class="popup-card">
            <div class="popup-title">
                <span class="popup-badge" style="background-color: ${agencyBadgeColor}; color: ${agencyBadgeTextColor}; padding: 2px 6px; border-radius: 4px; font-weight: 800; font-size: 0.75rem;">
                    ${agencyName}
                </span>
                <span style="font-weight: 700; color: #ffffff;">${t.routeLabel} ${bus.routeId}</span>
            </div>
            <div style="font-size: 0.75rem; color: #cbd5e1; margin-top: 2px; margin-bottom: 6px;">
                <span class="popup-tag">${tagText}</span>
            </div>
            <div style="font-size: 0.82rem; color: #ffffff; margin-bottom: 6px;"><b>${routeName}</b></div>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 6px 0;">
            <div><b>${t.busLabel}:</b> ${bus.id}</div>
            <div><b>${t.vehicleType}:</b> ${vTypeLabel}</div>
            <div><b>${t.speedLabel}:</b> ${speedKmH} km/h</div>
            <div><b>${t.occupancyLabel}:</b> ${occupancy}</div>
        </div>
    `;
}

async function loadStaticRoutes() {
    try {
        const response = await fetch(`${BACKEND_URL}/routes`);
        const routes = await response.json();
        routeNames = routes;
    } catch (e) {
        console.warn("Failed to load static route metadata:", e);
    }
}

loadStaticRoutes();
updateBuses();
setInterval(updateBuses, 10000);

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
            const latLng = [lat, lng];

            map.setView(latLng, 15);

            if (userMarker) {
                userMarker.setLatLng(latLng);
            } else {
                const userIcon = L.divIcon({
                    className: 'user-location-marker',
                    html: `<div style="background-color: #007bff; width: 16px; height: 16px; border-radius: 50%; border: 3px solid #ffffff; box-shadow: 0 0 10px rgba(0,123,255,0.8); animation: pulse 2s infinite;"></div>`,
                    iconSize: [22, 22],
                    iconAnchor: [11, 11]
                });

                userMarker = L.marker(latLng, { icon: userIcon }).addTo(map);
                userMarker.bindPopup(translations[currentLang].locationPopup);
            }
            userMarker.openPopup();
        },
        () => {
            alert(translations[currentLang].locationAlert);
        }
    );
}

function applyRouteFilterChange() {
    const list = document.getElementById('route-list');
    if (list) list.classList.add('route-list-hidden');
    updateBuses();
}

function clearSelection() {
    selectedRoutes.clear();
    const searchInput = document.getElementById('route-search');
    if (searchInput) searchInput.value = '';
    const clearBtn = document.getElementById('clear-search');
    if (clearBtn) clearBtn.style.display = 'none';

    document.querySelectorAll('.route-checkbox').forEach(cb => cb.checked = false);
    applyRouteFilterChange();
}

const searchInput = document.getElementById('route-search');
const routeList = document.getElementById('route-list');
const clearBtn = document.getElementById('clear-search');

if (searchInput) {
    searchInput.addEventListener('focus', () => {
        if (routeList) routeList.classList.remove('route-list-hidden');
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (clearBtn) clearBtn.style.display = query.length > 0 ? 'block' : 'none';
        if (routeList) routeList.classList.remove('route-list-hidden');

        document.querySelectorAll('.route-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? 'flex' : 'none';
        });
    });
}

document.addEventListener('click', (e) => {
    const searchContainer = document.getElementById('search-container');
    if (searchContainer && !searchContainer.contains(e.target)) {
        if (routeList) routeList.classList.add('route-list-hidden');
    }
});

function updateRouteDropdown(buses) {
    if (!routeList) return;

    const favorites = getFavorites();
    const currentRoutesInFeed = new Set();

    buses.forEach(b => {
        if (selectedAgency !== 'all' && b.agency !== selectedAgency) return;
        const vType = getVehicleType(b);
        if (selectedMode !== 'all' && vType !== selectedMode) return;
        if (b.routeId) currentRoutesInFeed.add(b.routeId);
    });

    const sortedRoutes = Array.from(currentRoutesInFeed).sort((a, b) => {
        const isFavA = favorites.has(a);
        const isFavB = favorites.has(b);
        if (isFavA && !isFavB) return -1;
        if (!isFavA && isFavB) return 1;

        const numA = parseInt(String(a).replace(/\D/g, '')) || 0;
        const numB = parseInt(String(b).replace(/\D/g, '')) || 0;
        if (numA === numB) return String(a).localeCompare(String(b));
        return numA - numB;
    });

    if (areSetsEqual(new Set(sortedRoutes), availableRoutes)) return;

    availableRoutes = new Set(sortedRoutes);
    routeList.innerHTML = "";

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    sortedRoutes.forEach(routeId => {
        const item = document.createElement('div');
        item.className = 'route-item';

        const isChecked = selectedRoutes.has(routeId);
        const isFav = favorites.has(routeId);
        const routeMeta = routeNames[routeId];
        const routeDesc = routeMeta ? (routeMeta.longName || routeMeta.shortName) : '';
        const badgeColor = routeMeta ? routeMeta.color : '#DA291C';
        const badgeTextColor = routeMeta ? routeMeta.textColor : '#FFFFFF';

        item.innerHTML = `
            <div class="route-left">
                <span class="fav-star ${isFav ? 'active' : ''}">${isFav ? '★' : '☆'}</span>
                <span class="route-badge" style="background-color: ${badgeColor}; color: ${badgeTextColor};">${routeId}</span>
                <span class="route-name">${routeDesc}</span>
            </div>
            <input type="checkbox" class="route-checkbox" ${isChecked ? 'checked' : ''}>
        `;

        if (searchTerm) {
            const itemText = (routeId + " " + routeDesc).toLowerCase();
            if (!itemText.includes(searchTerm)) {
                item.style.display = 'none';
            }
        }

        const star = item.querySelector('.fav-star');
        const checkbox = item.querySelector('.route-checkbox');

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

function areSetsEqual(a, b) {
    if (a.size !== b.size) return false;
    for (const item of a) if (!b.has(item)) return false;
    return true;
}

// --- HALIFAX AUTHOR EASTER EGG ---
const halifaxIcon = L.divIcon({
    className: 'halifax-easter-egg-wrapper',
    html: `<div style="font-size: 26px; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.5)); cursor: pointer; transition: transform 0.2s ease;">⛴️</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
});

function createHalifaxPopupContent() {
    const t = translations[currentLang] || translations['en'];
    return `
        <div style="text-align: center; padding: 4px;">
            <div style="font-size: 1.05rem; font-weight: 700; color: #FFC72C; margin-bottom: 6px;">${t.easterEggTitle}</div>
            <div style="font-size: 0.85rem; margin-bottom: 10px; color: #ffffff;">${t.easterEggDesc}</div>
            <a href="https://halifax-bus-tracker-psi.vercel.app/" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #00994C; color: #ffffff; padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 0.8rem; text-decoration: none; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
                ${t.easterEggBtn}
            </a>
        </div>
    `;
}

const halifaxMarker = L.marker([44.648, -63.591], { icon: halifaxIcon })
    .bindPopup(createHalifaxPopupContent());

function checkHalifaxEasterEgg() {
    const zoom = map.getZoom();
    const bounds = map.getBounds();
    const isHalifaxInView = bounds.contains([44.648, -63.591]);
    
    if (zoom >= 11 && isHalifaxInView) {
        if (!map.hasLayer(halifaxMarker)) {
            map.addLayer(halifaxMarker);
        }
    } else {
        if (map.hasLayer(halifaxMarker)) {
            map.removeLayer(halifaxMarker);
        }
    }
}

map.on('zoomend moveend', checkHalifaxEasterEgg);
checkHalifaxEasterEgg();