# Earthquake Visualization Project

## Overview

The **Earthquake Visualization Project** was created to visualize real-time earthquake data provided by the United States Geological Survey (USGS). The goal of this project is to help educate the public and government organizations about seismic activity, improve awareness, and provide insights into the relationship between tectonic plates and earthquakes.

This interactive map uses the Leaflet library to display earthquake data as circles, scaled by magnitude and colored by depth. Additionally, tectonic plate boundaries are plotted alongside the earthquake data for added context.

---

## Features

1. **Interactive Earthquake Map** :

* Displays earthquakes from the last 7 days.
* Circles represent earthquake locations with:
  * **Size** proportional to earthquake magnitude.
  * **Color** indicating earthquake depth.

1. **Popups for Details** :

* Displays magnitude, depth, and location when clicking on a marker.

1. **Legend** :

* Explains the color scale used for earthquake depth.

1. **Tectonic Plate Boundaries** :

* Visualizes tectonic plate boundaries as orange lines.

1. **Layer Controls** :

* Toggle between base maps (Street Map and Satellite Map).
* Show/hide earthquake and tectonic plate data layers.

---

## Dataset Information

1. **Earthquake Data** :

* Sourced from the [USGS GeoJSON Feed]().
* Data includes earthquake magnitude, depth, and location.

1. **Tectonic Plate Data** :

* Sourced from the [Tectonic Plates GitHub Repository](https://github.com/fraxen/tectonicplates).
* Displays tectonic plate boundaries.

---

## Technologies Used

1. **Frontend** :

* HTML5
* CSS3
* JavaScript (ES6)

1. **Libraries** :

* [Leaflet](https://leafletjs.com/) for interactive map visualization.
* [D3.js](https://d3js.org/) for fetching and parsing GeoJSON data.

---

## File Structure

<pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">plaintext</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-plaintext">leaflet-challenge/
├── index.html                # Main HTML file for the project
├── static/
│   ├── css/
│   │   ├── style.css         # Custom styles for the project
│   ├── js/
│   │   ├── logic.js          # JavaScript logic for map rendering
</code></div></div></pre>

---

## How to Run the Project

1. Clone the repository:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/your-username/leaflet-challenge.git
   </code></div></div></pre>
2. Open the project directory:
   <pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary select-none">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center select-none py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">cd leaflet-challenge
   </code></div></div></pre>
3. Open the `index.html` file in your browser to view the interactive map.

---

## Features in Detail

### 1. **Earthquake Visualization**

* Earthquake data is represented as circle markers.
* Marker **size** corresponds to earthquake magnitude.
* Marker **color** corresponds to earthquake depth:
  * Green for shallow earthquakes (<10 km depth).
  * Yellow for medium depth earthquakes (10–70 km).
  * Red for deep earthquakes (>90 km).

### 2. **Popups**

* Click on a marker to view details:
  * Magnitude
  * Depth (in km)
  * Location description

### 3. **Legend**

* A legend in the bottom-right corner explains the depth-to-color relationship.

### 4. **Tectonic Plate Boundaries**

* Orange lines overlay the map to display tectonic plate boundaries.
* Helps illustrate the relationship between plate movement and seismic activity.

### 5. **Layer Controls**

* Switch between:
  * **Base Maps** : Street Map and Satellite Map.
  * **Overlays** : Earthquake data and tectonic plates.

---

## Screenshots

### Earthquake Visualization

### Tectonic Plate Boundaries

---

## Known Issues

* Earthquake markers may overlap in regions with high seismic activity.
* Data updates depend on the USGS feed.

---

## Future Enhancements

* Add real-time data updates.
* Include a time slider to visualize earthquake data over time.
* Display earthquake predictions using machine learning models.
