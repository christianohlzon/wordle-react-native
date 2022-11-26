import { View, Text } from 'react-native';

export function Square({ letter, isCorrect, isInWord, isFocused }) {
    const backgroundColor = isCorrect
        ? 'bg-sky-700'
        : isInWord
        ? 'bg-amber-500'
        : 'bg-slate-800';

    const maybeFocused = isFocused ? ' border-solid border border-sky-100' : '';

    return (
        <View
            className={
                'w-1/6 p-1 items-center justify-center h-14 mb-3 ' +
                backgroundColor +
                maybeFocused
            }
        >
            <Text className="text-2xl font-extrabold text-slate-100">
                {letter}
            </Text>
        </View>
    );
}
