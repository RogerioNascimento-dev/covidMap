import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',  
        backgroundColor:'#FFF',      

    },
    containerData:{      
        width: 280,  
        borderWidth:1,
        borderColor:'#CCC',
        borderRadius:10,
        padding:10,                        
    },
    containerInfoDetail:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    containerInfo:{
        marginTop:10,
    },
    flag:{
        width:45,
        height:30,
    },
    stateText:{
        fontWeight:'bold',
        color:'#FF101F',
        fontSize:20,
    },
    containerFlag:{
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20,
    },
    textInfo:{
        color:'#9fb5c8',
        fontSize:16,
    },
    bottomBack:{
        flexDirection:'row',
        width: 280,
        alignItems:'center',
        justifyContent:'center',        
        borderWidth:1,
        borderRadius:10,
        borderColor:'#CCC',
        padding:5,
        marginTop:10
    },
    bottomBackText:{
        marginLeft:10,
        color:'red',
        fontWeight:'bold',
    }
});

export default styles;