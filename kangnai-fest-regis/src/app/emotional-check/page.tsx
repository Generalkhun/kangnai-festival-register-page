"use client"
import { ProceedingButton } from "@/components/Button";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import "./page.css";
import bg01 from "/public/img/BG01.png";
import { emotionalPageHeaderText, emotionWords } from "@/constants";
import { EmotionCircle } from "@/components/EmotionCircle";

type Props = {};

const index = (props: Props) => {
    const [selectedEmotionWord, setSelectedEmotionWord] = useState<string>('')
    const onSelectEmotion = (word: string) => {
        setSelectedEmotionWord(word)
    }
    const renderEmotionCircle = useCallback((word:string) => (
        <EmotionCircle
            onSelectEmotion={onSelectEmotion}
            isSelected={selectedEmotionWord === word}
            emotionWord={word}
        />
    ), [selectedEmotionWord, onSelectEmotion])
    return (
        <div className="page-container">
            <div className="text-container">
                <div className="text">
                    {emotionalPageHeaderText}
                </div>
            </div>
            <div className="emotion-circle-container">
                <div className="emotion-circle-rows-odd">
                    {emotionWords.row1.map((word: string) => renderEmotionCircle(word))}
                </div>
                <div className="emotion-circle-rows-even">
                    {emotionWords.row2.map((word: string) => renderEmotionCircle(word))}
                </div>
                <div className="emotion-circle-rows-odd">
                    {emotionWords.row3.map((word: string) => renderEmotionCircle(word))}
                </div>
                <div className="emotion-circle-rows-even">
                    {emotionWords.row4.map((word: string) => renderEmotionCircle(word))}
                </div>
                <div className="emotion-circle-rows-odd">
                    {emotionWords.row5.map((word: string) => renderEmotionCircle(word))}
                </div>
            </div>
            <Image id="bg01" src={bg01} alt="bg-02" />
            {selectedEmotionWord.length && <Link href={"/feeling-card"}>
                <ProceedingButton buttonText={`ต่อไป`} />
            </Link>}
        </div>
    );
};

export default index;
