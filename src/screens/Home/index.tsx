import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'


export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {

    if (participantName.length == 0) {
      return
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Registered participant', 'This participant already registered in the attendance list!')
    }

    setParticipants(prevState => [...prevState, participantName])

    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {

    Alert.alert('Remove', `Do you want to remove ${name}?`, [
      {
        text: 'Yes',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])

  }

  function localDateString(): string {
    const options: any = { weekday: "long", day: 'numeric', month: 'long', year: 'numeric' }
    const localeDateString = new Date().toLocaleDateString('en-US', options);

    return localeDateString
  }

  function handleState(value: string) {
    setParticipantName(value)
    console.log(participantName)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Tech Week
      </Text>
      <Text style={styles.eventDate}>
        {localDateString()}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Participant name'
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
          keyboardAppearance='dark'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Has nobody arrived at the event yet? Please add a participant to the attendance list.
          </Text>
        )}
      />



    </View>
  )
}