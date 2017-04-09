'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Dimensions,
  NavigationExperimental,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class Guide extends Component {
  render() {
    return (
          <View>
            <Text style={styles.headText}>What No One Tells You About Finding Your Wedding Dress</Text>

            <Text className='quest1' style={styles.quesText}>Start Early</Text>
            <Text className='quest1'>
              - Finding your dream dress may take some time. Allow 8 months to 1 year to shop. <br/>
              - Don’t forget about alterations! These include hem, bustle, and taking in the dress to fit you perfectly,
              which takes an additional 3 months. <br/>
              - In a rush? Check out salons with dresses you can buy off the rack. <br/>
              - On a tight budget? Look online for sample sales and trunk shows for discounts <br/>
            </Text>

            <Text className='quest2' style={styles.quesText}>Set Your Budget</Text>
            <Text className='quest2'>
              - Beautiful wedding dresses are available in every price range- set your budget and stick to it.<br/>
              - Account for extra costs! The average price for alterations is $600.
            </Text>

            <Text className='quest3' style={styles.quesText}>Choosing the Salons: Make a Game Plan</Text>
            <Text className='quest3'>
              - Trying on too many wedding dresses can be draining, so we recommend only visiting 3-4 salons. <br/>
              - Bridal salons come in styles too! Know what type of store you prefer to shop in (large, small, boutique). <br/>
              - We specialize in intimate shopping experiences at our cozy boutique!
            </Text>

            <Text className='quest4' style={styles.quesText}>Bring Back Up</Text>
            <Text className='quest4'>
              - We recommend bringing 1-2 close friends or family members, as you may lose your voice in a large entourage. <br/>
              - It’s your day, your dress, and your decision. Choose what YOU love!
            </Text>

            <Text className='quest5' style={styles.quesText}>Share The Experience</Text>
            <Text className='quest5'>
              - Have loved ones who can’t make it to your appointment? No problem!
              FaceTime makes it possible to share your experience with friends and family like they’re right there with you! <br/>
              - Take photos of your shopping experience to capture your joy and excitement and share with others!
            </Text>

            <Text className='quest6' style={styles.quesText}>Find Your Wedding Style</Text>
            <Text className='quest6'>
              - With the help of Pinterest, finding wedding dress inspiration has never
              been easier! Simply “pin” your ideas to a board and share with your bridal consultant. <br/>
              - Keep your body shape in mind, as some dress silhouettes may suit you better than others.
            </Text>

              <Text className='quest7' style={styles.quesText}>Wedding Dress Styles for Every Venue</Text>
              <Text className='quest7'>
                - If you’re not sure what style of wedding dress you want, consider your venue. <br/>
                Here are a few of our favorite venue/dress complement pairings:
                - Beach: Sheath <br/>
                - Ball Room: Ball gown and bling <br/>
                - Barn: Lace and vintage <br/>
                - City Loft: Mermaid and trumpet <br/>
              </Text>

                <Text className='quest8' style={styles.quesText}>Find Your Fit</Text>
                <Text className='quest8'>
                  - Silhouettes define your dress style. Try on different ones to see which look best on you! <br/>
                  - Focus on fit, not size! Understand that the dresses you try on will not be your exact size,
                  but they will be clipped to fit you.
                </Text>

                <Text className='quest9' style={styles.quesText}>Necessary undergarments</Text>
                <Text className='quest9'>
                  - Undergarments can make a significant difference in the way the dress fits you. <br/>
                  Wear a strapless bra and rock your spanx! Make sure to bring these to your first fittings.
                </Text>

                <Text className='quest10' style={styles.quesText}>Accessorize!</Text>
                <Text className='quest10'>
                  - Keep in mind the finishing touches that will complete the overall look: veil, headband, jewelry, hair combs, belts/sashes. <br/>
                  - Wear little to no make-up to keep the samples clean. <br/>.
                  - Shoes are optional at fittings.
                </Text>

                <Text className='quest11' style={styles.quesText}>You know it’s the one when...</Text>
                <Text className='quest11'>
                  - You don’t want to take it off <br />
                  - You have a big smile on your face <br />
                  - You cry <br />
                  - You feel like a bride
                </Text>

          </View>
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headText: {
    fontSize: 24
  },
  quesText: {
    fontSize: 18
  }
});
export default FACamera;
