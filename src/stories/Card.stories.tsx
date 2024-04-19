import { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card'

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'Card'
}

export default meta;

type Story = StoryObj<typeof meta>;



export const One:Story = {
    args: {
        title: 'JRE',
        message: 'JRE is awesome',
        index: 1,       
    }
}

export const Two:Story = {
    args: {
        title: 'Platoon',
        message: 'Rejoice Oyoung man, in thy youth.',
        index: 2,       
    }
}