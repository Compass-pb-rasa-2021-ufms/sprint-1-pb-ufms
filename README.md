A página HTML foi construída manualmente, apenas foi utilizado uma ferramenta para gerar o gradiente que está no background.
Utilizo diversos pacotes para realizar a comunicação entre backend -> frontend -> api-location, bem como para o retorno da mensagem.
    -Express
    -Axios
    -Cors
    -Nodemon
Através do input no frontend o usuário informar seu IP, e logo após realiza o envio para o backend.
O backend realiza a comunicação com a api de localização que retorna informações como cidade, estado, pais, latitude e longitude do ip informado.
Realiza tambem o envio para o frontend, onde é exibido os valores no campo em branco ao lado do input da página.