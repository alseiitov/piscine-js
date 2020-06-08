function dogYears(planet, seconds) {
    switch (planet) {
        case 'Earth':
            return ((seconds / (1 * 31557600)) * 7).toFixed(2)
        case 'Mercury':
            return ((seconds / (0.2408467 * 31557600)) * 7).toFixed(2)
        case 'Venus':
            return ((seconds / (0.61519726 * 31557600)) * 7).toFixed(2)
        case 'Mars':
            return ((seconds / (1.8808158 * 31557600)) * 7).toFixed(2)
        case 'Jupiter':
            return ((seconds / (11.862615 * 31557600)) * 7).toFixed(2)
        case 'Saturn':
            return ((seconds / (29.447498 * 31557600)) * 7).toFixed(2)
        case 'Uranus':
            return ((seconds / (84.016846 * 31557600)) * 7).toFixed(2)
        case 'Neptune':
            return ((seconds / (164.79132 * 31557600)) * 7).toFixed(2)
    }
}