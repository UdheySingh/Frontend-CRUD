var data =
[
    {
        "id": 10001,
        "birthDate": "1953-09-01",
        "firstName": "Georgi",
        "lastName": "Facello",
        "gender": "M",
        "hireDate": "1986-06-25"
    },
    {
        "id": 10002,
        "birthDate": "1964-06-01",
        "firstName": "Bezalel",
        "lastName": "Simmel",
        "gender": "F",
        "hireDate": "1985-11-20"
    },
    {
        "id": 10003,
        "birthDate": "1959-12-02",
        "firstName": "Parto",
        "lastName": "Bamford",
        "gender": "M",
        "hireDate": "1986-08-27T22:00:00.000+0000"
    },
    {
        "id": 10004,
        "birthDate": "1954-04-30",
        "firstName": "Chirstian",
        "lastName": "Koblick",
        "gender": "M",
        "hireDate": "1986-11-30"
    
    },
    {
        "id": 10005,
        "birthDate": "1955-01-20",
        "firstName": "Kyoichi",
        "lastName": "Maliniak",
        "gender": "M",
        "hireDate": "1989-09-11T22:00:00.000+0000"
    
    }
];
var nextId = 10006;
var btnElimina = "<button class='btn btn-danger elimina'>Elimina</button>";
var btnModifica = "<button class='btn btn-danger Modifica'>Modifica</button>";

$(document).ready(function()
{
    displayTable(),
    configuraAggiungi(),
    elimina()
});

var u;

function displayTable() 
{
    var u ='';
    $.each(data, function(id, value)
    {
        u += '<tr>';
        u += '<td>' + value.id + '</td>';
        u += '<td>' + value.firstName + '</td>';
        u += '<td>' + value.lastName + '</td>';
        u += '<td>' + btnElimina + '</td>';
        u += '</tr>';
    });
    $("#contenutoTabella").html(u);

}

function configuraAggiungi() {
    $("#aggiungi").click(function () 
    {
        var nome = prompt('Nome');
        var congnome = prompt('Cognome');
        console.log(nome, congnome);
        var n = {
            "id": nextId,
            "firstName": nome,
            "lastName": congnome,
            "gender": "M",
        };
        data.push(n);
        displayTable();
        nextId++;
    });
}

function elimina() 
{
    $(".elimina").click(function () 
    {
        $(this).parents("tr").fadeOut("fast");
    });
}