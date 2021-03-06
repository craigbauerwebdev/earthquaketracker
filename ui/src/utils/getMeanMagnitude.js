import { formatMag } from "./formatMag";

export function getMeanMagnitude(data) {
    const mags = data.map((quake) => {
        if(quake?.properties.mag) {
            return quake.properties.mag
        }
        return null;
    });
    return formatMag(mags.reduce((sum, el) => sum + el, 0) / mags.length);
}