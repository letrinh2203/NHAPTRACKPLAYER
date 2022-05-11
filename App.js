import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'
import TrackPlayer from 'react-native-track-player';


const tracks = [
  {
    id: 1,
    url: require('./tracks/Faded.mp3'),
    title: 'Faded',
  },
  {
    id: 2,
    url: require('./tracks/Solo.mp3'),
    title: 'Solo',
  },
];

// TrackPlayer.updateOptions({
//   stopWithApp: false,
//   // capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
//   // compactCapabilities: [
//   //   // TrackPlayer.CAPABILITY_PLAY,
//   //   //  TrackPlayer.CAPABILITY_PAUSE
//   //   ],

// });

export default function App() {
    const setUpTrackPlayer = async ()=>{
    try{
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(tracks);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
        setUpTrackPlayer();

    return ()=>TrackPlayer.destroy();

  },[])
  return (
    <View style={styles.container}>
     <View style={styles.row}>
       <TouchableOpacity style={styles.btn} onPress={()=>TrackPlayer.pause()}>
         <Text style={styles.text}>Pause</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>TrackPlayer.play()}>
         <Text style={styles.text}>play</Text>
       </TouchableOpacity>
       </View>
       <View style={styles.row}>
       <TouchableOpacity style={styles.btn} onPress={()=>TrackPlayer.skipToPrevious()}>
         <Text style={styles.text}>Prev</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.btn} onPress={()=>TrackPlayer.skipToNext()}>
         <Text style={styles.text}>Next</Text>
       </TouchableOpacity>
       </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  btn:{
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  }
,
text:{
  fontSize: 30,
  color: 'white',
  textAlign: 'center',
},
row:{
  flexDirection: 'row',
  marginBottom: 30,
}
})