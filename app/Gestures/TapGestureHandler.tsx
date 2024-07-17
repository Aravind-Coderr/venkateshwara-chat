import { GestureHandlerRootView,State, TapGestureHandler} from "react-native-gesture-handler";
import React from "react";
import { View,Image } from "react-native";

type myprops = {
    imageSource: any;
    onTripleTap: () => void;
  };


const TripleTapImage = ({ imageSource, onTripleTap }:myprops) => {
    const tripleTapRef = React.useRef(null);
  
    const onTripleTapEvent = (event:any) => {
      if (event.nativeEvent.state === State.ACTIVE) {
        // Triple tap logic here (e.g., navigate to a different page)
        onTripleTap();
        console.log("Triple tap detected");
        
      }
    };
  
    return (
        <GestureHandlerRootView>
      <TapGestureHandler ref={tripleTapRef} numberOfTaps={5} onHandlerStateChange={onTripleTapEvent}>
        <View>
          <Image source={imageSource} />
        </View>
      </TapGestureHandler>
        </GestureHandlerRootView>
    );
  };
  
  export default TripleTapImage;
  