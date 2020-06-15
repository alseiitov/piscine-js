function matchCron(cron, Obj) {
    let arr = cron.split(' ')
    let date = new Date('2020-06-01 00:00:00')
    let cronObj = {
        minute: arr[0],
        hour: arr[1],
        dayOfTheMonth: arr[2],
        monthOfTheYear: arr[3],
        dayOfTheWeek: arr[4]
    }

    let dateObj = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        dayOfTheMonth: date.getDate(),
        monthOfTheYear: date.getMonth(),
        dayOfTheWeek: date.getDay() 
    }
    
    console.log(cronObj, dateObj)

    for (let i = 0; i < 5; i++) {
        if (cronObj[i] == '*') {
            continue
        }
        if (Number(cronObj[i]) != dateObj[i]) {
            return false
        }
    }
    return true
}

console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))