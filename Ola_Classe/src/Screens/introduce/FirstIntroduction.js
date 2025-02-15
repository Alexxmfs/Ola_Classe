import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../../constants'
import { CircleButton } from '../../components/Button'

const FirstIntroduction = ({navigation}) => {
  return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', paddingTop: 50 }}>

    <Image
    source={assets.easyAccess}
    style={{ width: 390, height: 290 }}
    />

    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center'}}>
   <Text style={{
    fontFamily: FONTS.bold, 
    fontSize: SIZES.large,
    }}>
    Fácil Acesso
    </Text>

    <Text style={{
    paddingTop: 20,
    fontFamily: FONTS.regular, 
    fontSize: SIZES.medium,
    }}>
    Aprenda facilmente com Olá Classe!, você pode acessar muitos cursos e mentores.
    </Text>
    </View>
    
    <View style={{ flex: 1, left: 130, marginTop: 170 }}>
 
    <CircleButton 
    imgUrl = {assets.next}
    onPress={() => navigation.navigate("SecondIntroduction")}
    />
        </View>

        <View style={{flexDirection: 'row', top: -50, alignItems: 'center', justifyContent: 'center'}}>
              <Image 
              source={assets.BallBlue}
              />
              <Image 
              source={assets.BallGray}
              style={{marginLeft: 10}}
              />
              <Image 
              source={assets.BallGray}
              style={{marginLeft: 10}}
              />
        </View>
    </View>
  )
}

export default FirstIntroduction