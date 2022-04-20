import { MEALS, CATEGORIES } from '../data/dummy-data';
import {StyleSheet, View, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import { useEffect, useLayoutEffect } from 'react';

// screen components get route and navigation prop automatically by react navigation
// note : this component registered as screen component in app.js
const MealsOverviewScreen =({route, navigation}) => {
    const catId = route.params.categoryId;

    // alternative for route props :
    // const route = useRoute();

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // error : Cannot update a component (`NativeStackNavigator`)
    // it is a wrong approach, we should use useEffect
    // navigation.setOptions({
    //     title: categoryTitle
    // });


    // useEffect will run this function (below) after
    // the component function was executed for the first time
    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    //     navigation.setOptions({
    //         title: categoryTitle
    //     });
    // }, [catId, navigation])

    // useLayoutEffect: execute some side effect whilst this is still happening
    // not after the component function was executed
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

   
    const renderMealItem = (itemData) => {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id} 
                renderItem={renderMealItem} 
            />
        </View>
        );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});