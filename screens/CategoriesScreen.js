import { CATEGORIES } from '../data/dummy-data';
import { FlatList } from 'react-native'; 
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({navigation}){

// renderItem -> returns itemData object
// this helper func for keeping the jsx code leaner
    function renderCategoryItem(itemData){
        const pressHandler= ()=> {
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler} 
            />
            );
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem} 
            numColumns={2}
        />)
}

export default CategoriesScreen;