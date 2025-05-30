import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        // padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position:"relative",
        zIndex:1000
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
        paddingTop: 10,
        width:"100%",
    },
    contentText:{
        color:COLORS.white,
        fontSize:20
    },
    feed:{
        display:"flex",
        flexDirection:"column",
        gap:8,
        width:"100%",
        padding:30,
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
    barContainer:{
        width:"100%",
        padding:20,
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
       
    },
    exploreTextContainer:{
        width:"100%",
        padding:10,
        alignItems:"center",
        justifyContent:"center",
        display:"flex"
    },
    exploreText:{
        fontSize:30,
        fontWeight:"bold",
        color:"white"
    },
    input:{
        width:"100%",
        padding:15,
        backgroundColor:COLORS.white,
        color:COLORS.black,
        borderRadius:20,
        fontSize:13
    },
    headerOption:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignContent:"center",
        flexDirection:"row",
    },
    textOptions:{
        fontSize:13,
        color:COLORS.white,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30
        // borderBottomColor:COLORS.textSecondary,
        // borderBottomWidth:2,
    },
    usersImage:{
        width:"100%",
        objectFit:"cover",
        borderRadius:10,
        height:200
    },
    userFullName:{
        fontSize:16,
        fontWeight:"bold",
        color:COLORS.white
    },
    userTagName:{
        fontSize:10,
        fontWeight:"thin",
        color:COLORS.white
    },
    userDescription:{
        fontSize:13,
        fontWeight:"normal",
        color:COLORS.white
    }
})