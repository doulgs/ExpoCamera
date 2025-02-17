# QR Code Presence Validator

## Visão Geral

O **QR Code Presence Validator** é um aplicativo móvel desenvolvido com Expo, React Native e TypeScript, projetado para validar a presença de usuários por meio da leitura de QR Codes. Com um design limpo e profissional, o app incentiva o usuário a escanear seu QR Code para confirmar sua presença.

## Funcionalidades

- **Home Profissional:** Tela inicial com instruções claras e incentivo para a validação de presença.
- **Modal de Scanner:** Modal full-screen com câmera, exibindo um overlay centralizado para orientar a leitura do QR Code.
- **Confirmação de Presença:** Após o scan, exibe uma mensagem de validação e os dados capturados.
- **Código Modularizado:** Componentes separados para facilitar a manutenção e evolução do projeto:
  - **Header:** Exibe o título do aplicativo.
  - **Result:** Mostra o resultado do scan e uma mensagem de validação.
  - **CameraModal:** Modal que integra a câmera com overlay para o scanner.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/qr-code-presence-validator.git
   cd qr-code-presence-validator
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Instale o Expo CLI (caso ainda não tenha):**

   ```bash
   npm install -g expo-cli
   ```

## Executando o Aplicativo

1. **Inicie o servidor de desenvolvimento do Expo:**

   ```bash
   npm run dev
   ```

2. **Abra o aplicativo:**
   - Execute em um emulador/simulador.

## Estrutura do Projeto

```
qr-code-presence-validator/
├── App.tsx
├── components/
│   ├── Header.tsx
│   ├── Result.tsx
│   └── CameraModal.tsx
├── package.json
└── README.md
```

- **App.tsx:** Ponto de entrada da aplicação, gerencia a lógica principal, permissões e exibição dos modais.
- **components/Header.tsx:** Componente responsável pelo cabeçalho da aplicação.
- **components/Result.tsx:** Componente que exibe o resultado do scan e a mensagem de presença validada.
- **components/CameraModal.tsx:** Modal full-screen que integra o scanner de QR Code com um overlay para centralizar a área de leitura.

## Dependências

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/)

## Contribuição

Contribuições são bem-vindas! Caso queira melhorar o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Agradecimentos

- Documentação do [Expo](https://docs.expo.dev/)
- Documentação do [React Native](https://reactnative.dev/)
- Inspirações de design moderno e usabilidade
```
