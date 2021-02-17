class Plant {
    constructor() {
        this.age = 0;
        this.maturity = 0;
        this.yield = parseInt(Math.random() * 5) + 1;
        this.growthSpeed = parseInt(Math.random() * 5) + 1;
    }

    tick() {
        this.age++;
        this.maturity += this.growthSpeed;
    }

    getMaturity() {
        return this.maturity;
    }

    getOverview() {
        return {
            age: this.age,
            maturity: this.maturity,
            yield: this.yield,
            growthSpeed: this.growthSpeed
        }
    }
}

export default Plant;