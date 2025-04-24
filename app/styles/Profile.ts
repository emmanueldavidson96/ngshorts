import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: Dimensions.get("window").height,
        backgroundColor: COLORS.background || "black",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "flex-start", // so content stacks from top
        position: "relative",
        zIndex: 1000,
        padding: 16, // optional if you want internal spacing
    },
    bannerRegion:{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 80, // or any height you prefer
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100, // ensures it's above other content
        elevation: 4, // Android shadow
        shadowColor: "#000", // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderBottomColor:COLORS.textSecondary,
        borderBottomWidth:2
    },
    logoContainer:{
        width:"auto",
        height:"auto",
    },
    logo:{
        color:COLORS.white,
        fontSize:15,
        fontWeight:"bold",
        marginLeft:50
    },
    imageContainer:{
        width:"auto",
        height:"auto",
    },
    profileContainer:{
        width:50,
        height:50,
        borderRadius:50,
        borderColor:COLORS.backgroundColors,
        borderWidth:2,
    },
    feedContainer:{
        
        backgroundColor:COLORS.background,
        paddingTop: 100,
        width:"100%",
        height:"100%"
    },
    contentText:{
        color:COLORS.white,
        fontSize:20
    },
    feed:{
        display:"flex",
        flexDirection:"row",
        gap:20,
        width:"100%",
        paddingBottom:40,
        paddingTop:30,
        borderBottomColor:COLORS.backgroundColors,
        borderBottomWidth:1,
    },
    usersPostProfileImage:{
        width:"10%",
        height:"auto"
    },
    usersPostContentContainer:{
        width:"90%",
        display:"flex",
        paddingRight:25,
        flexDirection:"column",
        gap:10
    },
    userPostImage:{
        width:"90%",
        objectFit:"cover",
        borderRadius:20,
    },
    userPostText:{
        color:COLORS.white,
        lineHeight:20,
        fontSize:12,
    },
    userUsername:{
        fontWeight:"bold",
        color:COLORS.white,
        fontSize:15,
    },
    exploreTextContainer:{
        width:"100%",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        flexDirection:"column"
    },
    exploreText:{
        fontSize:25,
        fontWeight:"bold",
        color:"white"
    },
})