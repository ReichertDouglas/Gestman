$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
  var inicio = $('#dataInicio').val();
  var fim = $('#dataFim').val();
  var dataTabela = data[3];

  if (inicio) inicio = new Date(inicio);
  if (fim) fim = new Date(fim);
  var data = new Date(dataTabela);

  if ((!inicio || data >= inicio) && (!fim || data <= fim)) {
    return true;
  }
  return false;
});

$(document).ready(function () {
  var tabela = $('#minhaTabela').DataTable();

  $('#dataInicio, #dataFim').on('change', function () {
    tabela.draw();
  });
});

async function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.autoTable({ 
      html: '#minhaTabela', 
      startY: 20,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] }, // Cor do cabeçalho
      theme: 'grid'
    });

    doc.save('tabela.pdf');
  }

var table = $('#minhaTabela').DataTable({
        language: {
            url: "/scripts/pt-br.json"
        },
});