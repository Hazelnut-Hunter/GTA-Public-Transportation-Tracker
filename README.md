# GTA Public Transportation Tracker (TTC Live Vehicle Tracker)

A real-time web application to track live Toronto Transit Commission (TTC) buses, streetcars, and subway trains on an interactive map using Leaflet and official TTC GTFS feeds.

## Features
- **Real-Time Map**: Live location markers for over 1,000+ TTC buses, streetcars, and subway trains, updated every 5 seconds.
- **Route Search & Filter**: Filter live vehicles by route number (e.g. Line 1, 501 Queen, 96 Wilson) or route name.
- **Favorites System**: Pin your frequent routes to the top of the search list using browser local storage.
- **Bearing & Direction Arrows**: Each vehicle displays an orbiting direction arrow reflecting its real-time bearing.
- **Detailed Popups**: Shows route name, vehicle ID, speed (in km/h), vehicle type (Bus 🚌, Streetcar 🚋, Subway 🚇), direction, and occupancy status.
- **Multi-Language Support**: Switch seamlessly between **English (EN)**, **French (FR)**, and **Chinese (中文)**.
- **Geolocation**: Quickly center the map on your current location with a pulsing GPS marker.
- **Progressive Web App (PWA)**: Installable on mobile and desktop devices with offline asset caching.

## Connected Backend
This frontend connects to the production Express API hosted on Render at [`GTA-Public-Transportation-Tracker-Backend`](https://github.com/Hazelnut-Hunter/GTA-Public-Transportation-Tracker-Backend) (with automatic fallback to `http://localhost:3000` for local development).
