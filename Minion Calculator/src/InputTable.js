var rowTable = document.getElementById("minionInputTable");

function CreateInputTableRow()
{
    var row = rowTable.insertRow();
    row.id = "InputTableRow" + (row.rowIndex - 1);
    
    InputTableCreateRow(row);
}

function DeleteInputTableRow()
{
    rowTable.deleteRow(-1);
}

function InputTableCreateRow(row)
{
  var rowIndex = row.rowIndex - 2;
  console.log("input: " + rowIndex);
  CreateMinionSelectCell(row, rowIndex, 0);
  CreateTierNumberCell(row, rowIndex, 1);
  CreateCountNumberCell(row, rowIndex, 2);
  CreateFuelSelectCell(row, rowIndex, 3);
  CreateUpgradeSelectCell(row, rowIndex, 4, 1);
  CreateUpgradeSelectCell(row, rowIndex, 5, 2);
}

function CreateMinionSelectCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("select");
    element.className = "InputTableRow" + RowIndex; 
    element.id = "MinionSelectCell" + RowIndex;
    element.onchange = function() { UpdateSelectedMinionStats(RowIndex);};
    cell.innerHTML = ""; // clear old options
    cell.appendChild(element);

    minionsJSON.Minions.forEach((minion) => {
        const option = document.createElement("Option");
        option.value = minion.Name;
        option.textContent = minion.Name;
        element.appendChild(option);
    });
}

function CreateCountNumberCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("input");
    element.className = "InputTableRow" + RowIndex; 
    element.id = "CountNumberCell" + RowIndex;
    element.type = "number";
    element.value = 1;
    element.min = 0;
    element.onchange = function() { UpdateSelectedMinionStats(RowIndex);};
    cell.appendChild(element);
}

function CreateTierNumberCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("input");
    element.className = "InputTableRow" + RowIndex; 
    element.id = "TierNumberCell" + RowIndex;
    element.type = "number";
    element.max = 12;
    element.min = 1;
    element.value = 1;
    element.onchange = function() { UpdateSelectedMinionStats(RowIndex);};
    cell.appendChild(element);
}

function CreateFuelSelectCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("select");
    element.className = "InputTableRow" + RowIndex;
    element.id = "FuelSelectCell" + RowIndex;
    cell.innerHTML = ""; // clear old options
    element.onchange = function() { UpdateSelectedMinionStats(RowIndex);};
    cell.appendChild(element);

    minionsJSON.Fuels.forEach((fuels) => {
        const option = document.createElement("Option");
        option.value = fuels.Name;
        option.textContent = fuels.Name;
        element.appendChild(option);
    });
}

function CreateUpgradeSelectCell(Row, RowIndex, CellIndex, UpgradeIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("select");
    element.className = "InputTableRow" + RowIndex;
    element.id = "UpgradeSelectCell" + UpgradeIndex + RowIndex;
    cell.innerHTML = ""; // clear old options
    element.onchange = function() { UpdateSelectedMinionStats(RowIndex);};
    cell.appendChild(element);

    minionsJSON.Upgrades.forEach((upgrades) => {
        const option = document.createElement("Option");
        option.value = upgrades.Name;
        option.textContent = upgrades.Name;
        element.appendChild(option);
  });
}

