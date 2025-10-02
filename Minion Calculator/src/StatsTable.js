var statsTable = document.getElementById("minionOutput");

function CreateStatsTableRow()
{
    var row = statsTable.insertRow();
    row.id = "StatsTableRow" + (row.rowIndex - 1);
    StatsTableCreateRow(row);
}

function DeleteStatsTableRow()
{
    statsTable.deleteRow(-1);
}

function StatsTableCreateRow(row)
{
    var rowIndex = row.rowIndex - 2;
      console.log("stats: " + rowIndex);
    CreateMinionTextCell(row, rowIndex, 0);
    CreateSpeedTextCell(row, rowIndex, 1);
    CreateAPMTextCell(row, rowIndex, 2);
    CreateGeneratedResourceTextCell(row, rowIndex, 3);
    CreateItemsHourTextCell(row, rowIndex, 4);
}

function CreateMinionTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "StatTableRow" + RowIndex; 
    element.id = "MinionTextCell" + RowIndex;
    var tieredMinion = GetMinionNameTier(document.getElementById("MinionSelectCell" + RowIndex).value,
                          document.getElementById("TierNumberCell" + RowIndex).value);
    element.textContent= tieredMinion;
    cell.appendChild(element);
}

function CreateSpeedTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "StatTableRow" + RowIndex; 
    element.id = "SpeedTextCell" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateAPMTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "StatTableRow" + RowIndex; 
    element.id = "APMTextCell" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateGeneratedResourceTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "StatTableRow" + RowIndex; 
    element.id = "GeneratedResourceTextCell" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateItemsHourTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "StatTableRow" + RowIndex; 
    element.id = "ItemsHourTextCell" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}