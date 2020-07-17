import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        borderColor:'#CCC',   
        borderBottomWidth:1,             
        flexDirection:'row',        
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        
    },
    flag:{
        width:75,
        height:45,
        borderRadius:10,
    },
    containerInfo:{
        flex:1,
        marginLeft:10,
        justifyContent:'space-between',
    },
    containerTextInfo:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-between'
    },
    textInfo:{
        color:'#9fb5c8',
        fontSize:16,
    },
    titleInfo:{
        color:'#FF101F',
        fontSize:20,
        fontWeight:"bold"
    },
});

export default styles;
