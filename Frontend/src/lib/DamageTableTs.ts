
type row = {
    Name: string;
    TotalDamage: number;
    TotalHealing: number;
    CritPercent: number;
}


let attackers: Map<string, Attacker> = new Map();

export function AddDamageToTable(data: CombatEvent){
    const attacker = attackers.get(data.Attacker) || new Attacker(data.Attacker);
    attacker.AddDamage(data);
    attackers.set(data.Attacker, attacker);
    getRows();
}

import {attackees} from './stores';

function getRows(){
    attackees.update(()=>{
        return Array.from(attackers.values())
    })
    // console.log(b)
}

export function reset(){
    attackers.clear();
    getRows();
}

interface CombatEvent{
    Attacker: string;
    Damage: number;
    Healing: number;
    Crit: boolean;
}

class Attacker{
    constructor(name :string){
        this.Name = name;
    }


    Name = "";
    Damage: number = 0;
    Healing: number = 0;
    Crits: number = 0;
    TotalHits: number = 0;

    AddDamage(data: CombatEvent){
        this.Damage += data.Damage;
        this.Healing += data.Healing;
        this.TotalHits++;
        if((this.Healing == 0))
            //just to make sure we dont count heals as crits
            if(data.Crit) this.Crits++;
    }

    GetRow(){
        // console.log(`${this.Name},${this.Crits} / ${this.TotalHits} = ${this.Crits / this.TotalHits}`)
        return{
            Name: this.Name,
            TotalDamage: this.Damage,
            TotalHealing: this.Healing,
            CritPercent: this.Crits / this.TotalHits,
        }
    }
}
