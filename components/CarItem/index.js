import React from "react";
import { ImageBackground, Text, View } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = ({ name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImg} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name} </Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}> {taglineCTA} </Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => console.warn("custom order was pressed")}
        />

        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => console.warn("Existing Inventory was pressed")}
        />
      </View>
    </View>
  );
};

export default CarItem;
