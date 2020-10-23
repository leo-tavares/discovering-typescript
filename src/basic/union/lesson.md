Como que faz para combinar tipos diversos com typescript? Onde eu posso aplicar? Union! Esse é type que nos parmite fazer essa combinação no typescript.

O gosto de dizer que o type union é muito utilizado quando queremos seguir a ideia do "ou issso ou aquilo" semelhante a porta lógica "XOR" para quem veio da eletrônica/computação rs. Veja a definiçao do state

A variável/propriedade que tiver este tipo pode ter uma e somente uma dos valores.

> const deviceState: State = "Unknown"

Um outro exemplo de utilização é com o redux, vejam o type Action, ele pode assumir um e apenas um dos tipos definidos no caso são "ou LogAction ou ClearLogsAction ou ConnectAction ou DisconnectAction". (esse monte de "ou" foi intencional para enfatizar a ideia do "XOR").

Essa é ideia do union, no decorrer dessa semana eu usei diversas vezes para demonstrar alguns tipos especias do typescript, é uma ferramente muito utilizada e que ás vezes não paramos para ver como ela é importante.

O código do examplo foi extraido de lib react-native-ble-plx, uma exelente lib pra quem quiser fazer integração com arduino via bluetooth. Um detalhe interessante é que o time dessa lib faz uso do FLow que nada mais é que um type-checker para o javascript.

