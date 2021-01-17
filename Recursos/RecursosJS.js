/*Chart 1*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(media_consultas);

function media_consultas() {
  var data = google.visualization.arrayToDataTable([
    ['Ano', 'Média de Consultas'],
    ['2010',  15],
    ['2011',  10],
    ['2012',  23],
    ['2013',  17],
    ['2014',  23],
    ['2015',  10],
    ['2016',  11],
    ['2017',  27],
    ['2018',  33],
    ['2019',  45],
    ['2020',  46],
    ['2021',  51],
    ['2022',  55],
    ['2023',  57],
    ['2024',  65],
    ['2025',  68],
    ['2026',  70],
    ['2027',  72],
    ['2028',  68],
    ['2029',  75],
    ['2030',  77],
    ['2031',  82]


  ]);
  var options = {
    title: 'Média de Consultas',
    curveType: 'function',
    legend: { position: 'right' }
  };
  
      var chart = new google.visualization.LineChart(document.getElementById('chart_media_consultas'));
      chart.draw(data, options);
    }
    

/*Chart 2*/
google.charts.setOnLoadCallback(recursos_humanos);

  function recursos_humanos() {
    var data = google.visualization.arrayToDataTable([
      ['Ano', 'Médicos', 'Enfermeiros'],
      ['2010',  3,      5],
      ['2011',  3,      5],
      ['2012',  4,      6],
      ['2013',  4,      6],
      ['2014',  4,      6],
      ['2015',  3,      5],
      ['2016',  3,      5],
      ['2017',  5,      7],
      ['2018',  5,      7],
      ['2019',  6,      8],
      ['2020',  7,      9],
      ['2021',  7,      9],
      ['2022',  6,      8],
      ['2023',  6,      8],
      ['2024',  8,     10],
      ['2025',  8,     10],
      ['2026',  10,    12],
      ['2027',  10,    12],
      ['2028',  11,    13],
      ['2029',  12,    14],
      ['2030',  11,    13],
      ['2031',  13,    15],
    ]);

      var options = {
        title: 'Profissionais de saúde',
        curveType: 'function',
        legend: { position: 'right' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('recursos_humanos_chart'));

      chart.draw(data, options);
}

$(window).resize(function(){
  media_consultas();
  recursos_humanos()
});