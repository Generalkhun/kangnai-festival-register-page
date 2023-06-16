"use client"
import { ProceedingButton } from "@/components/Button/button";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import "./page.css";
import bg01 from "/public/img/bg01.svg";
import underliner from "/public/img/underliner.svg";
import { emotionalPageHeaderSubText, emotionalPageHeaderText1, emotionalPageHeaderText2, emotionalPageHeaderText3, emotionalPageHeaderText4, emotionWords } from "@/constants";
import { EmotionCircle } from "@/components/EmotionCircle";
import { UseCustomEmotionModal } from "./useCustomEmotionModal";

const Page = () => {
    const [selectedEmotionWord, setSelectedEmotionWord] = useState<string>('')
    const [addedWord, setAddedWord] = useState<string>("")
    const addCustomEmotionWord = (customWord: string) => {
        setAddedWord(customWord)
        setSelectedEmotionWord(customWord)
    }
    const onSelectEmotion = (word: string) => {
        setSelectedEmotionWord(word)
    }
    const renderEmotionCircle = useCallback((word: string) => (
        <EmotionCircle
            onSelectEmotion={onSelectEmotion}
            isSelected={selectedEmotionWord === word}
            emotionWord={word}
        />
    ), [selectedEmotionWord, onSelectEmotion])

    const { renderCustomEmotionModal, isShowCustomEmotionModal } = UseCustomEmotionModal({
        selectedEmotionWord,
        setSelectedEmotionWord,
        addCustomEmotionWord,
    })
    const onProceed = () => {
        window.localStorage.setItem("selectedEmotionWord", selectedEmotionWord)
    }
    return (
        <div className={"emotional-check-page-container"}>
            <div className={isShowCustomEmotionModal ? 'backdrop' : undefined}></div>
            {renderCustomEmotionModal()}
            <Image id="bg01" src={bg01} alt="bg-02" />
            <div style={{
                position: 'absolute',
                top: "164.72px",
                left: "226.97px",
            }}>
                <Image id="underliner" src={underliner} alt="underliner" />
            </div>
            <div className="emotional-check-page-container-text-container">
                <div className="text">
                    <span>
                        {emotionalPageHeaderText1}
                    </span>
                    <span style={{ color: '#4B9199' }}>
                        {emotionalPageHeaderText2}
                    </span>
                    <span>
                        {emotionalPageHeaderText3}
                    </span>
                    <span style={{ color: '#4B9199' }}>
                        {emotionalPageHeaderText4}
                    </span>
                </div>
                <div className="text2">
                    {emotionalPageHeaderSubText}
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
                    {addedWord ? emotionWords.row4
                        .map((word: string) => renderEmotionCircle(word))
                        .concat(renderEmotionCircle(addedWord))
                        :
                        emotionWords.row4
                            .map((word: string) => renderEmotionCircle(word))
                    }
                </div>
                <div className="emotion-circle-rows-odd">
                    {
                        emotionWords.row5
                            .map((word: string) => renderEmotionCircle(word))
                            .concat(renderEmotionCircle("+"))
                    }
                </div>
            </div>
            <div className='proceeding-btn-container'>
                {!!selectedEmotionWord.length && <Link href={"/feeling-card"}>
                    <ProceedingButton onClick={onProceed} buttonText={`ต่อไป`} />
                </Link>}
            </div>

        </div>
    );
};

export default Page;
