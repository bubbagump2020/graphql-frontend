class WizardSpell {
    wssId:number
    wssName:string
    wssSchool:string
    wssLevel:number
    wssCastTime:string
    wssComponents:string
    wssRange:string
    wssEffect:string
    wssSavingThrow:string
    wssSpellResist:string
    wssDescription:string
    wssRuleBook:string


    constructor(wssId: number, wssName: string, wssSchool: string, wssLevel: number, wssCastTime: string, wssComponents: string, wssRange: string, wssEffect: string, wssSavingThrow: string, wssSpellResist: string, wssDescription: string, wssRuleBook: string) {
        this.wssId = wssId;
        this.wssName = wssName;
        this.wssSchool = wssSchool;
        this.wssLevel = wssLevel;
        this.wssCastTime = wssCastTime;
        this.wssComponents = wssComponents;
        this.wssRange = wssRange;
        this.wssEffect = wssEffect;
        this.wssSavingThrow = wssSavingThrow;
        this.wssSpellResist = wssSpellResist;
        this.wssDescription = wssDescription;
        this.wssRuleBook = wssRuleBook;
    }

    static create(spellObject:any){
        return new WizardSpell(
            spellObject.WSS_ID,
            spellObject.WSS_NAME,
            spellObject.WSS_SCHOOL,
            spellObject.WSS_LEVEL,
            spellObject.WSS_CAST_TIME,
            spellObject.WSS_COMPONENTS,
            spellObject.WSS_RANGE,
            spellObject.WSS_EFFECT,
            spellObject.WSS_SAVING_THROW,
            spellObject.WSS_SPELL_RESIST,
            spellObject.WSS_DESCRIPTION,
            spellObject.RULEBOOK
        );
    }

}

export default WizardSpell;