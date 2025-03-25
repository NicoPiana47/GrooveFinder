import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/Lara';

const MyPreset = definePreset(Lara, {
    semantic: {
        colorScheme: {
            light: {
                primary: {
                    color: '#20EDA9',
                    hoverColor: '#1ACF90',
                    activeColor: '#14B178',
                    inverseColor: '#ffffff'
                },
                highlight: {
                    background: '#20EDA9',
                    focusBackground: '#1ACF90',
                    color: '#ffffff',
                    focusColor: '#ffffff',
                },
            },
            dark: {
              primary: {
                color: '#20EDA9',
                hoverColor: '#1ACF90',
                activeColor: '#14B178',
                inverseColor: '#000000'
              },
              highlight: {
                  background: '#20EDA9',
                  focusBackground: '#1ACF90',
                  color: '#000000',
                  focusColor: '#000000'
              },
            }
        },
    }
});

export default MyPreset;



