import "../src/constants.css";

//-------Button Text-------
export const regisBtnText = "ลงทะเบียนมาล่วงหน้า";
export const walkInBtnText = "Walk-in";
export const introBtnText = "ทักทายความพัง";
export const nextBtnText = "ต่อไป";

//-------Text-------
export const headText1 = "พาตัวและใจกลับมาข้างในพร้อม";
export const headText2 = "โอบกอดความพังในใจเรา";

export const introText1 = `เมื่อมาถึงจุดเปลี่ยนของชีวิต
ทั้งอารมณ์ที่ขัดติด ทั้งความคิดที่มืดบอด 
ทั้งที่รู้อยู่ในใจ ว่ามันจะไม่เป็นแบบนี้ไปตลอด 
แต่ “เ มื่ อ อ ะ ไ ร ๆ มั น พั ง ” 
บางครั้งมันก็ไม่ง่ายอย่างที่เข้าใจ`;

export const introText2 = `ชวนพักจากหัว มาอยู่ที่หัวใจ 
สำรวจความรู้สึกนั้น อยู่กับเขา 
ปลอบประโลมตัวเองสักนิด 
แล้วค่อยกลับมาใช้หัวคิดใหม่นะ 
เพื่อเราจะได้เรียนรู้ เติบโต
จากคลื่นลมแห่งชีวิตนี้ไปพร้อมกัน`;

export const headRegis = "ลงทะเบียน";
export const headConfirmRegis = "ยืนยันการลงทะเบียน";

export const emotionalPageHeaderText1 = `คำไหนที่อธิบาย`;
export const emotionalPageHeaderText2 = `ความพัง`;
export const emotionalPageHeaderText3 = `ที่มาทักทายคุณมากที่สุดใน`;
export const emotionalPageHeaderText4 = `ช่วงนี`;
export const emotionalPageHeaderSubText = `[คลิกที่วงกลมเพื่อเลือก]`;
//emotion words
export const emotionWords = {
  row1: ["ผิดหวัง", "เหนื่อยล้า", "เบื่อชีวิต", "เหงา", "อ่อนแอ"],
  row2: ["สิ้นหวัง", "น้อยใจ", "โดดเดี่ยว", "กังวล", "สับสน"],
  row3: ["กลัว", "ลังเล", "ระแวง", "ไม่ปลอดภัย", "เสียใจ"],
  row4: ["กดดัน", "เฉยเมย", "ไร้ค่า", "ไม่สำคัญ", "ไม่มั่นคง"],
  row5: ["ไม่ยอมรับ", "รู้สึกผิด", "สั่นคลอน", "ข้องใจ", "เครียด"],
};

export const headFeel1 = "เริ่มจาก";
export const headFeel2 = "วันนี้";
export const headFeel3 = "คุณรู้สึกอย่างไร?";
export const feelbad = "ไม่ดีเลย";
export const feelgood = "ดีที่สุด";

//card content
export const cardContentCreator = (
  word: string,
  sentenceNumberUsed: number
) => {
  switch (sentenceNumberUsed) {
    case 1:
      return `ขอให้วันนี้คุณวางใจในความรู้สึก${word}เเละเปิดใจให้การปลอบโยนจากผู้อื่นเข้ามา`;
    case 2:
      return `ขอให้วันนี้คุณปลดปล่อยความรู้สึก${word}ให้ได้แสดงตัวออกมา ให้คุณ ได้รู้จักเขาอย่างที่เขาเป็นจริงๆ`;
    case 3:
      return `ขอให้วันนี้คุณสัมผัสความรู้สึก${word}อย่างนุ่มนวล ทะนุถนอมเขาอย่างที่เขาควรได้รับ`;
    case 4:
      return `ขอให้วันนี้คุณเปิดพื้นที่ให้สำหรับความรู้สึก${word} ให้ทั้งตัวคุณและผู้อื่นได้เข้ามาสำรวจเรียนรู้ดูแลไปด้วยกัน`;
    case 5:
      return `ขอให้วันนี้คุณปล่อยวางการตัดสิน เพื่อรับรู้เเละเข้าใจความรู้สึก${word}ของคุณเเละผู้อื่นอย่างเเท้จริง`;
    case 6:
      return `ขอให้วันนี้คุณโอบรับทุกสิ่งไม่ว่าดีหรือร้าย รวมถึงโอบกอดความรู้สึก${word}ในใจคุณ`;
    case 7:
      return `ขอให้วันนี้คุณพังให้เต็มที่ ให้พื้นที่นี้โอบอุ้มความรู้สึก${word}ที่ทั้งคุณเเละฉันมีร่วมกัน`;
    case 8:
      return `ขอให้วันนี้คุณยิ้มรับทุกสิ่งใหม่ เเละไม่ปิดกั้นตัวเองจากความรู้สึก${word}หรือความรู้สึกใดๆ`;
    case 9:
      return `ขอให้วันนี้คุณเพียงรับรู้ความรู้สึก${word}จากภายใน เพียงรับรู้ เเละค่อยๆพาตัวเองกลับมา`;
    case 10:
      return `ขอให้วันนี้คุณเก็บเกี่ยวสิ่งเล็กๆเเต่เต็มเปี่ยมไปด้วยคุณค่า เเละใช้คุณค่านั้นปลอบโยนความรู้สึก${word} `;
    case 11:
      return `ขอให้วันนี้คุณรับฟังความรู้สึก${word}ด้วยหัวใจ เพื่อวันหนึ่งเสียงของเขานั้นจะกลับมาดูแลตัวคุณอีกครั้ง`;
    case 12:
      return `ขอให้วันนี้คุณกล้าที่จะมองดูความรู้สึก${word}อย่างไม่หลบสายตา และเพียงรับรู้ว่าเขาอยู่ตรงนี้จริงๆกับเรา`;
    case 13:
      return `ขอให้วันนี้คุณยอมรับความรู้สึก${word}และความรู้สึกอื่นๆ ว่ามีอยู่จริง และปล่อยให้ความรู้สึกได้ทำงานอย่างเป็นอิสระ`;
    case 14:
      return `ขอให้วันนี้คุณอยู่กับลมหายใจปัจจุบัน รับรู้ว่าแม้${word}จะมีอยู่ แต่มันจะผ่านมาแล้วก็ผ่านไป`;
    default:
      return "";
  }
};

export const headCard1 = "ขอบคุณสำหรับความพังที่แชร์ให้กัน";
export const headCard2 = "เราขอมอบสิ่งนี้ให้คุณ";

// Loading page
export const loadText1 = "ความพังเป็นส่วนหนึ่งของการเติบโต";
export const loadText2 = "อย่ากลัวที่จะแวะทักทายเขาบ่อย ๆ";
