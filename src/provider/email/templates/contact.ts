export const contactTemplate = ({
    company,
    email,
    firstName,
    lastName,
    message,
    phone
}: {
    company: string;
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    phone: string;
}) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova Mensagem de Contato</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        .field {
            margin-bottom: 15px;
        }
        .field strong {
            display: block;
            margin-bottom: 5px;
            color: #666;
        }
        .message {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h2>Nova mensagem de contato do website</h2>
    </div>
    
    <div class="content">
        <div class="field">
            <strong>Nome:</strong>
            ${firstName} ${lastName}
        </div>
        
        <div class="field">
            <strong>Email:</strong>
            ${email}
        </div>
        
        <div class="field">
            <strong>Telefone:</strong>
            ${phone}
        </div>
        
        <div class="field">
            <strong>Empresa:</strong>
            ${company}
        </div>
        
        <div class="message">
            <strong>Mensagem:</strong>
            <p>${message}</p>
        </div>
    </div>
</body>
</html>
`; 