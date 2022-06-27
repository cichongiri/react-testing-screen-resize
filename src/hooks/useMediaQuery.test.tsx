import '../mocks/matchMedia.mock';

import React from 'react';
import useMediaQuery from './useMediaQuery';
import { render, screen } from '@testing-library/react';

describe('Hook: useMediaQuery', () => {
    describe('Given a CSSMediaRule value greater than or equal to 881px', () => {
        function Foo() {
            const isValidScreenSize = useMediaQuery('(min-width: 881px)');

            return (
                <div data-testid={
                    isValidScreenSize
                        ? 'foo'
                        : 'bar'
                    }>
                </div>
            )
        }
        it('should flag that as a valid screen size', () => {
            render(<Foo />)

            const fooElement = screen.getByTestId('foo')
            
            expect(fooElement).toBeInTheDocument();
        })
    });
    describe('Given a CSSMediaRule value less than or equal to 880px', () => {
        it('should flag that as a invalid screen size', () => {
            function Bar() {
                const isValidScreenSize = useMediaQuery('(max-width: 880px)');
    
                return (
                    <div data-testid={
                        isValidScreenSize
                            ? 'foo'
                            : 'bar'
                        }>
                    </div>
                )
            }

            render(<Bar />)

            const barElement = screen.getByTestId('bar')
            
            expect(barElement).toBeInTheDocument();
        })
    });
});