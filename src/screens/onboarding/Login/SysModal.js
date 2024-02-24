import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Modal } from "react-native"
import { moderateScale, moderateVerticalScale, verticalScale } from "react-native-size-matters"

const SysModal=({message,visible,onHide})=>{
    return(
        <Modal visible={visible} transparent={true}>
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(00,00,00,.5)',
                    justifyContent: "center",
                    alignItems: "center",
                    padding: moderateScale(20)
                }}>
                <View
                    style={{
                        width: '100%', 
                        backgroundColor: 'white',
                        borderRadius: moderateScale(10),
                        padding: moderateScale(20),
                    }}>
                    {/* header */}
                    <View 
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: moderateScale(20)
                    }}>
                        
                        
                    </View>
                    {/* body */}
                    <View>
                        <Text style={{alignSelf: "center"}}>
                            {message}
                        </Text>
                        
                    </View>
                    {/* footer */}
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity style={styles.btn} onPress={onHide}>
                            <Text style={{fontSize: 16, color: "white"}}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default SysModal

const styles=StyleSheet.create({
    btn:{
        width: "90%",
        height: verticalScale(45),
        alignSelf: "center",
        backgroundColor: "#1E90FF",
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10),
        justifyContent: "center",
        alignItems: "center"
    }
})
