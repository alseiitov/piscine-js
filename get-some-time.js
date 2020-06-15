function firstDayWeek(week, year) {
    let first = new Date(year + '-01-01')
    if (week != 1) {
        first.setDate(first.getDate() + ((week-1) * 7) - first.getDay() +1)
    }
    return first.toISOString().slice(0,10).split('-').reverse().join('-')
}
