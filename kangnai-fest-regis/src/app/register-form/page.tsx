"use client";
import { FormRegisData } from '@/types/formData'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
type Props = {}
const index = (props: Props) => {
    const [formData, setFormData] = useState<FormRegisData>({
        timestamp: '',
        id: 'testId',
        nickname: 'testNickName',
        name: 'testName',
        surname: 'testSurname',
        dateOfBirth: 'testDateOfBirth',
        contact: 'testContact',
        howDidYouFindUs: 'testhowDidYouFindUs',
        whatIsYourInterested: 'testwhatIsYourInterested'
    })
    const onSubmitRegisForm = () => {
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1)
        axios
            .post("/api/saveForm", {
                ...formData,
                timestamp: localISOTime,
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }
    return (
        <div>
            register form
            <Link href={'/emotional-check'}>
                <button onClick={onSubmitRegisForm}>next</button>
            </Link>
        </div>
    )
}

export default index