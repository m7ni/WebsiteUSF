window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Previsão do número de consultas diárias médias para os próximos 5 anos"
        },
        data: [{        
            type: "line",
              indexLabelFontSize: 16,
            dataPoints: [
                { x:2015 , y: 15 },
                { x:2016 , y: 13 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { x:2017 , y: 16},
                { x:2018 , y: 15 },
                { x:2019 , y: 14 },
                { x:2020 , y: 18 },
                { x:2021 , y: 20 },
                { x:2022 , y: 21 },
                { x:2023 , y: 19 },
                { x:2024 , y: 23 },
                { x:2025 , y: 25 },
                { x:2026 , y: 26 , indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
            ]
        }]
    });
    chart.render();
    
    }