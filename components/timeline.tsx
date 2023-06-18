import React from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'


type Props = {
  data: Array<string>,
  direction?: 'horizontal' | 'vertical',
  customStyle?: {
    container?: object,
    leftColumn?: object,
    rightColumn?: object,
    dotContainer?: object,
    dot?: object,
    connector?: object,
    dotConnectorHorizontalWrapper?: object,
    containerHorizontal?: object,
    dotContainerHorizontal?: object,
    dotHorizontal?: object,
    connectorHorizontal?: object,
    containerHorizontalText?: object,
    textStyle?: {
      txtStatus?: object,
      txtDate?: object
    }
  }
}
export default function Timeline({ data, direction, customStyle = {} }: Props) {
    const {
        container = {},
        leftColumn = {},
        rightColumn = {},
        dotContainer = {},
        dot = {},
        connector = {},
        dotConnectorHorizontalWrapper = {},
        containerHorizontal = {},
        dotContainerHorizontal = {},
        dotHorizontal = {},
        connectorHorizontal = {},
        textStyle = {}
      } = customStyle;
    return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ marginLeft: 130, paddingTop:15, flexDirection: 'row', justifyContent: 'space-around', height: 60 }}>
          {
            data.map((item, index) => {
              let lastIndex = index === data.length - 1
              let firstIndex = index === 0

              return (
                <View key={index} style={[styles.containerHorizontal, containerHorizontal]}>
                  <View style={[styles.dotConnectorHorizontalWrapper, dotConnectorHorizontalWrapper]}>
                    <View style={[styles.dotHorizontal, dotHorizontal]} />
                    {/* {firstIndex ?
                      <View style={[styles.dotHorizontal2, dotHorizontal]} />:
                      <View style={[styles.dotHorizontal, dotHorizontal]} />
                    } */}
                    {!lastIndex && <View style={[styles.connectorHorizontal, connectorHorizontal]} />}
                  </View>
                  <View style={customStyle.containerHorizontalText}>
                    <Text style={[styles.txtDate, textStyle.txtDate]}>{item}</Text>
                  </View>
                </View>
              )

            })
          }
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1
  },
  leftColumn: {
    zIndex: 999,
    position: 'relative',
    top: 15,
    alignItems: 'center', marginRight: 10
  },
  rightColumn: {
  },
  connector: {
    height: 40,
    width: 2,
    backgroundColor: 'gray'
  },
  dotContainer: {
    backgroundColor: '#D9F3FD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18
  },
  dot: {
    backgroundColor: '#408E91',
    borderRadius: 50,
    width: 10,
    height: 10
  },
  txtStatus: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  txtDate: {
    color: '#000000',
    fontSize: 14,
  },


  containerHorizontal: {
    flex: 1,
    width: 90
  },
  connectorHorizontal: {
    flex: 1,
    width: 50,
    height: 2,
    backgroundColor: '#809BBF'
  },
  dotContainerHorizontal: {
    backgroundColor: '#D9F3FD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20
  },
  dotHorizontal: {
    backgroundColor: '#FFD966',
    borderRadius: 50,
    width: 10,
    height: 10
  },
  dotHorizontal2: {
    backgroundColor: '#FFD966',
    borderRadius: 50,
    width: 10,
    height: 10,
    marginLeft:15
  },
  dotConnectorHorizontalWrapper: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 10
  },
})