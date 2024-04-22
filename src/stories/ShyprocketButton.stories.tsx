import { Meta, StoryObj } from '@storybook/react';
import ShyprocketButton from '../components/ShyprocketButton'

const meta: Meta<typeof ShyprocketButton> = {
    component: ShyprocketButton,
    title: 'ShyprocketButton'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const One:Story = {
    args: {
               
    }
}



