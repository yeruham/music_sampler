import { it, expect, describe, vi, afterEach, beforeAll } from 'vitest'
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import SavedMelodysMenu, { type SavedMelodysProps } from '../../src/components/melodys/SavedMelodysMenu'
import { getMelodysNames } from "../../src/utils/fetchMelodys";

afterEach(() => cleanup());

describe('SavedMelodysMenu',  () => {

    const savedMelodysProps: SavedMelodysProps = {setMelodyNotes: vi.fn(), setCurrentInstrument: vi.fn()}
    let melodyNames: string[] = [];

    beforeAll(async () => {
        melodyNames = await getMelodysNames();
    })

    it('should show saved-melodys button', () => {
        render(<SavedMelodysMenu {...savedMelodysProps}/>)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/melodys/i);
    })

    it('should open menu when user clicked the button', async () => {
        render(<SavedMelodysMenu {...savedMelodysProps}/>)
        const button = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(button);

        const buttonsOfMenu = screen.getAllByRole("button");
        melodyNames.forEach((melodyName) => {
            const melodyButton = screen.getByRole("button", {name: melodyName});
            expect(melodyButton).toBeInTheDocument();
        })
    })


    it('should close menu when user clicked of melody button', async () => {
        render(<SavedMelodysMenu {...savedMelodysProps}/>)
        const button = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(button);

        const melodyName = melodyNames[0]  
        const melodyButton = screen.getByRole("button", {name: melodyName});
        await user.click(melodyButton);

        const allButtons = screen.getAllByRole("button");
        expect(allButtons).toHaveLength(1);
    })

    
})
