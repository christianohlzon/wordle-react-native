import { useCallback, useRef, useEffect } from 'react';
import { View, Animated } from 'react-native';

import { Square } from './Square';

export function GuessRow({ currentGuess, noWordGuesses }) {
    const remainingSquares = [...Array(5 - currentGuess.length).keys()];

    const anim = useRef(new Animated.Value(0));
    const shakeRow = useCallback(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(anim.current, {
                    toValue: -4,
                    duration: 50,
                    useNativeDriver: true,
                }),
                Animated.timing(anim.current, {
                    toValue: 4,
                    duration: 50,
                    useNativeDriver: true,
                }),
                Animated.timing(anim.current, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: true,
                }),
            ]),
            { iterations: 2 }
        ).start();
    }, []);

    useEffect(() => {
        if (noWordGuesses === 0) return;
        shakeRow();
    }, [noWordGuesses]);

    return (
        <Animated.View style={{ transform: [{ translateX: anim.current }] }}>
            <View className="flex flex-row justify-between">
                {currentGuess.map((letter, index) => {
                    return (
                        <Square
                            key={index}
                            letter={letter}
                            isCorrect={false}
                            isInWord={false}
                            isFocused
                        />
                    );
                })}
                {remainingSquares.map((emptySquare) => {
                    return (
                        <Square
                            key={emptySquare}
                            letter=""
                            isCorrect={false}
                            isInWord={false}
                            isFocused
                        />
                    );
                })}
            </View>
        </Animated.View>
    );
}
