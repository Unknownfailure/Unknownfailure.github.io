var statsTable = document.getElementById("minion-output-table");

function CreateStatsTableRow()
{
    var row = statsTable.insertRow();
    row.id = "minion-output-table-" + (row.rowIndex - 1);
    StatsTableCreateRow(row);
}

function DeleteStatsTableRow()
{
    statsTable.deleteRow(-1);
}

function StatsTableCreateRow(row)
{
    var rowIndex = row.rowIndex - 2;
    //console.log("stats: " + rowIndex);
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
    element.className = "minion-output-table-" + RowIndex; 
    element.id = "minion-output-table-Minion-" + RowIndex;
    var tieredMinion = GetMinionNameTier(document.getElementById("minion-input-table-Minion-" + RowIndex).value,
                                         document.getElementById("minion-input-table-Tier-" + RowIndex).value);
    element.textContent= tieredMinion;
    cell.appendChild(element);
}

function CreateSpeedTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "minion-output-table-" + RowIndex; 
    element.id = "minion-output-table-Speed-" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateAPMTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "minion-output-table-" + RowIndex; 
    element.id = "minion-output-table-APM-" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateGeneratedResourceTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "minion-output-table-" + RowIndex; 
    element.id = "minion-output-table-Resource-" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}

function CreateItemsHourTextCell(Row, RowIndex, CellIndex)
{
    var cell = Row.insertCell(CellIndex);
    var element = document.createElement("p");
    element.className = "minion-output-table-" + RowIndex; 
    element.id = "minion-output-table-ItemHour-" + RowIndex;
    element.textContent = 999;
    cell.appendChild(element);
}