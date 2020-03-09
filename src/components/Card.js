import React from 'react';
import {
	View,
	StyleSheet,
	Image,
	TouchableNativeFeedback
} from 'react-native';
import {TextCustom} from "./IndexComponens";

export default (props)=>{
	const {name, email, phone, onPress, avatar} = props;

	return(
		<TouchableNativeFeedback onPress={onPress}>
			<View style={styles.cardContainer}>
				<Image
					style={styles.avatar}
					source={avatar}
				/>
				<View style={styles.infoContainer}>
					<TextCustom
						title={name}
						size={15}
						align="right"
						family='josefin'
						isBold={true}
					/>
					<TextCustom
						title={email || ''}
						size={14}
						align="right"
					/>
					<TextCustom
						title={phone || ''}
						size={14}
						align="right"
					/>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	cardContainer:{
		height: 100,
		width: '100%',
		borderRadius: 8,
		elevation: 5,
		flexDirection: 'row',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: '#fff',
		marginBottom: 16,
		marginHorizontal: 8
	},
	avatar: {
		height: '100%',
		width: '25%',
		marginRight: 15,
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
	},
	infoContainer:{
		position: 'absolute',
		right: 8,
		width: '75%',
		paddingHorizontal: 8,
		paddingVertical: 16,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
});
