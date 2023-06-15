import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'

type Props = {
    selectedEmotionWord: string;
    setSelectedEmotionWord: Dispatch<SetStateAction<string>>;
    addCustomEmotionWord: (customWord: string) => void
}

interface UseCustomEmotionModalResult {
    renderCustomEmotionModal: () => JSX.Element | null;
}

export const useCustomEmotionModal = ({
    selectedEmotionWord,
    setSelectedEmotionWord,
    addCustomEmotionWord,
}: Props): UseCustomEmotionModalResult => {
    const [isShowCustomEmotionModal, setIsShowCustomEmotionModal] = useState<boolean>(false)

    const [customEmotionInput, setCustomEmotionInput] = useState("")
    useEffect(() => {
        if (selectedEmotionWord !== "+") {
            return;
        }
        setIsShowCustomEmotionModal(true)
    }, [selectedEmotionWord])

    const closeModal = () => {
        setIsShowCustomEmotionModal(false)
        setSelectedEmotionWord("")
    }
    const onSubmit = () => {
        addCustomEmotionWord(customEmotionInput)
        setIsShowCustomEmotionModal(false)
    }

    const onInputText = (e: any) => {
        setCustomEmotionInput(e.target.value);
    }
    const renderCustomEmotionModal = useCallback(() => {
        return (
            !!isShowCustomEmotionModal ?
                <div style={{
                    backgroundColor: "white",
                    display: "flex",
                    top: "368px",
                    left: "34px",
                    borderRadius: "16px",
                    padding: "24px",
                }}>

                    <div>เพิ่มคำอธิบายความพังของคุณ</div>

                    <input onChange={onInputText} type={"text"} value={customEmotionInput} />
                    <div style={{
                        display: 'flex'
                    }}>
                        <button onClick={onSubmit}>เพิ่ม</button>
                        <button onClick={closeModal}>ยกเลิก</button>
                    </div>
                </div>
                :
                null
        )
    }, [isShowCustomEmotionModal, closeModal])


    return {
        renderCustomEmotionModal
    }
}