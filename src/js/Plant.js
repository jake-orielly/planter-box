const maturityCeiling = 200;

class Plant {
    constructor() {
        this.age = 0;
        this.ageSinceLastMaturity = 0;
        this.maturity = 0;
        this.yield = parseInt(Math.random() * 5) + 1;
        this.growthSpeed = parseInt(Math.random() * 5) + 5;
    }

    tick() {
        // Having a plant with a high growth rate randomly not grow is frustrating
        let growthPity = Math.max(
            this.ageSinceLastMaturity / maturityCeiling * this.growthSpeed, 1
        );
        if (growthPity > 1)
            console.log(growthPity)
        let adjustedMaturityCeiling = maturityCeiling / growthPity;
        let rand = Math.random() * adjustedMaturityCeiling;
        this.age++;
        if (rand <= this.growthSpeed) {
            this.maturity++;
            this.ageSinceLastMaturity = 0;
        }
        this.maturity = Math.min(this.maturity, 3);
    }

    getMaturity() {
        return this.maturity;
    }

    getOverview() {
        return {
            "Maturity": this.maturity,
            "Yield": this.yield,
            "Growth Speed": this.growthSpeed
        }
    }

    harvestYield() {
        if (this.maturity < 2)
            return 0;
        else
            return parseInt((this.maturity - 1) * this.yield / 2);
    }
}

export default Plant;