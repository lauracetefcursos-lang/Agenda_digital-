// =====================================
// CADASTRO
// =====================================

const formCadastro =
    document.getElementById("formCadastro");


if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Pegar os dados do formulário

            const tipo =
                document.getElementById("tipo").value;

            const nome =
                document.getElementById("nome").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const senha =
                document.getElementById("senha").value;


            // Verificar se os campos estão preenchidos

            if (
                tipo === "" ||
                nome === "" ||
                email === "" ||
                senha === ""
            ) {

                alert(
                    "Preencha todos os campos."
                );

                return;
            }

// PEGA OS DADOS DO CADASTRO
const dados = {
    tipo_de_usuario: document.getElementById("tipo_de_usuario").value,
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    senha: document.getElementById("senha").value
};


            // =====================================
            // ENVIAR PARA O GOOGLE APPS SCRIPT
            // =====================================

            fetch("https://script.google.com/macros/s/AKfycbweQLTadWSWW7cfk2aXVgi7ewGmVLcSBZ525u7JMqugk6cBXKFCX5rY--HKilenoJ3K/exec",
                {

                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type":"application/json"

                    },

                    body: JSON.stringify(dados)

                }
            )


            .then(function() {

                alert(
                    "Cadastro realizado com sucesso! 🎉"
                );


                // Salvar temporariamente o usuário
                // para poder entrar na agenda

                localStorage.setItem(
                    "usuario",
                    JSON.stringify(dados)
                );


                // Ir para a agenda

                window.location.href =
                    "agenda.html";

            })


            .catch(function(erro) {

                console.error(erro);

                alert(
                    "Não foi possível realizar o cadastro."
                );

            });

        }
    );

}