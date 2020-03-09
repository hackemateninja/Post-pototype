import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {Body, Card} from "../components/IndexComponens";
const avatar = require('../../assets/images/react.png');

export default ({navigation})=>{
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const fetchUsers = async ()=>{
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const json = await response.json();
		setData(json);
		setLoaded(true);
	};

	useEffect(()=>{
		fetchUsers();
	},[]);

	return(
		<Body>
			{
				loaded ? <FlatList
					style={styles.list}
					data={data}
					renderItem={
						({ item,}) =>
							<Card
								name={item.name}
								phone={item.phone}
								email={item.email}
								avatar={avatar}
								onPress={()=>{
									navigation.navigate('Posts', {user_id : item.id})
								}}
							/>
					}
					keyExtractor={item => String(item.id)}
				/> : <ActivityIndicator size="large" color="#fff" />
			}
		</Body>
	);
};

const styles = StyleSheet.create({
	list:{
		width: '100%',
		padding: 16,
	}
});
