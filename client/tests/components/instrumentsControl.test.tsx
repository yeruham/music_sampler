import { it, expect, describe, vi, afterEach } from 'vitest'
import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import InstrumentsInput from '../../src/components/instruments/InstrumentsControl'


afterEach(() => cleanup());

describe('InstrumentsInput', () => {

    const instruments: string[] = ["piano", "accordion", "guitar"];
    const currentInstrument = instruments[0];
    const setInstrument = vi.fn();
    const setMelodyNotes = vi.fn();

    it(`should show select menu with ${currentInstrument} as defult option`, () => {
        render(<InstrumentsInput instruments={instruments} currentInstrument={currentInstrument} setInstrument={setInstrument} setMelodyNotes={setMelodyNotes}/>);
        const select = screen.getByRole("combobox");
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue(currentInstrument);
    })

    it(`should include three options with ${instruments}`, () => {
        render(<InstrumentsInput instruments={instruments} currentInstrument={currentInstrument} setInstrument={setInstrument} setMelodyNotes={setMelodyNotes}/>);
        const options = screen.getAllByRole("option");
        expect(options).toHaveLength(instruments.length);
        instruments.forEach((instrument) => {
            const instrumentOption = screen.getByRole("option", { name: instrument});
            expect(instrumentOption).toBeInTheDocument();
        })
    })

})