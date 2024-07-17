import {View, Text,StyleSheet,Image, TouchableOpacity, Linking} from 'react-native';
import welcomeImage from '@/assets/images/venkatesha.png';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
const welcome_image=Image.resolveAssetSource(welcomeImage).uri;
const Page = () => {

  const openLink=()=>{
    console.log('open link');
    Linking.openURL('https://www.google.com');
  }

  return (
    <View style={styles.container}>
      <Image source={{uri:welcome_image}} style={styles.welcome}/>
      <Text style={styles.headLine}>Welcome to Lord Balaji Images</Text>
          <Link href={"/balajiImages"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agree & continue</Text>
          </TouchableOpacity>
        </Link>
      <Text>Namo Venkatesha</Text>
    </View>
  );
}

const styles=StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  welcome:{
    width:'100%',
    height:300,
    marginBottom:80,
  },
  headLine:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,

  },
  description:{
    fontSize:20,
    color:Colors.gray,
    textAlign:'center',
    marginBottom:80

  },

  link:{
    color:Colors.primary
  },
  button:{
    width:'100%',
    alignItems:'center',
  },
  buttonText:{
    color:Colors.primary,
    fontSize:20,
    fontWeight:'bold'
  }


})
export default Page;

