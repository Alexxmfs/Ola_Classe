import React from "react";
import { CircleButton } from "../../components/Button";
import { assets } from "../../../constants";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  IconLike,
  IconWarning,
  IconSave,
  IconComment,
} from "../../components/IconsCard";

const CategoryJsScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.circleButton}>
          <CircleButton
            imgUrl={assets.next}
            onPress={() => navigation.navigate("CategoryMenu")}
          />
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 70, height: 70, borderRadius: 50 }}
            source={assets.imgJS}
          />
          <Text style={styles.textAngular}>JavaScript</Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 215,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.imgAsh}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Ash
                </Text>
              </View>

              <View style={{ right: 90 }}>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 16,
                  }}
                >
                  Macetes do JS
                </Text>

                <Text style={{ color: "#63AFFE" }}>#JS</Text>
              </View>
              <View style={{ paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("#")}>
                  <Image
                    source={assets.postJS}
                    style={{ width: 300, height: 175, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 8,
                marginRight: 240,
                marginTop: -50,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 200,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.imgAsh}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Jordan
                </Text>
              </View>

              <View style={{ right: 20 }}>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 16,
                  }}
                >
                  Como dar um show em JavaScript
                </Text>

                <Text style={{ color: "#63AFFE" }}>#JS</Text>
              </View>
              <View style={{ paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("#")}>
                  <Image
                    source={assets.postJS02}
                    style={{ width: 300, height: 175, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 8,
                marginRight: 240,
                marginTop: -50,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 35,
          }}
        >
          <View style={[styles.card, styles.elevation, styles.center]}>
            <View style={styles.center}>
              <View
                style={{
                  flexDirection: "row",
                  paddingBottom: 2,
                  paddingTop: 5,
                  marginRight: 200,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 235,
                    marginTop: -8,
                  }}
                  source={assets.imgJordan}
                />
                <Text
                  style={{ marginLeft: -225, fontWeight: "600", fontSize: 16 }}
                >
                  Jordan
                </Text>
              </View>

              <View style={{ right: 20 }}>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 16,
                  }}
                >
                  O que o EcmaScript  afetou no JS
                </Text>

                <Text style={{ color: "#63AFFE" }}>#JS</Text>
              </View>
              <View style={{ paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.navigate("#")}>
                  <Image
                    source={assets.postJS03}
                    style={{ width: 300, height: 175, borderRadius: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 8,
                marginRight: 240,
                marginTop: -50,
              }}
            >
              <IconLike />
              <IconWarning />
              {/* <IconSave /> */}
              <IconComment />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    marginTop: 40,
    right: 330,
    transform: [{ rotate: "180deg" }],
  },
  textAngular: {
    fontSize: 25,
    fontWeight: "900",
  },
  container: {
    flex: 1,
    backgroundColor: "#98C2FF",
  },
  heading: {
    paddingTop: 5,
    fontSize: 17,
    fontWeight: "600",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: "85%",
    marginVertical: 5,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    height: 330,
    marginTop: -10,
  },
});

export default CategoryJsScreen;
