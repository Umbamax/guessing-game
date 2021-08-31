class GuessingGame {
    constructor() {
        this.min
        this.max
        this.value 
    }

    setRange(min, max) {
        this.min = min
        this.max = max 
    }

    guess() {
        return this.value = Math.round((this.min + this.max) / 2)
    }

    lower() {
        this.max = this.value
    }

    greater() {
        this.min = this.value
    }
}

module.exports = GuessingGame;
