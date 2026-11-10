import { Receita } from "@/types/receita";
import { api } from "@/utils/api";

export default function useReceitasAxios(){
    const listar = async () => {
            const {data} = await api.get<Receita[]>('/receitas')
            return data;
        }
    
        
        const listarId = async (id: string) => {
            const {data} = await api.get(`/receitas/${id}`)
            return data
        }
    
        const criarReceita = async (receita: Omit<Receita, "id">)=>{
                await api.post('/receitas', receita)

        }
        
        const deletarPorId = async (id: string) =>{
            await api.delete(`/receitas/${id}`)
        }
        return {
            listar,
            listarId,
            criarReceita,
            deletarPorId
        }
}