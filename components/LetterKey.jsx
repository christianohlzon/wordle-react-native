import { Text, TouchableOpacity } from 'react-native';

export function LetterKey({ letter, addLetterToGuess, incorrectLetters }) {
    const isUsedAndNotInAnswer = incorrectLetters.includes(letter);
    const fontColor = isUsedAndNotInAnswer
        ? 'text-slate-600'
        : 'text-slate-100';
    return (
        <TouchableOpacity
            className="p-3"
            onPress={() => addLetterToGuess(letter)}
        >
            <Text className={`text-xl font-extrabold ${fontColor}`}>
                {letter}
            </Text>
        </TouchableOpacity>
    );
}
