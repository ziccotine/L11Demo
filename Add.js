import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
    const[name,setName] = useState("");

    return (
        <View>
            <StatusBar/>
            <Text>Name:</Text>
            <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
            <Button title='Submit'
                    onPress={()=>{
                        let mydata =JSON.parse(route.params.datastr)
                        let item = {name:name};
                        mydata.push(item);
                        fetch('https://9b29f9967d7049f8923c4f36d3dd6f62.api.mockbin.io/',
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':'0jpgfvhjwhppkbqnff0t6hrrmog2wd6x'
                                },
                                body: JSON.stringify(mydata)
                            }
                        )
                            .then((response) => {
                                navigation.navigate('Home');
                            })
                    }
                    }
            />
        </View>
    );
};

export default Add;
