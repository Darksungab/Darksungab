function calcularIdade(dataNascimento) {
            const hoje = new Date();
            const nascimento = new Date(dataNascimento);
            
            let idade = hoje.getFullYear() - nascimento.getFullYear();
            const mesAtual = hoje.getMonth();
            const mesNascimento = nascimento.getMonth();
            
            if (mesAtual < mesNascimento || 
                (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
                idade--;
            }
            
            return idade;
        }
        const dataNascimento = "2005-09-08";
        document.getElementById("idade").textContent = calcularIdade(dataNascimento);