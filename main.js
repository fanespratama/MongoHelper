function tambah(element) {
    var table = document.getElementById(element);
    var newRow = table.insertRow();
    var leftCell = newRow.insertCell(0);
    var rightCell = newRow.insertCell(1);
    var checkboxCell = newRow.insertCell(2);
    var deleteCell = newRow.insertCell(3);

    leftCell.className = "left";
    rightCell.className = "right";
    checkboxCell.className = "checkbox";
    deleteCell.className = "delete";

    leftCell.innerHTML = '<textarea placeholder="key" rows="1"></textarea>';
    rightCell.innerHTML = '<textarea placeholder="value" rows="1"></textarea>';
    checkboxCell.innerHTML = '<div class="form-check form-check-inline">\n<input class="form-check-input" type="checkbox" name="int" id="intCheckbox">\n<label class="form-check-label" for="intCheckbox">int</label>\n</div>\n<div class="form-check form-check-inline">\n<input class="form-check-input" type="checkbox" name="array" id="arrayCheckbox">\n<label class="form-check-label" for="arrayCheckbox">array</label>\n</div>';
    deleteCell.innerHTML = `<button class="btn btn-danger" onclick="hapus('${element}', this.parentNode.parentNode)">-</button>`;
}

function hapus(element, row) {
    var table = document.getElementById(element);
    table.deleteRow(row.rowIndex);
}

function copyToClipboard(result) {
    var resultTextArea = document.getElementById(result);
    resultTextArea.select();
    resultTextArea.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    var copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied!";
    setTimeout(function() {
        copyButton.textContent = "Click to Copy";
    }, 2000);
}


function generateInsert() {
    var table = document.getElementById('dataTable');
    var rows = table.getElementsByTagName("tr");

    var result = {};

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var key = row.querySelector(".left textarea").value;
        var value = row.querySelector(".right textarea").value;
        var isArray = row.querySelector("[name='array']").checked;
        var isInt = row.querySelector("[name='int']").checked;

        if (key && value) {
            if (isArray) {
                value = value.split(",").map(item => item.trim());

                if (isInt) {
                    value = value.map(item => parseInt(item));
                }
            } else if (isInt) {
                value = parseInt(value);
            }
            result[key] = value;
        }
    }

    var resultTextArea = document.getElementById('result-insert');
    resultTextArea.value = JSON.stringify(result);
}

function generateFind() {
        
}


