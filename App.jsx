import { useEffect, useState } from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';

import { Board } from './components/Board';
import { GameOver } from './components/GameOver';
import { Keyboard } from './components/Keyboard';
import { words } from './words.json';

export default function App() {
    const [answer, setAnswer] = useState([]);
    const [previousGuesses, setPreviousGuesses] = useState([]);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [isVictorious, setIsVictorious] = useState(false);
    const [incorrectLetters, setIncorrectLetters] = useState('');
    const [noWordGuesses, setNoWordGuesses] = useState(0);

    const addLetterToGuess = (letter) => {
        if (currentGuess.length > 4) return;
        setCurrentGuess((prevstate) => [...prevstate, letter]);
    };

    const removeLastLetterFromGuess = () => {
        setCurrentGuess((prevstate) => prevstate.slice(0, -1));
    };

    const submitCurrentGuess = () => {
        const currentGuessString = currentGuess.join('');
        const isAWord = words.find(
            (word) => word.toUpperCase() === currentGuessString
        );

        if (!isAWord) {
            setNoWordGuesses(noWordGuesses + 1);
            return;
        }

        const isCorrect = answer.join('') === currentGuess.join('');

        if (isCorrect) {
            setPreviousGuesses([...previousGuesses, currentGuess]);
            setCurrentGuess([]);
            setIsGameOver(true);
            setIsVictorious(true);
        }

        if (previousGuesses.length === 4) {
            setPreviousGuesses([...previousGuesses, currentGuess]);
            setCurrentGuess([]);
            setIsGameOver(true);
            setIsVictorious(false);
        }

        if (currentGuess.length === 5) {
            setPreviousGuesses([...previousGuesses, currentGuess]);
            setCurrentGuess([]);
        }
    };

    const getRandowWordAsArray = () => {
        const randomNumber = Math.round(Math.random() * words.length);
        const randowWordAsArray = words[randomNumber].toUpperCase().split('');
        console.log(randowWordAsArray);
        return randowWordAsArray;
    };

    const startNewGame = () => {
        setAnswer(getRandowWordAsArray());
        setPreviousGuesses([]);
        setCurrentGuess([]);
        setIsGameOver(false);
        setNoWordGuesses(0);
    };

    useEffect(() => {
        const allUsedLetters = previousGuesses.join(',').split(',');
        const lettersNotInAnswer = allUsedLetters.filter(
            (letter) => !answer.includes(letter)
        );
        setIncorrectLetters(lettersNotInAnswer);
    }, [previousGuesses]);

    useEffect(() => {
        startNewGame();
    }, []);

    return (
        <SafeAreaView className="flex-1 items-center bg-slate-900">
            <StatusBar barStyle="light-content" />
            <View className="flex-1 justify-between w-full p-4">
                <Board
                    answer={answer}
                    previousGuesses={previousGuesses}
                    currentGuess={currentGuess}
                    isGameOver={isGameOver}
                    noWordGuesses={noWordGuesses}
                />
                {isGameOver ? (
                    <GameOver
                        startNewGame={startNewGame}
                        isVictorious={isVictorious}
                        answer={answer}
                    />
                ) : (
                    <Keyboard
                        previousGuesses={previousGuesses}
                        addLetterToGuess={addLetterToGuess}
                        removeLastLetterFromGuess={removeLastLetterFromGuess}
                        submitCurrentGuess={submitCurrentGuess}
                        incorrectLetters={incorrectLetters}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
