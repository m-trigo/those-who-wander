const weapons = [
    {
        "Name": "Hand Axe",
        "Backpack": 2,
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Melee, Light, Throwable",
        "Type": "Axe"
    },
    {
        "Name": "Battle Axe",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 8,
        "Traits": "Melee, Versatile",
        "Type": "Axe"
    },
    {
        "Name": "Mace",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Melee, Impact",
        "Type": "Blunt"
    },
    {
        "Name": "Warhammer",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 8,
        "Traits": "Melee, Impact, Versatile",
        "Type": "Blunt"
    },
    {
        "Name": "Dagger",
        "Backpack": 1,
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str or Dex",
        "Damage": 4,
        "Traits": "Melee, Bundle, Light, Concealable, Throwable",
        "Type": "Blade"
    },
    {
        "Name": "Shortsword",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str or Dex",
        "Damage": 6,
        "Traits": "Light",
        "Type": "Blade"
    },
    {
        "Name": "Longsword",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "Yes",
        "Ability": "Str",
        "Damage": 8,
        "Traits": "Versatile",
        "Type": "Blade"
    },
    {
        "Name": "Staff",
        "Backpack": "-",
        "Strap": "-",
        "Belt": "-",
        "Ability": "Str or Dex",
        "Damage": 4,
        "Traits": "Diplomatic, Handy, Long, Versatile",
        "Type": "Polearm"
    },
    {
        "Name": "Spear",
        "Backpack": "-",
        "Strap": "-",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Handy, Long, Throwable, Versatile",
        "Type": "Polearm"
    },
    {
        "Name": "Javelin",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 6,
        "Traits": "Bundle, Ranged, Throwable",
        "Type": "Ranged"
    },
    {
        "Name": "Bow",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Dex",
        "Damage": 6,
        "Traits": "Dry, Ranged, Two-handed",
        "Type": "Ranged"
    },
    {
        "Name": "Crossbow",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Dex",
        "Damage": 12,
        "Traits": "Dry, Ranged, Two-handed, Reload",
        "Type": "Ranged"
    },
    {
        "Name": "Shield",
        "Backpack": "-",
        "Strap": "Yes",
        "Belt": "-",
        "Ability": "Str",
        "Damage": 0,
        "Traits": "Cover, Sunder",
        "Type": "Shield"
    }
];

const weaponTraits = [
    {
        "Name": "Bundle",
        "Effect": "Up to three can occupy the same inventory slot"
    },
    {
        "Name": "Diplomatic",
        "Effect": "Not perceived as a weapon until used as one"
    },
    {
        "Name": "Concealable",
        "Effect": "Can be worn out of sight in the belt slots"
    },
    {
        "Name": "Ranged",
        "Effect": "Can hit from a distance"
    },
    {
        "Name": "Throwable",
        "Effect": "Can hit from a distance with one extra damage, but the weapon is unavailable until recovered"
    },
    {
        "Name": "Versatile",
        "Effect": "Can be used with two hands for one extra damage"
    },
    {
        "Name": "Impact",
        "Effect": "Ignores armored defense when dealing damage"
    },
    {
        "Name": "Long",
        "Effect": "Can reach just out of melee range"
    },
    {
        "Name": "Two-handed",
        "Effect": "Requires two hands to wield"
    },
    {
        "Name": "Dry",
        "Effect": "Malfunctions when wet"
    },
    {
        "Name": "Light",
        "Effect": "Can be used on the off-hand without disadvantage. If a weapon is also used on the main-hand, on a successful attack, roll damage for both weapons and keep the highest"
    },
    {
        "Name": "Cover",
        "Effect": "Can be used as defensive cover against ranged and melee attacks"
    },
    {
        "Name": "Sunder",
        "Effect": "On a failed check to prevent an attack, you can sacrifice this shield to prevent all incoming damage from the attack"
    },
    {
        "Name": "Reload",
        "Effect": "Needs time to reload after it fires"
    },
    {
        "Name": "Handy",
        "Effect": "Can (only) be carried by hand"
    },
    {
        "Name": "Melee",
        "Effect": "Can only hit nearby targets, but has advantage when attacking a target without melee offensive capabilities"
    },
    {
        "Name": "Ranged",
        "Effect": "Can hit from a distance and has advantage if the target doesn't have some form of cover"
    }
]

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
        for(let weaponTrait of weaponTraits) {
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