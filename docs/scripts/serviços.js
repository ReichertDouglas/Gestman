$('#details').hide();
$('#edicao').hide();

var table = $('#minhaTabela').DataTable({
  language: {
    url: "/scripts/pt-br.json"
  }, select: {
    style: 'single',
    info: false
  }
});

table.on('select', function (e, dt, type, indexes) {
  if (type === 'row') {
    var data = table.row(indexes).data();
    $('#details').show();
    $('#edicao-content').html(`
      <h2>Detalhes do Serviço</h2>
      <p><strong>Máquina:</strong> ${data[0]}</p>
      <p><strong>Tipo de Serviço:</strong> ${data[1]}</p>
      <p><strong>Descrição:</strong> ${data[2]}</p>
      <p><strong>Data e Hora:</strong> ${data[3]}</p>
    `);
    if (data[4] == '') {
      $('#edicao-content').append(`<div id="buttons" class="buttonForm" style="width: fit-content; display: flex; align-items: center;">
        <button id="edit" class="atender" onclick="atender(${indexes[0]})">Atender chamado</button>
      </div>`);
    } else {
      $('#edicao-content').append(`<div id="buttons" class="buttonForm" style="width: fit-content; display: flex; align-items: center;">
        <button id="edit" onclick="preencher()">Preencher formulário</button>
      </div>`);
    }
  }
});

table.on('deselect', function (e, dt, type, indexes) {
  if (type === 'row') {
    $('#details').hide();
    $('#edicao-content').empty();
  }
});

function atender() {
  var selectedRow = table.row({ selected: true });
  var selectedData = selectedRow.data();
  if (selectedData && selectedData[4] === '') {
    selectedData[4] = localStorage.getItem('username');
    selectedRow.data(selectedData).draw(false); // Update the row with new data
    $('.atender').hide();
  } else {
    alert('Nenhum chamado selecionado!');
  }
}

function preencher(e, dt, type, indexes) {
  var selectedRow = table.row({ selected: true });
  var data = selectedRow.data();
  $('#details').show();
  $('#edicao-content').empty();
  $('#details').show();
  $('#edicao-content').append(`
      <h2>Detalhes do Serviço</h2>
      <p><strong>Máquina:</strong> ${data[0]}</p>
      <p><strong>Tipo de Serviço:</strong> ${data[1]}</p>
      <p><strong>Descrição:</strong> ${data[2]}</p>
      <p><strong>Data e Hora:</strong> ${data[3]}</p>
      <p><strong>Manutentor:</strong> ${data[4]}</p>
      <div id="formulario">
        <form id="formulario-servico" style="display: flex; flex-direction: column; gap: 10px;">
          <label for="descricao"><strong>Descrição do Serviço:<strong></label>
          <textarea id="descricao" name="descricao" required></textarea>
          </form>
        </div>
        <button id="edit" type="submit" onclick="enviar()">Enviar</button>
    `);
}

