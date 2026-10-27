import { Receita } from "@/types/receita";

const URL_API = "http://10.10.86.194:3000"

export function useReceitasFetch () {

    const listar = async ():Promise<Receita[]> => {
        const resposta = await fetch(URL_API + "/receitas")
        return await resposta.json();
    }

    
    const listarId = async (id: string):Promise<Receita> => {
        const resposta = await fetch(`${URL_API} + /receitas${id}`)
        return await resposta.json();
    }

    const criarReceita = async (receita: Omit<Receita, "id">)=>{
            const resposta = await fetch(`${URL_API}/receitas`,
                {
                    method: 'POST',
                    body: JSON.stringify(receita),
                    headers: {
                        "Content-type": "application/json"
                    }
                })

            if(!resposta.ok){
                throw new Error("errou ai kkk deu não ó kkk");
            }    
    }

    return {
        listar,
        listarId,
        criarReceita
    }
}