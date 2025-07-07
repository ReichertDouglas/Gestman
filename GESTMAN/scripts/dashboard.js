google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Status', 'Quantidade'],
    ['Aguardando Peças', 15],
    ['Em Andamento', 8],
    ['Aguardando Aprovação', 5],
    ['Prioridade Alta', 3]
  ]);

  var options = {
    title: '',
    pieHole: 0.4,
    colors: ['#e74c3c', '#3498db', '#f39c12', '#2ecc71'],
    legend: { position: 'labeled' },
    pieSliceText: 'value'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', 'Preventiva', 'Corretiva', 'Preditiva'],
    ['Jan', 12000, 25000, 8000],
    ['Fev', 15000, 18000, 9000],
    ['Mar', 18000, 22000, 10000],
    ['Abr', 14000, 30000, 11000],
    ['Mai', 16000, 28000, 12000]
  ]);

  var options = {
    title: '',
    curveType: 'function',
    legend: { position: 'bottom' },
    colors: ['#2ecc71', '#e74c3c', '#3498db'],
    hAxis: { title: 'Mês' },
    vAxis: { title: 'Custo (R$)' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Setor', 'Custo', { role: 'style' }],
    ['Produção', 45000, 'color: #76A7FA'],
    ['Usinagem', 32000, 'color: #F1C40F'],
    ['Montagem', 28000, 'color: #E67E22'],
    ['Utilidades', 18000, 'color: #2ECC71'],
    ['Expedição', 12000, 'color: #E74C3C'],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    title: '',
    colors: ['#3498db'],
    legend: { position: 'none' },
    hAxis: { title: 'Setor' },
    vAxis: { title: 'Custo (R$)' }
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values1"));
  chart.draw(view, options);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Tipo', 'Horas', { role: 'style' }],
    ['Falha Mecânica', 24, 'color: #E67E22'],
    ['Falha Elétrica', 18, 'color: #3498DB'],
    ['Falta de Peças', 36, 'color: #F1C40F'],
    ['Manutenção Programada', 12, 'color: #2ECC71'],
    ['Outros', 8, 'color: #E74C3C'],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    title: '',
    colors: ['#f39c12'],
    legend: { position: 'none' },
    hAxis: { title: 'Horas' },
    vAxis: { title: 'Tipo de Parada' }
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}