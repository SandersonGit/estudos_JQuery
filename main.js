$(document).ready(function(){
    $('Header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const enderecoNovaImagem = $('#endereço-img').val()
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem)
        $(`
        
            <div class="overlay-img-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver tamanho da imagem real" >
                    Ver imagem em tamanho real
                </a>
            </div>

        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereço-img').val("")
    })


})

