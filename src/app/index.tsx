import { useReceitasFetch } from "@/hook/useReceitasFetch";
import { Receita } from "@/types/receita";
import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [receitas,setReceitas] = useState<Receita[]>([])
  const [nomeReceita,setNomeReceita] = useState("")
  const [tempoPreparo, setTempoPreparo]= useState("")
  const [ingredientes, setIngredientes]= useState("")

  const {listar,criarReceita} = useReceitasFetch();

  const salvarReceita = async () =>{
    const receita = {
      nome: nomeReceita,
      tempoPreparo: Number(tempoPreparo),
      ingredientes: ingredientes
    }
    
    criarReceita(receita)
    
  }

  const carregarReceitas = async() => {
    const resposta = await listar()
    setReceitas(resposta)
  }

  useEffect(()=>{
    carregarReceitas()
  },[])


  return (
    <View style={styles.container}>
      <View>
        <Text>Nome da receita:</Text>
        <TextInput onChangeText={setNomeReceita}></TextInput>
        <Text>Tempo de preparo:</Text>
        <TextInput onChangeText={setTempoPreparo}></TextInput>
        <Text>Ingredientes:</Text>
        <TextInput onChangeText={setIngredientes}></TextInput>
        <Button title={"Criar receita"} onPress={salvarReceita}></Button>
      </View>
      <FlatList
        data={receitas}
        renderItem={({item}) => (
          <View>
              <Text>{item.id}# - {item.nome} - Tempo de preparo: {item.tempoPreparo}</Text>
          </View>
        )}
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
