import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Modal, Dimensions } from 'react-native';
import Navigation from './BottomNavigation';

const { width, height } = Dimensions.get('window');

function Dashboard() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);

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

  const products = [
    {
      id: 1,
      name: 'Strawberries',
      image: require('@/assets/images/strawberry.jpeg'),
      calories: 50,
      price: 3.99,
      category:"Fruits",
      description: 'Fresh strawberries perfect for desserts and smoothies.',
    },
    {
      id: 2,
      name: 'Apples',
      image: require('@/assets/images/apples.jpeg'),
      calories: 80,
      price: 2.49,
      category:"Fruits",
      description: 'Crisp and juicy apples, great for snacking.',
    },
    {
        id: 3,
        name: 'Grapes',
        image: require('@/assets/images/grapes.jpeg'),
        calories: 60,
        price: 4.29,
        category:"Fruits",
        description: 'Sweet and seedless grapes, ideal for salads and snacks.',
    },
    {
        id: 4,
        name: 'Bananas',
        image: require('@/assets/images/bananas.jpeg'),
        calories: 90,
        category:"Fruits",
        price: 1.29,
        description: 'Ripe bananas, perfect for smoothies and baking.',
    },
    // Add more products here
  ];

  const openProductModal = (id: number) => setExpandedProduct(id);
  const closeProductModal = () => setExpandedProduct(null);
  const selectedProduct = products.find(p => p.id === expandedProduct);

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
        {categories.map(category => (
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

      {/* Section Title */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 10 }}>
        <Text style={styles.subTitle}>Popular Fruits</Text>
        <Text style={{ fontSize: 18, fontFamily: "NunitoBold", color: "#83e06c" }}>See all</Text>
      </View>

      {/* Products List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      >
        {products.map(product => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.calories}>{product.calories} kcal</Text>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => openProductModal(product.id)} style={styles.plusButton}>
              <MaterialIcons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Products List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      >
        {products.map(product => (
          <View key={product.id} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{product.name}</Text>
              <Text style={styles.calories}>{product.calories} kcal</Text>
              <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => openProductModal(product.id)} style={styles.plusButton}>
              <MaterialIcons name="add" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>


      {/* Product Modal Overlay */}
      {selectedProduct && (
        <Modal
          visible={true}
          transparent
          animationType="slide"
          onRequestClose={closeProductModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image source={selectedProduct.image} style={styles.modalImage} />
              <Text style={styles.modalName}>{selectedProduct.name}</Text>
              <Text style={styles.modalCalories}>{selectedProduct.calories} kcal</Text>
              <Text style={styles.modalPrice}>${selectedProduct.price.toFixed(2)}</Text>
              <Text style={styles.modalDescription}>{selectedProduct.description}</Text>

              <TouchableOpacity onPress={closeProductModal} style={styles.modalCloseButton}>
                <MaterialIcons name="close" size={28} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ebf0fc' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '700', color: '#162447', fontFamily: "NunitoBold" },
  subTitle: { fontSize: 22, fontWeight: '700', color: '#162447', fontFamily: "NunitoBold" },
  searchContainer: { flexDirection: 'row', alignItems: 'center', flex: 1, borderRadius: 20, borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10, height: 45 },
  searchInput: { flex: 1, fontSize: 16, fontFamily: "NunitoRegular" },
  cancelButton: { marginLeft: 5, padding: 4 },
  categoriesContainer: { paddingHorizontal: 10, height: 40, alignItems: 'center' },
  categoryButton: { marginRight: 10, paddingVertical: 8, paddingHorizontal: 20, backgroundColor: '#ddd', borderRadius: 40 },
  categoryButtonSelected: { backgroundColor: '#162447' },
  categoryText: { color: "#162447", fontFamily: "NunitoRegular" },
  categoryTextSelected: { color: '#fff', fontWeight: '700' },
  productsContainer: { paddingLeft: 10, paddingRight: 20, gap: 16 },
  card: { backgroundColor: '#fff', width: 300, height: 300, borderRadius: 20, marginBottom: 16, overflow: 'hidden', elevation: 3, shadowColor: '#000', shadowOpacity: 0.2, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5 },
  image: { width: '100%', height: 180, resizeMode: 'contain' },
  infoContainer: { padding: 12 },
  name: { fontSize: 18, fontWeight: '700', color: '#162447', fontFamily: 'NunitoBold' },
  calories: { fontSize: 14, color: '#555', marginTop: 4, fontFamily: 'NunitoRegular' },
  price: { fontSize: 16, color: '#fca311', marginTop: 4, fontFamily: 'NunitoBold' },
  plusButton: { position: 'absolute', bottom: 20, right: 12, backgroundColor: '#162447', borderRadius: 20, padding: 6 },

  // Modal Styles
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { width: width * 0.85, backgroundColor: '#fff', borderRadius: 20, padding: 20, alignItems: 'center', position: 'relative' },
  modalImage: { width: '100%', height: 200, resizeMode: 'contain', borderRadius: 15 },
  modalName: { fontSize: 22, fontWeight: '700', color: '#162447', marginTop: 12, fontFamily: 'NunitoBold' },
  modalCalories: { fontSize: 16, color: '#555', marginTop: 4, fontFamily: 'NunitoRegular' },
  modalPrice: { fontSize: 18, color: '#fca311', marginTop: 4, fontFamily: 'NunitoBold' },
  modalDescription: { fontSize: 16, color: '#162447', marginTop: 8, textAlign: 'center', fontFamily: 'NunitoRegular' },
  modalCloseButton: { position: 'absolute', top: 10, right: 10, backgroundColor: '#162447', borderRadius: 20, padding: 4 },
});

export default Dashboard;
