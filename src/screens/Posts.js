import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {Body, Card} from "../components/IndexComponens";
const avatar = require('../../assets/images/go.png');

export default ({navigation})=>{
	const userId = navigation.getParam('user_id');

	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);

	const fetchUsers = async ()=>{
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
					data={data.filter(x => x.userId === userId)}
					renderItem={
						({ item,}) =>
							<Card
								name={item.title}
								avatar={avatar}
								onPress={()=>{
									navigation.navigate('Detail', {title : item.title, body: item.body})
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
