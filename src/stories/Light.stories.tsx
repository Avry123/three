import { Meta, StoryObj } from '@storybook/react';
import Light from '../components/Light'

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light'
}

export default meta;

type Story = StoryObj<typeof meta>;



export const Green:Story = {
    args: {
        variant : 'Green'       
    }
}
export const Blue:Story = {
    args: {
        variant : 'Blue'       
    }
}
export const Red:Story = {
    args: {
        variant : 'Red'       
    }
}