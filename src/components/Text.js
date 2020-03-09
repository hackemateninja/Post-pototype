import React from 'react';
import {Text} from 'react-native';

export default ({title, isBold, size, align, family})=>{
	return(
		<Text style={
			{
				fontWeight: isBold ? '700': '400',
				fontSize: size || 14,
				textAlign: align || 'left',
				fontFamily: family || 'fira',
			}
		}>
			{title}
		</Text>
	);
};
