import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from "react-native";
import SearchBarComp from "../../UseableComponenets/SearchBarComp";
import HeaderComp from "../../UseableComponenets/HeaderComp";
import SectionComp from "../../UseableComponenets/SectionComp";

const FrontScreen = () => {
  let url = require("../../../Assets/foodheader.jpg");
  let url2 = require("../../../Assets/sectionSecond.jpg");
  let url3 = require("../../../Assets/foodverticalHome.jpg");
  let url4 = require("../../../Assets/deliveryHome.jpg");
  let url5 = require("../../../Assets/shopHome.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        appBarHeader={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
        IstAction={{ justifyContent: "flex-start" }}
        userName="MAAZ"
        userLocation="MAZLIR KARACHI"
        AppbarContentColor="black"
        AppbarContent={{ justifyContent: "center", alignItems: "center" }}
        titleStyle={{
          fontSize: 20,
          fontWeight: "800",
          textAlign: "center",
        }}
        subTitleStyle={{ fontSize: 16, textAlign: "center" }}
        SecondAction={{ justifyContent: "flex-end" }}
        IstActionIcon="face-profile"
        IstActionFunction={() => console.log("Searching")}
        IstActioncolor="red"
        IstActionsize={30}
        SecondActionIcon="cart"
        SecondActionFunction={() => console.log("Searching")}
        SecondActioncolor="red"
        SecondActionsize={30}
      />

      <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={styles.IstSection}>
          <SectionComp
            isButtonShow={true}
            container={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
            imageUrl={url}
            imageStyle={{
              position: "relative",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
            Overlay={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
            innerText={{
              zIndex: 9999,
              color: "white",
              fontSize: 22,
              paddingHorizontal: 8,
              paddingBottom: 3,
            }}
            TextValue="MAAZ"
            innersubText={{
              fontSize: 16,
              color: "white",
              zIndex: 9999,
              paddingHorizontal: 8,
              paddingBottom: 5,
            }}
            subText="Add anything you want inside the overlay, and place it where you want. In this example we add text in the middle of the page:"
          />
        </View>
        <View>
          <SearchBarComp
            width="100%"
            height={50}
            icon="magnify"
            iconColor="#D60265"
          />
        </View>
        <View style={styles.secondSection}>
          <SectionComp
            container={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-end",
              // paddingHorizontal: 15,
              backgroundColor: "transparent",
            }}
            imageUrl={url2}
            imageStyle={{
              position: "relative",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              // backgroundColor: "transparent",
              borderRadius: 20,

            }}
            Overlay={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: 20,
            }}
            innerText={{
              zIndex: 9999,
              color: "white",
              fontSize: 22,
              paddingHorizontal: 8,
              paddingBottom: 3,
            }}
            TextValue="Food Delivery"
            innersubText={{
              fontSize: 16,
              color: "white",
              zIndex: 9999,
              paddingHorizontal: 8,
              paddingBottom: 5, marginVertical: 3
            }}
            isButtonShow={false}
            btnText="Order Now"
            btntextSize={18}
            btntextClr="black"
            btnicon="arrow-right"
            rowreverse="row-reverse"
            btnfontWeight="800"
            mode="Outlined"
            textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
            subText="Choose Your favorite food"
            // btnBackgroundColor="white"
            ButtonStyle={{ backgroundColor: "white" }}
          />
        </View>
        <View style={{ flexDirection: "row", height: 320 }}>
          <View style={{ width: "50%" }}>
            <SectionComp
              container={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-end",
                // paddingHorizontal: 15,
                backgroundColor: "transparent",
              }}
              imageUrl={url3}
              imageStyle={{
                position: "relative",
                width: "100%",
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                // backgroundColor: "transparent",
                borderRadius: 10,

              }}
              Overlay={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: 10,
              }}
              innerText={{
                zIndex: 9999,
                color: "white",
                fontSize: 28,
                paddingHorizontal: 8,
                paddingBottom: 3,
              }}
              TextValue="pandamart"
              innersubText={{
                fontSize: 20,
                color: "white",
                zIndex: 9999,
                paddingHorizontal: 8,
                paddingBottom: 5, marginVertical: 3
              }}
              isButtonShow={true}
              textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
              subText="groceries in 20 minutes"
            />
          </View>
          <View style={{ width: "50%", paddingLeft: 15 }}>
            <View style={{ height: "68%" }}>
              <SectionComp
                container={{
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                  // paddingHorizontal: 15,
                  backgroundColor: "transparent",
                }}
                imageUrl={url4}
                imageStyle={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  // backgroundColor: "transparent",
                  borderRadius: 10,

                }}
                Overlay={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: 10,
                }}
                innerText={{
                  zIndex: 9999,
                  color: "white",
                  fontSize: 28,
                  paddingHorizontal: 8,
                  paddingBottom: 3,
                }}
                TextValue="PickUp"
                innersubText={{
                  fontSize: 20,
                  color: "white",
                  zIndex: 9999,
                  paddingHorizontal: 8,
                  paddingBottom: 5, marginVertical: 3
                }}
                isButtonShow={true}
                textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                subText="Enjoy flat 25% off and more..."
              />
            </View>
            <View style={{ marginBottom: 10 }}></View>
            <View style={{ height: "29%" }}>
              <SectionComp
                container={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  // paddingHorizontal: 15,
                  backgroundColor: "transparent",
                }}
                imageUrl={url5}
                imageStyle={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  // backgroundColor: "transparent",
                  borderRadius: 10,

                }}
                Overlay={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.7)",
                  borderRadius: 10,
                }}
                innerText={{
                  zIndex: 9999,
                  color: "white",
                  fontSize: 24,
                  paddingHorizontal: 8,
                  // paddingBottom: 3,
                }}
                TextValue="Shops"
                innersubText={{
                  fontSize: 20,
                  color: "white",
                  zIndex: 9999,
                  paddingHorizontal: 8,
                  // paddingBottom: 5,
                  // marginVertical: 3
                }}
                isButtonShow={true}
                textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                subText="Grocery & more"
              />
            </View>
          </View>
        </View>
        <View style={styles.thirdSection}>
          <SectionComp
            container={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-end",
              // paddingHorizontal: 15,
              backgroundColor: "transparent",
            }}
            imageUrl={url2}
            imageStyle={{
              position: "relative",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              // backgroundColor: "transparent",
              borderRadius: 20,

            }}
            Overlay={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              borderRadius: 20,
            }}
            innerText={{
              zIndex: 9999,
              color: "white",
              fontSize: 22,
              paddingHorizontal: 8,
              paddingBottom: 3,
            }}
            TextValue="Food Delivery"
            innersubText={{
              fontSize: 16,
              color: "white",
              zIndex: 9999,
              paddingHorizontal: 8,
              paddingBottom: 5, marginVertical: 3
            }}
            isButtonShow={false}
            btnText="Order Now"
            btntextSize={18}
            btntextClr="black"
            btnicon="arrow-right"
            rowreverse="row-reverse"
            btnfontWeight="800"
            mode="Outlined"
            textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
            subText="Choose Your favorite food"
            ButtonStyle={{ backgroundColor: "white" }}

          />
        </View>
        <View><Text style={{ fontSize: 25 }}>Your Resturants</Text></View>
        <View style={styles.fourthContainer}>
          <View>
            <ScrollView horizontal={true}>
              <View style={{ width: 400, height: 200, marginRight: 15 }}>
                <SectionComp
                  container={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    // paddingHorizontal: 15,
                    backgroundColor: "transparent",
                  }}
                  imageUrl={url2}
                  imageStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    // backgroundColor: "transparent",
                    borderRadius: 20,

                  }}
                  Overlay={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 20,
                  }}
                  innerText={{
                    zIndex: 9999,
                    color: "white",
                    fontSize: 22,
                    paddingHorizontal: 8,
                    paddingBottom: 3,
                  }}
                  TextValue="Al Basit Food Center"
                  innersubText={{
                    fontSize: 16,
                    color: "white",
                    zIndex: 9999,
                    paddingHorizontal: 8,
                    paddingBottom: 5, marginVertical: 3
                  }}
                  isButtonShow={false}
                  btnText="Order Now"
                  btntextSize={18}
                  btntextClr="black"
                  btnicon="arrow-right"
                  rowreverse="row-reverse"
                  btnfontWeight="800"
                  mode="Outlined"
                  textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                  subText="We provide chinies desi and fried items"
                  // btnBackgroundColor="white"
                  ButtonStyle={{ backgroundColor: "white" }}
                />
              </View>
              <View style={{ width: 400, height: 200 }}>
                <SectionComp
                  container={{
                    flex: 1,
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    // paddingHorizontal: 15,
                    backgroundColor: "transparent",
                  }}
                  imageUrl={url2}
                  imageStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    // backgroundColor: "transparent",
                    borderRadius: 20,

                  }}
                  Overlay={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 20,
                  }}
                  innerText={{
                    zIndex: 9999,
                    color: "white",
                    fontSize: 22,
                    paddingHorizontal: 8,
                    paddingBottom: 3,
                  }}
                  TextValue="Al Rehman Biryani"
                  innersubText={{
                    fontSize: 16,
                    color: "white",
                    zIndex: 9999,
                    paddingHorizontal: 8,
                    paddingBottom: 5, marginVertical: 3
                  }}
                  isButtonShow={false}
                  btnText="Order Now"
                  btntextSize={18}
                  btntextClr="black"
                  btnicon="arrow-right"
                  rowreverse="row-reverse"
                  btnfontWeight="800"
                  mode="Outlined"
                  textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                  subText="The better taste you want to eat"
                  // btnBackgroundColor="white"
                  ButtonStyle={{ backgroundColor: "white" }}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View><Text style={{ fontSize: 25 }}>Your daily deals</Text></View>

        <View style={styles.fifthContainer}>
          <View>
            <ScrollView horizontal={true}>

              <View style={{ width: 180, height: 200, marginRight: 15 }}>
                <SectionComp
                  container={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    // paddingHorizontal: 15,
                    backgroundColor: "transparent",
                  }}
                  imageUrl={url2}
                  imageStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    // backgroundColor: "transparent",
                    borderRadius: 20,

                  }}
                  Overlay={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 20,
                  }}
                  innerText={{
                    zIndex: 9999,
                    color: "white",
                    fontSize: 22,
                    paddingHorizontal: 8,
                    paddingBottom: 3,
                  }}
                  TextValue="Al Basit Food Center"
                  innersubText={{
                    fontSize: 16,
                    color: "white",
                    zIndex: 9999,
                    paddingHorizontal: 8,
                    paddingBottom: 5, marginVertical: 3
                  }}
                  isButtonShow={true}
                  btnText="Order Now"
                  btntextSize={18}
                  btntextClr="black"
                  btnicon="arrow-right"
                  rowreverse="row-reverse"
                  btnfontWeight="800"
                  mode="Outlined"
                  textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                  subText="We provide chinies desi and fried items"
                  // btnBackgroundColor="white"
                  ButtonStyle={{ backgroundColor: "white" }}
                />
              </View>
              <View style={{ width: 180, height: 200, marginRight: 15 }}>
                <SectionComp
                  container={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    // paddingHorizontal: 15,
                    backgroundColor: "transparent",
                  }}
                  imageUrl={url2}
                  imageStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    // backgroundColor: "transparent",
                    borderRadius: 20,

                  }}
                  Overlay={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 20,
                  }}
                  innerText={{
                    zIndex: 9999,
                    color: "white",
                    fontSize: 22,
                    paddingHorizontal: 8,
                    paddingBottom: 3,
                  }}
                  TextValue="Al Basit Food Center"
                  innersubText={{
                    fontSize: 16,
                    color: "white",
                    zIndex: 9999,
                    paddingHorizontal: 8,
                    paddingBottom: 5, marginVertical: 3
                  }}
                  isButtonShow={true}
                  btnText="Order Now"
                  btntextSize={18}
                  btntextClr="black"
                  btnicon="arrow-right"
                  rowreverse="row-reverse"
                  btnfontWeight="800"
                  mode="Outlined"
                  textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                  subText="We provide chinies desi and fried items"
                  // btnBackgroundColor="white"
                  ButtonStyle={{ backgroundColor: "white" }}
                />
              </View>
              <View style={{ width: 180, height: 200, marginRight: 15 }}>
                <SectionComp
                  container={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    // paddingHorizontal: 15,
                    backgroundColor: "transparent",
                  }}
                  imageUrl={url2}
                  imageStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    // backgroundColor: "transparent",
                    borderRadius: 20,

                  }}
                  Overlay={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 20,
                  }}
                  innerText={{
                    zIndex: 9999,
                    color: "white",
                    fontSize: 22,
                    paddingHorizontal: 8,
                    paddingBottom: 3,
                  }}
                  TextValue="Al Basit Food Center"
                  innersubText={{
                    fontSize: 16,
                    color: "white",
                    zIndex: 9999,
                    paddingHorizontal: 8,
                    paddingBottom: 5, marginVertical: 3
                  }}
                  isButtonShow={true}
                  btnText="Order Now"
                  btntextSize={18}
                  btntextClr="black"
                  btnicon="arrow-right"
                  rowreverse="row-reverse"
                  btnfontWeight="800"
                  mode="Outlined"
                  textBodyStyle={{ marginLeft: 10, marginBottom: 20 }}
                  subText="We provide chinies desi and fried items"
                  // btnBackgroundColor="white"
                  ButtonStyle={{ backgroundColor: "white" }}
                />
              </View>
            </ScrollView>

          </View>

        </View>
        {/* <View style={styles.sixContainer}>

        </View> */}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IstSection: {
    width: "100%",
    height: 200,
  },
  secondSection: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  thirdSection: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  fourthContainer: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  fifthContainer: {
    width: "100%",
    height: 200,
    marginVertical: 20,
  },
  // sixContainer: {
  //   width: "100%",
  //   height: 200,
  //   marginVertical: 20,
  // },
});
