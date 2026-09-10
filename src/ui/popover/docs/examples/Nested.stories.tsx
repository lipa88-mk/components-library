import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Popover, PopoverTree } from '../..';
import type { PopoverProps } from '../../models';
import { args, argTypes } from '../config';
import { Button } from '../../../button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Popover> = {
    title: 'Components/Popover/Examples',
    component: Popover,
    argTypes,
    args,
};

type Item = {
    name: string;
    dishes: {
        name: string;
        ingredients: string[];
    }[];
};

const data: Item[] = [
    {
        name: 'Italian 🇮🇹',
        dishes: [
            { name: 'Pizza Margherita', ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive Oil'] },
            { name: 'Spaghetti Carbonara', ingredients: ['Spaghetti', 'Eggs', 'Pancetta', 'Parmesan Cheese'] },
        ],
    },
    {
        name: 'Japanese 🇯🇵',
        dishes: [
            { name: 'Sushi', ingredients: ['Rice', 'Nori', 'Fish', 'Soy Sauce'] },
            { name: 'Ramen', ingredients: ['Noodles', 'Broth', 'Pork', 'Egg'] },
        ],
    },
    {
        name: 'Mexican 🇲🇽',
        dishes: [
            { name: 'Tacos', ingredients: ['Tortilla', 'Beef', 'Lettuce', 'Cheese'] },
            { name: 'Guacamole', ingredients: ['Avocado', 'Tomato', 'Onion', 'Lime'] },
        ],
    },
    {
        name: 'Indian 🇮🇳',
        dishes: [
            { name: 'Butter Chicken', ingredients: ['Chicken', 'Butter', 'Tomato', 'Cream'] },
            { name: 'Palak Paneer', ingredients: ['Spinach', 'Paneer', 'Garlic', 'Spices'] },
        ],
    },
    {
        name: 'French 🇫🇷',
        dishes: [
            { name: 'Coq au Vin', ingredients: ['Chicken', 'Red Wine', 'Mushrooms', 'Bacon'] },
            { name: 'Ratatouille', ingredients: ['Eggplant', 'Zucchini', 'Tomato', 'Bell Peppers'] },
        ],
    },
    {
        name: 'Chinese 🇨🇳',
        dishes: [
            { name: 'Kung Pao Chicken', ingredients: ['Chicken', 'Peanuts', 'Chili Peppers', 'Soy Sauce'] },
            { name: 'Sweet and Sour Pork', ingredients: ['Pork', 'Pineapple', 'Bell Peppers', 'Vinegar'] },
        ],
    },
    {
        name: 'Greek 🇬🇷',
        dishes: [
            { name: 'Moussaka', ingredients: ['Eggplant', 'Ground Beef', 'Tomato', 'Béchamel Sauce'] },
            { name: 'Greek Salad', ingredients: ['Tomato', 'Cucumber', 'Feta Cheese', 'Olives'] },
        ],
    },
    {
        name: 'Thai 🇹🇭',
        dishes: [
            { name: 'Pad Thai', ingredients: ['Rice Noodles', 'Shrimp', 'Peanuts', 'Tamarind Sauce'] },
            { name: 'Green Curry', ingredients: ['Chicken', 'Coconut Milk', 'Green Curry Paste', 'Basil'] },
        ],
    },
    {
        name: 'Spanish 🇪🇸',
        dishes: [
            { name: 'Paella', ingredients: ['Rice', 'Saffron', 'Seafood', 'Chicken'] },
            { name: 'Gazpacho', ingredients: ['Tomato', 'Cucumber', 'Bell Peppers', 'Garlic'] },
        ],
    },
    {
        name: 'Lebanese 🇱🇧',
        dishes: [
            { name: 'Tabbouleh', ingredients: ['Parsley', 'Bulgur', 'Tomato', 'Lemon Juice'] },
            { name: 'Hummus', ingredients: ['Chickpeas', 'Tahini', 'Garlic', 'Lemon Juice'] },
        ],
    },
];

export const Nested: StoryFn<PopoverProps> = props => (
    <PopoverTree>
        <Popover {...props} fallbackAxisSideDirection="end">
            <Button.Primary type="button">Click me!</Button.Primary>
            <Popover.Content>
                <Popover.List>
                    {data.map(cuisine => (
                        <Popover key={cuisine.name} placement="right-start" offset={18} fallbackAxisSideDirection="end">
                            <Popover.Item className="flex items-center justify-between">
                                {cuisine.name} <ChevronRightIcon className="w-4 h-4" />
                            </Popover.Item>
                            <Popover.Content>
                                <Popover.List>
                                    {cuisine.dishes.map(dish => (
                                        <Popover
                                            key={dish.name}
                                            placement="right-start"
                                            offset={18}
                                            fallbackAxisSideDirection="end"
                                        >
                                            <Popover.Item className="flex items-center justify-between">
                                                {dish.name} <ChevronRightIcon className="w-4 h-4" />
                                            </Popover.Item>
                                            <Popover.Content>
                                                <Popover.List>
                                                    {dish.ingredients.map(ingredient => (
                                                        <Popover.Item key={ingredient}>{ingredient}</Popover.Item>
                                                    ))}
                                                </Popover.List>
                                            </Popover.Content>
                                        </Popover>
                                    ))}
                                </Popover.List>
                            </Popover.Content>
                        </Popover>
                    ))}
                </Popover.List>
            </Popover.Content>
        </Popover>
    </PopoverTree>
);

export default meta;
