class Plant {
    constructor() {
        this.age = 0;
        this.maturity = 0;
        this.yield = 5;
        this.growthSpeed = 1;
    }

    tick() {
        this.age++;
        this.maturity += this.growthSpeed;
    }
}

export default Plant;