function visualServ() {
  $('#lista').empty();
  $('#lista').append(`<p style="font-size: xx-large; margin-top: 30px; margin-bottom: 30px; font-weight: bold;">Serviços Finalizados</p>
<div id="minhaTabela">
    <table id="tabelaFinalizada" class="table table-hover table-responsive">
        <thead>
            <tr>
                <th scope="col">Máquina</th>
                <th scope="col">Setor</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data/Hora</th>
                <th scope="col">Serviço realizado</th>
                <th scope="col">Manutentor</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr>
                <td>Prensa Hidráulica MH-45</td>
                <td>Produção</td>
                <td>Vazamento de óleo</td>
                <td>28/06/2025 14:30</td>
                <td>Substituição de vedação</td>
                <td>Carlos Silva</td>
            </tr>
            <tr>
                <td>Torno CNC T-2000</td>
                <td>Usinagem</td>
                <td>Barulho anormal</td>
                <td>27/06/2025 09:15</td>
                <td>Ajuste de rolamentos</td>
                <td>Ana Oliveira</td>
            </tr>
            <tr>
                <td>Esteira Transportadora E-12</td>
                <td>Montagem</td>
                <td>Esteira desalinhada</td>
                <td>25/06/2025 16:45</td>
                <td>Alinhamento e tensão de correias</td>
                <td>Roberto Santos</td>
            </tr>
            <tr>
                <td>Forno Industrial FI-300</td>
                <td>Tratamento Térmico</td>
                <td>Temperatura instável</td>
                <td>23/06/2025 11:20</td>
                <td>Calibração de termopares</td>
                <td>Mariana Costa</td>
            </tr>
            <tr>
                <td>Compressor AR-75</td>
                <td>Utilidades</td>
                <td>Pressão irregular</td>
                <td>20/06/2025 08:30</td>
                <td>Limpeza de válvulas</td>
                <td>José Pereira</td>
            </tr>
            <tr>
                <td>Empacotadora EP-100</td>
                <td>Expedição</td>
                <td>Sensores não detectam</td>
                <td>18/06/2025 13:10</td>
                <td>Substituição de sensores</td>
                <td>Fernanda Lima</td>
            </tr>
            <tr>
                <td>Retífica RPL-500</td>
                <td>Usinagem</td>
                <td>Vibração excessiva</td>
                <td>15/06/2025 10:45</td>
                <td>Balanceamento de eixo</td>
                <td>Ricardo Alves</td>
            </tr>
            <tr>
                <td>Misturador MX-30</td>
                <td>Preparação</td>
                <td>Vazamento no eixo</td>
                <td>12/06/2025 15:30</td>
                <td>Substituição de gaxetas</td>
                <td>Patrícia Souza</td>
            </tr>
            <tr>
                <td>Serra Circular SC-400</td>
                <td>Corte</td>
                <td>Lâmina desalinhada</td>
                <td>10/06/2025 07:50</td>
                <td>Ajuste de ângulo de corte</td>
                <td>Luiz Fernandes</td>
            </tr>
            <tr>
                <td>Bomba Centrífuga BC-50</td>
                <td>Utilidades</td>
                <td>Baixa vazão</td>
                <td>08/06/2025 14:15</td>
                <td>Limpeza de rotor</td>
                <td>Camila Rocha</td>
            </tr>
            <tr>
                <td>Fresa FV-250</td>
                <td>Usinagem</td>
                <td>Eixo travando</td>
                <td>05/06/2025 09:30</td>
                <td>Lubrificação completa</td>
                <td>Gustavo Henrique</td>
            </tr>
            <tr>
                <td>Caldeira CDL-200</td>
                <td>Utilidades</td>
                <td>Pressão acima do normal</td>
                <td>03/06/2025 11:45</td>
                <td>Substituição de válvula de segurança</td>
                <td>Eduardo Martins</td>
            </tr>
            <tr>
                <td>Guindaste G-15</td>
                <td>Movimentação</td>
                <td>Cabo desfiado</td>
                <td>31/05/2025 16:20</td>
                <td>Substituição de cabo de aço</td>
                <td>André Luiz</td>
            </tr>
            <tr>
                <td>Injetora INJ-800</td>
                <td>Plásticos</td>
                <td>Vazamento de resina</td>
                <td>28/05/2025 08:10</td>
                <td>Substituição de bico injetor</td>
                <td>Sandra Vieira</td>
            </tr>
            <tr>
                <td>Lavadora Industrial LI-40</td>
                <td>Limpeza</td>
                <td>Vazamento de água</td>
                <td>25/05/2025 13:55</td>
                <td>Substituição de mangueiras</td>
                <td>Paulo Roberto</td>
            </tr>
        </tbody>
    </table>
    <div id="buttons" style="width: fit-content; display: flex; align-items: center;">
      <button id="edit" onclick="gerarPDF()">Gerar relatorio em PDF</button>
    </div>
</div>`)
}

function gerarPDF() {
  var elemento = document.getElementById("tabelaFinalizada");
  html2pdf().from(elemento).save("relatorio.pdf");
}

function abrirChamado() {
  $('#edicao').show();
}

function confirmarChamado() {
  $('#edicao').hide();
  const maquina = document.getElementById('maquina').value;
  const setor = document.getElementById('setor').value;
  const descricao = document.getElementById('descricao').value;

  table.row.add([
    maquina,
    setor,
    descricao,
    new Date().toLocaleString(),
    '' 
  ]).draw(false); // <-- Adicione .draw(false) aqui

  console.log('Dados adicionados:', {maquina, setor, descricao});
}

function enviar() {
  // Esconde o details
  $('#details').hide();
  $('#edicao-content').empty();

  // Remove a linha selecionada da tabela
  var selectedRow = table.row({ selected: true });
  if (selectedRow.any()) {
    selectedRow.remove().draw(false);
  }
}