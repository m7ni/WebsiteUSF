
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(sexo);

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
  