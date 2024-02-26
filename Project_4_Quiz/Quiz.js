import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const reset = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreSection}>
          <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
          <TouchableOpacity onPress={reset} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.mainFrame}>
          <Text style={styles.quizText}>Quiz!!!</Text>
          <View style={styles.questionSection}>
            <Text style={styles.questionCount}>Question {currentQuestion + 1}/{questions.length}</Text>
            <Text style={styles.questionText}>{questions[currentQuestion].questionText}</Text>
          </View>
          <View style={styles.answerSection}>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={styles.listItem}
              >
                <Text style={styles.answerText}>{answerOption.answerText}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop:40,
    alignItems: 'center',
  },
  scoreSection: {
    alignItems: 'center',
    marginTop: '15%',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: '600',
  },
  resetButton: {
    marginTop: 20,
    width: 100,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonText: {
    color: 'white',
  },
  mainFrame: {
    alignItems: 'center',
    marginTop: 100,
  },
  quizText: {
    fontSize: 30,
    fontWeight: '600',
  },
  questionSection: {
    alignItems: 'center',
  },
  questionCount: {
    fontSize: 20,
  },
  questionText: {
    fontSize: 20,
    marginVertical: 20,
  },
  answerSection: {
    alignItems: 'center',
  },
  listItem: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  answerText: {
    fontSize: 18,
    color: 'white',
  },
});
