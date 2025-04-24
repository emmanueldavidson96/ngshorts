import { StyleSheet } from "react-native";
import { COLORS } from "../constants/Colors";
import { Dimensions } from 'react-native';

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
    input:{
        width:"100%",
        padding:15,
        backgroundColor:COLORS.white,
        color:COLORS.black,
        borderRadius:15,
        fontSize:12
    },
    headerOption:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignContent:"center",
        flexDirection:"row",
    },
    tagText:{
        fontSize:13,
        fontWeight:"thin",
        color:COLORS.white,
    },
    createpostContainer:{
        display:"flex",
        flexDirection:"column",
        gap:20,
        padding:10,
    },
    formGroup:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        gap:5,

    },
    label:{
        fontSize:15,
        fontWeight:"bold",
        color:COLORS.white,
    },
    imagePicker: {
        width: "100%",
        height: 200,
        backgroundColor: COLORS.background || "#fff", // fallback to white
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10, // rounded corners for nicer look

        // iOS shadow
        shadowColor: COLORS.textSecondary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,

        // Android shadow
        elevation: 5,
        marginBottom: 16, // in case it's tucked into another view
    },
    previewImage:{
        width:"100%",
        height:120,
        borderRadius:10
    },
    placeholderContainer:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
    },
    placeholderText:{
        fontSize:13,
        color:COLORS.textSecondary,
    },  
    inputMainContent: {
        width: "100%",
        backgroundColor: COLORS.background || "#fff", // Background color for TextInput itself
        borderRadius: 10, // Ensure TextInput also has rounded corners
        padding: 15, // Add padding to give the text inside room to breathe
        fontSize: 14, // Adjust font size to match design
        color: COLORS.textPrimary || "#000", // Text color
        height: 120, // Adjust the height to fit multiple lines
        borderColor: COLORS.white,
        borderWidth: 1, // Border around TextInput
        textAlignVertical: "top", // Ensures text aligns to the top when multiline
    },
    submitButton:{
        width:"100%",
        height:50,
        backgroundColor:COLORS.textSecondary,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },
    submitText:{
        color:COLORS.white,
        fontSize:13
    }

})