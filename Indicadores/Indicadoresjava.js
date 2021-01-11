
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(sexo);
google.charts.setOnLoadCallback(idade);
google.charts.setOnLoadCallback(consultas);
google.charts.setOnLoadCallback(especialidade);
google.charts.setOnLoadCallback(visitas);
google.charts.setOnLoadCallback(custo);

function sexo() {

  var data = google.visualization.arrayToDataTable([
    ['Sexo', 'Numero'],
    ['Masculino', 69],
    ['Feminino', 89],
    ['Outro',    9]
  ]);

  var options = {
    title: 'Sexo'
  };

  var chart = new google.visualization.PieChart(document.getElementById('sexo_graph'));

  chart.draw(data, options);
}

  function idade() {

    var data = google.visualization.arrayToDataTable([
      ['idade', 'Numero'],
      ['0 - 5 anos', 25],
      ['6 - 10 anos', 40],
      ['11 - 18 anos', 71],
      ['19 - 35 anos', 60],
      ['36 - 50 anos', 90],
      ['51 - 65 anos', 86],
      ['66 - 100 anos', 28]
    ]);
  
    var options = {
      title: 'Idades'
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('idade_graph'));
  
    chart.draw(data, options);
  }
  

  function consultas() {
    var data = google.visualization.arrayToDataTable([
      ["ano", "Consultas por utente", { role: "style" } ],
      ["1993", 2.5, "#2C2C2C"],
      ["2000", 2.8, "#878787"],
      ["2010", 3.1, "#2C2C2C"],
      ["2020", 3.7, "#878787"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "Consultas por Utente",
     
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("consultas_graph"));
    chart.draw(view, options);
  }

  function especialidade() {
    var data = google.visualization.arrayToDataTable([
      ['Ano', 'Medicina geral e familiar', 'Estomatologia e medicina dentária', 'Planeamento familiar', 'Pediatria', 'Saúde materna'],
      ['1993',  2878,      2102,         555,             4316,           734],
      ['2020',  4074,      428,         1196,             3128,          662]
    ]);

    var options = {
      title : 'Consultas Medicas Por Especialidade',
      vAxis: {title: 'Total'},
      hAxis: {title: 'Ano'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    };

    var chart = new google.visualization.ComboChart(document.getElementById('especialidade_graph'));
    chart.draw(data, options);
  }

  function visitas() {
    var data = google.visualization.arrayToDataTable([
      ["ano", "Taxa de visitas domiciliárias médicas", { role: "style" } ],
      ["1993", 52, "#2C2C2C"],
      ["2000", 60, "#878787"],
      ["2010", 92, "#2C2C2C"],
      ["2020", 112, "#878787"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "Taxa de visitas domiciliárias médicas",
     
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("visitas_graph"));
    chart.draw(view, options);
  }



  function custo() {
    var data = google.visualization.arrayToDataTable([
      ["ano", "Custo médio total por consulta médica", { role: "style" } ],
      ["1993", 60 , "#2C2C2C"],
      ["2000",  100, "#878787"],
      ["2010",  256, "#2C2C2C"],
      ["2020",  323, "#878787"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "Custo médio total por consulta médica",
     
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("custo_graph"));
    chart.draw(view, options);
  }



$(window).resize(function(){
  sexo();
  idade();
  consultas();
  especialidade();
  visitas();
  custo();
});
