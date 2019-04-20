const armors = [
    {
        "Name": "Gambeson",
        "Armor Type": "Light",
        "Damage Reduction": "1",
        "Traits": "-"
    },
    {
        "Name": "Mail",
        "Armor Type": "Medium",
        "Damage Reduction": "2",
        "Traits": "Heavy"    
    },
    {
        "Name": "Gambeson & Mail",
        "Armor Type": "Heavy",
        "Damage Reduction": "4",
        "Traits": "Heavy, Cumbersome"    
    }
];

const armorTraits = [
    {
        "Name": "Heavy",
        "Effect": "Disadvantage on stealth, climbing and swimming"
    },
    {
        "Name": "Cumbersome",
        "Effect": "Disadvantage on all agility checks"
    }
];


const ArmorToHtml = armor => {

    let traits = '';

    if (armor.Traits !== '-') {
        armor.Traits.split(',').forEach(trait => {
            trait = trait.trim();
            let description = '';
            for (let armorTrait of armorTraits) {
                if (armorTrait.Name === trait) {
                    description = armorTrait.Effect;
                    break;
                }
            }
    
            traits += `<br/><br/><b>${trait}</b>: ${description}`;
        });    
    }
    
    return `
    <div class='item'>
        <b>${armor.Name}</b>
        <br/>
        <br/>Armor Type:<span class='right'>${armor["Armor Type"]}</span>
        <br/>Damage Reduction:<span class='right'><span class='numeric'>${armor["Damage Reduction"]}</span></span>
        ${traits}
    </div>
    <br/>`;
}

const Main = () => {

    let html = "";
    armors.forEach(armor => {
        html += ArmorToHtml(armor);
    });

    document.getElementById('content').innerHTML = html;
}


window.onload = Main;