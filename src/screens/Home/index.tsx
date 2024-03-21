import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {
  const participants = ['Regis', 'Luciana', 'Melissa', 'Luiza', 'Cauan', 'Kaique', 'Liz', 'Brenda']

  function handleParticipantAdd() {
    if (participants.includes("Regis")) {
      return Alert.alert("Participante Existe", "Esse nome já existe")
    }

  }

  function handleParticipantDelete(name: string) {
    Alert.alert("Remover", `Remover o ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName} >Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 8 de novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo aqui"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>


      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantDelete(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhum elemento adicionado. Adicione participantes!
          </Text>
        )}
      />







    </View>
  )
}