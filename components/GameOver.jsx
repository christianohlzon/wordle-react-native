import { View, Text, TouchableOpacity } from 'react-native';

export function GameOver({ startNewGame, isVictorious, answer }) {
    const PlayAgainButton = () => (
        <TouchableOpacity
            className="bg-sky-700 px-5 py-3 mt-3 items-center rounded-md"
            onPress={startNewGame}
        >
            <Text className="text-xl font-extrabold text-slate-100">
                New game
            </Text>
        </TouchableOpacity>
    );

    if (isVictorious) {
        return (
            <View className="items-center mt-2">
                <Text className="text-xl font-semibold text-slate-100">
                    Congratulations, you're victorious!
                </Text>
                <Text className="text-xl font-extrabold text-slate-100 mt-2">
                    Play again?
                </Text>
                <PlayAgainButton />
            </View>
        );
    }

    return (
        <View className="items-center mt-2">
            <Text className="text-xl font-semibold text-slate-100">
                Sorry you lost, the right word was {answer}
            </Text>
            <Text className="text-xl font-extrabold text-slate-100 mt-2">
                Play again?
            </Text>
            <PlayAgainButton />
        </View>
    );
}
