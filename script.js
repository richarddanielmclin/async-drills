const logMessage = (message) => {
    console.log(message)
}

const getWords = () => {
    setTimeout(() => {
        console.log('1st word')
        setTimeout(() => {
            console.log('2nd word')
            setTimeout(() => {
                console.log('3rd word')
                setTimeout(() => {
                    console.log('final word')
                }, 1000)
            }, 2000)
        }, 3000)
    }, 0)
}

const done = () => {
    console.log(`Job's done!`)
}

const countdown = (num, callback) => {
    
    setTimeout(() => {
        
        if (num > 0) {
            console.log(num)
            countdown(num - 1, callback)
        } else {
            callback();
        }
        
    }, 1000)
    
}

const lunchTime = true

const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let food = {
                lunch: 'enchiladas',
                drink: 'lemonade'
            }
            resolve(food)
        } else {
            let err = new Error('Congratulations, you played yourself')
            reject(err)
        }
    })
}

logMessage('This is my message')

setTimeout(() => {
    logMessage('This is my 2nd message')
}, 2000)

getWords()

countdown(5, done)

orderMeSomeFood()
.then((value => {
    console.log(value)
})).catch((err => {
    console.log(err)
}))