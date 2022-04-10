class Spell {
    name:string
    school:string
    castTime:string
    components:string
    range:string
    targetOrArea:string
    effect:string
    duration:string
    savingThrow:string
    resist:string
    description:string
    rulebook:string
    classes: String[]


    constructor(
        name: string,
        school: string,
        castTime: string,
        components: string,
        range: string,
        targetOrArea: string,
        effect: string,
        duration: string,
        savingThrow: string,
        resist: string,
        description: string,
        rulebook: string,
        classes: Array<string>,

    ) {
        this.name = name;
        this.school = school;
        this.castTime = castTime;
        this.components = components;
        this.range = range;
        this.targetOrArea = targetOrArea;
        this.effect = effect;
        this.duration = duration
        this.savingThrow = savingThrow;
        this.resist = resist;
        this.description = description;
        this.rulebook = rulebook;
        this.classes = classes;
    }

    static create(spell:any):Spell {
        return new Spell(
            spell.name,
            spell.school,
            spell.cast_time,
            spell.components,
            spell.range,
            spell.target_or_area,
            spell.effect,
            spell.duration,
            spell.saving_throw,
            spell.resist,
            spell.description,
            spell.rulebook,
            spell.classes
        );
    }

    static createArrayOfSpells(spells:any[]):Array<Spell>{
        let spellsArr:Array<Spell> = [];
        spells.map((spell) => spellsArr.push(Spell.create(spell)))
        return spellsArr;
    }
}

export default Spell;