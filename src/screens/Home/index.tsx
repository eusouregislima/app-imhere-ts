import { Text, View, TextInput, TouchableOpacity } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("Clicou")
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

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}