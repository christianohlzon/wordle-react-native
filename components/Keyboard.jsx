import { View, Text, TouchableOpacity } from 'react-native';

import { alphabet } from '../utils/alphabet';
import { LetterKey } from './LetterKey';

export function Keyboard({
    addLetterToGuess,
    removeLastLetterFromGuess,
    submitCurrentGuess,
    incorrectLetters,
}) {
    return (
        <View className="mb-3">
            <View className="flex flex-row flex-wrap justify-center">
                {alphabet.map((letter) => (
                    <LetterKey
                        key={letter}
                        letter={letter}
                        addLetterToGuess={addLetterToGuess}
                        incorrectLetters={incorrectLetters}
                    />
                ))}
            </View>
            <View className="flex flex-row mt-3 space-x-2 justify-between">
                <TouchableOpacity
                    className="flex-1 bg-amber-500 p-3 items-center rounded-md"
                    onPress={removeLastLetterFromGuess}
                >
                    <Text className="text-lg font-bold text-slate-100">
                        Undo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={submitCurrentGuess}
                    className="flex-1 bg-sky-700 p-3 items-center rounded-md"
                >
                    <Text className="text-lg font-bold text-slate-100">
                        Enter
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
