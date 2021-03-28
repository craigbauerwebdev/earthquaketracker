import { formatMag } from "./formatMag";

export function getMaxMagnitude(data) {
    const mags = data.map((quake) => {
        if(quake?.properties.mag) {
            return quake.properties.mag
        }
        return null;
    });
    
    return formatMag(Math.max(...mags));
}