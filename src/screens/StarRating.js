import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone de estrela do pacote

const StarRating = ({ rating, onStarPress }) => {
    const starIcons = [1, 2, 3, 4, 5].map((index) => (
        <TouchableOpacity key={index} onPress={() => onStarPress(index)}>
            <FontAwesome
                name={index <= rating ? 'star' : 'star-o'}
                size={30}
                color={index <= rating ? 'gold' : 'gray'}
            />
        </TouchableOpacity>
    ));

    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {starIcons}
        </View>
    );
};

export default StarRating;
