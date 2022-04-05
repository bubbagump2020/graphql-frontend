class CasterClass {
    name:string
    level:number


    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }

    static createCasterClass = (name:string, level:number) => {
        return new CasterClass(name, level);
    }


}

export default CasterClass