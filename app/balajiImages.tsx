import { View, Text, KeyboardAvoidingView, Linking,StyleSheet,Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import {image1 , image2 , image3 ,image4, image5, image6, image7 ,image8,
  image9, image10, image11, image12, image13, image14, image15, image16
 }  from '@/assets/images';
 import TripleTapImage from './Gestures/TapGestureHandler'; // Adjust the path to your component


let resolvedImg=[];
 
  let img1=Image.resolveAssetSource(image1).uri;
  let img2=Image.resolveAssetSource(image2).uri;
  let img3=Image.resolveAssetSource(image3).uri;
  let img4=Image.resolveAssetSource(image4).uri;
  let img5=Image.resolveAssetSource(image5).uri;
  let img6=Image.resolveAssetSource(image6).uri;
  let img7=Image.resolveAssetSource(image7).uri;
  let img8=Image.resolveAssetSource(image8).uri;
  let img9=Image.resolveAssetSource(image9).uri;
  let img10=Image.resolveAssetSource(image10).uri;
  let img11=Image.resolveAssetSource(image11).uri;
  let img12=Image.resolveAssetSource(image12).uri;
  let img13=Image.resolveAssetSource(image13).uri;
  let img14=Image.resolveAssetSource(image14).uri;
  let img15=Image.resolveAssetSource(image15).uri;
  let img16=Image.resolveAssetSource(image16).uri;
  resolvedImg.push(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16);
 

const balajiImages = () => {

    const router=useRouter();

    const openLink=()=>{
        console.log('open link');
        router.replace('Chatting/App')
        router.canGoBack();
      }
      let images=resolvedImg.map((img,index)=>{
       
        return (
          <Image key={index} source={{uri:img}} style={styles.welcome}/>
        )});

  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView>
      {images}
   
         <TripleTapImage imageSource={image8} onTripleTap={openLink} />
       {images}  
      </ScrollView>
    
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
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
        },
        list:{
            backgroundColor:'#fff',
            
        },
        welcome:{
          width:'100%',
          height:300,
          marginBottom:10,
        },
      
      

});

export default balajiImages;