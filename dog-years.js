function dogYears(planet, seconds) {
    switch (planet) {
        case 'earth':
            return ((seconds / (1 * 31557600)) * 7).toFixed(2).toString()
        case 'mercury':
            return ((seconds / (0.2408467 * 31557600)) * 7).toFixed(2).toString()
        case 'venus':
            return ((seconds / (0.61519726 * 31557600)) * 7).toFixed(2).toString()
        case 'mars':
            return ((seconds / (1.8808158 * 31557600)) * 7).toFixed(2).toString()
        case 'jupiter':
            return ((seconds / (11.862615 * 31557600)) * 7).toFixed(2).toString()
        case 'saturn':
            return ((seconds / (29.447498 * 31557600)) * 7).toFixed(2).toString()
        case 'uranus':
            return ((seconds / (84.016846 * 31557600)) * 7).toFixed(2).toString()
        case 'neptune':
            return ((seconds / (164.79132 * 31557600)) * 7).toFixed(2).toString()
    }
}