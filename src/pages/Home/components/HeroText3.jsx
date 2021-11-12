import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import colors from '../../../utils/colors'

const HeroText = () => {
  const svgRef = useRef(null)
  const letter0 = useRef(null)
  const letter1 = useRef(null)
  const letter2 = useRef(null)
  const letter3 = useRef(null)
  const letter4 = useRef(null)
  const letter5 = useRef(null)
  const letter6 = useRef(null)
  const letter7 = useRef(null)
  const letter8 = useRef(null)
  const letter9 = useRef(null)
  const letter10 = useRef(null)
  const letter11 = useRef(null)
  const letter12 = useRef(null)
  const letter13 = useRef(null)
  const letter14 = useRef(null)
  const letter15 = useRef(null)
  const letter16 = useRef(null)
  const letter17 = useRef(null)
  const letter18 = useRef(null)
  const letter19 = useRef(null)
  const letter20 = useRef(null)
  const letter21 = useRef(null)
  const letter22 = useRef(null)
  const letter23 = useRef(null)
  const letter24 = useRef(null)
  const letter25 = useRef(null)
  const letter26 = useRef(null)
  const letter27 = useRef(null)
  const letter28 = useRef(null)
  const letter29 = useRef(null)
  const letter30 = useRef(null)
  const letter31 = useRef(null)
  const letter32 = useRef(null)
  const letter33 = useRef(null)
  const letter34 = useRef(null)
  const letter35 = useRef(null)
  const letter36 = useRef(null)
  const letter37 = useRef(null)

  const letter0Length = 645.286865234375
  const letter1Length = 908.647216796875
  const letter2Length = 539.101318359375
  const letter3Length = 322
  const letter4Length = 606.0989990234375
  const letter5Length = 310.6680908203125
  const letter6Length = 111.19993591308594
  const letter7Length = 650.8155517578125
  const letter8Length = 310.6680908203125
  const letter9Length = 544.50146484375
  const letter10Length = 461.04840087890625
  const letter11Length = 310.6680908203125
  const letter12Length = 672.4530029296875
  const letter13Length = 322.00006103515625
  const letter14Length = 310.6680908203125
  const letter15Length = 507.4146728515625
  const letter16Length = 648.1871337890625
  const letter17Length = 650.8157958984375
  const letter18Length = 729.0730590820312
  const letter19Length = 648.18603515625
  const letter20Length = 544.5038452148438
  const letter21Length = 310.6681213378906
  const letter22Length = 807.03955078125
  const letter23Length = 507.41748046875
  const letter24Length = 648.1863403320312
  const letter25Length = 414.9907531738281
  const letter26Length = 845.0308227539062
  const letter27Length = 645.2869873046875
  const letter28Length = 414.9908752441406
  const letter29Length = 606.099365234375
  const letter30Length = 729.0740356445312
  const letter31Length = 310.668212890625
  const letter32Length = 414.99072265625
  const letter33Length = 648.186767578125
  const letter34Length = 461.04852294921875
  const letter35Length = 606.1030883789062
  const letter36Length = 594.6600952148438
  const letter37Length = 414.9907531738281

  const [row1Complete, setRow1Complete] = useState(false)
  const [row2Complete, setRow2Complete] = useState(false)
  const [row3Complete, setRow3Complete] = useState(false)

  useEffect(() => {
    const row1Tl = gsap.timeline({
      delay: 2,
      onComplete: () => {
        setRow1Complete(true)
      }
    })

    row1Tl.to(letter0.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter1.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter2.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter3.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter4.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter5.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter6.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter7.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter8.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter9.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter10.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter11.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter12.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter13.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter14.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter15.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter16.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)
    row1Tl.to(letter17.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0)

    const row2Tl = gsap.timeline({
      delay: 2,
      onComplete: () => {
        setRow2Complete(true)
      }
    })

    row2Tl.to(letter18.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter19.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter20.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter21.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter22.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter23.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter24.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter25.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)
    row2Tl.to(letter26.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.25)

    const row3Tl = gsap.timeline({
      delay: 2,
      onComplete: () => {
        setRow3Complete(true)
      }
    })

    row3Tl.to(letter27.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter28.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter29.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter30.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter31.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter32.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter33.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter34.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter35.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter36.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)
    row3Tl.to(letter37.current, {
      duration: 0.5,
      strokeDashoffset: 0
    }, 0.5)

    return () => {
      row1Tl.kill()
      row2Tl.kill()
      row3Tl.kill()
    }
  }, [])

  useEffect(() => {
    if (row1Complete && row2Complete && row3Complete) {
      let paths = svgRef.current.getElementsByTagName('path')

      gsap.to(paths, {
        duration: 1,
        fill: colors.gray
      })
    }
  }, [row1Complete, row2Complete, row3Complete])

  return (
    <SVG ref={svgRef} width="1200" height="548" viewBox="0 0 1200 548" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref={letter0} strokeDashoffset={letter0Length} strokeDasharray={letter0Length} d="M45 5.6H28L32.8 24.2L2 145.4H21.6C20.6 139 20 128.6 20.2 116.4H56.2L63.6 145.4H80.4L45 5.6ZM20.2 114C20.8 94.8 23.2 72 28 53.2L34 29.4L55.4 114H20.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter1} strokeDashoffset={letter1Length} strokeDasharray={letter1Length} d="M181.669 72L145.269 5.6H126.669L137.069 24.8V145.4H158.469C149.269 127.2 139.869 84.6 139.869 45.2V29.8L173.069 90.2L185.869 94L187.469 82.4C181.069 55.2 194.269 31.8 207.469 18.6V145.4H224.069V4.00001C196.669 17.8 183.669 45.2 181.669 72Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter2} strokeDashoffset={letter2Length} strokeDasharray={letter2Length} d="M297.03 30.2L288.23 39.2V119.2C288.23 149 254.83 150.6 254.83 119.2V31.2H238.43V119.2C238.43 143.2 260.63 151.6 277.23 143.8L288.23 138.2L304.03 130L306.23 129V39L297.03 30.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter3} strokeDashoffset={letter3Length} strokeDasharray={letter3Length} d="M336.195 145.6V1H319.795V145.6H336.195Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter4} strokeDashoffset={letter4Length} strokeDasharray={letter4Length} d="M433.756 107.8L424.556 98.8L415.556 107.8V125.2C415.556 157.2 377.156 144.8 377.156 107.2V33.8H427.156V31.2H377.156V1H360.556V31.2H341.156V33.8H360.556V107.2C360.556 144.2 397.156 157.2 418.156 138.4L433.756 124.6V107.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter5} strokeDashoffset={letter5Length} strokeDasharray={letter5Length} d="M441.278 39.4V145.4H457.878V39.4L449.678 31.2L441.278 39.4ZM449.478 27C454.678 27 458.878 22.8 458.878 17.6C458.878 12.4 454.678 8.2 449.478 8.2C444.478 8.2 440.278 12.4 440.278 17.6C440.278 22.8 444.478 27 449.478 27Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter6} strokeDashoffset={letter6Length} strokeDasharray={letter6Length} d="M519.053 96.4V93.8H466.053V96.4H519.053Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter7} strokeDashoffset={letter7Length} strokeDasharray={letter7Length} d="M579.623 1V30.2L552.223 55.4C485.023 111.8 544.623 174.8 579.623 133.2V145.4H596.023V1H579.623ZM579.623 129.8C549.023 159.8 514.023 91.8 559.623 52L579.623 33.2V129.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter8} strokeDashoffset={letter8Length} strokeDasharray={letter8Length} d="M610.138 39.4V145.4H626.738V39.4L618.538 31.2L610.138 39.4ZM618.338 27C623.538 27 627.738 22.8 627.738 17.6C627.738 12.4 623.538 8.2 618.338 8.2C613.338 8.2 609.138 12.4 609.138 17.6C609.138 22.8 613.338 27 618.338 27Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter9} strokeDashoffset={letter9Length} strokeDasharray={letter9Length} d="M693.312 69.6L702.312 60.6V46.8L675.713 33.2C659.113 25.2 637.113 34.2 637.113 52.4C637.113 85.4 685.713 97.8 685.713 124.6C685.913 149.4 655.113 148.8 655.113 124V116L646.113 107L637.113 115.8V129.6L663.713 143.4C680.312 151.2 702.312 142.4 702.312 124.2C702.312 83.8 654.513 77.2 653.713 50.6C654.713 27.2 684.312 28.2 684.312 52.6V60.6L693.312 69.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter10} strokeDashoffset={letter10Length} strokeDasharray={letter10Length} d="M787.28 130.6C773.48 154.4 726.68 138.6 726.68 86.2C726.68 51.2 744.28 33.8 755.88 33.8C761.68 33.8 766.88 39.8 766.88 48.4L775.68 57.2L784.88 48.4V31.2H758.28C745.68 31.2 708.48 42.6 708.48 85.8C708.48 146.4 769.48 161.6 789.08 132.4L787.28 130.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter11} strokeDashoffset={letter11Length} strokeDasharray={letter11Length} d="M795.598 39.4V145.4H812.198V39.4L803.998 31.2L795.598 39.4ZM803.798 27C808.998 27 813.198 22.8 813.198 17.6C813.198 12.4 808.998 8.2 803.798 8.2C798.798 8.2 794.598 12.4 794.598 17.6C794.598 22.8 798.798 27 803.798 27Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter12} strokeDashoffset={letter12Length} strokeDasharray={letter12Length} d="M841.797 45.6V31.2H825.397V181L841.797 181.6V147.8L870.397 121.6C938.797 64.2 877.597 -0.599991 841.797 45.6ZM863.197 125L841.797 144.8V47.4C869.797 18 912.797 80 863.197 125Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter13} strokeDashoffset={letter13Length} strokeDasharray={letter13Length} d="M926.664 145.6V1H910.264V145.6H926.664Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter14} strokeDashoffset={letter14Length} strokeDasharray={letter14Length} d="M940.825 39.4V145.4H957.425V39.4L949.225 31.2L940.825 39.4ZM949.025 27C954.225 27 958.425 22.8 958.425 17.6C958.425 12.4 954.225 8.2 949.025 8.2C944.025 8.2 939.825 12.4 939.825 17.6C939.825 22.8 944.025 27 949.025 27Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter15} strokeDashoffset={letter15Length} strokeDasharray={letter15Length} d="M1038.62 145.6C1039.82 110.2 1018.82 67.4 989.423 40.2L978.623 30.2L970.423 38.2V145.4H986.823V41L989.223 43.2C1019.42 74.8 1021.42 121 1017.82 145.4L1038.62 145.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter16} strokeDashoffset={letter16Length} strokeDasharray={letter16Length} d="M1110.91 98L1102.11 107V124.2C1102.11 152.4 1070.71 148.4 1061.71 115.6L1086.71 92.8C1163.31 29.2 1070.11 6.4 1047.71 62.4C1024.31 121.4 1073.91 166 1104.51 137.4L1120.11 123.6V107L1110.91 98ZM1064.51 64.2C1071.31 41.4 1084.31 31.6 1091.11 32.4C1112.91 35.4 1092.11 84.4 1066.71 107.8L1061.11 113.2C1058.11 100.6 1058.51 84.2 1064.51 64.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter17} strokeDashoffset={letter17Length} strokeDasharray={letter17Length} d="M1182.2 1V30.2L1154.8 55.4C1087.6 111.8 1147.2 174.8 1182.2 133.2V145.4H1198.6V1H1182.2ZM1182.2 129.8C1151.6 159.8 1116.6 91.8 1162.2 52L1182.2 33.2V129.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter18} strokeDashoffset={letter18Length} strokeDasharray={letter18Length} d="M27.4 205.6H11V345.4H27.4C123.8 345.4 126.8 205.6 27.4 205.6ZM27.4 343.8V207.4C98 208.6 98.2 343.8 27.4 343.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter19} strokeDashoffset={letter19Length} strokeDasharray={letter19Length} d="M174.52 298L165.72 307V324.2C165.72 352.4 134.32 348.4 125.32 315.6L150.32 292.8C226.92 229.2 133.72 206.4 111.32 262.4C87.9203 321.4 137.52 366 168.12 337.4L183.72 323.6V307L174.52 298ZM128.12 264.2C134.92 241.4 147.92 231.6 154.72 232.4C176.52 235.4 155.72 284.4 130.32 307.8L124.72 313.2C121.72 300.6 122.12 284.2 128.12 264.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter20} strokeDashoffset={letter20Length} strokeDasharray={letter20Length} d="M246.211 269.6L255.211 260.6V246.8L228.611 233.2C212.011 225.2 190.011 234.2 190.011 252.4C190.011 285.4 238.611 297.8 238.611 324.6C238.811 349.4 208.011 348.8 208.011 324V316L199.011 307L190.011 315.8V329.6L216.611 343.4C233.211 351.2 255.211 342.4 255.211 324.2C255.211 283.8 207.411 277.2 206.611 250.6C207.611 227.2 237.211 228.2 237.211 252.6V260.6L246.211 269.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter21} strokeDashoffset={letter21Length} strokeDasharray={letter21Length} d="M265.778 239.4V345.4H282.378V239.4L274.178 231.2L265.778 239.4ZM273.978 227C279.178 227 283.378 222.8 283.378 217.6C283.378 212.4 279.178 208.2 273.978 208.2C268.978 208.2 264.778 212.4 264.778 217.6C264.778 222.8 268.978 227 273.978 227Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter22} strokeDashoffset={letter22Length} strokeDasharray={letter22Length} d="M350.153 231.2V245.6C314.353 199.4 253.353 264.2 321.553 321.6L350.153 347.8V348.8C350.153 387 311.953 390.2 311.953 364.8V357.2L302.953 348.2L293.953 357.2V378.2L319.953 382.8C338.553 385.4 366.753 378.4 366.753 348.4V231.2H350.153ZM350.153 344.8L328.953 325C279.153 280 322.153 218 350.153 247.4V344.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter23} strokeDashoffset={letter23Length} strokeDasharray={letter23Length} d="M449.42 345.6C450.62 310.2 429.62 267.4 400.22 240.2L389.42 230.2L381.22 238.2V345.4H397.62V241L400.02 243.2C430.22 274.8 432.22 321 428.62 345.4L449.42 345.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter24} strokeDashoffset={letter24Length} strokeDasharray={letter24Length} d="M521.708 298L512.908 307V324.2C512.908 352.4 481.508 348.4 472.508 315.6L497.508 292.8C574.108 229.2 480.908 206.4 458.508 262.4C435.108 321.4 484.708 366 515.308 337.4L530.908 323.6V307L521.708 298ZM475.308 264.2C482.108 241.4 495.108 231.6 501.908 232.4C523.708 235.4 502.908 284.4 477.508 307.8L471.908 313.2C468.908 300.6 469.308 284.2 475.308 264.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter25} strokeDashoffset={letter25Length} strokeDasharray={letter25Length} d="M580.998 232.4C573.998 228.8 562.198 230.6 557.198 242.8V231H540.798V345.4H557.198V256.2C557.198 224.8 588.198 226 588.198 251V260.6L597.198 269.6L606.398 260.6V245.2L580.998 232.4Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter26} strokeDashoffset={letter26Length} strokeDasharray={letter26Length} d="M749.156 278.6L740.156 269.6L731.156 278.6V286.6C731.156 293.6 732.356 301.8 729.556 310.6L702.756 263.2C781.356 198 639.756 181.6 676.556 249.2L689.356 272C614.956 338.6 688.556 367.8 720.956 328L730.756 345.4H749.156L731.756 314.4L749.156 292.2V278.6ZM701.756 261.4L694.956 249.2C663.556 193.6 767.756 202.2 701.756 261.4ZM690.956 274.6L719.756 325.8C678.956 369.4 660.156 311.8 690.956 274.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter27} strokeDashoffset={letter27Length} strokeDasharray={letter27Length} d="M45 405.6H28L32.8 424.2L2 545.4H21.6C20.6 539 20 528.6 20.2 516.4H56.2L63.6 545.4H80.4L45 405.6ZM20.2 514C20.8 494.8 23.2 472 28 453.2L34 429.4L55.4 514H20.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter28} strokeDashoffset={letter28Length} strokeDasharray={letter28Length} d="M126.483 432.4C119.483 428.8 107.683 430.6 102.683 442.8V431H86.2828V545.4H102.683V456.2C102.683 424.8 133.683 426 133.683 451V460.6L142.683 469.6L151.883 460.6V445.2L126.483 432.4Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter29} strokeDashoffset={letter29Length} strokeDasharray={letter29Length} d="M241.655 507.8L232.455 498.8L223.455 507.8V525.2C223.455 557.2 185.055 544.8 185.055 507.2V433.8H235.055V431.2H185.055V401H168.455V431.2H149.055V433.8H168.455V507.2C168.455 544.2 205.055 557.2 226.055 538.4L241.655 524.6V507.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter30} strokeDashoffset={letter30Length} strokeDasharray={letter30Length} d="M312.962 405.6H296.562V545.4H312.962C409.362 545.4 412.362 405.6 312.962 405.6ZM312.962 543.8V407.4C383.562 408.6 383.763 543.8 312.962 543.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter31} strokeDashoffset={letter31Length} strokeDasharray={letter31Length} d="M395.083 439.4V545.4H411.683V439.4L403.483 431.2L395.083 439.4ZM403.283 427C408.483 427 412.683 422.8 412.683 417.6C412.683 412.4 408.483 408.2 403.283 408.2C398.283 408.2 394.083 412.4 394.083 417.6C394.083 422.8 398.283 427 403.283 427Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter32} strokeDashoffset={letter32Length} strokeDasharray={letter32Length} d="M464.881 432.4C457.881 428.8 446.081 430.6 441.081 442.8V431H424.681V545.4H441.081V456.2C441.081 424.8 472.081 426 472.081 451V460.6L481.081 469.6L490.281 460.6V445.2L464.881 432.4Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter33} strokeDashoffset={letter33Length} strokeDasharray={letter33Length} d="M561.653 498L552.853 507V524.2C552.853 552.4 521.453 548.4 512.453 515.6L537.453 492.8C614.053 429.2 520.853 406.4 498.453 462.4C475.053 521.4 524.653 566 555.253 537.4L570.853 523.6V507L561.653 498ZM515.253 464.2C522.053 441.4 535.053 431.6 541.853 432.4C563.653 435.4 542.853 484.4 517.453 507.8L511.853 513.2C508.853 500.6 509.253 484.2 515.253 464.2Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter34} strokeDashoffset={letter34Length} strokeDasharray={letter34Length} d="M654.944 530.6C641.144 554.4 594.344 538.6 594.344 486.2C594.344 451.2 611.944 433.8 623.544 433.8C629.344 433.8 634.544 439.8 634.544 448.4L643.344 457.2L652.544 448.4V431.2H625.944C613.344 431.2 576.144 442.6 576.144 485.8C576.144 546.4 637.144 561.6 656.744 532.4L654.944 530.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter35} strokeDashoffset={letter35Length} strokeDasharray={letter35Length} d="M746.663 507.8L737.463 498.8L728.463 507.8V525.2C728.463 557.2 690.062 544.8 690.062 507.2V433.8H740.063V431.2H690.062V401H673.463V431.2H654.062V433.8H673.463V507.2C673.463 544.2 710.062 557.2 731.062 538.4L746.663 524.6V507.8Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter36} strokeDashoffset={letter36Length} strokeDasharray={letter36Length} d="M795.984 431.2C770.584 431.2 749.984 457.2 749.984 489C749.984 521 770.584 546.8 795.984 546.8C821.384 546.8 841.984 521 841.984 489C841.984 457.2 821.384 431.2 795.984 431.2ZM795.984 544.6C778.984 544.6 769.384 519.8 769.384 489.2C769.384 458.6 778.984 433.8 795.984 433.8C812.984 433.8 821.584 458.6 821.584 489.2C821.584 519.8 812.984 544.6 795.984 544.6Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
      <path ref={letter37} strokeDashoffset={letter37Length} strokeDasharray={letter37Length} d="M891.952 432.4C884.952 428.8 873.152 430.6 868.152 442.8V431H851.752V545.4H868.152V456.2C868.152 424.8 899.152 426 899.152 451V460.6L908.152 469.6L917.352 460.6V445.2L891.952 432.4Z" stroke={colors.gray} strokeWidth="2" mask="url(#path-1-outside-1_3:2699)"/>
    </SVG>
  )
}

export default HeroText

const SVG = styled.svg`
  height: auto;
  width: 86.111vw;

  path {
    fill: black;
  }
`
