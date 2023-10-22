# estudos_JQuery

1. **Título e Botão "Nova Imagem +"**:
   - O título "Galeria de fotos" é exibido no cabeçalho da página.
   - Ao clicar no botão "Nova Imagem +", o formulário para adicionar uma nova imagem é exibido, pois é atribuída a ele a ação `$('form').slideDown();`.

2. **Formulário para Inserir Nova Imagem**:
   - Abaixo do cabeçalho, há um formulário com a funcionalidade de adicionar novas imagens à galeria.
   - O formulário consiste em um campo de entrada de URL e dois botões: "Adicionar" e "Cancelar".
   - O campo de entrada requer que o usuário insira a URL da imagem que deseja adicionar.
   - O botão "Adicionar" envia o formulário, desencadeando o processo de adicionar uma nova imagem à galeria.
   - O botão "Cancelar" fecha o formulário, ocultando-o.

3. **Galeria de Imagens**:
   - Abaixo do formulário, há uma lista `<ul>` que contém imagens na forma de elementos `<li>`.
   - Cada elemento `<li>` representa uma imagem e inclui a imagem em si (`<img>`) e um link de sobreposição (`<div class="overlay-img-link">`) que permite ao usuário ver a imagem em tamanho real em uma nova guia quando passa o mouse sobre a imagem.
   - A sobreposição de link aparece quando o mouse está sobre a imagem, usando o CSS para criar um efeito de transição (`opacity: 1`) e tornar o link visível.
   - As imagens existentes são pré-carregadas no código HTML com URLs que estão no formato "assets/fotoX.jpg" (onde X é um número).

4. **Adicionar Nova Imagem**:
   - Quando o formulário é enviado, o código jQuery captura o valor da URL inserida no campo de entrada.
   - Uma nova entrada de imagem é criada com a URL fornecida e um link para visualização em tamanho real.
   - Essa nova entrada é adicionada à lista `<ul>` existente e, em seguida, é exibida com um efeito de desvanecimento suave (`fadeIn`) para que o usuário a veja imediatamente.
   - O campo de entrada de URL é limpo após a adição da imagem.

Em resumo, a página permite que os usuários visualizem uma galeria de imagens e adicionem novas imagens por meio de um formulário simples. O código jQuery controla a exibição do formulário, a adição de novas imagens à galeria e o efeito de sobreposição nos links das imagens existentes. A página é estilizada com CSS para uma melhor experiência visual.
