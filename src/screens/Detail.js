import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {TextCustom} from "../components/IndexComponens";

export default ({navigation})=>{
	const title = navigation.getParam('title', 'body');
	const body = navigation.getParam('body');
	return(
		<View style={styles.container}>
			<TextCustom
				isBold={true}
				size={24}
				title={title}
				align="center"
				family="josefin"
			/>
			<SafeAreaView style={{height: 50}}/>
			<TextCustom
				size={14}
				title={body}
				align="left"
				family="fira"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#eee',
		padding: 35,
	}
});
