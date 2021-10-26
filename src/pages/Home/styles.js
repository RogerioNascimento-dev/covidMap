import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    marker: {
        width: 45,
        height: 30,
    },
    callout: {
        width: 230,
    },
    stateName: {
        color: "#FF101F",
        fontWeight: "bold",
        fontSize: 18,
    },
    cases: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#9fb5c8",
        marginRight: 5,
    },
    inputFilter: {
        backgroundColor: "#FFF",
        height: 40,
        width: Dimensions.get("window").width * 0.6,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#FFB0B5",
        borderRadius: 20,
    },
    containerFilter: {
        flexDirection: "row",
        position: "absolute",
        bottom: 20,
        left: Dimensions.get("window").width * 0.15,
        alignItems: "center",
    },
    buttonFilter: {
        backgroundColor: "#FFF",
        borderColor: "#FFB0B5",
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
    },
});

export default styles;