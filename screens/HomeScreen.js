import {Text, View} from "react-native";
import tw from "twrnc";

export function HomeScreen() {
    return (
        <>
            <Banner/>
            <View style={tw`h-full bg-yellow-300`}>
            </View>
        </>
    );
}

function Banner() {
    return (
        <View>
            <Text style={tw`text-lg`}>My Favourite Places</Text>
        </View>
    )
}