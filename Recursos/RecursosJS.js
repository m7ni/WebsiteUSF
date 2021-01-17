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
    legend: { position: 'bottom' }
  };
  
      var chart = new google.visualization.LineChart(document.getElementById('chart_media_consultas'));
      chart.draw(data, options);
    }
    $(window).resize(function(){
      media_consultas();
    });
    