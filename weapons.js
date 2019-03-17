const weapons = [
    {
        "Name": "Hand Axe",
        "Backpack": 2,
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Melee, Light, Throwable"
    },
    {
        "Name": "Battle Axe",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 8,
        "Traits": "Melee, Versatile"
    },
    {
        "Name": "Mace",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Melee, Impact, Versatile"
    },
    {
        "Name": "Dagger",
        "Backpack": 1,
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str or Dex",
        "Damage": 4,
        "Traits": "Melee, Bundle, Light, Concealable, Throwable"
    },
    {
        "Name": "Shortsword",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str or Dex",
        "Damage": 6,
        "Traits": "Melee, Light"
    },
    {
        "Name": "Longsword",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 8,
        "Traits": "Melee, Versatile"
    },
    {
        "Name": "Staff",
        "Backpack": "-",
        "Strap": "-",
        "Belt": "-",
        "Ability": "Str or Dex",
        "Damage": 4,
        "Traits": "Melee, Diplomatic, Handy, Long, Versatile"
    },
    {
        "Name": "Spear",
        "Backpack": "-",
        "Strap": "-",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Melee, Handy, Long, Throwable, Versatile"
    },
    {
        "Name": "Javelin",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Bundle, Ranged, Throwable"
    },
    {
        "Name": "Bow",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Dex",
        "Damage": 6,
        "Traits": "Dry, Ranged, Two-Handed"
    },
    {
        "Name": "Crossbow",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Dex",
        "Damage": 12,
        "Traits": "Dry, Ranged, Two-Handed, Reload"
    },
    {
        "Name": "Shield",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 0,
        "Traits": "Cover, Sunder"
    }
];


const weaponTraits = [
    {
        "Name": "Bundle",
        "Effect": "Up to three can occupy the same inventory slot"
    },
    {
        "Name": "Concealable",
        "Effect": "Can be worn out of sight in belt slots"
    },
    {
        "Name": "Cover",
        "Effect": "Can be used as defensive cover"
    },
    {
        "Name": "Diplomatic",
        "Effect": "Not perceived as a weapon until used as one"
    },
    {
        "Name": "Dry",
        "Effect": "Malfunctions when wet"
    },
    {
        "Name": "Handy",
        "Effect": "Can (only) be carried by hand"
    },
    {
        "Name": "Impact",
        "Effect": "Ignores medium and heavy armor"
    },
    {
        "Name": "Light",
        "Effect": "Can be used off-handed without disadvantage (attacks with two weapons give advantage to the damage roll)"
    },
    {
        "Name": "Long",
        "Effect": "Can reach just out of melee range"
    },
    {
        "Name": "Melee",
        "Effect": "Advantage if target has no melee weapon"
    },
    {
        "Name": "Ranged",
        "Effect": "Advantage if target has no cover"
    },
    {
        "Name": "Reload",
        "Effect": "Needs time to reload after firing"
    },
    {
        "Name": "Sunder",
        "Effect": "Can be sacrificed to prevent all incoming damage from an attack"
    },
    {
        "Name": "Throwable",
        "Effect": "Can hit from a distance with one extra damage, but the weapon is unavailable until recovered"
    },
    {
        "Name": "Two-Handed",
        "Effect": "Requires two hands to wield"
    },
    {
        "Name": "Versatile",
        "Effect": "Can be used with two hands for one extra damage"
    }
];


const WeaponToHtml = weapon => {

    let backpack = weapon.Backpack;
    if (Number.isInteger(backpack)) {
        if (backpack > 0) {
            backpack = `<span class='numeric'>${backpack}</span> slot`;
            if (backpack != 1) {
                backpack += 's';
            }
        }
    }

    let damage = `<span class='numeric'>1</span>d<span class='numeric'>${weapon.Damage}</span>`;

    let traits = '';
    weapon.Traits.split(',').forEach(trait => {

        trait = trait.trim();
        let description = '';
        for (let weaponTrait of weaponTraits) {
            if (weaponTrait.Name === trait) {
                description = weaponTrait.Effect;
                break;
            }
        }

        traits += `<br/><br/><b>${trait}</b>: ${description}`;
    });

    return `
    <div class='item'>
        <b>${weapon.Name}</b>
        <br/>
        <br/>
        On Belt:<span class='right'>${weapon.Belt}</span>
        <br/>
        On Strap:<span class='right'>${weapon.Strap}</span>
        <br/>
        On Backpack:<span class='right'>${backpack}</span>
        <br/>
        <br/>
        Ability Check:<span class='right'>${weapon.Ability}</span>
        <br/>
        Damage:<span class='right'>${damage}</span>
        ${traits}
    </div>
    <br/>`;
}

const Main = () => {

    let html = "";
    weapons.forEach(weapon => {
        html += WeaponToHtml(weapon);
    });

    document.getElementById('content').innerHTML = html;
}


window.onload = Main;