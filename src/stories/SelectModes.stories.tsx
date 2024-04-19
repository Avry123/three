import { Meta, StoryObj } from '@storybook/react';
import SelectModes from '../components/SelectModes'

const meta: Meta<typeof SelectModes> = {
    component: SelectModes,
    title: 'SelectModes'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const One:Story = {
    args: {
               
    }
}



