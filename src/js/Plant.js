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
            "Maturity": parseInt(Math.min(this.maturity / 100, 3)),
            "Yield": this.yield,
            "Growth Speed": this.growthSpeed
        }
    }
}

export default Plant;