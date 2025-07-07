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

$('#edicao').hide();

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

document.getElementById('add').addEventListener('click', function () {
  $('#edicao').show();
});

function gerar() {
  const barcode = document.getElementById('codigo').value;
  const apiKey = "Yb3Jh2iPiEGPuG5fyDcjbQ==YRbAjtslGVvZUesj";

  fetch(`https://api.api-ninjas.com/v1/barcodegenerate?format=png&type=upc&text=${barcode}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Accept': 'image/png'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao gerar código de barras");
      }
      return response.blob(); // Retorna um Blob, não JSON
    })
    .then(blob => {
      const imgUrl = URL.createObjectURL(blob); // Cria URL temporária da imagem
      $("#imagem").html(`<img id="barcode" src="${imgUrl}" alt="Código de barras">`);
    })
    .catch(error => {
      $("#imagem").html(`<p style="color: red;">${error.message}</p>`);
    });
}

function confirmarAtivo() {
  $('#edicao').hide();
  const nome = document.getElementById('nome').value;
  const setor = document.getElementById('setor').value;
  const descricao = document.getElementById('descricao').value;
  const codigo = document.getElementById('codigo').value;

  table.row.add([
    nome,
    setor,
    descricao,
    codigo,
    new Date().toLocaleString()
  ]).draw(false); // <-- Adicione .draw(false) aqui

  console.log('Dados adicionados:', { nome, setor, descricao, codigo });
}