import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'

type Props = {
    selectedEmotionWord: string;
    setSelectedEmotionWord: Dispatch<SetStateAction<string>>;
    addCustomEmotionWord: (customWord: string) => void
}

interface UseCustomEmotionModalResult {
    renderCustomEmotionModal: () => JSX.Element | null;
    isShowCustomEmotionModal: boolean;
}

export const UseCustomEmotionModal = ({
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
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    top: "368px",
                    left: "10px",
                    width: 360,
                    height: 150,
                    borderRadius: "16px",
                    padding: "24px",
                    zIndex: 10,
                }}>

                    <div style={{
                        fontWeight: 600,
                        fontSize: '20px',
                        color: "#4B9199"
                    }}>เพิ่มคำอธิบายความพังของคุณ...</div>
                    <input style={{
                        marginTop: '8px',
                        width: '312px',
                        height: '53px',
                        borderRadius: '8px',
                        padding: '16px, 20px, 16px, 20px',
                        gap: '8px',
                        borderColor: "#6EBEC7",
                        borderStyle: 'solid',
                    }} onChange={onInputText} type={"text"} value={customEmotionInput} />
                    <div style={{
                        display: 'flex'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'flex-start',
                            width: '312px',
                            height: '38px',
                            marginTop: '16px'
                        }}>

                            <button style={{
                                fontWeight: 600,
                                fontSize: '14px',
                                width: '100%',
                                borderRadius: '70px',
                                padding: '4px, 14px, 4px, 14px',
                                backgroundColor: '#6EBEC7',
                                color: 'white',
                                border: 'none',
                                borderStyle: 'solid',
                                height: '100%',
                            }} onClick={onSubmit}>เพิ่ม</button>
                            <button style={{
                                fontWeight: 600,
                                fontSize: '14px',
                                width: '100%',
                                borderRadius: '70px',
                                padding: '4px, 14px, 4px, 14px',
                                backgroundColor: 'white',
                                borderColor: '#6EBEC7',
                                borderStyle: 'solid',
                                color: '#6EBEC7',
                                height: '100%',
                            }} onClick={closeModal}>ยกเลิก</button>
                        </div>
                    </div>
                </div>
                :
                null
        )
    }, [isShowCustomEmotionModal, closeModal])


    return {
        renderCustomEmotionModal,
        isShowCustomEmotionModal
    }
}