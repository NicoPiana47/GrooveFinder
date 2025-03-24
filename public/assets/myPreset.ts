import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/Lara';

const MyPreset = definePreset(Lara, {
    semantic: {
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff'
                },
                text: {
                    color: '#000000'
                },
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
                    focusColor: '#ffffff'
                },
                formField: {
                    hoverBorderColor: '#ffffff'
                }
            }
        },
    }
});

export default MyPreset;



