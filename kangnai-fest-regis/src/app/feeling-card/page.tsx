"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import homeIcon from '/public/img/home.svg';
import bg01 from "/public/img/bg01.svg";
import miniLogo from "public/img/miniLogo.svg";
import quality_card from "public/img/quality_card.svg"
import quality01 from "public/img/quality01.svg"
import quality02 from "public/img/quality02.svg"
import quality03 from "public/img/quality03.svg"
import quality04 from "public/img/quality04.svg"
import quality05 from "public/img/quality05.svg"
import quality06 from "public/img/quality06.svg"
import quality07 from "public/img/quality07.svg"
import quality08 from "public/img/quality08.svg"
import quality09 from "public/img/quality09.svg"
import quality10 from "public/img/quality10.svg"
import quality11 from "public/img/quality11.svg"
import quality12 from "public/img/quality12.svg"
import quality13 from "public/img/quality13.svg"
import quality14 from "public/img/quality14.svg"
import quality15 from "public/img/quality15.svg"
import quality16 from "public/img/quality16.svg"
import quality17 from "public/img/quality17.svg"
import quality18 from "public/img/quality18.svg"
import Image from "next/image";
import './page.css'
import { cardContentCreator } from '@/constants';
import whiteUnderline from "public/img/white_underline.svg"


const Page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [cardNumber, setCardNumber] = useState<number>(0)
    const [cardContent, setCardContent] = useState<string>('')
    const [isStartRenderCardBody, setIsStartRenderCardBody] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setIsStartRenderCardBody(true)
        }, 3000)
    }, [setIsStartRenderCardBody])
    const renderCardContent = () => (
        <div style={{
            position: "absolute",
            top: "620px",
            left: "5px",
            padding: "0px 90px",
            textAlign: "center",
            fontWeight: "600px",
            fontSize: "20px",
            lineHeight: "30px",
            maxWidth: "250px",
        }}>
            <Image id="underline" src={whiteUnderline} alt="underline" />
            <br />
            {cardContent}
        </div>
    )
    const renderCard = (cardNumber: number) => {
        switch (cardNumber) {
            case 1:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality01} alt="quality" />
                    {renderCardContent()}
                </>
            case 2:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality02} alt="quality" />
                    {renderCardContent()}
                </>
            case 3:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality03} alt="quality" />
                    {renderCardContent()}
                </>
            case 4:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality04} alt="quality" />
                    {renderCardContent()}
                </>
            case 5:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality05} alt="quality" />
                    {renderCardContent()}
                </>
            case 6:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality06} alt="quality" />
                    {renderCardContent()}
                </>
            case 7:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality07} alt="quality" />
                    {renderCardContent()}
                </>
            case 8:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality08} alt="quality" />
                    {renderCardContent()}
                </>
            case 9:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality09} alt="quality" />
                    {renderCardContent()}
                </>
            case 10:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality10} alt="quality" />
                    {renderCardContent()}
                </>
            case 11:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality11} alt="quality" />
                    {renderCardContent()}
                </>
            case 12:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality12} alt="quality" />
                    {renderCardContent()}
                </>
            case 13:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality13} alt="quality" />
                    {renderCardContent()}
                </>
            case 14:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality14} alt="quality" />
                    {renderCardContent()}
                </>
            case 15:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality15} alt="quality" />
                    {renderCardContent()}
                </>
            case 16:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality16} alt="quality" />
                    {renderCardContent()}
                </>
            case 17:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality17} alt="quality" />
                    {renderCardContent()}
                </>
            case 18:
                return <>
                    <Image id="quality-card" src={quality_card} alt="quality_card" />
                    <Image id="quality-card-pic" src={quality18} alt="quality" />
                    {renderCardContent()}
                </>
        }
    }
    useEffect(() => {
        if (!isLoading && !!cardNumber && !!cardContent) {
            return;
        }
        //random a card's content
        const selectedEmotionWord = window.localStorage.getItem("selectedEmotionWord") || ""

        const content = cardContentCreator(selectedEmotionWord, Math.ceil(Math.random() * 14))
        setCardContent(content)
        //random a card
        setCardNumber(Math.ceil(Math.random() * 18))
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 4000)
        return () => {
            clearTimeout(timer);
        };
    }, [cardNumber, cardContent])
    return (
        <div>
            <div className="feeling-card-page-container">
                <Image id="bg01" src={bg01} alt="bg-01" />
                <Image id="miniLogo" src={miniLogo} alt="mini logo" />
                {isLoading &&
                    <div>
                        <div style={{
                            position: 'absolute',
                            top: '391px',
                            left: '79.5px',
                            width: '263px',
                            fontWeight: 500,
                            textAlign: 'center',
                            fontSize: '20px',
                            color: 'rgb(75, 145, 153)',
                        }}>
                            <div>
                                ความพังเป็นส่วนหนึ่งของการเติบโต
                            </div>
                            <div>
                                อย่ากลัวที่จะแวะทักทายเขาบ่อย ๆ
                            </div>
                        </div>
                        <div
                            className="loader-bar"
                        />
                    </div>
                }
                {!isLoading && <div style={{
                    position: 'absolute',
                    top: '174px',
                    left: '105.5px'
                }}>
                    <div className="headCard-text">ขอบคุณสำหรับความพังที่แชร์ให้กัน</div>
                    <div className="headCard-text">เราขอมอบสิ่งนี้ให้คุณ</div>
                </div>}
                {isStartRenderCardBody &&
                    <Image id="quality-card" src={quality_card} alt="quality_card" />}
                {!isLoading && <div>
                    {renderCard(cardNumber)}
                    <Link href={'/'}>
                        <button
                            style={{
                                position: "absolute",
                                top: "806px",
                                left: '180px',
                                width: "64px",
                                height: "64px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Image src={homeIcon} style={{ width: '24px', height: '24px' }} alt="home" />
                        </button>
                    </Link>

                </div>}


            </div>
        </div >
    )
}

export default Page