import React, {Component} from 'react';
import {View, Text, ScrollView, Image, StatusBar} from 'react-native';
import styles from './styles';
import {SearchBar, HorizontalListItem} from '@Components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <View styles={{height: '100%'}}>
        <ScrollView>
          <SafeAreaView>
            <View style={{alignItems: 'center'}}>
              <Image
                style={{
                  height: 37,
                  width: 65,
                }}
                source={{
                  uri:
                    'https://s3-alpha-sig.figma.com/img/c695/133d/68d1c62a0bda84ca43a4562895559e0d?Expires=1616976000&Signature=gCGVFyG0ueYGFZxduNa2Lzpo1Q5xcShXhfscJACoJx7URi9DivE81ZrtaPA6cr4kC0wxfQJeN8ZGAAfMS615953zNO7ndr-6DQFZ6vtqzPHoil3I~2uxuhARSEwH3jE0G6k68rDIZGn45VPixTPrhkmag8FsBe1HMBKfBllURvIDdQw4oq9mTTF7zamIVPKK3Mxqoh5Dl2wnU-2VMjjuGupwdpibQA9wowNcHopL9CI-cdwapcm1LxkfMvByfBk5lNV4dQ-NE91P1blH1FD54ofZCKRTM7SMN~KRbyMeKBCjmUXLvAMUb~TGLeHzp2mK3WVgpl7OcWCIvQjdLiDILg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 12,
                  alignItems: 'center',
                }}>
                <Icon name="map-marker" size={30} color="#900" />
                <Text
                  style={{
                    fontSize: 18,
                    color: 'rgba(76,79,77,1)',
                    paddingLeft: 10,
                  }}>
                  Nam Từ Liêm, Hà nội
                </Text>
              </View>
            </View>
            <SearchBar
              placeholder="Tìm kiếm...."
              value={this.state.value}
              onClear={() => {
                this.setState({value: ''});
              }}
              onChangeText={(text) => {
                this.setState({value: text});
              }}
            />
            <View
              style={{
                flex: 1,
                marginHorizontal: 23,
                marginTop: 16,
                borderRadius: 8,
                borderColor: 'rgba(128,128,128,0.2)',
                borderWidth: 1,
              }}>
              <View style={styles.banner}>
                <Image
                  style={{height: 105, width: 122}}
                  source={{
                    uri:
                      'https://s3-alpha-sig.figma.com/img/f162/0a56/c996bb044ee5c397586f834cd3bceafe?Expires=1616976000&Signature=gmpnsErjK0mrwlyMvfK8d4l0XHMn21p9Vv0xmYznswapPUTD0YixOLFKNh1JN-WPsRNKMvT6A9Ux7wNCNymshZAcvql72aejClEEUPq~gjtXZ11wBKZvIh8Kht5gXenUuEo2slM2pRTFFCr9YY-eb16qoDMc0Dj4azbcmUto91zVv5JzQHhsuN0okOar6xTFhDVIdZ9k-zhs6VOIXy~FXw~rwdnw~K2F7juNFB32~ZY5vakKGJL3u1wFvatRhs9pw3x98ER5hrZXXORBFVYX-E5WIPzSkA9o7-CtW0hX7zVGgGrZjyv6DZlLFJ0mS7D9lZMiziJN8Scso5oIH5DkvA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                  }}
                />
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Text style={{fontSize: 20}}>Fresh Vegetables</Text>
                  <Text style={{fontSize: 14}}>Get Up To 40% OFF</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: 5,
                  marginHorizontal: 3,
                }}>
                <View
                  style={{
                    backgroundColor: 'green',
                    width: 20,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 3,
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 3,
                  }}
                />
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={{color: 'rgba(184,38,39,1)', fontSize: 24}}>
                Ưu đãi
              </Text>
              <Text style={{color: 'rgba(83,177,117,1)', fontSize: 16}}>
                Xem thêm
              </Text>
            </View>
            <HorizontalListItem
              data={[
                {
                  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                  title: 'Chuối Úc',
                  number: '7 trái',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
                {
                  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                  title: 'Táo Mỹ',
                  number: '1 kg',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/6d40/7598/44b904ac6bd89983c94017f04290b676?Expires=1616976000&Signature=e6NwVymVMs3s93AamxeUsdh6nUUHzCH8hXDKpgTBvpp6MsFCxXRu-W7km5TlkOewWTUcZ8xYFRfbIUdd4tmLDU6jXdF4yfSXdA1h6hnRpzqgDu2QkJ5AxlXCWGyfw6tbd3zaUsazyc4pUS4HEW5ZAquIkbgm~ZMFX-m8IEtYyNPmet~6NZ5WmRpWK7HYL2-a-XjchHfLGxy65QxUoBYAmWNo-CKu7jISBJRqqZVZaKdnycsBO5AmiCUMA97MNrDq3l64aSfJl~OMctwq7hiSskBf2Qh--v14xXm9ZWlsD3HmeaK1a47PP6q~aVkzxPViBTkko6cziaYY8ohgjYKKvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
                {
                  id: '58694a0f-3da1-471f-bd96-145571e29d72',
                  title: 'Third Item',
                  number: '1 kg',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
              ]}
              navigation={navigation}
            />
            <View style={styles.textContainer}>
              <Text style={{color: 'rgba(184,38,39,1)', fontSize: 24}}>
                Giảm giá sâu
              </Text>
              <Text style={{color: 'rgba(83,177,117,1)', fontSize: 16}}>
                Xem thêm
              </Text>
            </View>
            <HorizontalListItem
              style={{marginTop: 10}}
              data={[
                {
                  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                  title: 'Chuối Úc',
                  number: '7 trái',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
                {
                  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                  title: 'Táo Mỹ',
                  number: '1 kg',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/6d40/7598/44b904ac6bd89983c94017f04290b676?Expires=1616976000&Signature=e6NwVymVMs3s93AamxeUsdh6nUUHzCH8hXDKpgTBvpp6MsFCxXRu-W7km5TlkOewWTUcZ8xYFRfbIUdd4tmLDU6jXdF4yfSXdA1h6hnRpzqgDu2QkJ5AxlXCWGyfw6tbd3zaUsazyc4pUS4HEW5ZAquIkbgm~ZMFX-m8IEtYyNPmet~6NZ5WmRpWK7HYL2-a-XjchHfLGxy65QxUoBYAmWNo-CKu7jISBJRqqZVZaKdnycsBO5AmiCUMA97MNrDq3l64aSfJl~OMctwq7hiSskBf2Qh--v14xXm9ZWlsD3HmeaK1a47PP6q~aVkzxPViBTkko6cziaYY8ohgjYKKvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
                {
                  id: '58694a0f-3da1-471f-bd96-145571e29d72',
                  title: 'Third Item',
                  number: '1 kg',
                  price: 10000,
                  unit: 'đ',
                  description: '',
                  image:
                    'https://s3-alpha-sig.figma.com/img/cdd4/9d63/a82af5cf4cfd7f408c9a57cd24bf47c9?Expires=1616976000&Signature=Gbkx-IcvyKG~FbYuLobSk~nxbEavlN1fL0PbwfgLADlbv7F7Ffj0taIbXaZC1zZg3IFwrUofkafNF4G1Ep2r1ceag1EcTd8jX~CnSytc~G6GfvZ-HvSMYOVHRb0vigq9NIbvBXsEIq40x8jntfBml6IO7OFnznu2ESVVrvLUjmX2vj98DDe4rmiiXG4ha4DXyxpUP1ggyNpaF8UPnRgcuauDqI7AJJ~l-D~tbI53~FZ~Wf1NUEoh0A0B0J7mmBr1zfg7cwMVCKVScSMFDBRTD39bHeo1rzR6Z65izZNgiO2bwyBjF7B5dMGhPu6JR4LQT9MXbSnRDql6JJRlxvxO6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                },
              ]}
              navigation={navigation}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}