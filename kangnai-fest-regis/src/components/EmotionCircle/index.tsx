import React from 'react'
import './style.css'
type Props = {
  emotionWord: string;
  isSelected: boolean;
  onSelectEmotion: (word: string) => void
}

export const EmotionCircle = ({ emotionWord, isSelected, onSelectEmotion }: Props) => {
  const onClickCircle = () => {
    onSelectEmotion(emotionWord)
  }
  return (
    <div onClick={onClickCircle} className={isSelected ? "selected-circle" : "circle"}>{emotionWord}</div>
  )
}