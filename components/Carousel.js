import React, {Component} from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { YellowBox } from 'react-native';



const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

const images = [
    "https://static.nike.com/a/images/t_prod,f_auto/w_1920,c_limit/18230a53-95cb-4271-99d5-e9e68b2eba38/air-more-uptempo-rayguns-release-date.jpg",
    "https://sneakers-magazine.com/wp-content/uploads/2020/02/kobe-bryant-nike-zoom-kobe-9-elite-1800x1200.jpg",
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUQWohJ2ZiaV53OOXaadwgh43kN-mMH5_09AOd0e_Nj8n4Idzv6-Kl-toDTDbNl9KP3tmtbh_Xa1SHAWqVCBk5XGQ8tfOWtA",
    "https://s3.amazonaws.com/nikeinc/assets/64155/05PHOTOBU16257_PHUP_SPJ_rectangle_1600.JPG?1479261019",
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/ehpyz0aitnv4r8kvmk8f.jpg",
    "https://www.nba.com/warriors/sites/warriors/files/20170410_durant_1280_0.jpg?w=756&h=425",
    "https://staticg.sportskeeda.com/editor/2018/07/7c202-1532602554-800.jpg",
    "https://media.vogue.fr/photos/5c41e384bc36eb23676d5299/master/w_1600,c_limit/Nike-Air_Mags_eBay_3%20(1).png"
]

 class KickCarousel extends Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }
    componentDidMount() {
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}

                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});

export default KickCarousel;
