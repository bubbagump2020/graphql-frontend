import CasterClass from "../classes/CasterClass";
import Spell from "../classes/Spell";

export const classFilter = (spell:Spell, filterClass:Array<String>):boolean[] => {
    const isClassEqual:boolean[] = spell.classObj.map(obj => {
        const classEqual = filterClass.includes(obj.name);
        return classEqual;
    });
    return isClassEqual;
}

export const searchTermFilter = (spellList:Array<Spell>, filterTerm:String):Array<Spell> => {
    const searchTerm:Array<Spell> = spellList.filter(spell => { return spell.name.toLowerCase().includes(filterTerm.toLowerCase()); });
    return searchTerm;
}

export const levelFilter = (spell:Spell, filterLevel:Array<Number>):boolean[] => {
    const isLevelEqual:boolean[] = spell.classObj.map(obj => {
        const levelEqual = filterLevel.includes(obj.level)
        return levelEqual;
    })
    return isLevelEqual;
}

export const classSearchTermFilter = (spellList:Array<Spell>, filterClass:Array<String>, filterTerm:String):Array<Spell> => {
    let newSpellList:Array<Spell> = []
    spellList.map(spell => {
        const isClassEqual = classFilter(spell, filterClass);
        isClassEqual.map(bool => {
            if(bool){
                newSpellList.push(spell);
            }
        })
    })
    const searchTermFiltered = searchTermFilter(spellList, filterTerm);
    const totalFiltered = newSpellList.filter(spell => {
        return searchTermFiltered.includes(spell);
    })
    return totalFiltered;
}

export const classLevelFilter = (spellList:Array<Spell>, filterClass:Array<String>, filterLevel:Array<Number>) => {
    let newSpellListC:Array<Spell> = [];
    spellList.map(spell => {
        const isClassEqual = classFilter(spell, filterClass);
        isClassEqual.map(bool => {
            if(bool){
                newSpellListC.push(spell)
            }
        })
    })
    let newSpellListL:Array<Spell> =[];
    newSpellListC.map(spell => {
        const isLevelEqual = levelFilter(spell, filterLevel);
        isLevelEqual.map(bool => {
            if(bool){
                newSpellListL.push(spell)
            }
        })
    })
    return newSpellListL
}

export const classSearchTermLevelFilter = (spellList:Array<Spell>, filterClass:Array<String>, filterTerm:String, filterLevel:Array<number>) => {
    const classLevelFiltered = classLevelFilter(spellList, filterClass, filterLevel)
    const searchTermFiltered = searchTermFilter(spellList, filterTerm)
    const totalFiltered = classLevelFiltered.filter(spell => {
        return searchTermFiltered.includes(spell);
    })
    return totalFiltered;
}

export const levelSearchTermFilter = (spellList:Array<Spell>, searchTerm:string, filterLevel:Array<number>) => {
    let newSpellList:Array<Spell> = [];
    spellList.map(spell => {
        const isLevelEqual = levelFilter(spell, filterLevel)
        isLevelEqual.map(bool => {
            if(bool){
                newSpellList.push(spell);
            }
        })
    })
    const searchTermFiltered = searchTermFilter(newSpellList, searchTerm)
    const totalFiltered = newSpellList.filter(spell => {
        return searchTermFiltered.includes(spell);
    })
    let filteredSet = Array.from(new Set(totalFiltered));
    return filteredSet;
}