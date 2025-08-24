import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';

function Dashboard() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleSearchPress = () => {
        setShowSearch((prev) => !prev);
        setSearchQuery('');
    };

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        console.log('Searching for:', text);
    };

    const categories = [
        'Fruits', 'Vegetables', 'Dairy', 'Bakery', 'Meat', 'Seafood', 'Poultry',
        'Beverages', 'Snacks', 'Frozen Foods', 'Canned Goods', 'Grains & Pasta',
        'Spices & Condiments', 'Oils & Vinegars', 'Breakfast Foods', 'Sweets & Desserts',
        'Personal Care', 'Household Essentials', 'Organic', 'Baking Supplies'
    ];

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {!showSearch ? (
                    <>
                        <Text style={styles.title}>Daily Grocery Food</Text>
                        <TouchableOpacity onPress={handleSearchPress}>
                            <MaterialIcons name='search' size={30} color={'#162447'} />
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search grocery items..."
                            placeholderTextColor="#162447"
                            value={searchQuery}
                            onChangeText={handleSearch}
                        />
                        <TouchableOpacity onPress={handleSearchPress} style={styles.cancelButton}>
                            <MaterialIcons name="close" size={24} color="#162447" />
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            {/* Categories */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            >
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category}
                        style={[
                            styles.categoryButton,
                            selectedCategory === category && styles.categoryButtonSelected
                        ]}
                        onPress={() => setSelectedCategory(category)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === category && styles.categoryTextSelected
                            ]}
                        >
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView>
                {/* Product List would go here */}
                <Text style={{ fontSize: 18, color: '#162447', fontFamily: "NunitoRegular", marginTop: 20 }}>
                    Product List Placeholder
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ebf0fc',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#162447',
        fontFamily: "NunitoBold",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        height: 45,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: "NunitoRegular",
    },
    cancelButton: {
        marginLeft: 5,
        padding: 4,
    },
    categoriesContainer: {
        paddingHorizontal: 10,
        height:40,
        alignItems: 'center',
    },
    categoryButton: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: '#ddd',
        borderRadius: 40,
    },
    categoryButtonSelected: {
        backgroundColor: '#162447', // highlight color
    },
    categoryText: {
        color: "#162447",
        fontFamily: "NunitoRegular",
    },
    categoryTextSelected: {
        color: '#fff', // text color when selected
        fontWeight: '700',
    },
});

export default Dashboard;
