import React from 'react';
import {View, StyleSheet} from 'react-native';

export default ({children})=>{
	return(
		<View style={styles.body}>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	body:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#08202e',
	}
});
