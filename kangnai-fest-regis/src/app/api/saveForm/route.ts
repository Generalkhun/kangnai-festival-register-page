import { FormRegisData } from '@/types/formData';
import { get } from 'lodash'
import { NextRequest, NextResponse } from 'next/server'
import { saveFormToGGSheet } from '../../utils/googleSheetAPIHelper'

export async function POST(req:NextRequest) {
    const formData = await req.json()
    // add data to sheet
    await saveFormToGGSheet(formData)
    return NextResponse.json({ name: 'Saved the form to gg sheet!' })
}