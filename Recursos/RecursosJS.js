google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(media_consultas);

function media_consultas() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Média');

      data.addRows([
        [2010, 15],   [2011, 10],  [2012, 23],  [2013, 17],  [2014, 18],  [2015, 9],
        [2016, 11],  [2017, 27],  [2018, 33],  [2019, 40],  [2020, 32], [2021, 35],
        [2022, 30], [2023, 40], [2024, 42], [2025, 47], [2026, 44], [2027, 48],
        [2028, 52], [2029, 54], [2030, 42], [2031, 55], 
      ]);

      var options = {
        hAxis: {
          title: 'Anos'
        },
        vAxis: {
          title: 'Consultas'
        },
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_media_consultas'));
      chart.draw(data, options);
    }
    $(window).resize(function(){
      media_consultas();
    });
    