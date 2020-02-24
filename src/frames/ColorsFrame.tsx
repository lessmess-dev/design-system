import * as React from "react";
import {View, Text, StyleSheet, Frame} from "react-figma";
import {colors} from "../tokens/colors";

const styles = StyleSheet.create({
    container: {
        maxWidth: 360,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    colorRect: {
        width: 40,
        height: 40,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 3
    },
    hintText: {
        fontFamily: "Roboto",
        fontSize: 12,
        lineHeight: "140%",
        width: 340
    }
});

export const ColorsFrame = () => {
    return <Frame name="Colors" style={{backgroundColor: "transparent"}}>
        <View style={styles.container}>
            {Object.keys(colors).map((colorKey) => <View key={colorKey} style={[styles.colorRect, {backgroundColor: colors[colorKey]}]} />)}
        </View>
        <View style={{width: "100%"}}>
            <Text style={styles.hintText}>This file contains your Color Styles.
                They are applied to the shapes in the examples above.
                You can use them across all your files.
            </Text>
        </View>
    </Frame>
};
