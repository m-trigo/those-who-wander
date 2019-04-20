const items = [
    {
        "Name": "Backpack",
        "Backpack": "-",
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Backpack, Small",
        "Backpack": "-",
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Bag, Small",
        "Backpack": "-",
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Bedroll, Small",
        "Backpack": "-",
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Cooking Kit",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Crowbar, Small",
        "Backpack": 2,
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Fishing Net",
        "Backpack": 1,
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Flint and Steel",
        "Backpack": 0,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Grappling Hook",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Hammer",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Hardtack (5 days)",
        "Backpack": 1,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Healing Kit",
        "Backpack": 1,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Horse",
        "Backpack": "-",
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Lantern",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Lockpicks",
        "Backpack": 0,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Nails",
        "Backpack": 0,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Oil Flask",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Rope",
        "Backpack": 3,
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Shovel, Small",
        "Backpack": 3,
        "Strap": "Yes",
        "Description": ""
    },
    {
        "Name": "Soap",
        "Backpack": 0,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Torch Kit",
        "Backpack": 2,
        "Strap": "-",
        "Description": ""
    },
    {
        "Name": "Waterskin",
        "Backpack": 2,
        "Strap": "Yes",
        "Description": ""
    }
];

const ItemToHtml = item => {

    // TODO: Move backpack formatting into a seaprate function that is re-used
    let backpack = item.Backpack;
    if (Number.isInteger(item.Backpack)) {
        if (item.Backpack > 0) {
            backpack = `<span class='numeric'>${item.Backpack}</span> slot`;
            if (item.Backpack != 1) {
                backpack += 's';
            }
        }
    }

    return `
    <div class='item'>
        <b>${item.Name}</b>
        <br/>
        <br/>
        On Backpack:<span class='right'>${backpack}</span>
        <div>
        On Strap:<span class='right'>${item.Strap}</span>
        </div>
    </div>
    <br/>`;
}

const Main = () => {

    let html = "";
    items.forEach(item => {
        html += ItemToHtml(item);
    });

    document.getElementById('content').innerHTML = html;
}


window.onload = Main;