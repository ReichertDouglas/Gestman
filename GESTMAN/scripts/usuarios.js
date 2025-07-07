$(document).ready(function () {
    $('#edit, #delete, #edicao').hide();

    var table = $('#minhaTabela').DataTable({
        select: {
        style: 'single',
        info: false
        },
        language: {
            url: "/scripts/pt-br.json"
        },
    });
    
    table.on('select', function(e, dt, type, indexes) {
        if (type === 'row') {
            $('#edit, #delete').show();
        }
    });

    table.on('deselect', function(e, dt, type, indexes) {
        if (type === 'row') {
            $('#edit, #delete').hide();
        }
    });

    document.getElementById('delete').addEventListener('click',function(){
        var linhaSelecionada = table.rows({selected: true});
        
        if (confirm(`Tem certeza que deseja excluir o registro?`)) {
            
            linhaSelecionada.remove().draw();
            
            $(this).prop('disabled', true);
            
            alert('Registro excluído com sucesso!');
        }
        $('#edit, #delete').hide();
    });

    document.getElementById('edit').addEventListener('click',function(){
        $('#edicao').show();
        var linhaSelecionada = table.rows({selected: true});
        var dados = linhaSelecionada.data()[0];

        document.getElementById("nome").placeholder = dados[0]||'';
        document.getElementById("setor").placeholder = dados[1]||'';
        document.getElementById("cargo").placeholder = dados[2]||'';
        document.getElementById("cadastro").placeholder = dados[3]||'';
    });

    document.getElementById('add').addEventListener('click',function(){
        $('#edicao').show();
        var linhaSelecionada = table.rows({selected: true});
        var dados = linhaSelecionada.data()[0];

        document.getElementById("nome").placeholder = dados[0]||'';
        document.getElementById("setor").placeholder = dados[1]||'';
        document.getElementById("cargo").placeholder = dados[2]||'';
        document.getElementById("cadastro").placeholder = dados[3]||'';
    });
    
});