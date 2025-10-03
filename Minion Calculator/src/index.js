var minionsJSON;
var materialsJSON;
LoadJSON();

function LoadJSON()
{
  loadMinions();
  loadMaterials();
}

function TableCreateRow() {
  CreateInputTableRow();
  CreateStatsTableRow();
}

function TableDeleteRow() {
  DeleteInputTableRow();
  DeleteStatsTableRow();
}

function CreateStatCell(row, index)
{
  var cell = row.insertCell(index);
  var exactMinion = document.createElement("td");
  exactMinion.innerHTML = minionsJSON.Minions[0].Name;
  exactMinion.id = "ExactMinionText";

  cell.appendChild(exactMinion);

  return cell;
}

function UpdateSelectedMinionStats(RowIndex)
{
  document.getElementById("minion-output-table-Minion-" + RowIndex).innerHTML = GetMinionNameTier(document.getElementById("minion-input-table-Minion-" + RowIndex).value,
                                                                                       document.getElementById("minion-input-table-Tier-" + RowIndex).value);
  var speed = GetMinionSpeedTotal(RowIndex);
  var generatedResourcesArr = GetGeneratedItems(RowIndex);
  var generatedResourcesText = GetItemName(generatedResourcesArr).join("<br>");
  var itemHourArr = CalculateItemHour(generatedResourcesArr, speed);
  var itemHourText = itemHourArr.join("<br>"); 
  var xpHourArr = CalculateXPHour(generatedResourcesArr, speed);
  var xpHourText = xpHourArr.join("<br>"); 
  document.getElementById("minion-output-table-Speed-" + RowIndex).innerHTML = speed.toFixed(2);
  document.getElementById("minion-output-table-APM-" + RowIndex).innerHTML = (60 / speed).toFixed(2);
  document.getElementById("minion-output-table-Resource-" + RowIndex).innerHTML = generatedResourcesText;
  document.getElementById("minion-output-table-ItemHour-" + RowIndex).innerHTML = itemHourText;
  document.getElementById("minion-output-table-XPHour-" + RowIndex).innerHTML = xpHourText;
}

function GetMinionSpeedTotal(RowIndex)
{
  var minionName = document.getElementById("minion-input-table-Minion-" + RowIndex).value;
  var minionTier = document.getElementById("minion-input-table-Tier-" + RowIndex).value;
  var minion = minionsJSON.Minions.find(item => item.Name == minionName);
  var baseSpeed = minion.Minion_Speed[minionTier - 1];

  var fuelName = document.getElementById("minion-input-table-Fuel-" + RowIndex).value;
  var fuel = minionsJSON.Fuels.find(item => item.Name == fuelName);
  var fuelSpeed = fuel.Fuel_Effects;

  var upgrade1Name = document.getElementById("minion-input-table-Upgrade-1-" + RowIndex).value;
  var upgrade1 = minionsJSON.Upgrades.find(item => item.Name == upgrade1Name);
  var upgrade1Speed = upgrade1.Upgrade_Effects;

  var upgrade2Name = document.getElementById("minion-input-table-Upgrade-2-" + RowIndex).value;
  var upgrade2 = minionsJSON.Upgrades.find(item => item.Name == upgrade2Name);
  var upgrade2Speed = upgrade2.Upgrade_Effects;

  var boosters = fuelSpeed + upgrade1Speed + upgrade2Speed;
  var newSpeed = baseSpeed / (1 + boosters);

  return newSpeed;
}

function GetMinionNameTier(MinionFullName, MinionTier)
{
  var minionShortName = MinionFullName.replace(" Minion", "");
  return minionShortName + " " + MinionTier;
}

function GetGeneratedItems(RowIndex)
{
  var allItems = [];
  var minionName = document.getElementById("minion-input-table-Minion-" + RowIndex).value;
  var minion = minionsJSON.Minions.find(item => item.Name == minionName);
  allItems.push(GetGeneratedItem(minion));

  var upgrade1Name = document.getElementById("minion-input-table-Upgrade-1-" + RowIndex).value;
  var upgrade1 = minionsJSON.Upgrades.find(item => item.Name == upgrade1Name);
  allItems.push(GetGeneratedItem(upgrade1));

  var upgrade2Name = document.getElementById("minion-input-table-Upgrade-2-" + RowIndex).value;
  var upgrade2 = minionsJSON.Upgrades.find(item => item.Name == upgrade2Name);
  allItems.push(GetGeneratedItem(upgrade2));

  return allItems;
}

function CalculateItemHour(ItemsJSON, MinionSpeed)
{
  var itemAmt = [];
  ItemsJSON.forEach((element) => 
  {
    for (var i = 0; i < element.length;i++)
    {
      var itemDropAvg = element[i].Drop_Amount * element[i].Drop_Chance;
      var hourDrop = (3600 / (MinionSpeed * 2)) * itemDropAvg;
      itemAmt.push(hourDrop.toFixed(2));
    }
  });
  return itemAmt;
}

function CalculateXPHour(ItemsJSON, MinionSpeed)
{
  var itemAmt = [];
  ItemsJSON.forEach((element) => 
  {
    for (var i = 0; i < element.length;i++)
    {
      var itemDropAvg = element[i].Drop_Amount * element[i].Drop_Chance;
      var hourDrop = (3600 / (MinionSpeed * 2)) * itemDropAvg;
      console.log(element[i].Name);
      console.log(element[i]);
      itemAmt.push(hourDrop * element[i].Exp_Amount);
    }
  });
  return itemAmt;
}

function GetGeneratedItem(JSONIdentifier)
{
  return JSONIdentifier.Generated_Item;
}

function GetItemName(ItemsJSON)
{
  var itemNames = [];
  ItemsJSON.forEach((element) => 
  {
    for (var i = 0; i < element.length;i++)
    {
      itemNames.push(element[i].Name);
    }
  });
  return itemNames;
}

async function loadMinions() {
  const res = await fetch("json/Minions.json");
  const data = await res.json();
  minionsJSON = data; // store into the global variable
  console.log("Loaded:", minionsJSON);
}

async function loadMaterials() {
  const res = await fetch("json/Materials.json");
  const data = await res.json();
  materialsJSON = data; // store into the global variable
  console.log("Loaded:", materialsJSON);
}